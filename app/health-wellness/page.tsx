import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import HealthHero from '@/components/health/HealthHero'
import HealthServices from '@/components/health/HealthServices'
import HealthWalkthrough from '@/components/health/HealthWalkthrough'
import HealthProcess from '@/components/health/HealthProcess'
import PricingGuide from '@/components/PricingGuide'
import Guides from '@/components/Guides'
import HealthAbout from '@/components/health/HealthAbout'
import HealthFAQ from '@/components/health/HealthFAQ'
import HealthContact from '@/components/health/HealthContact'
import HealthFooter from '@/components/health/HealthFooter'
import BackToTop from '@/components/BackToTop'
import {
  HomeMovedStyle,
  MovedExamples,
  MovedHow,
  MovedSocial,
  MovedTop,
} from '@/components/from-home/MovedHome'

export const metadata: Metadata = {
  title: 'Health & Wellness | Carlos Alves Consulting',
  description:
    'Weekly reporting automation for UK clinics, dental practices, gyms, care providers and wellness practitioners — built in your spreadsheets, no subscriptions.',
  alternates: { canonical: '/health-wellness/' },
  openGraph: {
    type: 'website',
    url: 'https://carlosalves.uk/health-wellness/',
    title: 'Health & Wellness | Carlos Alves Consulting',
    description:
      'Weekly reporting automation for UK clinics, dental practices, gyms, care providers and wellness practitioners — built in your spreadsheets, no subscriptions.',
    siteName: 'Carlos Alves Consulting',
    locale: 'en_GB',
    images: [
      {
        url: 'https://carlosalves.uk/og/health-wellness-v2.png',
        width: 1200,
        height: 627,
        alt: 'Carlos Alves Consulting: Weekly reports without the retyping, for health & wellness businesses. Free 30-min Weekly-Report Walkthrough.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health & Wellness | Carlos Alves Consulting',
    description:
      'Weekly reporting automation for UK clinics, dental practices, gyms, care providers and wellness practitioners — built in your spreadsheets, no subscriptions.',
    images: ['https://carlosalves.uk/og/health-wellness-v2.png'],
  },
}

export default function HealthWellnessPage() {
  return (
    <main className="min-h-screen bg-[#0e3733] text-[#f2f7f2] sector-page">
      <HomeMovedStyle />
      <SiteHeader />
      <MovedTop />
      <HealthHero />
      <HealthServices />
      <MovedHow sector="health" />
      <HealthWalkthrough />
      <HealthProcess />
      <PricingGuide />
      <MovedExamples sector="health" />
      <Guides sector="health" />
      <HealthFAQ />
      <HealthAbout />
      <MovedSocial />
      <HealthContact />
      <HealthFooter />
      <BackToTop />
    </main>
  )
}
