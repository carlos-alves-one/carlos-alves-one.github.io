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
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="gradient-text">Costs, orders and sales in one weekly report. No retyping.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I help UK catering and hospitality owners, operations leads and finance leads replace retyped weekly reports with spreadsheets that refresh from their own till, ordering and invoice exports. No new platform, no subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg glow-orange"
            >
              Book Free Spreadsheet Audit
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-lg"
            >
              Explore Solutions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card group">
              <FaChartLine className="text-orange-500 text-5xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-4xl font-bold text-white mb-2">5 years</h3>
              <p className="text-gray-400 text-lg">Beverage purchasing, Aqua Restaurant Group, London (about £100k a month)</p>
            </div>
            <div className="card group">
              <FaBrain className="text-orange-500 text-5xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-4xl font-bold text-white mb-2">MSc Qualified</h3>
              <p className="text-gray-400 text-lg">Data Science & AI</p>
            </div>
            <div className="card group">
              <FaCheckCircle className="text-orange-500 text-5xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-4xl font-bold text-white mb-2">Demos on sample data</h3>
              <p className="text-gray-400 text-lg">Clearly labelled, not client results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
