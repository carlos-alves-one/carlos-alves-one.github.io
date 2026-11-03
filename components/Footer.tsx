import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Carlos Alves</span>
              <span className="text-orange-500"> Consulting</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-base">
              Data Science & AI solutions for hospitality and catering operations. 
              Turning manual processes into automated workflows.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Services</h4>
            <ul className="space-y-2 text-gray-400 text-base">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Spreadsheet Automation</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Data Reporting</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Forecasting & Planning</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Invoice Processing</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">AI Integration</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Process Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/carlos-alves-one"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors bg-navy-900 p-3 rounded-lg hover:bg-navy-800"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:carlos.alves.one@gmail.com"
                className="text-gray-400 hover:text-orange-400 transition-colors bg-navy-900 p-3 rounded-lg hover:bg-navy-800"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
            <p className="text-gray-400 text-base">
              <a href="mailto:carlos.alves.one@gmail.com" className="hover:text-orange-400 transition-colors">
                carlos.alves.one@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              London, England, United Kingdom
            </p>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 text-center">
          <p className="text-gray-400 text-base">
            &copy; {currentYear} Carlos Alves Consulting. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            MSc Data Science & AI | Goldsmiths, University of London
          </p>
        </div>
      </div>
    </footer>
  )
}
