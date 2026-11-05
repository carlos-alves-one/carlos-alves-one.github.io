import { FaCoffee, FaClipboardCheck, FaLock, FaCalendarAlt, FaShieldAlt, FaUndoAlt, FaEnvelope } from 'react-icons/fa'

const steps = [
  {
    n: '01',
    icon: FaCoffee,
    tag: 'Free · no obligation',
    title: '30-minute Spreadsheet Audit',
    who: 'For owners, operations leads and finance leads',
    points: [
      'Share one weekly report on screen — a redacted copy is fine',
      'I’ll point out the 2–3 changes I would make first',
      'Written summary emailed within 2 working days',
      'No files sent, no recording, no hard sell',
    ],
    cta: { href: 'https://calendar.app.google/C1hnZvX1jpWYd2bv6', label: 'Book the free audit' },
  },
  {
    n: '02',
    icon: FaClipboardCheck,
    tag: 'Fixed fee · agreed in writing first',
    title: 'Reporting Review',
    who: 'The diagnostic that pays for itself',
    points: [
      'Hours timed with the person who actually runs the process',
      'A map of where errors can creep in each week',
      'A prioritised plan of 5–10 concrete actions',
      'Full refund if any of the three is missing by the agreed date',
      'The review fee is deducted from any follow-on build signed within 12 months',
    ],
    cta: null,
  },
  {
    n: '03',
    icon: FaLock,
    tag: 'You own everything',
    title: 'Build, test & handover',
    who: 'Fixed-price work in writing',
    points: [
      'Automated spreadsheets built inside your existing tools — no platform to buy',
      'Thorough testing on your real exports before handover',
      'Written handover notes so your team can run and adapt it themselves',
      'I work under a written data processing agreement and remove access when the work ends',
    ],
    cta: null,
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 px-6 sm:px-10 lg:px-16 bg-gray-50 border-t border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-eyebrow">How we work together</p>
          <h2 className="section-heading">Small, fixed-fee stages. Zero lock-in.</h2>
          <p className="section-intro mx-auto">
            Every engagement starts free. No subscription, no platform to buy, and full ownership of anything I build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-white rounded-2xl p-7 lg:p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-extrabold text-accent-500">{s.n}</span>
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center">
                    <s.icon className="text-accent-500 text-xl" />
                  </div>
                </div>

                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-navy-50 text-navy-800 mb-3">
                  {s.tag}
                </span>

                <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{s.who}</p>

                <ul className="space-y-2.5 text-gray-700 text-sm leading-relaxed mb-6">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {s.cta ? (
                <a
                  href={s.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-sm w-full"
                >
                  {s.cta.label} →
                </a>
              ) : null}
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 bg-white rounded-2xl p-7 border border-gray-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <FaShieldAlt className="text-accent-500 text-xl flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-navy-900">Strict confidentiality</p>
              <p className="text-gray-600 text-xs mt-1">Non-disclosure by default; client data is never shown in public demos.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaUndoAlt className="text-accent-500 text-xl flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-navy-900">Refund guarantee</p>
              <p className="text-gray-600 text-xs mt-1">If any agreed deliverable is missing by the agreed date, the fee is refunded.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaLock className="text-accent-500 text-xl flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-navy-900">You keep the code</p>
              <p className="text-gray-600 text-xs mt-1">Written handover notes; access removed when work ends.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-accent-500 text-xl flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-navy-900">Fast response</p>
              <p className="text-gray-600 text-xs mt-1">I reply within one working day; appointments Mondays &amp; Fridays 3–6pm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
