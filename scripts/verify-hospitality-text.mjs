#!/usr/bin/env node
/**
 * Compare baseline main-site visible text against Hospitality & Catering page.
 * Usage: node scripts/verify-hospitality-text.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { cwd: root, stdio: 'inherit' })
    p.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))))
  })
}

function normalize(s) {
  return s
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

async function main() {
  const baselinePath = path.join(root, 'scripts/baseline-main-visible.json')
  const hospitalityPath = path.join(root, 'scripts/hospitality-visible.json')
  const reportPath = path.join(root, 'scripts/hospitality-text-check.json')

  if (!fs.existsSync(baselinePath)) {
    console.error('Missing baseline. Run extract-visible-text against the pre-change main build first.')
    process.exit(1)
  }

  await run('node', ['scripts/extract-visible-text.mjs', '/hospitality-catering/', hospitalityPath])

  const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'))
  const hospitality = JSON.parse(fs.readFileSync(hospitalityPath, 'utf8'))

  const haystack = normalize(hospitality.fullText)
  const missing = []
  const found = []

  for (const chunk of baseline.chunks) {
    const c = normalize(chunk)
    if (!c) continue
    // Skip nav chrome that lived only in the old single-page header layout if needed —
    // still require every content string.
    if (haystack.includes(c)) found.push(c)
    else missing.push(c)
  }

  // Also check that the concatenated baseline fullText substrings of meaningful length appear
  const baselineFull = normalize(baseline.fullText)
  // Split baseline into sentences-ish for a secondary check
  const phrases = baseline.chunks.filter((c) => normalize(c).length >= 12)

  const report = {
    checkedAt: new Date().toISOString(),
    baselineUniqueChunks: baseline.chunks.length,
    hospitalityUniqueChunks: hospitality.chunks.length,
    foundCount: found.length,
    missingCount: missing.length,
    missing,
    pass: missing.length === 0,
    note:
      missing.length === 0
        ? 'All baseline visible text chunks appear unchanged on /hospitality-catering/.'
        : 'Some baseline chunks were not found on the Hospitality page.',
    phrasesChecked: phrases.length,
  }

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
  console.log(JSON.stringify({ pass: report.pass, foundCount: report.foundCount, missingCount: report.missingCount, missing: report.missing }, null, 2))
  if (!report.pass) process.exitCode = 1
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
