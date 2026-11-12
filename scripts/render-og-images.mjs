#!/usr/bin/env node
/**
 * Render 1200×627 Open Graph share images for /health-wellness/ and
 * /hospitality-catering/. Text is laid out in HTML and captured with
 * Playwright Chromium (deviceScaleFactor 2), then downsampled with Lanczos
 * via Pillow. No AI image generation. Not wired into the Next.js build.
 *
 * Usage (from repo root, after `npm run build` so Inter woff2 files exist):
 *   node scripts/render-og-images.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'og')
const tmpDir = path.join('/tmp', 'render-og-images')

const W = 1200
const H = 627
const SAFE_X = 80
const SAFE_Y = 60

const NAVY_900 = '#102A43'
const ACCENT_500 = '#3A6EA5'
const ACCENT_600 = '#2E5884'
const GRAY_700 = '#374151'
const WHITE = '#FFFFFF'

const EYEBROW = 'Carlos Alves Consulting'
const HEADLINE = 'Weekly reports without the retyping'
const OFFER = 'Free 30-min Weekly-Report Walkthrough'
const URL_TEXT = 'carlos-alves-one.github.io'

const VARIANTS = [
  {
    slug: 'health-wellness',
    subline: 'For health & wellness businesses',
    alt:
      'Carlos Alves Consulting: Weekly reports without the retyping, for health & wellness businesses. Free 30-min Weekly-Report Walkthrough.',
  },
  {
    slug: 'hospitality-catering',
    subline: 'For hospitality and catering businesses',
    alt:
      'Carlos Alves Consulting: Weekly reports without the retyping, for hospitality and catering businesses. Free 30-min Weekly-Report Walkthrough.',
  },
]

function findInterFonts() {
  const candidates = [
    path.join(root, 'out', '_next', 'static', 'media'),
    path.join(root, '.next', 'static', 'media'),
  ]
  for (const dir of candidates) {
    const latin = path.join(dir, 'e4af272ccee01ff0-s.p.woff2')
    const latinExt = path.join(dir, '8e9860b6e62d6359-s.woff2')
    if (fs.existsSync(latin) && fs.existsSync(latinExt)) {
      return { latin, latinExt, dir }
    }
  }
  throw new Error(
    'Inter woff2 not found. Run `npm run build` first so .next/static/media (or out/_next/static/media) contains the site Inter files.',
  )
}

function fontFaceCss(latinB64, latinExtB64) {
  const latinRange =
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
  const latinExtRange =
    'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF'
  return `@font-face {
  font-family: 'SiteInter';
  src: url('data:font/woff2;base64,${latinB64}') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: block;
  unicode-range: ${latinRange};
}
@font-face {
  font-family: 'SiteInter';
  src: url('data:font/woff2;base64,${latinExtB64}') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: block;
  unicode-range: ${latinExtRange};
}`
}

function buildHtml({ subline, latinB64, latinExtB64 }) {
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>OG</title>
<style>
${fontFaceCss(latinB64, latinExtB64)}
:root {
  --navy-900: ${NAVY_900};
  --accent-500: ${ACCENT_500};
  --accent-600: ${ACCENT_600};
  --gray-700: ${GRAY_700};
  --white: ${WHITE};
}
html, body {
  margin: 0;
  padding: 0;
  width: ${W}px;
  height: ${H}px;
  overflow: hidden;
  background: transparent;
}
* { box-sizing: border-box; }
.banner {
  width: ${W}px;
  height: ${H}px;
  position: relative;
  overflow: hidden;
  background: var(--white);
  color: var(--navy-900);
  font-family: SiteInter, Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}
.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to bottom, rgba(16,42,67,0.06) 1px, transparent 1px),
    linear-gradient(to right, rgba(16,42,67,0.06) 1px, transparent 1px);
  background-size: 36px 36px;
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}
.content {
  position: relative;
  z-index: 1;
  height: ${H}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${SAFE_Y}px ${SAFE_X}px;
}
.eyebrow {
  margin: 0 0 14px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent-500);
}
.headline {
  margin: 0;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.12;
  color: var(--navy-900);
  max-width: 1000px;
}
.subline {
  margin: 16px 0 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--gray-700);
}
.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  background: var(--accent-500);
  color: var(--white);
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  padding: 14px 24px;
  min-height: 44px;
  border-radius: 8px;
  white-space: nowrap;
}
.url {
  margin: 18px 0 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.01em;
  color: var(--accent-600);
  white-space: nowrap;
}
</style>
</head>
<body>
  <div class="banner">
    <div class="grid" aria-hidden="true"></div>
    <div class="content">
      <p class="eyebrow">${EYEBROW}</p>
      <h1 class="headline">${HEADLINE}</h1>
      <p class="subline">${subline}</p>
      <span class="cta">${OFFER}</span>
      <p class="url">${URL_TEXT}</p>
    </div>
  </div>
</body>
</html>`
}

function downsampleWithLanczos(srcPng, destPng) {
  const py = `
from PIL import Image
im = Image.open(${JSON.stringify(srcPng)}).convert("RGB")
assert im.size == (${W * 2}, ${H * 2}), im.size
out = im.resize((${W}, ${H}), Image.Resampling.LANCZOS)
# Chromium occasionally leaves a single dark corner pixel on file:// screenshots.
px = out.load()
w, h = out.size
for x, y in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)):
  r, g, b = px[x, y]
  if min(r, g, b) < 250:
    px[x, y] = (255, 255, 255)
out.save(${JSON.stringify(destPng)}, "PNG", optimize=True)
print(out.size[0], out.size[1], out.mode)
`
  const r = spawnSync('python3', ['-c', py], { encoding: 'utf8' })
  if (r.status !== 0) {
    throw new Error(`Lanczos downsample failed:\n${r.stdout}\n${r.stderr}`)
  }
  return r.stdout.trim()
}

function measureInkBounds(pngPath) {
  const py = `
from PIL import Image
im = Image.open(${JSON.stringify(pngPath)}).convert("RGB")
w, h = im.size
px = im.load()
# Ignore white bg and the faint 6% navy grid (~rgb 241); count real text/CTA ink.
minx, miny, maxx, maxy = w, h, -1, -1
for y in range(h):
  for x in range(w):
    r,g,b = px[x,y]
    if min(r, g, b) < 230:
      if x < minx: minx = x
      if y < miny: miny = y
      if x > maxx: maxx = x
      if y > maxy: maxy = y
print(f"{minx},{miny},{maxx},{maxy},{w},{h}")
`
  const r = spawnSync('python3', ['-c', py], { encoding: 'utf8' })
  if (r.status !== 0) throw new Error(r.stderr)
  const [minx, miny, maxx, maxy, w, h] = r.stdout.trim().split(',').map(Number)
  return { minx, miny, maxx, maxy, w, h, left: minx, top: miny, right: w - 1 - maxx, bottom: h - 1 - maxy }
}

function unionTextBounds(boxes) {
  const els = Object.values(boxes)
  const minx = Math.min(...els.map((b) => b.x))
  const miny = Math.min(...els.map((b) => b.y))
  const maxx = Math.max(...els.map((b) => b.right))
  const maxy = Math.max(...els.map((b) => b.bottom))
  return {
    minx,
    miny,
    maxx,
    maxy,
    left: minx,
    top: miny,
    right: W - maxx,
    bottom: H - maxy,
  }
}

async function main() {
  const fonts = findInterFonts()
  const latinB64 = fs.readFileSync(fonts.latin).toString('base64')
  const latinExtB64 = fs.readFileSync(fonts.latinExt).toString('base64')
  console.log(`Using Inter from ${fonts.dir}`)
  console.log(`  latin: ${path.basename(fonts.latin)} (${fs.statSync(fonts.latin).size} bytes)`)
  console.log(`  latin-ext: ${path.basename(fonts.latinExt)} (${fs.statSync(fonts.latinExt).size} bytes)`)

  fs.mkdirSync(tmpDir, { recursive: true })
  fs.mkdirSync(outDir, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const results = []

  try {
    for (const variant of VARIANTS) {
      const htmlPath = path.join(tmpDir, `${variant.slug}.html`)
      fs.writeFileSync(htmlPath, buildHtml({ subline: variant.subline, latinB64, latinExtB64 }))

      const context = await browser.newContext({
        viewport: { width: W, height: H },
        deviceScaleFactor: 2,
      })
      const page = await context.newPage()
      await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' })
      // Ensure SiteInter is active (not a system fallback)
      await page.evaluate(async () => {
        await document.fonts.ready
      })
      const fontInfo = await page.evaluate(() => {
        const h = document.querySelector('.headline')
        const cs = getComputedStyle(h)
        const faces = [...document.fonts].map((f) => ({
          family: f.family,
          weight: f.weight,
          status: f.status,
        }))
        return {
          fontFamily: cs.fontFamily,
          fontWeight: cs.fontWeight,
          fontSize: cs.fontSize,
          faces,
          siteInterLoaded: [...document.fonts].some(
            (f) => f.family.replace(/["']/g, '') === 'SiteInter' && f.status === 'loaded',
          ),
        }
      })
      if (!fontInfo.siteInterLoaded || !/SiteInter/i.test(fontInfo.fontFamily)) {
        throw new Error(`Inter not applied for ${variant.slug}: ${JSON.stringify(fontInfo)}`)
      }

      const boxes = await page.evaluate(() => {
        const pick = (sel) => {
          const el = document.querySelector(sel)
          const r = el.getBoundingClientRect()
          return { sel, x: r.x, y: r.y, w: r.width, h: r.height, right: r.right, bottom: r.bottom }
        }
        return {
          eyebrow: pick('.eyebrow'),
          headline: pick('.headline'),
          subline: pick('.subline'),
          cta: pick('.cta'),
          url: pick('.url'),
        }
      })

      const shot2x = path.join(tmpDir, `${variant.slug}@2x.png`)
      await page.screenshot({ path: shot2x, type: 'png', omitBackground: false })
      await context.close()

      const pngOut = path.join(outDir, `${variant.slug}.png`)
      downsampleWithLanczos(shot2x, pngOut)
      const ink = measureInkBounds(pngOut)
      const textBounds = unionTextBounds(boxes)

      const size = fs.statSync(pngOut).size
      const safeOk =
        ink.left >= SAFE_X &&
        ink.right >= SAFE_X &&
        ink.top >= SAFE_Y &&
        ink.bottom >= SAFE_Y &&
        textBounds.left >= SAFE_X &&
        textBounds.right >= SAFE_X &&
        textBounds.top >= SAFE_Y &&
        textBounds.bottom >= SAFE_Y

      const row = {
        slug: variant.slug,
        path: path.relative(root, pngOut),
        format: 'png',
        bytes: size,
        fontFamily: fontInfo.fontFamily,
        fontWeight: fontInfo.fontWeight,
        siteInterLoaded: fontInfo.siteInterLoaded,
        elementBoxes: boxes,
        textBounds,
        inkBounds: ink,
        safeOk,
        alt: variant.alt,
      }
      results.push(row)
      console.log(JSON.stringify(row, null, 2))
      if (!safeOk) {
        throw new Error(
          `Safe-area violation for ${variant.slug}: ink=${JSON.stringify(ink)} text=${JSON.stringify(textBounds)}`,
        )
      }
    }
  } finally {
    await browser.close()
  }

  fs.writeFileSync(path.join(tmpDir, 'render-report.json'), JSON.stringify(results, null, 2))
  console.log('done')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
