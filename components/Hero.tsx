'use client'

import { FaChartLine, FaCheckCircle, FaBrain } from 'react-icons/fa'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 px-8 sm:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl">
        <div className="space-y-8 mb-16">
          <p className="text-xs sm:text-sm font-bold text-accent-500 tracking-[0.2em] uppercase">
            REPORTING · DASHBOARDS · AUTOMATION
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl">
            <span className="block text-navy-900">Less manual reporting.</span>
            <span className="block text-accent-500">A clearer view of your business.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
            I build practical reporting, dashboards and automation for UK SMEs, so owners and operations teams can understand costs, orders and performance.
          </p>

          <div className="flex flex-row gap-3 pt-4">
            <a
              href="mailto:carlos.alves.one@gmail.com"
              className="btn-primary text-base inline-block"
            >
              Book a discovery call
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-base"
            >
              Explore services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-accent-500 transition-all duration-200 group">
            <FaChartLine className="text-accent-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold text-navy-900 mb-2">5 years</h3>
            <p className="text-gray-700 text-base">Beverage purchasing, Aqua Restaurant Group, London (about £100k a month)</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-accent-500 transition-all duration-200 group">
            <FaBrain className="text-accent-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold text-navy-900 mb-2">MSc Qualified</h3>
            <p className="text-gray-700 text-base">Data Science & AI</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-accent-500 transition-all duration-200 group">
            <FaCheckCircle className="text-accent-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold text-navy-900 mb-2">Demos on sample data</h3>
            <p className="text-gray-700 text-base">Clearly labelled, not client results</p>
          </div>
        </div>
      </div>
    </section>
  )
}
