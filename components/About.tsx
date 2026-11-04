import { FaGraduationCap, FaBriefcase, FaCheckCircle, FaLightbulb } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-800 to-navy-900 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Carlos Alves</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging operations experience with data science expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="bg-orange-500/10 p-4 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                <FaBriefcase className="text-orange-500 text-4xl flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Industry Background
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Former purchasing manager at Aqua Restaurant Group in London, running beverage 
                  purchasing for a site with two restaurants. I&apos;ve lived the problem: manual invoice 
                  entry, monthly stocktakes that never quite matched, and weekly reports that took 
                  hours to compile.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-orange-500/10 p-4 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                <FaGraduationCap className="text-orange-500 text-4xl flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Academic Credentials
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  After 26 years away from academia, I returned to earn a BSc in 
                  Computer Science and an MSc in Data Science & AI from Goldsmiths, University 
                  of London. My thesis built solar radiation forecasting models on 1.7 million 
                  rows of weather data.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-orange-500/10 p-4 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                <FaLightbulb className="text-orange-500 text-4xl flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  The Approach
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  I don&apos;t sell a platform or a subscription. I work inside the spreadsheets you 
                  already use, removing the re-keying from your weekly reports and building simple 
                  forecasts your team can explain. Every project starts with comparing the new tool 
                  alongside your existing process before you trust it.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-navy-800 to-navy-900 border-2 border-orange-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What Makes This <span className="gradient-text">Different</span>
            </h3>
            <ul className="space-y-4">
              {[
                'Real operations experience in hospitality and catering',
                'Data science expertise (MSc from Goldsmiths)',
                'Solutions that work in Excel, not a new platform',
                'Always run new tools alongside existing processes first',
                'Focus on hours saved, not technology for its own sake',
                'Free 30-minute Spreadsheet Audit to start',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <FaCheckCircle className="text-orange-500 text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-navy-800 to-navy-900 border-2 border-orange-500/30">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            The Problem I <span className="gradient-text">Solve</span>
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto text-center">
            Most weekly reports in hospitality are built the same way: someone copies figures from 
            the till into one spreadsheet, then another, then another. By Friday, nobody fully trusts 
            the number. With every site you add, the same back-office jobs get harder: stock counts, 
            site margins, labour against sales, month-end. That&apos;s where I help — turning manual, 
            error-prone routines into measured, forecasted, and automated workflows.
          </p>
        </div>
      </div>
    </section>
  )
}
