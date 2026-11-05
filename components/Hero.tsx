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
    <section className="relative pt-32 pb-20 px-8 sm:px-12 lg:px-16 bg-white overflow-hidden">
      {/* Enhanced grid background with fade */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
      }} />
      
      {/* Decorative element for desktop */}
      <div className="hidden lg:block absolute right-0 top-32 w-96 h-96 opacity-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl rotate-6" />
          <div className="absolute inset-8 bg-white border-2 border-accent-300 rounded-2xl shadow-sm" />
          <div className="absolute top-16 left-12 right-12 h-3 bg-accent-200 rounded-full" />
          <div className="absolute top-24 left-12 right-20 h-3 bg-accent-100 rounded-full" />
          <div className="absolute top-32 left-12 right-16 h-3 bg-accent-200 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl relative z-10">
        <div className="space-y-6 mb-16">
          <p className="text-xs sm:text-sm font-bold text-accent-500 tracking-[0.2em] uppercase">
            REPORTING · DASHBOARDS · AUTOMATION
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight">
            <span className="text-navy-900">Costs, orders and sales in one weekly report. </span>
            <span className="text-accent-500">No retyping.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed pt-2">
            I help UK catering and hospitality owners, operations leads and finance leads replace retyped weekly reports with spreadsheets that refresh from their own till, ordering and invoice exports. No new platform, no subscription.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href="mailto:carlos.alves.one@gmail.com"
              className="btn-primary text-sm sm:text-base whitespace-nowrap"
            >
              Book a discovery call
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-sm sm:text-base whitespace-nowrap"
            >
              Explore services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <FaChartLine className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">5 years</h3>
            <p className="text-gray-700 text-base leading-relaxed">Beverage purchasing, Aqua Restaurant Group, London (about £100k a month)</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <FaBrain className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">MSc Qualified</h3>
            <p className="text-gray-700 text-base leading-relaxed">Data Science & AI</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-accent-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <FaCheckCircle className="text-accent-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">Demos on sample data</h3>
            <p className="text-gray-700 text-base leading-relaxed">Clearly labelled, not client results</p>
          </div>
        </div>
      </div>
    </section>
  )
}
