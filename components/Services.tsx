import { FaTable, FaRobot, FaChartBar, FaClipboardList, FaCog, FaFileInvoiceDollar } from 'react-icons/fa'

const services = [
  {
    icon: FaTable,
    title: 'Spreadsheet Automation',
    description: 'Eliminate manual data entry from your weekly reports. Connect your till exports, invoices, and stock counts into one automated workflow.',
  },
  {
    icon: FaChartBar,
    title: 'Data Reporting',
    description: 'Transform scattered data into actionable insights. Weekly sales vs. labour, margin analysis, and KPI dashboards that update automatically.',
  },
  {
    icon: FaClipboardList,
    title: 'Forecasting & Planning',
    description: 'Build demand forecasts your team can explain and trust. Weather-aware prep planning and ordering automation tailored to your operation.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Invoice Processing',
    description: 'Turn supplier invoice photos into structured data. AI reads every line item and feeds your stocktake spreadsheet automatically.',
  },
  {
    icon: FaRobot,
    title: 'AI Integration',
    description: 'Careful AI implementation for back-office tasks: cash reconciliation, menu pricing, schedule drafting. Run alongside your existing process first.',
  },
  {
    icon: FaCog,
    title: 'Process Optimization',
    description: 'Find where your team\'s hours actually go each week. Streamline month-end, stock counts, and site reporting across multiple locations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How I Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical solutions for hospitality and catering operations. Built inside the spreadsheets 
            you already use, not a new platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <service.icon className="text-primary-600 text-5xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Every engagement starts with a <strong>free 30-minute Spreadsheet Audit</strong>
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Show me one weekly report, and I'll walk you through 2-3 quick wins on the call. 
            No new platform. No monthly subscription. Just practical improvements to the tools you already use.
          </p>
        </div>
      </div>
    </section>
  )
}
