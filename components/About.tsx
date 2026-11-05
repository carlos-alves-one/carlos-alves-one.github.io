import { FaGraduationCap, FaUtensils, FaLaptopCode, FaStore, FaShieldAlt } from 'react-icons/fa'

const timeline = [
  {
    period: '2001–2008',
    title: 'Small software company, Portugal',
    role: 'Founder',
    desc: 'Learned to build systems end-to-end and explain them to non-technical customers.',
    icon: FaLaptopCode,
  },
  {
    period: '2008–2013',
    title: 'Aqua Restaurant Group, London',
    role: 'Purchasing Manager',
    desc: 'Two restaurants and six bars on one site — £100k of beverages a month. I keyed in every invoice by hand and ran the monthly stocktake myself. This is where the frustration behind this business comes from.',
    icon: FaUtensils,
  },
  {
    period: '2013–2017',
    title: 'Money exchange & coffee shop, London',
    role: 'Operations & compliance',
    desc: 'Daily operations, cash reconciliation and regulatory compliance. Every penny reconciled, every day.',
    icon: FaStore,
  },
  {
    period: '2019–2024',
    title: 'Goldsmiths, University of London',
    role: 'BSc Computer Science (First) · MSc Data Science & AI (Distinction)',
    desc: 'Five years of rigorous training in algorithms, data pipelines and practical machine learning, completed top of class.',
    icon: FaGraduationCap,
  },
  {
    period: '2024–present',
    title: 'Carlos Alves Consulting',
    role: 'Independent Data & AI Consultant, London',
    desc: 'Helping UK catering and hospitality businesses replace hand-compiled weekly reports with automated, self-refreshing spreadsheets. Based in London; client-driven, small fixed-fee stages, and you own everything I build.',
    icon: FaUtensils,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-10 lg:px-16 bg-white border-t border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-heading">Hospitality experience, backed by AI training</h2>
          <p className="section-intro mx-auto">
            I spent years inside restaurant operations before earning a distinction in Data Science &amp; AI. That combination is unusual — and it shapes everything I build.
          </p>
        </div>

        {/* Narrative intro */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-800">
          <p className="text-xs font-mono uppercase tracking-widest text-accent-300 mb-3">Why this exists</p>
          <p className="text-xl sm:text-2xl font-bold leading-snug mb-4">
            Most hospitality weekly reports are late, and nobody is sure they&apos;re right. I know — I used to be the person typing them.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I buy £100k of stock a month, reconcile tills, chase invoices and run stocktakes — or at least I used to. Today I build the spreadsheets that do that work automatically, inside the tools you already own. No new platform, no subscription, and you keep everything I build.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {timeline.map((t, i) => (
            <div
              key={t.period}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:border-accent-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <t.icon className="text-accent-500 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900">{t.title}</h3>
                    <p className="text-xs font-semibold text-accent-600">{t.role}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">
                  {t.period}
                </span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3 sm:pl-14">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Credentials strip */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <div className="text-2xl font-extrabold text-navy-900">MSc Distinction</div>
            <div className="text-xs text-gray-600 mt-1">Data Science &amp; AI · Goldsmiths</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <div className="text-2xl font-extrabold text-navy-900">BSc First</div>
            <div className="text-xs text-gray-600 mt-1">Computer Science · Goldsmiths</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <div className="text-2xl font-extrabold text-navy-900">London, UK</div>
            <div className="text-xs text-gray-600 mt-1">Independent consultant since 2024</div>
          </div>
        </div>

        {/* Confidentiality note */}
        <div className="max-w-4xl mx-auto mt-8 bg-accent-50 rounded-xl p-5 border border-accent-200 text-xs sm:text-sm text-gray-700 flex items-start gap-3">
          <FaShieldAlt className="text-accent-500 text-lg flex-shrink-0 mt-0.5" />
          <p>
            <strong>Confidentiality first:</strong> my consultancy work is conducted under strict confidentiality. The demonstrations in the sample section above are built on anonymised dummy data — clearly labelled, and never taken from client projects.
          </p>
        </div>
      </div>
    </section>
  )
}
