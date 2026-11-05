import { FaGraduationCap, FaBriefcase, FaCheckCircle, FaLightbulb, FaInfoCircle } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 px-8 sm:px-12 lg:px-16 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="section-eyebrow">About</p>
          <h2 className="section-heading">
            Carlos Alves
          </h2>
          <p className="section-intro mx-auto">
            Bridging operations experience with data science expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="bg-accent-50 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-100 transition-colors">
                <FaBriefcase className="text-accent-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Industry Background
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Former purchasing manager at Aqua Restaurant Group in London, running beverage 
                  purchasing for a site with two restaurants and six bars (about £100k a month). 
                  I&apos;ve lived the problem: manual invoice entry, monthly stocktakes that never 
                  quite matched, and weekly reports that took hours to compile.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-accent-50 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-100 transition-colors">
                <FaGraduationCap className="text-accent-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Academic Credentials
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  After 26 years away from academia, I returned to earn a BSc in 
                  Computer Science and an MSc in Data Science & AI from Goldsmiths, University 
                  of London. My thesis built solar radiation forecasting models on 1.7 million 
                  rows of weather data.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-accent-50 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-100 transition-colors">
                <FaInfoCircle className="text-accent-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Status
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Independent Data & AI Consultant since September 2024, after my MSc. My consultancy work is conducted under strict confidentiality, protecting client information.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-accent-50 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-100 transition-colors">
                <FaLightbulb className="text-accent-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  The Approach
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  I don&apos;t sell a platform or a subscription. I work inside the spreadsheets you 
                  already use, removing the re-keying from your weekly reports and building simple 
                  forecasts your team can explain. Every engagement will start by running the new 
                  spreadsheet alongside your existing process before you rely on it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-navy-900 mb-6">
              What Makes This Different
            </h3>
            <ul className="space-y-4">
              {[
                'Five years running beverage purchasing for a London restaurant group',
                'Data science expertise (MSc from Goldsmiths)',
                'Solutions that work in Excel, not a new platform',
                'Always run new tools alongside existing processes first',
                'Aims to cut the hours your team spends retyping reports, not to sell you technology',
                'Free 30-minute Spreadsheet Audit to start',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div className="bg-accent-50 w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheckCircle className="text-accent-500 text-sm group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
            The Problem I Solve
          </h3>
          <p className="text-gray-700 leading-relaxed text-base max-w-4xl mx-auto text-center">
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
