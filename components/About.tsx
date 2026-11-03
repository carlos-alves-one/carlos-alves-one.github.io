import { FaGraduationCap, FaBriefcase, FaCheckCircle, FaLightbulb } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Carlos Alves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging operations experience with data science expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaBriefcase className="text-primary-600 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Industry Background
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Former purchasing manager at Aqua Restaurant Group in London, running beverage 
                  purchasing for a site with two restaurants. I've lived the problem: manual invoice 
                  entry, monthly stocktakes that never quite matched, and weekly reports that took 
                  hours to compile.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaGraduationCap className="text-primary-600 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Academic Credentials
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  After nearly three decades away from academia, I returned to earn a BSc in 
                  Computer Science and an MSc in Data Science & AI from Goldsmiths, University 
                  of London. My thesis built solar radiation forecasting models on 1.7 million 
                  rows of weather data.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaLightbulb className="text-primary-600 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  The Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I don't sell a platform or a subscription. I work inside the spreadsheets you 
                  already use, removing the re-keying from your weekly reports and building simple 
                  forecasts your team can explain. Every project starts with comparing the new tool 
                  alongside your existing process before you trust it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What Makes This Different
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
                <li key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            The Problem I Solve
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
            Most weekly reports in hospitality are built the same way: someone copies figures from 
            the till into one spreadsheet, then another, then another. By Friday, nobody fully trusts 
            the number. With every site you add, the same back-office jobs get harder: stock counts, 
            site margins, labour against sales, month-end. That's where I help — turning manual, 
            error-prone routines into measured, forecasted, and automated workflows.
          </p>
        </div>
      </div>
    </section>
  )
}
