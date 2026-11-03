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
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Turn Your Spreadsheets Into
            <span className="block text-primary-600">Strategic Assets</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            MSc Data Science & AI specialist helping hospitality and catering operations 
            eliminate manual work through analytics, forecasting, and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Free Spreadsheet Audit
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all border-2 border-primary-600"
            >
              Explore Solutions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FaChartLine className="text-primary-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+ Years</h3>
              <p className="text-gray-600">Industry Experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FaBrain className="text-primary-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">MSc Qualified</h3>
              <p className="text-gray-600">Data Science & AI</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FaCheckCircle className="text-primary-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Real Results</h3>
              <p className="text-gray-600">Hours Saved Weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
