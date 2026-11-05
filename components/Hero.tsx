'use client'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="block text-navy-900">Less manual reporting.</span>
            <span className="block text-accent-600">A clearer view of your business.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I build practical reporting, dashboards and automation for UK SMEs, so owners and operations teams can understand costs, orders and performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="mailto:carlos.alves.one@gmail.com"
              className="btn-primary text-lg inline-block"
            >
              Book a discovery call
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-lg"
            >
              Explore services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
