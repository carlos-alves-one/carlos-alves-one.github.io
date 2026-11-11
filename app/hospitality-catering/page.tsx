import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Demos from '@/components/Demos'
import Process from '@/components/Process'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Hospitality & Catering | Carlos Alves Consulting',
  description:
    'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
  alternates: { canonical: '/hospitality-catering/' },
}

export default function HospitalityCateringPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SiteHeader />
      <Hero />
      <Services />
      <Demos />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
