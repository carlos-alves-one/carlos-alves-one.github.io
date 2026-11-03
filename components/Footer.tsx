import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Carlos Alves Consulting</h3>
            <p className="text-gray-400 leading-relaxed">
              Data Science & AI solutions for hospitality and catering operations. 
              Turning manual processes into automated workflows.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Spreadsheet Automation</li>
              <li>Data Reporting</li>
              <li>Forecasting & Planning</li>
              <li>Invoice Processing</li>
              <li>AI Integration</li>
              <li>Process Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/carlos-alves-one"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:contact@carlosalvesconsulting.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              London, England, United Kingdom
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
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
