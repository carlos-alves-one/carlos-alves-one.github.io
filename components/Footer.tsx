import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-navy-900">
              Carlos Alves Consulting
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              Data Science & AI solutions for hospitality and catering operations. 
              Turning manual processes into automated workflows.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-navy-900">Services</h4>
            <ul className="space-y-2 text-gray-700 text-base">
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Spreadsheet Automation</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Data Reporting</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Forecasting & Planning</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Invoice Processing</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">AI Integration</li>
              <li className="hover:text-accent-500 transition-colors cursor-pointer">Process Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-navy-900">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/carlos-alves-one"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-accent-500 transition-colors bg-white p-3 rounded-lg hover:bg-accent-50 border-2 border-gray-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:carlos.alves.one@gmail.com"
                className="text-gray-700 hover:text-accent-500 transition-colors bg-white p-3 rounded-lg hover:bg-accent-50 border-2 border-gray-200"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
            <p className="text-gray-700 text-sm">
              Based in London, UK
            </p>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-sm text-gray-700">
            &copy; {currentYear} Carlos Alves. All rights reserved.
          </div>
          <div className="text-sm text-gray-700">
            MSc in Data Science & AI (Goldsmiths, University of London)
          </div>
        </div>
      </div>
    </footer>
  )
}
