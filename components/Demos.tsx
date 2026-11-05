'use client'

import { useState } from 'react'
import { FaTable, FaFileInvoiceDollar, FaUtensils, FaCheckCircle, FaExclamationTriangle, FaChartLine } from 'react-icons/fa'

type DemoTab = 'dashboard' | 'invoices' | 'forecast'

export default function Demos() {
  const [activeTab, setActiveTab] = useState<DemoTab>('dashboard')

  return (
    <section id="demos" className="py-20 px-6 sm:px-10 lg:px-16 bg-white border-t border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-eyebrow">Interactive sample work</p>
          <h2 className="section-heading">See what the reports look like</h2>
          <p className="section-intro mx-auto">
            These demonstrations run on anonymised sample data to protect client confidentiality. They show the kind of automated reporting and dashboards I build inside spreadsheets you already own.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
            <FaCheckCircle className="text-amber-600 text-sm" />
            Clearly labelled demonstrations on sample data, not client results
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Demo report selector">
          <button
            role="tab"
            aria-selected={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm sm:text-base font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaChartLine className={activeTab === 'dashboard' ? 'text-accent-300' : 'text-accent-500'} />
            Weekly Sales vs Labour Dashboard
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'invoices'}
            onClick={() => setActiveTab('invoices')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm sm:text-base font-semibold transition-all ${
              activeTab === 'invoices'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaFileInvoiceDollar className={activeTab === 'invoices' ? 'text-accent-300' : 'text-accent-500'} />
            Invoice-to-Stocktake Check
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'forecast'}
            onClick={() => setActiveTab('forecast')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm sm:text-base font-semibold transition-all ${
              activeTab === 'forecast'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaUtensils className={activeTab === 'forecast' ? 'text-accent-300' : 'text-accent-500'} />
            Chef&apos;s Ordering Forecast
          </button>
        </div>

        {/* Demo container */}
        <div className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 rounded-2xl p-4 sm:p-8 shadow-xl text-white border border-slate-800">
          {/* Window chrome */}
          <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-800 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block" />
              <span className="ml-3 font-mono text-[11px] sm:text-xs text-slate-300 truncate">
                {activeTab === 'dashboard' && 'weekly-kpi-dashboard-2026-w44.xlsx'}
                {activeTab === 'invoices' && 'supplier-reconciliation-stocktake.xlsx'}
                {activeTab === 'forecast' && 'kitchen-ordering-forecast.xlsx'}
              </span>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 font-mono text-[11px] text-accent-300">
              auto-refreshed from till &amp; invoice exports
            </span>
          </div>

          {/* TAB 1: Sales vs Labour Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="pt-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent-300">Site: Riverside Restaurant · 6 bars · 2 kitchens</div>
                  <div className="text-xl sm:text-2xl font-bold">Week 44 — Summary vs Budget</div>
                </div>
                <div className="text-xs font-mono text-slate-400">Updated: Monday 07:05 (hands-free)</div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                  <div className="text-xs text-slate-400">Weekly sales</div>
                  <div className="text-2xl sm:text-3xl font-extrabold mt-1">£24,850</div>
                  <div className="text-xs text-emerald-400 mt-1 font-semibold">+11.2% vs budget</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                  <div className="text-xs text-slate-400">Labour cost %</div>
                  <div className="text-2xl sm:text-3xl font-extrabold mt-1">31.2%</div>
                  <div className="text-xs text-emerald-400 mt-1 font-semibold">target: ≤32.5%</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                  <div className="text-xs text-slate-400">Beverage gross margin</div>
                  <div className="text-2xl sm:text-3xl font-extrabold mt-1">68.4%</div>
                  <div className="text-xs text-emerald-400 mt-1 font-semibold">+1.6 pts vs last week</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                  <div className="text-xs text-slate-400">Invoice exceptions</div>
                  <div className="text-2xl sm:text-3xl font-extrabold mt-1 text-amber-300">2 flagged</div>
                  <div className="text-xs text-amber-300 mt-1 font-semibold">£420 variance to review</div>
                </div>
              </div>

              {/* Bar comparison table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-800/70 text-slate-400 text-[11px] uppercase tracking-wider font-mono">
                    <tr>
                      <th className="py-3 px-4">Cost centre</th>
                      <th className="py-3 px-4 text-right">Sales</th>
                      <th className="py-3 px-4 text-right">Labour £</th>
                      <th className="py-3 px-4 text-right">Labour %</th>
                      <th className="py-3 px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono">
                    {[
                      { name: 'Kitchen & Dining room', sales: '£15,400', labour: '£4,850', pct: '31.5%', ok: true },
                      { name: 'Rooftop Bar (6 bars total)', sales: '£7,100', labour: '£2,050', pct: '28.9%', ok: true },
                      { name: 'Private events space', sales: '£2,350', labour: '£850', pct: '36.2%', ok: false },
                    ].map((row) => (
                      <tr key={row.name} className="hover:bg-slate-800/40">
                        <td className="py-3 px-4 font-sans font-medium text-slate-200">{row.name}</td>
                        <td className="py-3 px-4 text-right text-slate-300">{row.sales}</td>
                        <td className="py-3 px-4 text-right text-slate-300">{row.labour}</td>
                        <td className="py-3 px-4 text-right text-slate-200 font-bold">{row.pct}</td>
                        <td className="py-3 px-4 text-right font-sans">
                          {row.ok ? (
                            <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                              <FaCheckCircle className="text-[11px]" /> On target
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-amber-300 text-xs font-semibold">
                              <FaExclamationTriangle className="text-[11px]" /> Review roster
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-400 italic">
                Built from weekly till CSV exports + rota hours export, refreshed in under a minute each Monday morning with zero manual copying.
              </p>
            </div>
          )}

          {/* TAB 2: Invoice reconciliation */}
          {activeTab === 'invoices' && (
            <div className="pt-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent-300">Supplier invoice check vs purchase orders</div>
                  <div className="text-xl sm:text-2xl font-bold">Month-end beverage reconciliation</div>
                </div>
                <div className="text-xs font-mono text-slate-400">£100k/month purchasing volume pattern</div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
                <table className="w-full text-left text-xs sm:text-sm font-mono">
                  <thead className="bg-slate-800/70 text-slate-400 text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-3">Invoice #</th>
                      <th className="py-3 px-3 font-sans">Supplier</th>
                      <th className="py-3 px-3 text-right">PO amount</th>
                      <th className="py-3 px-3 text-right">Invoice</th>
                      <th className="py-3 px-3 text-right">Variance</th>
                      <th className="py-3 px-3 text-right font-sans">Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-3 px-3 text-slate-400">INV-84210</td>
                      <td className="py-3 px-3 font-sans font-medium text-slate-200">Wine &amp; Spirits Co.</td>
                      <td className="py-3 px-3 text-right">£8,420</td>
                      <td className="py-3 px-3 text-right">£8,420</td>
                      <td className="py-3 px-3 text-right text-emerald-400">£0</td>
                      <td className="py-3 px-3 text-right font-sans"><span className="text-emerald-400 text-xs font-semibold">Matched</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40 bg-amber-950/20">
                      <td className="py-3 px-3 text-slate-400">INV-84227</td>
                      <td className="py-3 px-3 font-sans font-medium text-slate-200">Craft Brewery Ltd</td>
                      <td className="py-3 px-3 text-right">£3,150</td>
                      <td className="py-3 px-3 text-right text-amber-300 font-bold">£3,410</td>
                      <td className="py-3 px-3 text-right text-amber-300 font-bold">+£260</td>
                      <td className="py-3 px-3 text-right font-sans"><span className="text-amber-300 text-xs font-semibold">Price change flagged</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-3 px-3 text-slate-400">INV-84234</td>
                      <td className="py-3 px-3 font-sans font-medium text-slate-200">Fresh Produce Direct</td>
                      <td className="py-3 px-3 text-right">£1,890</td>
                      <td className="py-3 px-3 text-right">£1,890</td>
                      <td className="py-3 px-3 text-right text-emerald-400">£0</td>
                      <td className="py-3 px-3 text-right font-sans"><span className="text-emerald-400 text-xs font-semibold">Matched</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40 bg-red-950/20">
                      <td className="py-3 px-3 text-slate-400">INV-84249</td>
                      <td className="py-3 px-3 font-sans font-medium text-slate-200">Dairy &amp; Dry Goods</td>
                      <td className="py-3 px-3 text-right">£2,640</td>
                      <td className="py-3 px-3 text-right text-rose-300 font-bold">£2,800</td>
                      <td className="py-3 px-3 text-right text-rose-300 font-bold">+£160</td>
                      <td className="py-3 px-3 text-right font-sans"><span className="text-rose-300 text-xs font-semibold">Short delivery not credited</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700"><span className="text-emerald-400 font-bold">47 invoices</span> matched automatically</div>
                <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700"><span className="text-amber-300 font-bold">£420</span> caught before payment</div>
                <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700">~6 hours saved per month vs manual entry</div>
              </div>

              <p className="text-xs text-slate-400 italic">
                In my Aqua Restaurant Group years I keyed in every invoice by hand across two restaurants and six bars — this is the report I wished I had.
              </p>
            </div>
          )}

          {/* TAB 3: Ordering forecast */}
          {activeTab === 'forecast' && (
            <div className="pt-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent-300">Kitchen &amp; bar prep planning</div>
                  <div className="text-xl sm:text-2xl font-bold">Ordering forecast your chef can actually follow</div>
                </div>
                <div className="text-xs font-mono text-slate-400">Inputs: bookings + weather + historical sales mix</div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-800/70 text-slate-400 text-[11px] uppercase tracking-wider font-mono">
                    <tr>
                      <th className="py-3 px-4">Line item</th>
                      <th className="py-3 px-4 text-right">Avg weekly usage</th>
                      <th className="py-3 px-4 text-right">Forecast (bookings)</th>
                      <th className="py-3 px-4 text-right">On hand</th>
                      <th className="py-3 px-4 text-right font-sans">Recommended order</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono text-slate-300">
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-3 px-4 font-sans font-medium text-slate-200">Draught lager (kegs)</td>
                      <td className="py-3 px-4 text-right">18</td>
                      <td className="py-3 px-4 text-right text-emerald-400 font-bold">22</td>
                      <td className="py-3 px-4 text-right">6</td>
                      <td className="py-3 px-4 text-right font-sans"><span className="px-2 py-1 rounded bg-accent-500/30 text-accent-200 font-bold">Order 16 kegs</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-3 px-4 font-sans font-medium text-slate-200">House gin 70cl</td>
                      <td className="py-3 px-4 text-right">12</td>
                      <td className="py-3 px-4 text-right">13</td>
                      <td className="py-3 px-4 text-right">11</td>
                      <td className="py-3 px-4 text-right font-sans"><span className="px-2 py-1 rounded bg-slate-800 text-slate-400">Sufficient stock</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-3 px-4 font-sans font-medium text-slate-200">Steak 220g (portions)</td>
                      <td className="py-3 px-4 text-right">95</td>
                      <td className="py-3 px-4 text-right text-emerald-400 font-bold">120</td>
                      <td className="py-3 px-4 text-right">25</td>
                      <td className="py-3 px-4 text-right font-sans"><span className="px-2 py-1 rounded bg-accent-500/30 text-accent-200 font-bold">Order 95 portions</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-3 px-4 font-sans font-medium text-slate-200">Cream 2L tubs</td>
                      <td className="py-3 px-4 text-right">8</td>
                      <td className="py-3 px-4 text-right">9</td>
                      <td className="py-3 px-4 text-right">2</td>
                      <td className="py-3 px-4 text-right font-sans"><span className="px-2 py-1 rounded bg-accent-500/30 text-accent-200 font-bold">Order 7 tubs</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700">Simple logic any head chef can audit — no black box, no hidden maths</div>
                <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700">Typically cuts emergency supplier runs by ~70% within the first month</div>
              </div>
            </div>
          )}

          {/* Footer note */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
            <span>Every report is delivered as a spreadsheet you own — with written handover notes, formulas unlocked, nothing rented.</span>
            <a
              href="https://calendar.app.google/C1hnZvX1jpWYd2bv6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-300 hover:text-white font-semibold underline"
            >
              Book the free audit to see this on your numbers →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
