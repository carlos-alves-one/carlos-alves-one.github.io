import { FaTable, FaChartBar, FaClipboardList, FaFileInvoiceDollar, FaRobot, FaCog, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa'

const services = [
  {
    icon: FaTable,
    category: 'Core',
    title: 'Reporting automation',
    description: 'Eliminate manual data entry from your weekly reports. Connect your till exports, invoices and stock counts into one automated workflow.',
    includes: [
      'Weekly sales, labour and cost reports refreshed in seconds',
      'One view of spend, orders and stock across sites or events',
      'Zero new software to buy — built in Excel or Google Sheets',
    ],
  },
  {
    icon: FaChartBar,
    category: 'Insight',
    title: 'Business dashboards',
    description: 'Transform scattered data into actionable insights: weekly sales vs labour, margin analysis and KPI dashboards that update automatically.',
    includes: [
      'Site-by-site and event-by-event performance',
      'Beverage and food gross margin tracking',
      'Shareable summaries for owners, operations and finance leads',
    ],
  },
  {
    icon: FaClipboardList,
    category: 'Planning',
    title: 'Forecasting & planning',
    description: 'Simple ordering forecasts your chef can follow and check — based on bookings, weather and your historical sales mix.',
    includes: [
      'Line-level order recommendations',
      'Fewer emergency supplier runs and less waste',
      'Transparent logic anyone can audit',
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    category: 'Control',
    title: 'Invoice processing',
    description: 'Supplier invoices checked against purchase orders and deliveries so price changes, short shipments and duplicate charges are caught before payment.',
    includes: [
      'Line-item price and quantity variance checks',
      'Month-end reconciliation in minutes, not hours',
      'See the sample demonstration below',
    ],
  },
  {
    icon: FaRobot,
    category: 'AI',
    title: 'Data & AI reviews',
    description: 'Careful, practical AI for back-office tasks: cash reconciliation, menu pricing and schedule drafting — run alongside your existing process first.',
    includes: [
      'Plain-language risk assessment for each use-case',
      'Pilot on low-risk tasks before any rollout',
      'Human-in-the-loop by design, GDPR-conscious',
    ],
  },
  {
    icon: FaCog,
    category: 'Efficiency',
    title: 'Process optimisation',
    description: 'Find where your team’s hours actually go each week. Streamline month-end, stock counts and reporting across multiple locations.',
    includes: [
      'Time-based audit of weekly reporting work',
      'Elimination of copy-paste handoffs between systems',
      'Written standard operating notes you can keep',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 sm:px-10 lg:px-16 bg-gray-50 border-t border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-heading">How I help</h2>
          <p className="section-intro mx-auto">
            Practical solutions for UK catering and hospitality operations. Built inside the spreadsheets you already use — never a new platform, never a subscription.
          </p>
        </div>

        {/* 6 unified service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {services.map((s, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:border-accent-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center">
                    <s.icon className="text-accent-500 text-xl" />
                  </div>
                  <span className="text-[11px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-gray-100 text-gray-700">
                    {s.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2 text-xs text-gray-600 mb-4 border-t border-gray-100 pt-4">
                  {s.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent-500 text-xs mt-0.5 flex-shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Free audit callout */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
              No cost · No obligation
            </span>
            <p className="text-2xl sm:text-3xl text-navy-900 font-extrabold mb-3">
              Every engagement starts with a free 30-minute Spreadsheet Audit
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Show me one weekly report, and I’ll walk you through 2–3 quick wins on the call. No new platform. No monthly subscription. Just practical improvements to the tools you already use.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href="https://calendar.app.google/C1hnZvX1jpWYd2bv6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm sm:text-base text-center whitespace-nowrap"
            >
              Book the free audit →
            </a>
            <a
              href="mailto:carlos.alves.one@gmail.com"
              className="btn-secondary text-sm sm:text-base text-center whitespace-nowrap"
            >
              Or email me first
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
