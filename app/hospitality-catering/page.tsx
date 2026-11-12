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
  openGraph: {
    type: 'website',
    url: 'https://carlos-alves-one.github.io/hospitality-catering/',
    title: 'Hospitality & Catering | Carlos Alves Consulting',
    description:
      'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
    siteName: 'Carlos Alves Consulting',
    locale: 'en_GB',
    images: [
      {
        url: 'https://carlos-alves-one.github.io/og/hospitality-catering.png',
        width: 1200,
        height: 627,
        alt: 'Carlos Alves Consulting: Weekly reports without the retyping, for hospitality and catering businesses. Free 30-min Weekly-Report Walkthrough.',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Hospitality & Catering | Carlos Alves Consulting',
    description:
      'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
    images: ['https://carlos-alves-one.github.io/og/hospitality-catering.png'],
  },
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
