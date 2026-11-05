import { FaChartBar, FaTable, FaBrain } from 'react-icons/fa'

const services = [
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

export default function Services() {
  return (
    <section id="services" className="py-20 px-8 sm:px-12 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <service.icon className="text-accent-500 text-4xl mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
