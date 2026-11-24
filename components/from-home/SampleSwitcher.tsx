'use client'

import { useState } from 'react'

const hospBody = `<p class="dash-title">Weekly operations summary — Week 44</p><div class="big">£24,850</div><p class="big-sub">+11.2% vs budget · sales on track</p><div class="kpis"><div class="kpi"><label>Labour cost %</label><b>31.2%</b><small>Target ≤ 32.5% — on target</small></div><div class="kpi"><label>Bev. gross margin</label><b>68.4%</b><small>+1.6 pts week on week</small></div><div class="kpi"><label>Invoice exceptions</label><b>2 flagged</b><small>£420 to review this week</small></div></div><div class="chart"><h4>WEEKLY SALES TREND (LAST 8 WEEKS) — SAMPLE</h4><div class="bars"><div class="bar" style="height:52%"></div><div class="bar" style="height:58%"></div><div class="bar" style="height:55%"></div><div class="bar" style="height:64%"></div><div class="bar" style="height:70%"></div><div class="bar" style="height:68%"></div><div class="bar" style="height:78%"></div><div class="bar last" style="height:88%"></div></div><div class="barlabels"><span>W37</span><span>W38</span><span>W39</span><span>W40</span><span>W41</span><span>W42</span><span>W43</span><span>W44</span></div></div><table><thead><tr><th>Cost centre</th><th class="num">Sales</th><th class="num">Labour %</th><th>Status</th></tr></thead><tbody><tr><td>Kitchen &amp; Dining room</td><td class="num">£15,400</td><td class="num">31.5%</td><td><span class="status">On target</span></td></tr><tr><td>Rooftop Bar (6 bars total)</td><td class="num">£7,100</td><td class="num">28.9%</td><td><span class="status">On target</span></td></tr><tr><td>Private events space</td><td class="num">£2,350</td><td class="num">36.2%</td><td><span class="status review">Review roster</span></td></tr></tbody></table><p style="margin-top:12px;font-size:13px;color:var(--muted)">Refreshed in under one minute every Monday from till CSV + rota exports — zero copying. Delivered as a spreadsheet you own.</p>`
const healthBody = `<p class="dash-title">Weekly operations summary — appointments · staffing · revenue</p><div class="big">One view</div><p class="big-sub">Refreshed from your own exports — no retyping</p><div class="kpis"><div class="kpi"><label>Bookings filled</label><b>From diary</b><small>Appointment &amp; attendance figures from your diary export</small></div><div class="kpi"><label>Staff hours</label><b>From rota</b><small>Labour hours against the week's plan</small></div><div class="kpi"><label>Income &amp; costs</label><b>From finance</b><small>Income and cost lines side by side</small></div></div><div class="chart"><h4>WHAT THE SHEET PULLS TOGETHER</h4><div class="bars"><div class="bar" style="height:60%"></div><div class="bar" style="height:66%"></div><div class="bar" style="height:62%"></div><div class="bar" style="height:72%"></div><div class="bar" style="height:76%"></div><div class="bar" style="height:74%"></div><div class="bar" style="height:82%"></div><div class="bar last" style="height:90%"></div></div><div class="barlabels"><span>Diary</span><span>Rota</span><span>Billing</span><span>Invoices</span><span>Costs</span><span>Staffing</span><span>Revenue</span><span>One sheet</span></div></div><table><thead><tr><th>View</th><th>What you see</th></tr></thead><tbody><tr><td>By site or room</td><td>Appointments vs labour, side by side</td></tr><tr><td>By practitioner</td><td>Activity and utilisation per person</td></tr><tr><td>For the owner</td><td>A shareable one-page summary for managers &amp; finance</td></tr></tbody></table><p style="margin-top:12px;font-size:13px;color:var(--muted)">The aim: a single spreadsheet you own that refreshes from those exports — so costs, appointments, staffing and revenue sit in one place.</p>`

export function SampleSwitcher({ sector }: { sector: "hosp" | "health" }) {
  const [active, setActive] = useState<"hosp" | "health">(sector)
  return (
    <div className="wrap">
      <div className="dash" aria-label="Sample weekly report">
        <div className="dash-top">
          <span className="file" hidden={active !== "hosp"}>weekly-kpi-w44.xlsx</span>
          <span className="file" hidden={active !== "health"}>weekly-ops-summary.xlsx</span>
          <span className="pill">AUTO-REFRESHED</span>
          <div className="tabs" role="tablist" aria-label="Choose sector sample">
            <button className="tab" role="tab" type="button" id="sample-tab-hosp" aria-selected={active === "hosp"} aria-controls="sample-panel-hosp" onClick={() => setActive("hosp")}>Hospitality</button>
            <button className="tab" role="tab" type="button" id="sample-tab-health" aria-selected={active === "health"} aria-controls="sample-panel-health" onClick={() => setActive("health")}>Health & Wellness</button>
          </div>
        </div>
        <div role="tabpanel" id="sample-panel-hosp" aria-labelledby="sample-tab-hosp" hidden={active !== "hosp"}>
          <div className="dash-body" dangerouslySetInnerHTML={{ __html: hospBody }} />
          <div className="dash-foot"><span>Till + rota + invoice exports → one spreadsheet</span><span>Sample illustration · dummy data · Excel / Google Sheets</span></div>
        </div>
        <div role="tabpanel" id="sample-panel-health" aria-labelledby="sample-tab-health" hidden={active !== "health"}>
          <div className="dash-body" dangerouslySetInnerHTML={{ __html: healthBody }} />
          <div className="dash-foot"><span>Booking + rota + finance exports → one spreadsheet</span><span>Sample illustration · dummy data · Excel / Google Sheets</span></div>
        </div>
      </div>
    </div>
  )
}
