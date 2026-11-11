#!/usr/bin/env node
/**
 * Extract visible text from a static-export page (or any URL).
 * Usage: node scripts/extract-visible-text.mjs <url> [outfile]
 */
import puppeteer from 'puppeteer'
import fs from 'fs'
import http from 'http'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const target = process.argv[2]
const outfile = process.argv[3] || null

if (!target) {
  console.error('Usage: node scripts/extract-visible-text.mjs <url-or-path> [outfile.json]')
  process.exit(1)
}

async function serveOut(dir) {
  const mime = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain',
    '.xml': 'application/xml',
  }
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0])
    if (urlPath.endsWith('/')) urlPath += 'index.html'
    const filePath = path.join(dir, urlPath)
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // try without trailing index for bare paths
        const alt = path.join(dir, urlPath, 'index.html')
        fs.readFile(alt, (err2, data2) => {
          if (err2) {
            res.writeHead(404)
            res.end('Not found')
            return
          }
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(data2)
        })
        return
      }
      const ext = path.extname(filePath)
      res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' })
      res.end(data)
    })
  })
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const { port } = server.address()
  return { server, port }
}

async function main() {
  let url = target
  let server = null

  if (!/^https?:\/\//.test(target)) {
    const outDir = path.join(root, 'out')
    const served = await serveOut(outDir)
    server = served.server
    const p = target.startsWith('/') ? target : `/${target}`
    url = `http://127.0.0.1:${served.port}${p}`
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })

  // Expand collapsed sections so their text is in the DOM/visible
  await page.evaluate(async () => {
    const buttons = Array.from(document.querySelectorAll('button'))
    for (const b of buttons) {
      const t = (b.textContent || '').trim()
      if (
        /Show all|Show 3 more|See deliverables|Read full background|Open menu/i.test(t)
      ) {
        b.click()
        await new Promise((r) => setTimeout(r, 150))
      }
    }
  })
  await new Promise((r) => setTimeout(r, 400))

  const text = await page.evaluate(() => {
    function visible(el) {
      if (!(el instanceof Element)) return false
      const style = window.getComputedStyle(el)
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false
      return true
    }
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement
        if (!parent) return NodeFilter.FILTER_REJECT
        const tag = parent.tagName
        if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(tag)) return NodeFilter.FILTER_REJECT
        if (!visible(parent)) return NodeFilter.FILTER_REJECT
        if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT
        return NodeFilter.FILTER_ACCEPT
      },
    })
    const chunks = []
    let n
    while ((n = walker.nextNode())) {
      chunks.push(n.textContent.replace(/\s+/g, ' ').trim())
    }
    return chunks.filter(Boolean)
  })

  await browser.close()
  if (server) server.close()

  const unique = []
  const seen = new Set()
  for (const c of text) {
    if (!seen.has(c)) {
      seen.add(c)
      unique.push(c)
    }
  }

  const payload = {
    url,
    extractedAt: new Date().toISOString(),
    chunkCount: text.length,
    uniqueCount: unique.length,
    fullText: text.join('\n'),
    chunks: unique,
  }

  if (outfile) {
    fs.writeFileSync(outfile, JSON.stringify(payload, null, 2))
    console.log(`Wrote ${outfile} (${unique.length} unique chunks, ${payload.fullText.length} chars)`)
  } else {
    console.log(payload.fullText)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
