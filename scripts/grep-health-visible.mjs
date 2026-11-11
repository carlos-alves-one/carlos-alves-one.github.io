#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outFile = path.join(root, 'scripts/health-visible.json')
const reportFile = path.join(root, 'scripts/health-copy-grep.json')

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { cwd: root, stdio: 'inherit' })
    p.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${code}`))))
  })
}

await run('node', ['scripts/extract-visible-text.mjs', '/health-wellness/', outFile])
const data = JSON.parse(fs.readFileSync(outFile, 'utf8'))
const text = data.fullText

const berkeley = (text.match(/Berkeley/gi) || []).length
const pounds = (text.match(/£/g) || []).length
const percent = (text.match(/%/g) || []).length

const digitHits = []
for (const chunk of data.chunks) {
  for (const m of chunk.matchAll(/\d+/g)) {
    const d = m[0]
    const ctx = chunk.slice(Math.max(0, m.index - 20), m.index + d.length + 20)
    // Allowed: 30-min / 30-minute, 3–6pm, dates/years
    if (d === '30' && /30-?\s*min/i.test(chunk)) continue
    if ((d === '3' || d === '6') && /3\s*[–-]\s*6/.test(chunk)) continue
    if (/^(19|20)\d{2}$/.test(d)) continue
    if (/^0[123]$/.test(d) && /^(01|02|03)$/.test(chunk.trim())) continue
    if (chunk.trim() === d && /^0[123]$/.test(d)) continue
    // Footer copyright year from getFullYear
    if (/©\s*\d{4}/.test(chunk) && /^(19|20)\d{2}$/.test(d)) continue
    digitHits.push({ digit: d, chunk })
  }
}

// Also allow standalone step labels 01/02/03 when chunk is just that
const filtered = digitHits.filter((h) => !(h.chunk.trim() === h.digit && /^0[123]$/.test(h.digit)))
// Allow copyright year in "© 2026 ..."
const filtered2 = filtered.filter((h) => !/^©/.test(h.chunk.trim()) && !/All rights reserved/.test(h.chunk))

const report = {
  source: 'visible text on /health-wellness/ (expanded sections)',
  berkeley,
  poundSign: pounds,
  percentSign: percent,
  otherDigitHits: filtered2.length,
  otherDigitDetails: filtered2,
}
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2))
console.log(JSON.stringify(report, null, 2))
