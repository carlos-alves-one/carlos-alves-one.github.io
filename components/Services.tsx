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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
            >
              <service.icon className="text-accent-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
