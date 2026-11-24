
const style = `
.home-moved{font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:#f2f7f2;line-height:1.55;font-size:16px}
.home-moved .panel,.home-moved .card,.home-moved .dash,.home-moved .cta,.home-moved .walkthrough-strip,.home-moved .social-card{color:var(--ink)}
.home-moved .sec-head p{color:#d7e8df}
.home-moved .panel h2,.home-moved .panel h3,.home-moved .card h2,.home-moved .card h3,.home-moved .dash h2,.home-moved .dash h3{color:var(--ink)}
.home-moved section h2,.home-moved section h3{color:#f2f7f2}
.home-moved .panel section h2,.home-moved .panel section h3{color:var(--ink)}
.home-moved .case-meta{display:flex;flex-wrap:wrap;gap:6px 18px;margin:12px 0}
.home-moved .case-meta span{white-space:nowrap}
.home-moved .results{display:grid;gap:14px;margin-top:14px}
.home-moved .result{display:flex;flex-wrap:wrap;gap:2px 10px;align-items:baseline}
.home-moved .result label{flex-basis:100%;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent)}
.home-moved .result .ba-label{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent)}
.home-moved .result .before{opacity:.8;text-decoration:line-through}
.home-moved .result .after-val{font-weight:700;color:var(--good)}
.home-moved .result small{flex-basis:100%;color:var(--muted)}
.home-moved .case-card{margin-bottom:8px}

.home-moved h2,.home-moved h3{font-family:ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;line-height:1.15;margin:0 0 .4rem}
.home-moved h2{font-size:clamp(26px,3vw,36px)}
.home-moved p{margin:0 0 .6rem}
.home-moved a{color:var(--accent)}
.home-moved .wrap{max-width:1120px;margin:0 auto;padding-left:clamp(24px,5vw,44px);padding-right:clamp(24px,5vw,44px)}
@media (max-width:560px){.home-moved .wrap{padding-left:max(26px, env(safe-area-inset-left));padding-right:max(26px, env(safe-area-inset-right))}}
.home-moved section{padding:28px 0}
.home-moved [id]{scroll-margin-top:96px}
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
    --bg:#0e3733; --surface:#15413c; --surface-2:#1d4f47; --ink:#f2f7f2; --muted:#d7e8df; --line:#2e6258;
    --brand:#e8a44c; --brand-ink:#241503; --accent:#f0b269; --accent-soft:#3d2c13; --good:#82dcab; --good-bg:#173f2c; --warn:#f0bc72; --warn-bg:#3d2c13;
    --radius:14px; --radius-s:10px;
  }
  @media (prefers-color-scheme: dark){
    .home-moved{
      --bg:#071e1b; --surface:#0d2c28; --surface-2:#133a34; --line:#215047;
      --ink:#eef6f0; --muted:#c8ddd2; --good-bg:#123527; --warn-bg:#2e2417;
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
  return <div className="home-moved"><Block html={`<nav class="navlinks" aria-label="Main"><a href="#cases">Case studies</a><a href="#services">Services</a><a href="#how">How it works</a><a href="#social">Social</a><a href="#faq">FAQ</a></nav>      <div class="walkthrough-strip">
        <div>
          <h2>Start with a free 30-minute walkthrough</h2>
          <p>Show me one weekly report — a redacted copy is fine — and I'll show you 2–3 quick wins on the call. No cost, no obligation, nothing recorded.</p>
          <p style="margin-top:6px;font-size:13.5px">Mondays &amp; Fridays, 3–6pm UK time — another time? Just ask. I reply within one working day.</p>
        </div>
        <a class="btn btn-primary" href="https://calendar.app.google/C1hnZvX1jpWYd2bv6" target="_blank" rel="noopener">Book the free walkthrough →</a>
      </div>`} /></div>
}
export function MovedHow({ sector }: { sector: "hosp" | "health" }) {
  const copy =
    sector === "hosp"
      ? {
          intro:
            "If your weekly numbers live in a till export, a rota file, an inbox of invoices and someone's memory, the report takes hours \u2014 and nobody fully trusts it. Here's the change I make:",
          old: [
            "Sales, labour and costs copied by hand from three or four different exports",
            "Invoice errors spotted weeks later \u2014 or not at all",
            "Every site or room reported in a slightly different format",
            "The report is out of date by the time it reaches the owner",
          ],
          after: [
            "One spreadsheet refreshed from your own exports \u2014 zero copying",
            "Invoice exceptions flagged the same week, while you can still query them",
            "Site-by-site and team-by-team views in one consistent format",
            "Formulas unlocked and logic anyone can audit \u2014 you own it outright",
          ],
        }
      : {
          intro:
            "If your weekly numbers live in a diary export, a rota file, an inbox of invoices and someone's memory, the report takes hours \u2014 and nobody fully trusts it. Here's the change I make:",
          old: [
            "Appointments, attendance and costs copied by hand from three or four different exports",
            "Utilisation and no-shows only visible weeks later \u2014 or not at all",
            "Every site or practitioner reported in a slightly different format",
            "The report is out of date by the time it reaches the owner",
          ],
          after: [
            "One spreadsheet refreshed from your diary, rota and finance exports \u2014 zero copying",
            "Utilisation and no-shows flagged the same week, while you can still act on them",
            "Site-by-site and practitioner-by-practitioner views in one consistent format",
            "Formulas unlocked and logic anyone can audit \u2014 you own it outright",
          ],
        }
  return (
    <div className="home-moved">
      <Block
        html={`<section aria-labelledby="pain-h">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="pain-h">Monday morning doesn't have to start with copying and pasting</h2>
        <p>${copy.intro}</p>
      </div>
      <div class="compare">
        <div class="panel">
          <p class="tag">The old way</p>
          <h3>Retyped, late, and hard to check</h3>
          <ul>${copy.old.map((li) => `<li>${li}</li>`).join("")}</ul>
        </div>
        <div class="panel after">
          <p class="tag">With an automated report</p>
          <h3>Refreshed in under a minute</h3>
          <ul>${copy.after.map((li) => `<li>${li}</li>`).join("")}</ul>
        </div>
      </div>
    </div>
  </section>`}
      />
    </div>
  )
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
      <p style="margin-top:12px;font-size:13.5px;color:#d7e8df">This page is a fixed snapshot, so it can't pull a live feed — each button above opens that platform directly, where the newest post is always at the top. Snapshots checked 24 Nov 2026 — the X post shown is the verified post from @Mr_CarlosAlves at 11:25 that day.</p>
    </div>
  </section>

  `} /></div>
}
export function MovedExamples({ sector }: { sector: "hosp" | "health" }) {
  const isHosp = sector === "hosp"
  const heading = "Case study \u2014 before & after"
  const intro =
    "One worked example in the format I build for clients. It is a fictitious sample case study for illustration \u2014 the business, figures and timeline are invented, so no real client data is shown."
  const caseHtml = isHosp
    ? `<article class="panel case-card">
          <p class="door-label" style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent)">Hospitality \u00b7 London \u00b7 8 weeks</p>
          <h3>Harbour &amp; Vine \u2014 3 restaurants</h3>
          <p style="font-size:15px">The owner was spending Monday mornings retyping till exports, rota files and PDF invoices. Food cost was only known weeks later, invoice errors were missed, and one site lost money for three weeks before anyone spotted it.</p>
          <div class="case-meta"><span>~\u00a3210k / month turnover</span><span>~120 invoices / month</span><span>Same tills &amp; suppliers</span></div>
          <div class="results">
            <div class="result"><label>Weekly reporting</label><span class="ba-label">Before</span><span class="before">7 hours</span><span class="ba-label">After</span><span class="after-val">45 mins</span><small>One report by 8am Monday</small></div>
            <div class="result"><label>Food cost</label><span class="ba-label">Before</span><span class="before">31.5%</span><span class="ba-label">After</span><span class="after-val">28.9%</span><small>Seen live, by site &amp; dish</small></div>
            <div class="result"><label>Waste</label><span class="ba-label">Before</span><span class="before">8.0% of purchases</span><span class="ba-label">After</span><span class="after-val">4.6%</span><small>Forecast-led ordering</small></div>
            <div class="result"><label>Invoices to check</label><span class="ba-label">Before</span><span class="before">~120 by hand</span><span class="ba-label">After</span><span class="after-val">~5 flagged</span><small>96% matched automatically</small></div>
          </div>
          <p style="font-size:14.5px">After: invoices matched to orders and deliveries, a \u00a3412 duplicate charge caught in week 2, and ordering suggested from bookings, last year and the weather \u2014 all in a spreadsheet the owner owns.</p>
        </article>`
    : `<article class="panel case-card">
          <p class="door-label" style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent)">Health &amp; Wellness \u00b7 North \u00b7 10 weeks</p>
          <h3>Fernwell Wellness \u2014 4 locations</h3>
          <p style="font-size:15px">A physiotherapy, massage and reformer Pilates group across Manchester, Leeds and Sheffield. Diaries, rotas and finance lived in separate exports, so utilisation and no-shows were hard to see until long after the week had passed.</p>
          <div class="case-meta"><span>4 locations</span><span>Physio \u00b7 Massage \u00b7 Pilates</span><span>~165 invoices / month</span></div>
          <div class="results">
            <div class="result"><label>Weekly reporting</label><span class="ba-label">Before</span><span class="before">9 hours</span><span class="ba-label">After</span><span class="after-val">50 mins</span><small>One view, every Monday</small></div>
            <div class="result"><label>Utilisation</label><span class="ba-label">Before</span><span class="before">61%</span><span class="ba-label">After</span><span class="after-val">73%</span><small>By site &amp; practitioner</small></div>
            <div class="result"><label>No-shows</label><span class="ba-label">Before</span><span class="before">13.8%</span><span class="ba-label">After</span><span class="after-val">8.4%</span><small>Spotted &amp; acted on weekly</small></div>
            <div class="result"><label>Invoices to check</label><span class="ba-label">Before</span><span class="before">~165 by hand</span><span class="ba-label">After</span><span class="after-val">~8 flagged</span><small>Exceptions list only</small></div>
          </div>
          <p style="font-size:14.5px">After: appointments, staffing and costs in one weekly report \u2014 diary, rota and finance exports refreshed together, with demand and staffing forecasts the team can audit.</p>
        </article>`
  return (
    <div className="home-moved">
      <Block
        html={`<div id="cases"><div class="wrap"><div class="sec-head">
        <h2 id="cases-h">${heading}</h2>
        <p>${intro}</p>
      </div>${caseHtml}</div></div>`}
      />
    </div>
  )
}
