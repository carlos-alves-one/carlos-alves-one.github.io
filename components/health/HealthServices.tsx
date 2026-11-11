'use client'

import { useEffect, useState } from 'react'
import { FaTable, FaChartBar, FaCalendarCheck, FaFileInvoiceDollar, FaRobot, FaSlidersH, FaCheck, FaChevronDown } from 'react-icons/fa'

const allServices = [
  {
    icon: FaTable,
    category: 'Core',
    featured: true,
    title: 'Reporting automation',
    description: 'Eliminate manual data entry from your weekly reports. Connect booking exports, invoices and rota files into one automated workflow.',
    highlights: [
      'Weekly activity, labour and cost reports refreshed without retyping',
      'One view of spend, appointments and staffing across sites or rooms',
      'Zero new software to buy — built in Excel or Google Sheets',
    ],
  },
  {
    icon: FaChartBar,
    category: 'Insight',
    featured: true,
    title: 'Business dashboards',
    description: 'Transform scattered data into clear weekly views: appointments versus labour, margin and utilisation dashboards that update from your exports.',
    highlights: [
      'Site-by-site or practitioner-by-practitioner performance',
      'Cost and revenue lines side by side',
      'Shareable summaries for owners, practice managers and finance leads',
    ],
  },
  {
    icon: FaCalendarCheck,
    category: 'Planning',
    featured: true,
    title: 'Forecasting & planning',
    description: 'Simple demand and staffing forecasts your managers can follow and check — based on bookings, seasonality and your historical mix.',
    highlights: [
      'Line-level planning recommendations you can audit',
      'Fewer last-minute rota and supply scrambles',
      'Transparent logic anyone on the team can review',
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    category: 'Control',
    featured: false,
    title: 'Invoice processing',
    description: 'Supplier and contractor invoices checked against orders and deliveries so price changes, short shipments and duplicate charges are caught before payment.',
    highlights: [
      'Line-item price and quantity variance checks',
      'Month-end reconciliation without the usual copy-paste scramble',
      'See what a walkthrough covers below',
    ],
  },
  {
    icon: FaRobot,
    category: 'AI',
    featured: false,
    title: 'Data & AI reviews',
    description: 'Careful, practical AI for back-office reporting tasks — run alongside your existing process first. Not a substitute for clinical judgement.',
    highlights: [
      'Plain-language risk assessment for each reporting use-case',
      'Pilot on low-risk admin tasks before any wider rollout',
      'Human-in-the-loop by design, GDPR-conscious',
    ],
  },
  {
    icon: FaSlidersH,
    category: 'Efficiency',
    featured: false,
    title: 'Process optimisation',
    description: 'Find where your team’s hours actually go each week. Streamline month-end, stock or supplies counts and reporting across locations.',
    highlights: [
      'Time-based audit of weekly reporting work',
      'Elimination of copy-paste handoffs between systems',
      'Written standard operating notes you can keep',
    ],
  },
]

export default function HealthServices() {
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#services') setShowAll(true)
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  const visible = showAll ? allServices : allServices.filter((s) => s.featured)

  return (
    <section id="services" className="py-20 px-6 sm:px-10 lg:px-16 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-heading">How I help</h2>
          <p className="section-intro mx-auto">
            Practical reporting solutions for UK health and wellness operators. Built inside the spreadsheets you already use — never a new platform, never a subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {visible.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-7 border border-gray-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center">
                    <s.icon className="text-accent-500 text-xl" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-600 bg-accent-50 px-2.5 py-1 rounded-md font-semibold">
                    {s.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2 text-xs text-gray-500">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheck className="text-accent-500 text-xs mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline px-4 py-2"
            aria-expanded={showAll}
          >
            <span>{showAll ? 'Show fewer services' : 'Show all services (Invoice processing, Data & AI reviews, Process optimisation)'}</span>
            <FaChevronDown className={`text-xs transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="mt-14 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 sm:p-10 text-white text-center shadow-xl">
          <p className="text-accent-400 font-mono text-xs tracking-wider uppercase mb-2">No cost · No obligation</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
            Every engagement starts with a free 30-minute Weekly-Report Walkthrough
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Show me one weekly report, and I will walk you through a few quick wins on the call. No new platform. No monthly subscription. Just practical improvements to the tools you already use.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://calendar.app.google/C1hnZvX1jpWYd2bv6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-sm"
            >
              Book the free walkthrough →
            </a>
            <a
              href="mailto:carlos.alves.one@gmail.com?subject=Question%20about%20a%20weekly%20report"
              className="px-6 py-3 rounded-lg border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Or email me first
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
