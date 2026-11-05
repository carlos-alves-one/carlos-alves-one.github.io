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
    description: 'Find where your team\'s hours actually go each week. Streamline month-end, stock counts, and site reporting across multiple locations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="eyebrow">Services</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How I Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
              <service.icon className="text-blue-600 text-6xl mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <p className="text-xl text-gray-900 mb-4 font-semibold">
            Every engagement starts with a <span className="text-blue-600">free 30-minute Spreadsheet Audit</span>
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Show me one weekly report, and I&apos;ll walk you through 2-3 quick wins on the call. 
            No new platform. No monthly subscription. Just practical improvements to the tools you already use.
          </p>
        </div>
      </div>
    </section>
  )
}
