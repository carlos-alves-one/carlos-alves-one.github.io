import { homeFaqMarkup } from './homeFaqs'
import { SampleSwitcher } from './SampleSwitcher'

const style = `
.home-moved{font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:var(--ink);line-height:1.55;font-size:16px}
.home-moved h2,.home-moved h3{font-family:ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;line-height:1.15;margin:0 0 .4rem}
.home-moved h2{font-size:clamp(26px,3vw,36px)}
.home-moved p{margin:0 0 .6rem}
.home-moved a{color:var(--accent)}
.home-moved .wrap{max-width:1120px;margin:0 auto;padding-left:clamp(24px,5vw,44px);padding-right:clamp(24px,5vw,44px)}
@media (max-width:560px){.home-moved .wrap{padding-left:max(26px, env(safe-area-inset-left));padding-right:max(26px, env(safe-area-inset-right))}}
.home-moved section{padding:28px 0}
.home-moved .panel,.home-moved .card,.home-moved .qa{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:26px;margin:12px 0}
.home-moved .card{padding:24px}
.home-moved .two,.home-moved .compare,.home-moved .case-grid{display:grid;gap:14px}
.home-moved .grid3,.home-moved .steps{display:grid;gap:14px}
@media(min-width:900px){
  .home-moved .two,.home-moved .compare,.home-moved .case-grid{grid-template-columns:1fr 1fr}
  .home-moved .grid3,.home-moved .steps{grid-template-columns:1fr 1fr 1fr}
}
.home-moved .btn{display:inline-flex;align-items:center;font-weight:700;text-decoration:none;border-radius:999px;padding:12px 18px}
.home-moved .btn-primary{background:var(--brand);color:var(--brand-ink)}
.home-moved .navlinks{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 18px}
.home-moved .navlinks a{font-weight:700;text-decoration:none;padding:8px 12px;border-radius:999px;border:1px solid var(--line);color:var(--ink)}
.home-moved .walkthrough-strip,.home-moved .cta{background:#0a2a27;color:#f2f7f2;border-radius:14px;padding:26px;display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between}
.home-moved .walkthrough-strip h2,.home-moved .cta h2,.home-moved .walkthrough-strip p,.home-moved .cta p{color:#fff}
.home-moved .walkthrough-strip .btn-primary,.home-moved .cta .btn-primary{background:var(--brand);color:var(--brand-ink)}
.home-moved .kicker,.home-moved .door-label,.home-moved .tag{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent)}
.home-moved .post-label{font-weight:700;margin:18px 0 6px}
.home-moved .social-grid{display:grid;gap:12px}
@media(min-width:800px){.home-moved .social-grid{grid-template-columns:1fr 1fr}}
.home-moved .social-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:18px;display:flex;flex-direction:column;gap:8px;text-decoration:none}
.home-moved .social-card:hover{border-color:var(--accent)}
.home-moved .social-card .social-icon{width:64px;height:64px;border-radius:14px;background:#000000;color:#ffffff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:32px;line-height:1;letter-spacing:-0.02em;flex:none;opacity:1;border:2px solid #000000}
@media (prefers-color-scheme: light){.home-moved .social-card .social-icon{background:#000000;color:#ffffff;border-color:#000000}}
@media (prefers-color-scheme: dark){.home-moved .social-card .social-icon{background:#000000;color:#ffffff;border-color:#ffffff}}
.home-moved .social-card b{font-size:16px}
.home-moved .social-card span{font-size:13.5px;color:var(--muted);word-break:break-word}
.home-moved .social-card em{font-style:normal;font-size:13px;font-weight:700;color:var(--accent);margin-top:auto}
.home-moved{
    /* Uniform deep-green theme from the approved homepage draft.
       Default green family; darker variant for dark-mode visitors. */
    --bg:#0e3733; --surface:#15413c; --surface-2:#1d4f47; --ink:#f2f7f2; --muted:#bdd2c6; --line:#2e6258;
    --brand:#e8a44c; --brand-ink:#241503; --accent:#f0b269; --accent-soft:#3d2c13; --good:#82dcab; --good-bg:#173f2c; --warn:#f0bc72; --warn-bg:#3d2c13;
    --radius:14px; --radius-s:10px;
  }
  @media (prefers-color-scheme: dark){
    .home-moved{
      --bg:#071e1b; --surface:#0d2c28; --surface-2:#133a34; --line:#215047;
      --ink:#eef6f0; --muted:#aac6b6; --good-bg:#123527; --warn-bg:#2e2417;
    }
  }
.home-moved .dash{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:0 12px 32px rgba(15,40,35,.10)}
.home-moved .dash p{margin:0}
.home-moved .dash-top{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:14px 20px;border-bottom:1px solid var(--line);background:var(--surface-2)}
.home-moved .file{font-family:ui-monospace,Menlo,monospace;font-size:12.5px;font-weight:600}
.home-moved .pill{font-size:11px;font-weight:700;letter-spacing:.06em;padding:4px 8px;border-radius:999px;background:var(--good-bg);color:var(--good)}
.home-moved .tabs{display:flex;gap:6px;margin-left:auto}
.home-moved .tab{border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:13px;font-weight:700;padding:8px 12px;border-radius:999px;cursor:pointer;min-height:36px}
.home-moved .tab[aria-selected="true"]{background:var(--brand);color:var(--brand-ink);border-color:transparent}
@media (prefers-color-scheme: light){.home-moved .tab[aria-selected="true"]{background:var(--brand);color:var(--brand-ink)}}
.home-moved .dash-body{padding:22px}
.home-moved .dash-title{font-size:13px;color:var(--muted);font-weight:600}
.home-moved .big{font-family:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;font-size:42px;font-weight:700;line-height:1;margin:4px 0 2px}
.home-moved .big-sub{font-size:14px;color:var(--good);font-weight:600}
.home-moved .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px}
.home-moved .kpi{border:1px solid var(--line);border-radius:var(--radius-s);padding:12px}
.home-moved .kpi label{display:block;font-size:12px;color:var(--muted);font-weight:600}
.home-moved .kpi b{font-size:20px}
.home-moved .kpi small{display:block;font-size:12.5px;color:var(--muted)}
.home-moved .chart{margin-top:18px}
.home-moved .chart h4{margin:0 0 8px;font-size:11.5px;letter-spacing:.07em;color:var(--muted)}
.home-moved .bars{display:flex;align-items:flex-end;gap:6px;height:92px}
.home-moved .bar{flex:1;background:var(--brand);border-radius:4px 4px 0 0;min-height:8px;opacity:.92}
@media (prefers-color-scheme: light){.home-moved .bar{background:#7fb8a6}}
.home-moved .bar.last{background:var(--accent)}
.home-moved .barlabels{display:flex;gap:6px;margin-top:6px}
.home-moved .barlabels span{flex:1;text-align:center;font-size:11px;color:var(--muted)}
.home-moved table{width:100%;border-collapse:collapse;margin-top:16px;font-size:13.5px}
.home-moved th, .home-moved td{padding:9px 8px;text-align:left;border-top:1px solid var(--line)}
.home-moved th{font-size:11.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);border-top:none}
.home-moved td.num, .home-moved th.num{text-align:right;font-variant-numeric:tabular-nums}
.home-moved .status{font-size:12px;font-weight:700;padding:3px 8px;border-radius:999px;background:var(--good-bg);color:var(--good);white-space:nowrap}
.home-moved .status.review{background:var(--warn-bg);color:var(--warn)}
.home-moved .dash-foot{padding:14px 20px;border-top:1px solid var(--line);font-size:12.5px;color:var(--muted);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
.home-moved .chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.home-moved .chip{font-size:13px;font-weight:600;border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:7px 12px}
.home-moved footer{border-top:1px solid var(--line);padding:24px 0 36px;color:var(--muted);font-size:13.5px}
.home-moved footer .wrap{display:flex;gap:14px;flex-wrap:wrap;justify-content:space-between}
.home-moved footer a{font-weight:600}
.home-moved footer .disclaimer{flex-basis:100%;line-height:1.6;max-width:72em}
@media (max-width:900px){.home-moved .hero-grid, .home-moved .compare, .home-moved .two, .home-moved .grid3, .home-moved .steps{grid-template-columns:1fr}
.home-moved .kpis{grid-template-columns:1fr 1fr 1fr}
.home-moved .about{grid-template-columns:1fr}
.home-moved .navlinks{margin-left:0}}
@media (max-width:560px){.home-moved .kpis{grid-template-columns:1fr}
.home-moved .proof{grid-template-columns:1fr}
.home-moved .tabs{margin-left:0}}
.home-moved .sample-wrap{padding-bottom:28px}
@media (max-width:560px){
  .home-moved .sample-wrap .dash{width:calc(100% + 40px);margin-left:-20px;margin-right:-20px}
}
`

