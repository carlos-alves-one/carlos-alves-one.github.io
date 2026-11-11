import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import { FaUtensils, FaHeartbeat } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Carlos Alves Consulting | Data & AI for UK operators',
  description:
    'Independent Data & AI consultancy. Choose Hospitality & Catering or Health & Wellness to see reporting automation built in your spreadsheets.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SiteHeader />
      <section className="relative pt-28 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(16,42,67,0.06) 1px, transparent 1px),
              linear-gradient(to right, rgba(16,42,67,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px',
            maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="section-eyebrow">Carlos Alves Consulting</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 mb-4 text-balance">
            Who is this for?
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Two audiences, same approach to weekly reporting and data. Pick the page that matches your work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <a
              href="/hospitality-catering/"
              className="group bg-white rounded-2xl border border-gray-200 p-8 text-left shadow-sm hover:shadow-lg hover:border-accent-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4">
                <FaUtensils className="text-accent-500 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-accent-600">
                Hospitality &amp; Catering
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                For restaurants, bars, cafés, caterers and venues.
              </p>
            </a>

            <a
              href="/health-wellness/"
              className="group bg-white rounded-2xl border border-gray-200 p-8 text-left shadow-sm hover:shadow-lg hover:border-accent-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4">
                <FaHeartbeat className="text-accent-500 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-accent-600">
                Health &amp; Wellness
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                For clinics, dental practices, gyms, care providers and wellness practitioners.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
