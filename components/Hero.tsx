'use client'

import { FaChartLine, FaCheckCircle, FaBrain, FaClock } from 'react-icons/fa'

const BOOKING_URL = 'https://calendar.app.google/C1hnZvX1jpWYd2bv6'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-16 bg-white overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(16,42,67,0.06) 1px, transparent 1px),
            linear-gradient(to right, rgba(16,42,67,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          {/* Left copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-xs font-semibold text-accent-700 font-mono tracking-wide">
              <span>REPORTING</span>
              <span className="text-gray-400">·</span>
              <span>DASHBOARDS</span>
              <span className="text-gray-400">·</span>
              <span>AUTOMATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-2xl leading-[1.08] text-balance">
              <span className="text-navy-900">Costs, orders and sales in one weekly report. </span>
              <span className="text-accent-500">No retyping.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              I help UK catering and hospitality owners, operations leads and finance leads replace retyped weekly reports with spreadsheets that refresh from their own till, ordering and invoice exports. No new platform, no subscription.
            </p>

            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm sm:text-base whitespace-nowrap text-center"
                >
                  Book a discovery call →
                </a>
                <button
                  onClick={() => scrollToSection('services')}
                  className="btn-secondary text-sm sm:text-base whitespace-nowrap"
                >
                  Explore services
                </button>
              </div>

              <div className="mt-5 inline-flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 max-w-xl bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5">
                <FaClock className="text-accent-500 mt-1 flex-shrink-0" />
                <span>
                  Appointments Mondays &amp; Fridays, 3–6pm. For another time, please{' '}
                  <a
                    href="mailto:carlos.alves.one@gmail.com"
                    className="text-accent-600 hover:text-accent-700 underline font-semibold"
                  >
                    email me
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>

          {/* Right visual: live-feeling report preview card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 rounded-2xl p-5 sm:p-6 text-white shadow-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-[11px] text-slate-300">weekly-kpi-w44.xlsx</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">AUTO-REFRESHED</span>
              </div>

              <div className="pt-4 space-y-4">
                <div>
                  <div className="text-[11px] text-accent-300 uppercase tracking-wider font-semibold">Weekly operations summary</div>
                  <div className="text-3xl font-extrabold mt-0.5">£24,850</div>
                  <div className="text-xs text-emerald-400 font-semibold">+11.2% vs budget · sales on track</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/60">
                    <div className="text-slate-400 text-[10px]">Labour cost %</div>
                    <div className="text-xl font-bold mt-0.5">31.2%</div>
                    <div className="text-[10px] text-emerald-400">target ≤32.5%</div>
                  </div>
                  <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/60">
                    <div className="text-slate-400 text-[10px]">Bev. margin</div>
                    <div className="text-xl font-bold mt-0.5">68.4%</div>
                    <div className="text-[10px] text-emerald-400">+1.6 pts WoW</div>
                  </div>
                </div>

                {/* mini trend bars */}
                <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                  <div className="text-[10px] text-slate-400 font-mono mb-2">WEEKLY SALES TREND (LAST 8 WEEKS)</div>
                  <div className="flex items-end gap-1.5 h-14">
                    {[45, 52, 60, 55, 68, 72, 79, 90].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className={`w-full rounded ${i === 7 ? 'bg-accent-400' : 'bg-slate-700'}`}
                          style={{ height: `${h}%` }}
                        />
                        <span className="text-[8px] font-mono text-slate-500">W{37 + i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
                  <span>Till + rota + invoice exports</span>
                  <span className="text-accent-300">→ one spreadsheet</span>
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] text-gray-500 mt-3 font-mono">
              Sample illustration · built on Excel / Google Sheets
            </p>
          </div>
        </div>

        {/* 3 credibility stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-accent-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <FaChartLine className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">5 years</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Beverage purchasing at Aqua Restaurant Group, London — two restaurants and six bars, £100k of stock a month.
            </p>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-accent-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <FaBrain className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">MSc Qualified</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Data Science &amp; AI (Distinction), Goldsmiths — five years of rigorous technical training.
            </p>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-accent-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <FaCheckCircle className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">Demos on sample data</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Interactive demonstrations on this page use clearly labelled dummy data to protect client confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
