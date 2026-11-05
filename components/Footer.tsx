import { FaLinkedin, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'

const BOOKING_URL = 'https://calendar.app.google/C1hnZvX1jpWYd2bv6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-300 py-14 px-6 sm:px-10 lg:px-16 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-white text-navy-950 font-mono font-extrabold text-sm flex items-center justify-center">
                CA
              </span>
              <span className="text-lg font-bold text-white">Carlos Alves Consulting</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Reporting automation, KPI dashboards and practical AI for UK catering and hospitality operations. Built inside the spreadsheets you already own — no new platform, no subscription.
            </p>
            <p className="text-xs text-slate-500 mt-3 font-mono">
              Independent consultant since September 2024 · London, UK
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white mb-3">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-accent-300 transition-colors">Reporting automation</a></li>
              <li><a href="#services" className="hover:text-accent-300 transition-colors">Business dashboards</a></li>
              <li><a href="#services" className="hover:text-accent-300 transition-colors">Forecasting &amp; planning</a></li>
              <li><a href="#services" className="hover:text-accent-300 transition-colors">Invoice processing</a></li>
              <li><a href="#services" className="hover:text-accent-300 transition-colors">Data &amp; AI reviews</a></li>
              <li><a href="#services" className="hover:text-accent-300 transition-colors">Process optimisation</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white mb-3">Connect</h4>
            <div className="flex gap-2 mb-4">
              <a
                href="https://www.linkedin.com/in/carlos-alves-one"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:carlos.alves.one@gmail.com"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Book a call on Google Calendar"
                title="Book a call"
              >
                <FaCalendarAlt size={16} />
              </a>
            </div>
            <p className="text-xs text-slate-400">London, UK · video-first, on-site when useful</p>
            <p className="text-xs text-slate-500 mt-1">Replies within one working day</p>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-slate-500">
          <div>© {currentYear} Carlos Alves Consulting. All rights reserved.</div>
          <div>MSc in Data Science &amp; AI (Distinction), Goldsmiths, University of London</div>
        </div>
      </div>
    </footer>
  )
}
