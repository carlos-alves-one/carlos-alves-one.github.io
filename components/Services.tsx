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
    description: 'Weekly sales, labour and cost reports that refresh when you drop in the week\'s exports.',
  },
  {
    icon: FaClipboardList,
    title: 'Forecasting & Planning',
    description: 'Simple ordering forecasts your chef can follow and check.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Invoice Processing',
    description: 'Supplier invoices checked against orders. See the invoice-to-stocktake demonstration on sample data (not a client project).',
  },
  {
    icon: FaRobot,
    title: 'AI Integration',
    description: 'Careful AI implementation for back-office tasks: cash reconciliation, menu pricing, schedule drafting. Run alongside your existing process first.',
  },
  {
    icon: FaCog,
    title: 'Process Optimization',
    description: 'Find where your team&apos;s hours actually go each week. Streamline month-end, stock counts, and site reporting across multiple locations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-900 to-navy-800 relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-beige-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How I <span className="gradient-text">Help</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Practical solutions for hospitality and catering operations. Built inside the spreadsheets 
            you already use, not a new platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group"
            >
              <service.icon className="text-orange-500 text-6xl mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-navy-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20">
          <p className="text-xl text-white mb-4 font-semibold">
            Every engagement starts with a <span className="text-orange-400">free 30-minute Spreadsheet Audit</span>
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
            Show me one weekly report, and I&apos;ll walk you through 2-3 quick wins on the call. 
            No new platform. No monthly subscription. Just practical improvements to the tools you already use.
          </p>
        </div>
      </div>
    </section>
  )
}
