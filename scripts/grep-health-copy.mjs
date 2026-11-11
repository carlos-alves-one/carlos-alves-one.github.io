#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const healthDir = path.resolve(__dirname, '../components/health')
const pageFile = path.resolve(__dirname, '../app/health-wellness/page.tsx')

function collectFiles(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.tsx')).map((f) => path.join(dir, f))
}

const files = [...collectFiles(healthDir), pageFile]
let all = ''
for (const f of files) all += fs.readFileSync(f, 'utf8') + '\n'

// Visible-ish string literals and JSX text only: strip imports/classNames roughly by scanning quotes + JSX text
const strings = []
const re = /['"`]([^'"`]*)['"`]/g
let m
while ((m = re.exec(all))) strings.push(m[1])
const jsx = all.match(/>([^<{\n][^<]*)</g) || []
for (const j of jsx) strings.push(j.slice(1, -1))

const copy = strings.join('\n')

const berkeley = (copy.match(/Berkeley/gi) || []).length
const pounds = (copy.match(/£/g) || []).length
const percent = (copy.match(/%/g) || []).length

// Digits other than allowed: 30 (as in 30-min / 30-minute), 3–6 / 3-6 (pm slots), and date-like years/ranges
// First find all digit sequences
const digitMatches = [...copy.matchAll(/\d+/g)].map((x) => x[0])
const allowed = (d, index, src) => {
  // allow 30 when part of 30-min / 30-minute / 30 minutes context nearby in original - we check token
  if (d === '30') return true
  if (d === '3' || d === '6') return true // 3–6pm
  // dates / years
  if (/^(19|20)\d{2}$/.test(d)) return true
  if (d === '01' || d === '02' || d === '03') return true // step labels matching design
  // current year in footer via getFullYear - source has no literal; skip
  // className digits like 2xl, w-12 — filter strings that look like tailwind
  return false
}

// Better approach: analyze only human copy strings (exclude className-looking)
const human = strings.filter((s) => {
  if (!s || s.length < 1) return false
  if (/^(https?:|mailto:|\/|#)/.test(s)) return false
  if (/^(flex|grid|text-|bg-|border-|rounded-|p-|m-|w-|h-|gap-|sm:|md:|lg:|xl:|from-|via-|to-|hover:|focus:|font-|leading-|tracking-|uppercase|transition|duration|shadow|opacity|absolute|relative|fixed|inset|z-|overflow|items-|justify-|col-|row-|space-|min-|max-|inline|block|hidden|group|scroll)/.test(s)) return false
  if (/px-|py-|pt-|pb-|mt-|mb-|ml-|mr-|pl-|pr-/.test(s) && s.length < 80) return false
  return true
})
const humanCopy = human.join('\n')

const digitHits = []
for (const s of human) {
  const parts = [...s.matchAll(/\d+/g)]
  for (const p of parts) {
    const d = p[0]
    const start = Math.max(0, p.index - 12)
    const ctx = s.slice(start, p.index + d.length + 12)
    // allow 30-min / 30-minute
    if (/\b30-?min/i.test(ctx) || /30-minute/i.test(ctx) || /free 30/i.test(ctx)) continue
    // allow 3–6pm / 3-6pm
    if (/3\s*[–-]\s*6/.test(s) && (d === '3' || d === '6')) continue
    // allow dates/years
    if (/^(19|20)\d{2}$/.test(d)) continue
    // allow 01 02 03 step markers in isolation
    if (/^0[123]$/.test(d)) continue
    digitHits.push({ digit: d, context: ctx, string: s.slice(0, 120) })
  }
}

const berkeleyH = (humanCopy.match(/Berkeley/gi) || []).length
const poundsH = (humanCopy.match(/£/g) || []).length
const percentH = (humanCopy.match(/%/g) || []).length

const report = {
  filesScanned: files.map((f) => path.relative(path.resolve(__dirname, '..'), f)),
  berkeley: berkeleyH,
  poundSign: poundsH,
  percentSign: percentH,
  otherDigitHits: digitHits.length,
  otherDigitDetails: digitHits,
}

fs.writeFileSync(path.join(__dirname, 'health-copy-grep.json'), JSON.stringify(report, null, 2))
console.log(JSON.stringify(report, null, 2))
