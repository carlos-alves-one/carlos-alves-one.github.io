'use client'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 px-8 sm:px-12 lg:px-16 bg-white">
      <div className="max-w-6xl">
        <div className="space-y-8">
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
      </div>
    </section>
  )
}
