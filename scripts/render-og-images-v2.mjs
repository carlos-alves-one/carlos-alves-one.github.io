#!/usr/bin/env node
/**
 * Render 1200×627 Open Graph share images v2 for /health-wellness/ and
 * /hospitality-catering/. Flat line illustrations in HTML/SVG, captured with
 * Playwright Chromium (deviceScaleFactor 2), Lanczos-downsampled via Pillow.
 * Uses the site's Inter woff2. Not wired into the Next.js build.
 *
 * Outputs (cache-busting filenames; does not delete v1 PNGs):
 *   public/og/hospitality-catering-v2.png
 *   public/og/health-wellness-v2.png
 *
 * Usage (from repo root, after `npm run build` so Inter woff2 files exist):
 *   node scripts/render-og-images-v2.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'og')
const tmpDir = path.join('/tmp', 'render-og-images-v2')

const W = 1200
const H = 627
const SAFE_X = 100
const SAFE_Y = 40

const NAVY = '#102A43'
const WHITE = '#FFFFFF'
const AMBER = '#E09A2B'
const HOSP_BG = '#FBF7EF'
const SAGE = '#8FAE8B'
const SAGE_LIGHT = '#DCE6D8'
const HEALTH_BG = '#F7F7F4'

const EYEBROW = 'Carlos Alves Consulting'
const HEADLINE = 'Weekly reports without the retyping'
const OFFER = 'Free 30-min Weekly-Report Walkthrough'

const VARIANTS = [
  {
    slug: 'hospitality-catering-v2',
    kind: 'hospitality',
    subline: 'For hospitality and catering businesses',
    bg: HOSP_BG,
    accent: AMBER,
  },
  {
    slug: 'health-wellness-v2',
    kind: 'health',
    subline: 'For health & wellness businesses',
    bg: HEALTH_BG,
    accent: SAGE,
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

function hospitalityIllustration() {
  // Left-to-right: document pile + hospitality icons → curved arrows → weekly report
  return `<svg class="illo" viewBox="0 0 1000 320" width="1000" height="320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g fill="none" stroke="${NAVY}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- chef hat -->
    <g transform="translate(28,18)">
      <path d="M22 58c-14 0-22-10-22-22 0-10 7-18 16-20 2-10 12-16 22-16s20 6 22 16c9 2 16 10 16 20 0 12-8 22-22 22H22z"/>
      <path d="M10 58h64v8H10z"/>
      <path d="M18 58v-6 M42 58v-8 M66 58v-6" stroke-width="1.6"/>
    </g>
    <!-- plate + cutlery -->
    <g transform="translate(36,230)">
      <circle cx="36" cy="28" r="22"/>
      <circle cx="36" cy="28" r="12"/>
      <path d="M-6 8v40 M-10 12c0 10 4 14 4 24 M-2 12c0 10-4 14-4 24"/>
      <path d="M78 10v40 M74 14v12c0 6 8 6 8 0V14 M82 26v24"/>
    </g>
    <!-- document pile (labels peeking from fan) -->
    <g transform="translate(118,28)">
      <g transform="rotate(-18 70 130)">
        <rect x="10" y="50" width="140" height="190" rx="4" fill="${WHITE}"/>
        <text x="80" y="78" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="13" font-weight="700" letter-spacing="0.08em">RECEIPT</text>
        <path d="M28 98h104 M28 118h82 M28 138h96 M28 158h64" stroke-width="1.5"/>
      </g>
      <g transform="rotate(-8 95 125)">
        <rect x="40" y="35" width="145" height="195" rx="4" fill="${WHITE}"/>
        <text x="112" y="62" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">INVOICE</text>
        <path d="M58 84h110 M58 104h96 M58 124h104 M58 144h72" stroke-width="1.5"/>
      </g>
      <g transform="rotate(4 120 120)">
        <rect x="70" y="22" width="150" height="200" rx="4" fill="${WHITE}"/>
        <text x="145" y="48" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="11" font-weight="700" letter-spacing="0.04em">SUPPLIER INVOICE</text>
        <path d="M88 70h114 M88 90h96 M88 110h110 M88 130h76" stroke-width="1.5"/>
        <rect x="88" y="148" width="48" height="34" rx="2" stroke-width="1.4"/>
      </g>
      <g>
        <rect x="105" y="8" width="165" height="215" rx="4" fill="${WHITE}"/>
        <text x="187" y="36" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="12" font-weight="700" letter-spacing="0.05em">SPREADSHEET</text>
        <path d="M123 56h130 M123 76h130 M123 96h130 M123 116h130 M123 136h130 M123 156h130" stroke-width="1.2"/>
        <path d="M158 56v120 M198 56v120 M238 56v120" stroke-width="1.2"/>
      </g>
    </g>
    <!-- arrows -->
    <g fill="none" stroke-width="7">
      <path d="M370 90 C430 70, 500 70, 560 95" stroke="${NAVY}"/>
      <path d="M548 82 l18 16 -24 4z" fill="${NAVY}" stroke="none"/>
      <path d="M375 155 C445 155, 510 155, 560 155" stroke="${AMBER}"/>
      <path d="M548 143 l20 12 -20 12z" fill="${AMBER}" stroke="none"/>
      <path d="M370 220 C430 245, 500 250, 560 225" stroke="${NAVY}"/>
      <path d="M548 214 l18 -10 6 24z" fill="${NAVY}" stroke="none"/>
    </g>
    <!-- weekly report card -->
    <g transform="translate(590,28)">
      <rect x="0" y="0" width="280" height="268" rx="10" fill="${WHITE}" stroke-width="2.2"/>
      <text x="140" y="36" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="16" font-weight="800" letter-spacing="0.08em">WEEKLY REPORT</text>
      <path d="M100 48h80" stroke="${AMBER}" stroke-width="3"/>
      <!-- Costs -->
      <circle cx="42" cy="95" r="20"/>
      <text x="42" y="102" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="18" font-weight="700">£</text>
      <circle cx="88" cy="95" r="4" fill="${AMBER}" stroke="none"/>
      <text x="100" y="101" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="15" font-weight="700">Costs</text>
      <g fill="${AMBER}" stroke="none">
        <rect x="190" y="105" width="10" height="16" rx="1"/><rect x="204" y="98" width="10" height="23" rx="1"/><rect x="218" y="90" width="10" height="31" rx="1"/><rect x="232" y="82" width="10" height="39" rx="1"/><rect x="246" y="74" width="10" height="47" rx="1"/>
      </g>
      <path d="M24 130h232" stroke-width="1.2"/>
      <!-- Orders -->
      <circle cx="42" cy="175" r="20"/>
      <path d="M30 172 h24 l-3 10 h-18z M33 172 l3-6 h12 l3 6" stroke-width="1.8"/>
      <circle cx="88" cy="175" r="4" fill="${AMBER}" stroke="none"/>
      <text x="100" y="181" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="15" font-weight="700">Orders</text>
      <g fill="${AMBER}" stroke="none">
        <rect x="190" y="185" width="10" height="16" rx="1"/><rect x="204" y="178" width="10" height="23" rx="1"/><rect x="218" y="170" width="10" height="31" rx="1"/><rect x="232" y="162" width="10" height="39" rx="1"/><rect x="246" y="154" width="10" height="47" rx="1"/>
      </g>
      <path d="M24 210h232" stroke-width="1.2"/>
      <!-- Sales (shopping bag) -->
      <circle cx="42" cy="245" r="20"/>
      <path d="M31 238 h22 l-2 18 h-18z" stroke-width="1.8"/>
      <path d="M36 238 v-5 c0-4 3-7 6-7s6 3 6 7 v5" stroke-width="1.8"/>
      <circle cx="88" cy="245" r="4" fill="${AMBER}" stroke="none"/>
      <text x="100" y="251" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="15" font-weight="700">Sales</text>
      <g fill="${AMBER}" stroke="none">
        <rect x="190" y="255" width="10" height="16" rx="1"/><rect x="204" y="248" width="10" height="23" rx="1"/><rect x="218" y="240" width="10" height="31" rx="1"/><rect x="232" y="232" width="10" height="39" rx="1"/><rect x="246" y="224" width="10" height="47" rx="1"/>
      </g>
    </g>
  </g>
</svg>`
}

function healthIllustration() {
  // Three source cards → merging sage connectors with leaf → weekly report with leafy bars
  return `<svg class="illo" viewBox="0 0 1000 300" width="920" height="236" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g fill="none" stroke="${NAVY}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Bookings card -->
    <g transform="translate(20,10)">
      <rect x="0" y="18" width="150" height="170" rx="12" fill="${WHITE}" stroke-width="2"/>
      <rect x="48" y="0" width="54" height="28" rx="6" fill="${SAGE}" stroke="none"/>
      <path d="M60 8h30v14h-30z M60 12h30 M68 8v14 M82 8v14" stroke="${WHITE}" stroke-width="1.6"/>
      <rect x="45" y="55" width="60" height="52" rx="4"/>
      <path d="M45 70h60 M60 55v52 M75 55v52 M90 55v52" stroke-width="1.5"/>
      <circle cx="55" cy="82" r="2.5" fill="${NAVY}" stroke="none"/>
      <circle cx="70" cy="90" r="2.5" fill="${NAVY}" stroke="none"/>
      <circle cx="85" cy="82" r="2.5" fill="${NAVY}" stroke="none"/>
      <text x="75" y="155" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="18" font-weight="700">Bookings</text>
    </g>
    <!-- Rota card -->
    <g transform="translate(200,10)">
      <rect x="0" y="18" width="150" height="170" rx="12" fill="${WHITE}" stroke-width="2"/>
      <rect x="48" y="0" width="54" height="28" rx="6" fill="${SAGE}" stroke="none"/>
      <circle cx="64" cy="14" r="5" fill="none" stroke="${WHITE}" stroke-width="1.6"/>
      <circle cx="75" cy="12" r="5" fill="none" stroke="${WHITE}" stroke-width="1.6"/>
      <circle cx="86" cy="14" r="5" fill="none" stroke="${WHITE}" stroke-width="1.6"/>
      <circle cx="55" cy="70" r="12"/>
      <circle cx="75" cy="62" r="13"/>
      <circle cx="95" cy="70" r="12"/>
      <path d="M40 105c0-12 8-20 15-20s15 8 15 20 M60 100c0-14 8-24 15-24s15 10 15 24 M80 105c0-12 8-20 15-20s15 8 15 20" stroke-width="1.8"/>
      <text x="75" y="155" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="18" font-weight="700">Rota</text>
    </g>
    <!-- Finance card -->
    <g transform="translate(380,10)">
      <rect x="0" y="18" width="150" height="170" rx="12" fill="${WHITE}" stroke-width="2"/>
      <rect x="48" y="0" width="54" height="28" rx="6" fill="${SAGE}" stroke="none"/>
      <text x="75" y="20" text-anchor="middle" fill="${WHITE}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="16" font-weight="700">£</text>
      <circle cx="75" cy="90" r="28"/>
      <text x="75" y="100" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="28" font-weight="700">£</text>
      <text x="75" y="155" text-anchor="middle" fill="${NAVY}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="18" font-weight="700">Finance</text>
    </g>
    <!-- sage connector lines merging -->
    <g stroke="${SAGE}" stroke-width="2.4" fill="none">
      <path d="M95 198 V230 H560"/>
      <path d="M275 198 V245 H560"/>
      <path d="M455 198 V260 H560"/>
      <circle cx="95" cy="230" r="4" fill="${SAGE}" stroke="none"/>
      <circle cx="275" cy="245" r="4" fill="${SAGE}" stroke="none"/>
      <circle cx="455" cy="260" r="4" fill="${SAGE}" stroke="none"/>
      <circle cx="560" cy="245" r="4" fill="${SAGE}" stroke="none"/>
      <!-- leaf on trunk -->
      <g transform="translate(500,220)" stroke="${NAVY}" stroke-width="1.8">
        <path d="M0 20 C8 8, 22 4, 34 10 C22 16, 12 22, 0 20z" fill="${SAGE_LIGHT}"/>
        <path d="M4 18 C14 12, 24 12, 32 12"/>
      </g>
      <path d="M560 245 H610" stroke-width="2.4"/>
      <path d="M600 237 l16 8 -16 8z" fill="${SAGE}" stroke="none"/>
    </g>
    <!-- weekly report card -->
    <g transform="translate(630,8)">
      <rect x="0" y="0" width="250" height="280" rx="12" fill="${WHITE}" stroke-width="2.2"/>
      <rect x="0" y="0" width="250" height="44" rx="12" fill="${NAVY}" stroke="none"/>
      <rect x="0" y="28" width="250" height="16" fill="${NAVY}" stroke="none"/>
      <text x="125" y="30" text-anchor="middle" fill="${WHITE}" stroke="none" font-family="SiteInter,Inter,sans-serif" font-size="15" font-weight="800" letter-spacing="0.1em">WEEKLY REPORT</text>
      <!-- bars with leaf sprigs, no numbers -->
      <g transform="translate(40,70)">
        <path d="M0 180h170" stroke-width="1.4" stroke-dasharray="4 4"/>
        <path d="M0 150h170" stroke-width="1" stroke-dasharray="3 5" opacity="0.5"/>
        <path d="M0 120h170" stroke-width="1" stroke-dasharray="3 5" opacity="0.5"/>
        <g fill="${SAGE}" stroke="none">
          <rect x="12" y="110" width="28" height="70" rx="3"/>
          <rect x="56" y="80" width="28" height="100" rx="3"/>
          <rect x="100" y="55" width="28" height="125" rx="3"/>
          <rect x="144" y="95" width="28" height="85" rx="3"/>
        </g>
        <!-- leaf sprigs on bars -->
        <g stroke="${NAVY}" stroke-width="1.6" fill="none">
          <path d="M26 110 V92"/><path d="M26 100 C18 92, 14 88, 12 82"/><path d="M26 96 C34 90, 36 86, 38 80"/>
          <path d="M70 80 V60"/><path d="M70 70 C60 62, 56 56, 54 50"/><path d="M70 66 C80 58, 84 54, 86 48"/>
          <path d="M114 55 V32"/><path d="M114 44 C104 36, 100 30, 98 24"/><path d="M114 40 C124 32, 128 28, 130 22"/>
          <path d="M158 95 V74"/><path d="M158 86 C148 78, 144 74, 142 68"/><path d="M158 82 C168 74, 172 70, 174 64"/>
        </g>
      </g>
    </g>
  </g>
</svg>`
}

function buildHtml({ kind, subline, bg, accent, latinB64, latinExtB64 }) {
  const isHealth = kind === 'health'
  const illo = isHealth ? healthIllustration() : hospitalityIllustration()
  const heart = isHealth
    ? `<svg class="heart" width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <circle cx="18" cy="18" r="16" fill="none" stroke="${NAVY}" stroke-width="2"/>
        <path d="M18 26s-8-5.2-8-11a4.6 4.6 0 0 1 8-2.2A4.6 4.6 0 0 1 26 15c0 5.8-8 11-8 11z" fill="none" stroke="${NAVY}" stroke-width="1.8"/>
        <path d="M8 17h5l2.5-4 3 8 2-4H28" fill="none" stroke="${SAGE}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    : ''

  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>OG v2</title>
<style>
${fontFaceCss(latinB64, latinExtB64)}
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
  background: ${bg};
  color: ${NAVY};
  font-family: SiteInter, Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  display: flex;
  flex-direction: column;
  align-items: ${isHealth ? 'flex-start' : 'center'};
  justify-content: center;
  padding: ${SAFE_Y + 12}px ${SAFE_X}px ${SAFE_Y + 12}px;
  text-align: ${isHealth ? 'left' : 'center'};
}
.eyebrow {
  margin: 0 0 6px;
  font-size: 13px;
  line-height: 1.4;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${NAVY};
  opacity: 0.85;
}
.headline {
  margin: 0;
  font-size: ${isHealth ? '36px' : '40px'};
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  color: ${NAVY};
  max-width: ${isHealth ? '620px' : '980px'};
}
.subline {
  margin: 8px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.35;
  color: ${NAVY};
  opacity: 0.82;
}
.heart-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}
.heart-row .rule {
  width: 72px;
  height: 3px;
  background: ${accent};
  border-radius: 2px;
}
.illo-wrap {
  margin-top: ${isHealth ? '10px' : '12px'};
  display: flex;
  justify-content: ${isHealth ? 'flex-start' : 'center'};
  width: 100%;
}
.illo {
  display: block;
  max-width: 100%;
  height: auto;
}
.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${isHealth ? '12px' : '12px'};
  background: ${accent};
  color: ${WHITE};
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  padding: 12px 22px;
  min-height: 42px;
  border-radius: 8px;
  white-space: nowrap;
}
</style>
</head>
<body>
  <div class="banner">
    <p class="eyebrow"><span>${EYEBROW}</span></p>
    <h1 class="headline"><span>${HEADLINE}</span></h1>
    <p class="subline"><span>${subline}</span></p>
    ${isHealth ? `<div class="heart-row">${heart}<span class="rule"></span></div>` : ''}
    <div class="illo-wrap">${illo}</div>
    <span class="cta">${OFFER}</span>
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
px = out.load()
w, h = out.size
for x, y in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)):
  r, g, b = px[x, y]
  if min(r, g, b) < 250:
    # match canvas bg roughly for corners
    px[x, y] = px[1, 1]
out.save(${JSON.stringify(destPng)}, "PNG", optimize=True)
print(out.size[0], out.size[1], out.mode)
`
  const r = spawnSync('python3', ['-c', py], { encoding: 'utf8' })
  if (r.status !== 0) {
    throw new Error(`Lanczos downsample failed:\n${r.stdout}\n${r.stderr}`)
  }
  return r.stdout.trim()
}

async function main() {
  const fonts = findInterFonts()
  const latinB64 = fs.readFileSync(fonts.latin).toString('base64')
  const latinExtB64 = fs.readFileSync(fonts.latinExt).toString('base64')
  console.log(`Using Inter from ${fonts.dir}`)

  fs.mkdirSync(tmpDir, { recursive: true })
  fs.mkdirSync(outDir, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const results = []

  try {
    for (const variant of VARIANTS) {
      const htmlPath = path.join(tmpDir, `${variant.slug}.html`)
      fs.writeFileSync(
        htmlPath,
        buildHtml({
          kind: variant.kind,
          subline: variant.subline,
          bg: variant.bg,
          accent: variant.accent,
          latinB64,
          latinExtB64,
        }),
      )

      const context = await browser.newContext({
        viewport: { width: W, height: H },
        deviceScaleFactor: 2,
      })
      const page = await context.newPage()
      await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' })
      await page.evaluate(async () => {
        await document.fonts.ready
      })
      const fontInfo = await page.evaluate(() => {
        const h = document.querySelector('.headline')
        const cs = getComputedStyle(h)
        return {
          fontFamily: cs.fontFamily,
          fontWeight: cs.fontWeight,
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
          if (!el) return null
          // Prefer inner <span> so block elements do not report full row width.
          const target = el.querySelector('span') || el
          const r = target.getBoundingClientRect()
          return {
            sel,
            x: r.x,
            y: r.y,
            w: r.width,
            h: r.height,
            right: r.right,
            bottom: r.bottom,
            text: el.textContent.trim(),
          }
        }
        return {
          eyebrow: pick('.eyebrow'),
          headline: pick('.headline'),
          subline: pick('.subline'),
          cta: pick('.cta'),
        }
      })

      const textEls = Object.values(boxes).filter(Boolean)
      const textBounds = {
        minx: Math.min(...textEls.map((b) => b.x)),
        miny: Math.min(...textEls.map((b) => b.y)),
        maxx: Math.max(...textEls.map((b) => b.right)),
        maxy: Math.max(...textEls.map((b) => b.bottom)),
      }
      textBounds.left = textBounds.minx
      textBounds.top = textBounds.miny
      textBounds.right = W - textBounds.maxx
      textBounds.bottom = H - textBounds.maxy

      const shot2x = path.join(tmpDir, `${variant.slug}@2x.png`)
      await page.screenshot({ path: shot2x, type: 'png' })
      await context.close()

      const pngOut = path.join(outDir, `${variant.slug}.png`)
      downsampleWithLanczos(shot2x, pngOut)

      const safeOk =
        textBounds.left >= SAFE_X - 1 &&
        textBounds.right >= SAFE_X - 1 &&
        textBounds.top >= SAFE_Y - 1 &&
        textBounds.bottom >= SAFE_Y - 1

      const row = {
        slug: variant.slug,
        path: path.relative(root, pngOut),
        bytes: fs.statSync(pngOut).size,
        fontFamily: fontInfo.fontFamily,
        siteInterLoaded: fontInfo.siteInterLoaded,
        text: {
          eyebrow: boxes.eyebrow?.text,
          headline: boxes.headline?.text,
          subline: boxes.subline?.text,
          cta: boxes.cta?.text,
        },
        textBounds,
        safeOk,
      }
      results.push(row)
      console.log(JSON.stringify(row, null, 2))
      if (!safeOk) {
        throw new Error(`Safe-area violation for ${variant.slug}: ${JSON.stringify(textBounds)}`)
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