function Block({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export function HomeMovedStyle() {
  return <style dangerouslySetInnerHTML={{ __html: style }} />
}

export function MovedTop() {
  return <div className="home-moved"><Block html={`<nav class="navlinks" aria-label="Main"><a href="#who">Pick your door</a><a href="#cases">Case studies</a><a href="#services">Services</a><a href="#how">How it works</a><a href="#social">Social</a><a href="#faq">FAQ</a></nav>      <div class="walkthrough-strip">
        <div>
          <h2>Start with a free 30-minute walkthrough</h2>
          <p>Show me one weekly report — a redacted copy is fine — and I'll show you 2–3 quick wins on the call. No cost, no obligation, nothing recorded.</p>
          <p style="margin-top:6px;font-size:13.5px">Mondays &amp; Fridays, 3–6pm UK time — another time? Just ask. I reply within one working day.</p>
        </div>
        <a class="btn btn-primary" href="https://calendar.app.google/C1hnZvX1jpWYd2bv6" target="_blank" rel="noopener">Book the free walkthrough →</a>
      </div>`} /></div>
}
export function MovedHow() {
  return <div className="home-moved"><Block html={`<!-- BEFORE / AFTER -->
  <section aria-labelledby="pain-h">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="pain-h">Monday morning doesn't have to start with copying and pasting</h2>
        <p>If your weekly numbers live in a till export, a rota file, an inbox of invoices and someone's memory, the report takes hours — and nobody fully trusts it. Here's the change I make:</p>
      </div>
      <div class="compare">
        <div class="panel">
          <p class="tag">The old way</p>
          <h3>Retyped, late, and hard to check</h3>
          <ul>
            <li>Sales, labour and costs copied by hand from three or four different exports</li>
            <li>Invoice errors spotted weeks later — or not at all</li>
            <li>Every site or room reported in a slightly different format</li>
            <li>The report is out of date by the time it reaches the owner</li>
          </ul>
        </div>
        <div class="panel after">
          <p class="tag">With an automated report</p>
          <h3>Refreshed in under a minute</h3>
          <ul>
            <li>One spreadsheet refreshed from your own exports — zero copying</li>
            <li>Invoice exceptions flagged the same week, while you can still query them</li>
            <li>Site-by-site and team-by-team views in one consistent format</li>
            <li>Formulas unlocked and logic anyone can audit — you own it outright</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section aria-labelledby="svc-h" style="padding-top:8px">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="svc-h">How I help</h2>
        <p>Practical solutions built inside the spreadsheets you already use — never a new platform, never a subscription.</p>
      </div>
      <div class="grid3">
        <article class="card">
          <p class="kicker">Core</p>
          <h3>Reporting automation</h3>
          <p>Eliminate manual data entry from your weekly reports by connecting the exports you already produce into one automated workflow.</p>
          <ul>
            <li>Weekly sales, activity, labour and cost reports refreshed in seconds</li>
            <li>One view of spend, orders and activity across sites, events or rooms</li>
            <li>Zero new software to buy</li>
          </ul>
        </article>
        <article class="card">
          <p class="kicker">Insight</p>
          <h3>KPI dashboards &amp; invoice reconciliation</h3>
          <p>Scattered data turned into a clear weekly view — and supplier invoices checked against what was actually ordered and delivered.</p>
          <ul>
            <li>Sales vs labour, margin and utilisation at a glance</li>
            <li>Invoice exceptions flagged for review each week</li>
            <li>Shareable summaries for owners, ops and finance</li>
          </ul>
        </article>
        <article class="card">
          <p class="kicker">Planning</p>
          <h3>Forecasting &amp; planning</h3>
          <p>Simple forecasts your team can follow and check — based on bookings, seasonality, weather where it matters, and your historical mix.</p>
          <ul>
            <li>Line-level order and staffing recommendations</li>
            <li>Fewer emergency supplier runs and less waste</li>
            <li>Transparent logic anyone can audit</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS + PRICE SIGNAL -->
  <section id="how" aria-labelledby="how-h" style="padding-top:8px">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="how-h">Small, fixed-fee stages. Zero lock-in.</h2>
        <p>Every engagement starts free, and you'll always know the fixed fee before you commit to the next stage. No subscription, no platform to buy, and full ownership of anything I build.</p>
      </div>
      <div class="steps">
        <article class="card step">
          <div class="num">01</div>
          <h3>Free Weekly-Report Walkthrough</h3>
          <p>Show me one weekly report on a 30-minute call and I'll walk you through 2–3 quick wins there and then. A redacted copy is fine, and nothing is recorded.</p>
          <p class="price"><b>£0</b> · No cost, no obligation</p>
        </article>
        <article class="card step">
          <div class="num">02</div>
          <h3>Reporting Review</h3>
          <p>A fixed-fee diagnostic of how your numbers are gathered today, with a short written summary and practical next steps you can act on — with or without me.</p>
          <p class="price"><b>Fixed fee</b> · Agreed upfront, with a refund guarantee</p>
        </article>
        <article class="card step">
          <div class="num">03</div>
          <h3>Build &amp; handover</h3>
          <p>I build the automated report in your Excel or Google Sheets, hand it over with formulas unlocked, and make sure your team can run it without me.</p>
          <p class="price"><b>Fixed price</b> · Quoted before we start — you keep everything</p>
        </article>
      </div>
    </div>
  </section>

  `} /></div>
}
export function MovedFaq() {
  return <div className="home-moved"><Block html={`<!-- FAQ -->
  <section id="faq-home" aria-labelledby="faq-h" style="padding-top:8px">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="faq-h">Everything you might wonder before booking</h2>
        <p>Honest answers upfront. If your question isn't here, ask it during the free walkthrough.</p>
      </div>
      <div class="faq">
${homeFaqMarkup()}
      </div>
    </div>
  </section>
`} /></div>
}
export function MovedAbout() {
  return <div className="home-moved"><Block html={`<p class="hello">Hello, I'm <b>Carlos</b> — I spent years doing the Monday-morning spreadsheet scramble myself, buying stock, chasing invoices and retyping last week's numbers. So now I build the weekly report I always wished I'd had. No jargon, no new system to learn — just your numbers, sorted.</p>      <div class="proof-strip" aria-label="Credentials">
        <div><b>5 years on the operator side</b><span>Beverage purchasing at Aqua Restaurant Group, London — two restaurants and six bars, £100k of stock a month.</span></div>
        <div><b>MSc Data Science &amp; AI</b><span>Distinction, Goldsmiths. Plus BSc Computer Science (First). Independent in London since 2024.</span></div>
      </div><!-- ABOUT -->
  <section id="about-from-home" aria-labelledby="about-h" style="padding-top:8px">
    <div class="wrap">
      <div class="sec-head"><h2 id="about-h">Operator experience, backed by AI training</h2></div>
      <div class="panel about">
        <div class="avatar" aria-hidden="true">CA</div>
        <div>
          <h3 style="font-size:22px">Carlos Alves</h3>
          <p style="color:var(--muted);font-weight:600;font-size:14px;margin-bottom:10px">Independent Data &amp; AI Consultant, London</p>
          <p style="max-width:46em">Hospitality purchasing manager turned data scientist. I used to buy £100k of stock a month, reconcile tills, chase invoices and run stocktakes. Today I replace hand-typed weekly reports with automated spreadsheets that UK hospitality and health &amp; wellness teams can trust.</p>
          <div class="chips">
            <span class="chip">5 years · £100k/mo purchasing at Aqua Restaurant Group</span>
            <span class="chip">MSc Data Science &amp; AI (Distinction) · Goldsmiths</span>
            <span class="chip">BSc Computer Science (First)</span>
            <span class="chip">London · independent since 2024 · serving clients across the UK</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  `} /></div>
}
export function MovedSocial() {
  return <div className="home-moved"><Block html={`<!-- SOCIAL MEDIA -->
  <section id="social" aria-labelledby="social-h" style="padding-top:8px">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="social-h">Follow along on social media</h2>
        <p>Short, practical posts on stopping the weekly retyping — reporting tips, dashboard walk-throughs and lessons from the operator side. Pick a platform, or jump straight to the latest post.</p>
      </div>

      <div class="social-grid">
        <a class="social-card" href="https://www.linkedin.com/in/carlos-alves-one" target="_blank" rel="noopener"><span class="social-icon" aria-hidden="true">in</span><b>LinkedIn</b><span>linkedin.com/in/carlos-alves-one</span><em>Connect on LinkedIn →</em></a>
        <a class="social-card" href="https://x.com/Mr_CarlosAlves" target="_blank" rel="noopener"><span class="social-icon" aria-hidden="true">X</span><b>X</b><span>x.com/Mr_CarlosAlves</span><em>Follow @Mr_CarlosAlves →</em></a>
        <a class="social-card" href="https://www.tiktok.com/@mrcarlosalves" target="_blank" rel="noopener"><span class="social-icon" aria-hidden="true">♪</span><b>TikTok</b><span>tiktok.com/@mrcarlosalves</span><em>Watch on TikTok →</em></a>
        <a class="social-card" href="https://www.reddit.com/user/carlosalvesuk" target="_blank" rel="noopener"><span class="social-icon" aria-hidden="true">r/</span><b>Reddit</b><span>reddit.com/user/carlosalvesuk</span><em>View u/carlosalvesuk →</em></a>
      </div>

      <div class="latest" aria-label="Latest post by platform">
        <div class="latest-top">
          <b>Latest post</b>
          <span class="pill">CHOOSE A PLATFORM</span>
        </div>
        <div class="latest-body" id="socialBody" role="group" aria-label="Choose social platform"><p class="post-label">TikTok</p><div class="latest-body"><p class="latest-handle">TikTok · @mrcarlosalves</p><h3>Latest on TikTok — short videos on stopping the retyping</h3><p>Carlos's TikTok profile is live with 2 videos, built around the same idea as this site: helping UK operators stop retyping weekly reports and get costs, orders and sales into one view. Watch the newest video at the top of the profile.</p><div class="latest-actions"><a class="btn btn-primary" href="https://www.tiktok.com/@mrcarlosalves" target="_blank" rel="noopener">Watch the latest TikTok →</a><span class="latest-note">Snapshot checked 24 Nov 2026 · 2 videos on the profile</span></div></div><p class="post-label">LinkedIn</p><div class="latest-body"><p class="latest-handle">LinkedIn · carlos-alves-one</p><h3>Latest on LinkedIn</h3><p>On LinkedIn Carlos writes for owners, operations leads and finance leads in hospitality and health & wellness — reporting automation, KPI dashboards and invoice reconciliation, in plain language and in the spreadsheets teams already use.</p><div class="latest-actions"><a class="btn btn-primary" href="https://www.linkedin.com/in/carlos-alves-one" target="_blank" rel="noopener">See the latest LinkedIn post →</a><span class="latest-note">Opens Carlos's LinkedIn profile — newest post first</span></div></div><p class="post-label">X</p><div class="latest-body"><p class="latest-handle">X · @Mr_CarlosAlves · 24 Nov 2026, 11:25</p><h3>Latest post on X</h3><p>Supplier prices creeping up a penny at a time hide in the weekly total until the margin's gone. Compare unit prices (line total ÷ quantity) by product code and pack size with last week and 4 weeks ago. Free 30-min Weekly-Report Walkthrough: carlosalves.uk/hospitality-ca… #Hospitality</p><div class="latest-actions"><a class="btn btn-primary" href="https://x.com/Mr_CarlosAlves/status/2125189104786649184" target="_blank" rel="noopener">View this post on X →</a><span class="latest-note">Verified post · 24 Nov 2026, 11:25 · @Mr_CarlosAlves</span></div></div><p class="post-label">Reddit</p><div class="latest-body"><p class="latest-handle">Reddit · u/carlosalvesuk</p><h3>Latest on Reddit</h3><p>On Reddit, u/carlosalvesuk joins the conversation with other operators and spreadsheet users — practical answers on weekly reporting, automation and getting one trusted view of the numbers.</p><div class="latest-actions"><a class="btn btn-primary" href="https://www.reddit.com/user/carlosalvesuk" target="_blank" rel="noopener">See the latest Reddit post →</a><span class="latest-note">Opens u/carlosalvesuk on Reddit — newest activity first</span></div></div></div>
      </div>
      <p style="margin-top:12px;font-size:13.5px;color:var(--muted)">This page is a fixed snapshot, so it can't pull a live feed — each button above opens that platform directly, where the newest post is always at the top. Snapshots checked 24 Nov 2026 — the X post shown is the verified post from @Mr_CarlosAlves at 11:25 that day.</p>
    </div>
  </section>

  `} /></div>
}
export function MovedBottom({ sector }: { sector: "hosp" | "health" }) {
  const hospLink = sector === "hosp"
    ? '<a class="btn btn-ghost" href="#services">Hospitality page</a>'
    : '<a class="btn btn-ghost" href="https://carlosalves.uk/hospitality-catering/" target="_blank" rel="noopener">Hospitality page</a>'
  const healthLink = sector === "health"
    ? '<a class="btn btn-ghost" href="#services">Health &amp; Wellness page</a>'
    : '<a class="btn btn-ghost" href="https://carlosalves.uk/health-wellness/" target="_blank" rel="noopener">Health &amp; Wellness page</a>'
  return <div className="home-moved"><Block html={`      <div class="walkthrough-strip">
        <div>
          <h2>Start with a free 30-minute walkthrough</h2>
          <p>Show me one weekly report — a redacted copy is fine — and I'll show you 2–3 quick wins on the call. No cost, no obligation, nothing recorded.</p>
          <p style="margin-top:6px;font-size:13.5px">Mondays &amp; Fridays, 3–6pm UK time — another time? Just ask. I reply within one working day.</p>
        </div>
        <a class="btn btn-primary" href="https://calendar.app.google/C1hnZvX1jpWYd2bv6" target="_blank" rel="noopener">Book the free walkthrough →</a>
      </div><!-- CTA -->
  <section style="padding-top:8px">
    <div class="wrap">
      <div class="cta">
        <h2>Start with a conversation, not a contract</h2>
        <p>Book a free 30-minute Weekly-Report Walkthrough and bring one weekly report — you'll leave with 2–3 practical quick wins whether or not we work together afterwards.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="https://calendar.app.google/C1hnZvX1jpWYd2bv6" target="_blank" rel="noopener">Open booking calendar →</a>
          ${hospLink}
          ${healthLink}
        </div>
        <p style="margin-top:14px"><small>Mondays &amp; Fridays, 3–6pm (UK time) · London, UK · Serving clients across the UK</small></p>
      </div>
    </div>
  </section>
<footer>
  <div class="wrap">
    <span>© Carlos Alves Consulting — Independent Data &amp; AI consultancy, London, UK.</span>
    <span><a href="https://carlosalves.uk/" target="_blank" rel="noopener">carlosalves.uk</a></span>
    <span style="flex-basis:100%"><strong>Follow Carlos:</strong> <a href="https://www.linkedin.com/in/carlos-alves-one" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://x.com/Mr_CarlosAlves" target="_blank" rel="noopener">X</a> · <a href="https://www.tiktok.com/@mrcarlosalves" target="_blank" rel="noopener">TikTok</a> · <a href="https://www.reddit.com/user/carlosalvesuk" target="_blank" rel="noopener">Reddit</a></span>
    <p class="disclaimer">All figures, statistics, and data shown on this page are entirely fictitious sample data created for illustrative purposes only. No real customer information, personal data, or confidential records are used, displayed, or processed. This ensures full protection of customer confidentiality and compliance with applicable data privacy regulations and standards.</p>
  </div>
</footer>`} /></div>
}
export function MovedProblem({ sector }: { sector: "hosp" | "health" }) {
  const html = sector === "hosp" ? `<div class="sec-head">
        <h2 id="who-h">Pick your door</h2>
        <p>This homepage is the shared promise — one weekly report, no retyping, in the tools you already use. Through each door is a page that speaks only to your world: your daily problems, your words for them, and examples that look like your week.</p>
      </div><article class="panel sector door">
          <p class="door-label">Door 1 · Hospitality &amp; Catering</p>
          <h3>For restaurants, bars, cafés, caterers and venues</h3>
          <p>Inside: tills, rotas, stock, margins and supplier invoices — the hospitality week, in hospitality language. Costs, orders and sales in one weekly report, for owners, operations leads and finance leads.</p>
          <ul>
            <li>Weekly sales vs budget, labour % against target</li>
            <li>Food and beverage gross margin tracking</li>
            <li>Invoice reconciliation and ordering forecasts</li>
          </ul>
          <a class="more" href="#services">Step into the hospitality page →</a>
        </article>` : `<div class="sec-head">
        <h2 id="who-h">Pick your door</h2>
        <p>This homepage is the shared promise — one weekly report, no retyping, in the tools you already use. Through each door is a page that speaks only to your world: your daily problems, your words for them, and examples that look like your week.</p>
      </div><article class="panel sector door">
          <p class="door-label">Door 2 · Health &amp; Wellness</p>
          <h3>For clinics, dental practices, gyms, care providers and therapists</h3>
          <p>Inside: diaries, rotas, rooms and practitioners — the health &amp; wellness week, in your language. Costs, appointments and staffing in one weekly report, refreshed from your booking, rota and finance exports.</p>
          <ul>
            <li>Appointments and attendance vs staffing hours</li>
            <li>Site-by-site or practitioner-by-practitioner views</li>
            <li>Demand and staffing forecasts you can audit</li>
          </ul>
          <a class="more" href="#services">Step into the health &amp; wellness page →</a>
        </article><p style="margin-top:12px;font-size:13.5px;color:var(--muted)">Note on scope: for health &amp; wellness clients the work is about how numbers are gathered and shown — not clinical advice, treatment decisions or regulatory certification.</p>`
  return <div className="home-moved" id="who"><Block html={html} /></div>
}
export function MovedExamples({ sector }: { sector: "hosp" | "health" }) {
  const html = sector === "hosp" ? `<div id="cases"><div class="sec-head">
        <h2 id="cases-h">Case studies — before &amp; after</h2>
        <p>Two worked examples in the format I build for clients. Both are fictitious sample case studies for illustration — the businesses, figures and timelines are invented, so no real client data is shown.</p>
      </div><article class="panel case-card">
          <p class="door-label" style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent)">Hospitality · London · 8 weeks</p>
          <h3>Harbour &amp; Vine — 3 restaurants</h3>
          <p style="color:var(--muted);font-size:15px">The owner was spending Monday mornings retyping till exports, rota files and PDF invoices. Food cost was only known weeks later, invoice errors were missed, and one site lost money for three weeks before anyone spotted it.</p>
          <div class="case-meta"><span>~£210k / month turnover</span><span>~120 invoices / month</span><span>Same tills &amp; suppliers</span></div>
          <div class="results">
            <div class="result"><label>Weekly reporting</label><span class="before">7 hours</span><div class="after-val">45 mins</div><small>One report by 8am Monday</small></div>
            <div class="result"><label>Food cost</label><span class="before">31.5%</span><div class="after-val">28.9%</div><small>Seen live, by site &amp; dish</small></div>
            <div class="result"><label>Waste</label><span class="before">8.0% of purchases</span><div class="after-val">4.6%</div><small>Forecast-led ordering</small></div>
            <div class="result"><label>Invoices to check</label><span class="before">~120 by hand</span><div class="after-val">~5 flagged</div><small>96% matched automatically</small></div>
          </div>
          <p style="color:var(--muted);font-size:14.5px">After: invoices matched to orders and deliveries, a £412 duplicate charge caught in week 2, and ordering suggested from bookings, last year and the weather — all in a spreadsheet the owner owns.</p>
          <a class="more" href="#services">See the hospitality work behind this →</a>
        </article><article class="panel case-card">
          <p class="door-label" style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent)">Health &amp; Wellness · North · 10 weeks</p>
          <h3>Fernwell Wellness — 4 locations</h3>
          <p style="color:var(--muted);font-size:15px">A physiotherapy, massage and reformer Pilates group across Manchester, Leeds and Sheffield. Diaries, rotas and finance lived in separate exports, so utilisation and no-shows were hard to see until long after the week had passed.</p>
          <div class="case-meta"><span>4 locations</span><span>Physio · Massage · Pilates</span><span>~165 invoices / month</span></div>
          <div class="results">
            <div class="result"><label>Weekly reporting</label><span class="before">9 hours</span><div class="after-val">50 mins</div><small>One view, every Monday</small></div>
            <div class="result"><label>Utilisation</label><span class="before">61%</span><div class="after-val">73%</div><small>By site &amp; practitioner</small></div>
            <div class="result"><label>No-shows</label><span class="before">13.8%</span><div class="after-val">8.4%</div><small>Spotted &amp; acted on weekly</small></div>
            <div class="result"><label>Invoices to check</label><span class="before">~165 by hand</span><div class="after-val">~8 flagged</div><small>Exceptions list only</small></div>
          </div>
          <p style="color:var(--muted);font-size:14.5px">After: appointments, staffing and costs in one weekly report — diary, rota and finance exports refreshed together, with demand and staffing forecasts the team can audit.</p>
          <a class="more" href="https://carlosalves.uk/health-wellness/" target="_blank" rel="noopener">See the health &amp; wellness work behind this →</a>
        </article><article class="panel"><h3><a href="/wedding-venue-crm-payments-forecasting/">What CRM should a wedding and events venue use to track leads, quotes, payments and revenue forecasts?</a></h3><p>A venue whose list includes pipelines, quotes, e-signed contracts, payment chasing, a shared events calendar and a couple portal is usually describing…</p></article></div>` : `<div id="cases"><div class="sec-head">
        <h2 id="cases-h">Case studies — before &amp; after</h2>
        <p>Two worked examples in the format I build for clients. Both are fictitious sample case studies for illustration — the businesses, figures and timelines are invented, so no real client data is shown.</p>
      </div><article class="panel case-card">
          <p class="door-label" style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent)">Hospitality · London · 8 weeks</p>
          <h3>Harbour &amp; Vine — 3 restaurants</h3>
          <p style="color:var(--muted);font-size:15px">The owner was spending Monday mornings retyping till exports, rota files and PDF invoices. Food cost was only known weeks later, invoice errors were missed, and one site lost money for three weeks before anyone spotted it.</p>
          <div class="case-meta"><span>~£210k / month turnover</span><span>~120 invoices / month</span><span>Same tills &amp; suppliers</span></div>
          <div class="results">
            <div class="result"><label>Weekly reporting</label><span class="before">7 hours</span><div class="after-val">45 mins</div><small>One report by 8am Monday</small></div>
            <div class="result"><label>Food cost</label><span class="before">31.5%</span><div class="after-val">28.9%</div><small>Seen live, by site &amp; dish</small></div>
            <div class="result"><label>Waste</label><span class="before">8.0% of purchases</span><div class="after-val">4.6%</div><small>Forecast-led ordering</small></div>
            <div class="result"><label>Invoices to check</label><span class="before">~120 by hand</span><div class="after-val">~5 flagged</div><small>96% matched automatically</small></div>
          </div>
          <p style="color:var(--muted);font-size:14.5px">After: invoices matched to orders and deliveries, a £412 duplicate charge caught in week 2, and ordering suggested from bookings, last year and the weather — all in a spreadsheet the owner owns.</p>
          <a class="more" href="https://carlosalves.uk/hospitality-catering/" target="_blank" rel="noopener">See the hospitality work behind this →</a>
        </article><article class="panel case-card">
          <p class="door-label" style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent)">Health &amp; Wellness · North · 10 weeks</p>
          <h3>Fernwell Wellness — 4 locations</h3>
          <p style="color:var(--muted);font-size:15px">A physiotherapy, massage and reformer Pilates group across Manchester, Leeds and Sheffield. Diaries, rotas and finance lived in separate exports, so utilisation and no-shows were hard to see until long after the week had passed.</p>
          <div class="case-meta"><span>4 locations</span><span>Physio · Massage · Pilates</span><span>~165 invoices / month</span></div>
          <div class="results">
            <div class="result"><label>Weekly reporting</label><span class="before">9 hours</span><div class="after-val">50 mins</div><small>One view, every Monday</small></div>
            <div class="result"><label>Utilisation</label><span class="before">61%</span><div class="after-val">73%</div><small>By site &amp; practitioner</small></div>
            <div class="result"><label>No-shows</label><span class="before">13.8%</span><div class="after-val">8.4%</div><small>Spotted &amp; acted on weekly</small></div>
            <div class="result"><label>Invoices to check</label><span class="before">~165 by hand</span><div class="after-val">~8 flagged</div><small>Exceptions list only</small></div>
          </div>
          <p style="color:var(--muted);font-size:14.5px">After: appointments, staffing and costs in one weekly report — diary, rota and finance exports refreshed together, with demand and staffing forecasts the team can audit.</p>
          <a class="more" href="#services">See the health &amp; wellness work behind this →</a>
        </article><article class="panel"><h3><a href="/gym-non-card-payments-reconcile/">How can a gym reconcile cash and bank-transfer payments with its gym software without marking each one by hand?</a></h3><p>Most gym software can already hold non-card payments: you record the payment as an offline method (cash or bank transfer) against the member, then confirm…</p></article></div>`
  return <div className="home-moved"><Block html={html} /><SampleSwitcher sector={sector} /></div>
}
