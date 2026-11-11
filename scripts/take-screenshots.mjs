#!/usr/bin/env node
/**
 * Full-page screenshots at 1280 and 390 (mobile UA), plus mobile menu open.
 * Prefers Playwright Chromium; falls back to Puppeteer.
 */
import fs from 'fs'
import http from 'http'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'out')
const artDir = '/opt/cursor/artifacts'

const pages = [
  { path: '/', name: 'root' },
  { path: '/hospitality-catering/', name: 'hospitality-catering' },
  { path: '/health-wellness/', name: 'health-wellness' },
]

function serveOut(dir) {
  const mime = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain',
    '.xml': 'application/xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  }
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0])
    if (urlPath.endsWith('/')) urlPath += 'index.html'
    const filePath = path.join(dir, urlPath)
    fs.readFile(filePath, (err, data) => {
      if (err) {
        const alt = path.join(dir, urlPath.replace(/\.html$/, ''), 'index.html')
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
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port })
    })
  })
}

async function withPlaywright(base, saved) {
  const { chromium, devices } = await import('playwright')
  const browser = await chromium.launch({ headless: true })
  try {
    for (const p of pages) {
      // Desktop 1280
      {
        const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })
        const page = await context.newPage()
        await page.goto(base + p.path, { waitUntil: 'networkidle' })
        const file = path.join(artDir, `${p.name}-1280.png`)
        await page.screenshot({ path: file, fullPage: true })
        saved.push(file)
        await context.close()
      }
      // Mobile 390
      {
        const iphone = devices['iPhone 12'] || {
          userAgent:
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
          viewport: { width: 390, height: 844 },
          isMobile: true,
          hasTouch: true,
        }
        const context = await browser.newContext({
          ...iphone,
          viewport: { width: 390, height: 844 },
        })
        const page = await context.newPage()
        await page.goto(base + p.path, { waitUntil: 'networkidle' })
        const file = path.join(artDir, `${p.name}-390.png`)
        await page.screenshot({ path: file, fullPage: true })
        saved.push(file)

        // Mobile menu open (root is enough for audience menu; also hospitality)
        {
          const btn = page.getByRole('button', { name: /open menu/i })
          await btn.click()
          await page.waitForTimeout(400)
          const menuFile = path.join(artDir, `${p.name}-390-menu-open.png`)
          await page.screenshot({ path: menuFile, fullPage: true })
          saved.push(menuFile)
        }
        await context.close()
      }
    }
  } finally {
    await browser.close()
  }
}

async function withPuppeteer(base, saved) {
  const puppeteer = (await import('puppeteer')).default
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  try {
    for (const p of pages) {
      {
        const page = await browser.newPage()
        await page.setViewport({ width: 1280, height: 800 })
        await page.goto(base + p.path, { waitUntil: 'networkidle0' })
        const file = path.join(artDir, `${p.name}-1280.png`)
        await page.screenshot({ path: file, fullPage: true })
        saved.push(file)
        await page.close()
      }
      {
        const page = await browser.newPage()
        await page.setUserAgent(
          'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
        )
        await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
        await page.goto(base + p.path, { waitUntil: 'networkidle0' })
        const file = path.join(artDir, `${p.name}-390.png`)
        await page.screenshot({ path: file, fullPage: true })
        saved.push(file)

        {
          await page.click('button[aria-label="Open menu"]')
          await new Promise((r) => setTimeout(r, 400))
          const menuFile = path.join(artDir, `${p.name}-390-menu-open.png`)
          await page.screenshot({ path: menuFile, fullPage: true })
          saved.push(menuFile)
        }
        await page.close()
      }
    }
  } finally {
    await browser.close()
  }
}

async function main() {
  fs.mkdirSync(artDir, { recursive: true })
  const { server, port } = await serveOut(outDir)
  const base = `http://127.0.0.1:${port}`
  const saved = []
  let engine = 'puppeteer'
  try {
    await import('playwright')
    engine = 'playwright'
    await withPlaywright(base, saved)
  } catch {
    await withPuppeteer(base, saved)
  }
  server.close()
  console.log(JSON.stringify({ engine, saved }, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
