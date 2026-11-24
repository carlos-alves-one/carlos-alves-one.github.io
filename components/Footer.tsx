import { FaLinkedin, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'

const BOOKING_URL = 'https://calendar.app.google/C1hnZvX1jpWYd2bv6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0e3733] text-[#f2f7f2] py-14 px-7 sm:px-10 lg:px-16 border-t border-[#2e6258] text-[15px]">
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
            <p className="text-[#d7e8df] text-sm sm:text-[15px] leading-relaxed max-w-md">
              Reporting automation, KPI dashboards and practical AI for UK catering and hospitality operations. Built inside the spreadsheets you already own — no new platform, no subscription.
            </p>
            <p className="text-[13px] text-[#c8ddd2] mt-3 font-mono">
              Independent consultant since September 2024 · London, UK
            </p>
            <p className="text-sm text-[#d7e8df] mt-3">
              <a href="https://carlosalves.uk/" className="underline decoration-[#7fb8a6] underline-offset-2 hover:text-white">carlosalves.uk</a>
              {' · '}
              <a href="mailto:carlos.alves.one@gmail.com" className="underline decoration-[#7fb8a6] underline-offset-2 hover:text-white">carlos.alves.one@gmail.com</a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-[#d7e8df]">
              <li><a href="#services" className="underline decoration-[#7fb8a6] underline-offset-2 hover:text-white transition-colors">Reporting automation</a></li>
              <li><a href="#services" className="underline decoration-[#7fb8a6] underline-offset-2 hover:text-white transition-colors">Business dashboards</a></li>
              <li><a href="#services" className="underline decoration-[#7fb8a6] underline-offset-2 hover:text-white transition-colors">Forecasting &amp; planning</a></li>
              <li><a href="#services" className="underline decoration-[#7fb8a6] underline-offset-2 hover:text-white transition-colors">Invoice processing</a></li>
              <li><a href="#services" className="underline decoration-[#7fb8a6] underline-offset-2 hover:text-white transition-colors">Data &amp; AI reviews</a></li>
              <li><a href="#services" className="underline decoration-[#7fb8a6] underline-offset-2 hover:text-white transition-colors">Process optimisation</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-white mb-3">Connect</h4>
            <div className="flex gap-2 mb-4">
              <a
                href="https://www.linkedin.com/in/carlos-alves-one"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#15413c] border border-[#2e6258] flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://x.com/Mr_CarlosAlves"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#15413c] border border-[#2e6258] flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="X"
              >
                <span className="font-black text-base leading-none">X</span>
              </a>
              <a
                href="https://www.tiktok.com/@mrcarlosalves"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#15413c] border border-[#2e6258] flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="TikTok"
              >
                <span className="font-black text-base leading-none">♪</span>
              </a>
              <a
                href="mailto:carlos.alves.one@gmail.com"
                className="w-10 h-10 rounded-lg bg-[#15413c] border border-[#2e6258] flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#15413c] border border-[#2e6258] flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="Book a call on Google Calendar"
                title="Book a call"
              >
                <FaCalendarAlt size={16} />
              </a>
              <a
                href="https://www.reddit.com/user/carlosalvesuk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#15413c] border border-[#2e6258] flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="Reddit"
              >
                <span className="font-black text-base leading-none">r/</span>
              </a>

            </div>
            <p className="text-sm text-[#d7e8df]">London, UK · video-first, on-site when useful</p>
            <p className="text-[13px] text-[#c8ddd2] mt-1">Replies within one working day</p>
          </div>
        </div>

        <div className="border-t border-[#2e6258] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm text-[#d7e8df]">
          <div>© {currentYear} Carlos Alves Consulting. All rights reserved.</div>
          <div>MSc in Data Science &amp; AI (Distinction), Goldsmiths, University of London</div>
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#e6f0ea] max-w-4xl">
          All figures, statistics, and data shown on this page are entirely fictitious sample data created for illustrative purposes only. No real customer information, personal data, or confidential records are used, displayed, or processed. This ensures full protection of customer confidentiality and compliance with applicable data privacy regulations and standards.
        </p>
      </div>
    </footer>
  )
}
