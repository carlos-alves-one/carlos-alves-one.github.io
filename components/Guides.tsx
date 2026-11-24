// Guides — the ideas behind the work. Links every article in the
// sitemap, grouped by sector, so no article is orphaned from the site.
// Titles are the articles' own <title> text, verbatim.
const hospitalityGuides = [
  {
    href: '/wedding-venue-crm-payments-forecasting/',
    title: 'What CRM should a wedding and events venue use to track leads, quotes, payments and revenue forecasts?',
  },
  {
    href: '/restaurant-payroll-software-tips/',
    title: 'What restaurant payroll software can handle tips for both restaurants without eating Monday?',
  },
  {
    href: '/bar-owners-moved-off-spreadsheet/',
    title: 'Bar owners who moved off the spreadsheet: what did they go with?',
  },
  {
    href: '/restaurant-tip-pooling-payroll-export/',
    title: 'How can a restaurant keep tip pooling without calculating it by hand, and get a clean export into payroll?',
  },
  {
    href: '/restaurant-wage-forecast-spreadsheet/',
    title: 'What should a restaurant wage forecast spreadsheet include, and how do you stop retyping it every week?',
  },
  {
    href: '/hospitality-weekly-multi-site-scorecard/',
    title: 'What should a weekly multi-site hospitality scorecard show, and is there a template?',
  },
  {
    href: '/independent-restaurant-inventory-tools/',
    title: 'What inventory solution works for an independent restaurant without becoming a chore?',
  },
]

const healthGuides = [
  {
    href: '/gym-non-card-payments-reconcile/',
    title: 'How can a gym reconcile cash and bank-transfer payments with its gym software without marking each one by hand?',
  },
  {
    href: '/gym-financial-forecasting-multi-location/',
    title: 'How can a multi-location gym owner forecast cash and see margins by location without a finance team?',
  },
]

export default function Guides({ sector }: { sector: 'hosp' | 'health' }) {
  const first = sector === 'hosp' ? hospitalityGuides : healthGuides
  const second = sector === 'hosp' ? healthGuides : hospitalityGuides
  const firstLabel = sector === 'hosp' ? 'Hospitality & catering' : 'Health & wellness'
  const secondLabel = sector === 'hosp' ? 'Health & wellness' : 'Hospitality & catering'

  return (
    <section id="guides" className="py-16 px-7 sm:px-10 lg:px-16 bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="section-eyebrow">Guides</p>
          <h2 className="section-heading">Guides — the ideas behind the work</h2>
          <p className="section-intro text-sm">
            Short, practical answers to the questions operators actually ask — written in the language of the
            week, not in jargon.
          </p>
        </div>

        <h3 className="text-base font-bold text-navy-900 mb-4">{firstLabel}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {first.map((g) => (
            <a
              key={g.href}
              href={g.href}
              className="block bg-[#eef6f2] rounded-2xl p-5 border border-gray-200 hover:border-accent-300 hover:shadow-md transition-all"
            >
              <span className="text-sm font-bold text-navy-900 leading-snug block">{g.title}</span>
              <span className="text-xs font-semibold text-accent-600 mt-2 inline-block">Read the guide →</span>
            </a>
          ))}
        </div>

        <h3 className="text-base font-bold text-navy-900 mb-4">{secondLabel}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {second.map((g) => (
            <a
              key={g.href}
              href={g.href}
              className="block bg-[#eef6f2] rounded-2xl p-5 border border-gray-200 hover:border-accent-300 hover:shadow-md transition-all"
            >
              <span className="text-sm font-bold text-navy-900 leading-snug block">{g.title}</span>
              <span className="text-xs font-semibold text-accent-600 mt-2 inline-block">Read the guide →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
