'use client'

import { FaChartLine, FaCheckCircle, FaBrain, FaClock } from 'react-icons/fa'

const BOOKING_URL = 'https://calendar.app.google/C1hnZvX1jpWYd2bv6'

export default function HealthHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-16 bg-white overflow-hidden">
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
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-xs font-semibold text-accent-700 font-mono tracking-wide">
              <span>REPORTING</span>
              <span className="text-gray-400">·</span>
              <span>DASHBOARDS</span>
              <span className="text-gray-400">·</span>
              <span>AUTOMATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-2xl leading-[1.08] text-balance">
              <span className="text-navy-900">Costs, appointments and staffing in one weekly report. </span>
              <span className="text-accent-500">No retyping.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              I help UK private clinics and dental practices, gyms and fitness studios, care homes and home care teams, and wellness coaches and therapists replace retyped weekly reports with spreadsheets that refresh from their own booking, rota and finance exports. No new platform, no subscription.
            </p>

            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm sm:text-base whitespace-nowrap text-center"
                >
                  Book a free walkthrough →
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

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 rounded-2xl p-5 sm:p-6 text-white shadow-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-[11px] text-slate-300">weekly-ops-summary.xlsx</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">AUTO-REFRESHED</span>
              </div>

              <div className="pt-4 space-y-4">
                <div>
                  <div className="text-[11px] text-accent-300 uppercase tracking-wider font-semibold">Weekly operations summary</div>
                  <div className="text-xl font-extrabold mt-1">Appointments · staffing · revenue</div>
                  <div className="text-xs text-slate-300 mt-1">One view refreshed from your own exports</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/60">
                    <div className="text-slate-400 text-[10px]">Bookings filled</div>
                    <div className="text-sm font-bold mt-1 text-slate-100">From diary export</div>
                  </div>
                  <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/60">
                    <div className="text-slate-400 text-[10px]">Staff hours</div>
                    <div className="text-sm font-bold mt-1 text-slate-100">From rota export</div>
                  </div>
                </div>

                <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                  <div className="text-[10px] text-slate-400 font-mono mb-2">WHAT THE SHEET PULLS TOGETHER</div>
                  <ul className="space-y-1.5 text-[11px] text-slate-300">
                    <li>Appointment and attendance figures</li>
                    <li>Labour hours against the week&apos;s plan</li>
                    <li>Income and cost lines from finance exports</li>
                  </ul>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
                  <span>Booking + rota + invoice exports</span>
                  <span className="text-accent-300">→ one spreadsheet</span>
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] text-gray-500 mt-3 font-mono">
              Sample illustration · built on Excel / Google Sheets
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-accent-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <FaChartLine className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">Operations-aware</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Built for teams who already chase numbers across booking systems, rotas and spreadsheets every week.
            </p>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-accent-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <FaBrain className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">MSc Qualified</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Data Science &amp; AI (Distinction), Goldsmiths — rigorous technical training applied to reporting and data workflows.
            </p>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-accent-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <FaCheckCircle className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">Reporting focus</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              I work on how your weekly numbers are gathered and shown — not clinical advice, treatment decisions or regulatory certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
