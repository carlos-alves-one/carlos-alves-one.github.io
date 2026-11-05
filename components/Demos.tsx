'use client'

import { useState } from 'react'
import { FaFileInvoiceDollar, FaUtensils, FaCheckCircle, FaExclamationTriangle, FaChartLine } from 'react-icons/fa'

type DemoTab = 'dashboard' | 'invoices' | 'forecast'

export default function Demos() {
  const [activeTab, setActiveTab] = useState<DemoTab>('dashboard')

  return (
    <section id="demos" className="py-14 px-6 sm:px-10 lg:px-16 bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-eyebrow">Sample work</p>
          <h2 className="section-heading">See what the reports look like</h2>
          <p className="section-intro mx-auto text-sm">
            Demonstrations built on anonymised sample data — click a tab to see what each report looks like inside a real spreadsheet.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-6" role="tablist" aria-label="Demo report selector">
          <button
            role="tab"
            aria-selected={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaChartLine className={activeTab === 'dashboard' ? 'text-accent-300' : 'text-accent-500'} />
            Sales vs Labour
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'invoices'}
            onClick={() => setActiveTab('invoices')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'invoices'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaFileInvoiceDollar className={activeTab === 'invoices' ? 'text-accent-300' : 'text-accent-500'} />
            Invoice Check
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'forecast'}
            onClick={() => setActiveTab('forecast')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'forecast'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaUtensils className={activeTab === 'forecast' ? 'text-accent-300' : 'text-accent-500'} />
            Ordering Forecast
          </button>
        </div>

        {/* Demo container */}
        <div className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 rounded-2xl p-4 sm:p-7 shadow-xl text-white border border-slate-800">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] text-slate-300 truncate">
                {activeTab === 'dashboard' && 'weekly-kpi-dashboard-2026-w44.xlsx'}
                {activeTab === 'invoices' && 'supplier-reconciliation-stocktake.xlsx'}
                {activeTab === 'forecast' && 'kitchen-ordering-forecast.xlsx'}
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-[11px] text-accent-300">
              auto-refreshed from till &amp; invoice exports
            </span>
          </div>

          {activeTab === 'dashboard' && (
            <div className="pt-5 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
                <span className="font-semibold uppercase tracking-wider text-accent-300">Riverside Restaurant · 6 bars · 2 kitchens</span>
                <span className="font-mono text-slate-400">Updated: Monday 07:05 (hands-free)</span>
              </div>
              <div className="text-lg sm:text-xl font-bold">Week 44 — Summary vs Budget</div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60">
                  <div className="text-[11px] text-slate-400">Weekly sales</div>
                  <div className="text-xl sm:text-2xl font-extrabold mt-1">£24,850</div>
                  <div className="text-[11px] text-emerald-400 mt-1 font-semibold">+11.2% vs budget</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60">
                  <div className="text-[11px] text-slate-400">Labour cost %</div>
                  <div className="text-xl sm:text-2xl font-extrabold mt-1">31.2%</div>
                  <div className="text-[11px] text-emerald-400 mt-1 font-semibold">target: ≤32.5%</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60">
                  <div className="text-[11px] text-slate-400">Bev. gross margin</div>
                  <div className="text-xl sm:text-2xl font-extrabold mt-1">68.4%</div>
                  <div className="text-[11px] text-emerald-400 mt-1 font-semibold">+1.6 pts WoW</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60">
                  <div className="text-[11px] text-slate-400">Invoice exceptions</div>
                  <div className="text-xl sm:text-2xl font-extrabold mt-1 text-amber-300">2 flagged</div>
                  <div className="text-[11px] text-amber-300 mt-1 font-semibold">£420 to review</div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-800/70 text-slate-400 text-[10px] uppercase tracking-wider font-mono">
                    <tr>
                      <th className="py-2.5 px-3">Cost centre</th>
                      <th className="py-2.5 px-3 text-right">Sales</th>
                      <th className="py-2.5 px-3 text-right">Labour £</th>
                      <th className="py-2.5 px-3 text-right">Labour %</th>
                      <th className="py-2.5 px-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono">
                    {[
                      { name: 'Kitchen & Dining room', sales: '£15,400', labour: '£4,850', pct: '31.5%', ok: true },
                      { name: 'Rooftop Bar (6 bars total)', sales: '£7,100', labour: '£2,050', pct: '28.9%', ok: true },
                      { name: 'Private events space', sales: '£2,350', labour: '£850', pct: '36.2%', ok: false },
                    ].map((row) => (
                      <tr key={row.name} className="hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 font-sans font-medium text-slate-200">{row.name}</td>
                        <td className="py-2.5 px-3 text-right text-slate-300">{row.sales}</td>
                        <td className="py-2.5 px-3 text-right text-slate-300">{row.labour}</td>
                        <td className="py-2.5 px-3 text-right text-slate-200 font-bold">{row.pct}</td>
                        <td className="py-2.5 px-3 text-right font-sans">
                          {row.ok ? (
                            <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px] font-semibold">
                              <FaCheckCircle className="text-[10px]" /> On target
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-amber-300 text-[11px] font-semibold">
                              <FaExclamationTriangle className="text-[10px]" /> Review roster
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                Refreshed under one minute every Monday from till CSV + rota exports — zero copying.
              </p>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className="pt-5 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-300">Supplier invoice check vs purchase orders</div>
              <div className="text-lg sm:text-xl font-bold">Month-end beverage reconciliation</div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-800/70 text-slate-400 text-[10px] uppercase tracking-wider">
                    <tr>
                      <th className="py-2.5 px-2.5">Invoice #</th>
                      <th className="py-2.5 px-2.5 font-sans">Supplier</th>
                      <th className="py-2.5 px-2.5 text-right">PO</th>
                      <th className="py-2.5 px-2.5 text-right">Invoice</th>
                      <th className="py-2.5 px-2.5 text-right">Variance</th>
                      <th className="py-2.5 px-2.5 text-right font-sans">Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-2.5 text-slate-400">INV-84210</td>
                      <td className="py-2.5 px-2.5 font-sans font-medium text-slate-200">Wine &amp; Spirits Co.</td>
                      <td className="py-2.5 px-2.5 text-right">£8,420</td>
                      <td className="py-2.5 px-2.5 text-right">£8,420</td>
                      <td className="py-2.5 px-2.5 text-right text-emerald-400">£0</td>
                      <td className="py-2.5 px-2.5 text-right font-sans"><span className="text-emerald-400 text-[11px] font-semibold">Matched</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40 bg-amber-950/20">
                      <td className="py-2.5 px-2.5 text-slate-400">INV-84227</td>
                      <td className="py-2.5 px-2.5 font-sans font-medium text-slate-200">Craft Brewery Ltd</td>
                      <td className="py-2.5 px-2.5 text-right">£3,150</td>
                      <td className="py-2.5 px-2.5 text-right text-amber-300 font-bold">£3,410</td>
                      <td className="py-2.5 px-2.5 text-right text-amber-300 font-bold">+£260</td>
                      <td className="py-2.5 px-2.5 text-right font-sans"><span className="text-amber-300 text-[11px] font-semibold">Price change flagged</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-2.5 text-slate-400">INV-84234</td>
                      <td className="py-2.5 px-2.5 font-sans font-medium text-slate-200">Fresh Produce Direct</td>
                      <td className="py-2.5 px-2.5 text-right">£1,890</td>
                      <td className="py-2.5 px-2.5 text-right">£1,890</td>
                      <td className="py-2.5 px-2.5 text-right text-emerald-400">£0</td>
                      <td className="py-2.5 px-2.5 text-right font-sans"><span className="text-emerald-400 text-[11px] font-semibold">Matched</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40 bg-red-950/20">
                      <td className="py-2.5 px-2.5 text-slate-400">INV-84249</td>
                      <td className="py-2.5 px-2.5 font-sans font-medium text-slate-200">Dairy &amp; Dry Goods</td>
                      <td className="py-2.5 px-2.5 text-right">£2,640</td>
                      <td className="py-2.5 px-2.5 text-right text-rose-300 font-bold">£2,800</td>
                      <td className="py-2.5 px-2.5 text-right text-rose-300 font-bold">+£160</td>
                      <td className="py-2.5 px-2.5 text-right font-sans"><span className="text-rose-300 text-[11px] font-semibold">Short delivery not credited</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
                <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700"><span className="text-emerald-400 font-bold">47</span> matched</div>
                <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700"><span className="text-amber-300 font-bold">£420</span> caught</div>
                <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700">~6 hrs saved</div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                Based on my Aqua Restaurant Group years: two restaurants, six bars, every invoice keyed by hand — the report I wished I had.
              </p>
            </div>
          )}

          {activeTab === 'forecast' && (
            <div className="pt-5 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-300">Kitchen &amp; bar prep planning</div>
              <div className="text-lg sm:text-xl font-bold">Ordering forecast your chef can actually follow</div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-800/70 text-slate-400 text-[10px] uppercase tracking-wider font-mono">
                    <tr>
                      <th className="py-2.5 px-3">Line item</th>
                      <th className="py-2.5 px-3 text-right">Avg use</th>
                      <th className="py-2.5 px-3 text-right">Forecast</th>
                      <th className="py-2.5 px-3 text-right">On hand</th>
                      <th className="py-2.5 px-3 text-right font-sans">Recommended order</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono text-slate-300">
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-sans font-medium text-slate-200">Draught lager (kegs)</td>
                      <td className="py-2.5 px-3 text-right">18</td>
                      <td className="py-2.5 px-3 text-right text-emerald-400 font-bold">22</td>
                      <td className="py-2.5 px-3 text-right">6</td>
                      <td className="py-2.5 px-3 text-right font-sans"><span className="px-1.5 py-0.5 rounded bg-accent-500/30 text-accent-200 font-bold text-[11px]">Order 16</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-sans font-medium text-slate-200">House gin 70cl</td>
                      <td className="py-2.5 px-3 text-right">12</td>
                      <td className="py-2.5 px-3 text-right">13</td>
                      <td className="py-2.5 px-3 text-right">11</td>
                      <td className="py-2.5 px-3 text-right font-sans"><span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[11px]">Sufficient</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-sans font-medium text-slate-200">Steak 220g (portions)</td>
                      <td className="py-2.5 px-3 text-right">95</td>
                      <td className="py-2.5 px-3 text-right text-emerald-400 font-bold">120</td>
                      <td className="py-2.5 px-3 text-right">25</td>
                      <td className="py-2.5 px-3 text-right font-sans"><span className="px-1.5 py-0.5 rounded bg-accent-500/30 text-accent-200 font-bold text-[11px]">Order 95</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700">Simple logic any head chef can audit</div>
                <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700">~70% fewer emergency supplier runs in month one</div>
              </div>
            </div>
          )}

          <div className="mt-6 pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-400">
            <span>Delivered as a spreadsheet you own — formulas unlocked, nothing rented.</span>
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
