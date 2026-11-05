import { FaChartBar, FaTable, FaBrain, FaRobot, FaClipboardList, FaCog, FaFileInvoiceDollar } from 'react-icons/fa'

const featuredServices = [
  {
    icon: FaTable,
    title: 'Reporting automation',
    description: 'Eliminate manual data entry from your weekly reports. Connect your till exports, invoices, and stock counts into one automated workflow.',
  },
  {
    icon: FaChartBar,
    title: 'Business dashboards',
    description: 'Transform scattered data into actionable insights. Weekly sales vs. labour, margin analysis, and KPI dashboards that update automatically.',
  },
  {
    icon: FaBrain,
    title: 'Data and AI reviews',
    description: 'Practical AI implementation for back-office tasks: cash reconciliation, menu pricing, schedule drafting. Run alongside your existing process first.',
  },
]

const allServices = [
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
    <section id="services" className="py-20 px-8 sm:px-12 lg:px-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-eyebrow">
            Services
          </p>
          <h2 className="section-heading">
            How I Help
          </h2>
          <p className="section-intro mx-auto">
            Practical solutions for hospitality and catering operations. Built inside the spreadsheets 
            you already use, not a new platform.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-100 hover:border-accent-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-accent-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-accent-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent-50 p-8 rounded-xl border border-accent-200 shadow-sm">
          <p className="text-xl text-navy-900 mb-4 font-semibold text-center">
            Every engagement starts with a <span className="text-accent-600">free 30-minute Spreadsheet Audit</span>
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto text-base leading-relaxed text-center">
            Show me one weekly report, and I&apos;ll walk you through 2-3 quick wins on the call. 
            No new platform. No monthly subscription. Just practical improvements to the tools you already use.
          </p>
        </div>
      </div>
    </section>
  )
}
