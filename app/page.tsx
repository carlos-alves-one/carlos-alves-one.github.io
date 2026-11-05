import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Demos from '@/components/Demos'
import Process from '@/components/Process'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
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
