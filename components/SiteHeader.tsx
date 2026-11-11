'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa'

const BOOKING_URL = 'https://calendar.app.google/C1hnZvX1jpWYd2bv6'

const audiences = [
  { href: '/hospitality-catering/', label: 'Hospitality & Catering' },
  { href: '/health-wellness/', label: 'Health & Wellness' },
]

const defaultNavItems = [
  { id: 'services', label: 'Services' },
  { id: 'demos', label: 'Sample work' },
  { id: 'process', label: 'How it works' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

type NavItem = { id: string; label: string }

export default function SiteHeader({
  navItems = defaultNavItems,
}: {
  navItems?: NavItem[]
}) {
  const pathname = usePathname() || '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || 'services')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null)

  const onAudiencePage =
    pathname.includes('hospitality-catering') || pathname.includes('health-wellness')

  const isAudienceActive = (href: string) => {
    const base = href.replace(/\/$/, '')
    return pathname === href || pathname === base || pathname.startsWith(base + '/')
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!onAudiencePage) return
    const handleSpy = () => {
      const ids = navItems.map((n) => n.id)
      const cur = ids
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return null
          const r = el.getBoundingClientRect()
          return { id, dist: Math.abs(r.top - 140) }
        })
        .filter(Boolean) as { id: string; dist: number }[]
      if (cur.length) {
        cur.sort((a, b) => a.dist - b.dist)
        setActiveSection(cur[0].id)
      }
    }
    window.addEventListener('scroll', handleSpy, { passive: true })
    handleSpy()
    return () => window.removeEventListener('scroll', handleSpy)
  }, [navItems, onAudiencePage])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      setTimeout(() => firstMenuItemRef.current?.focus(), 100)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.location.hash = '#' + id
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
      setTimeout(() => menuButtonRef.current?.focus(), 300)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200'
            : 'bg-white/85 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 gap-3">
            <a
              href="/"
              className="flex items-center gap-2 group flex-shrink-0"
              aria-label="Carlos Alves Consulting — home"
            >
              <span className="w-8 h-8 rounded-lg bg-navy-900 text-white font-mono font-extrabold text-sm flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                CA
              </span>
              <span className="text-base sm:text-lg font-bold text-navy-900 hidden xs:inline sm:inline">
                Carlos Alves <span className="font-normal text-gray-500">Consulting</span>
              </span>
            </a>

            {/* Equal-weight audience links — desktop */}
            <nav
              className="hidden md:flex items-center gap-1 flex-shrink-0"
              aria-label="Audience"
            >
              {audiences.map((a) => {
                const active = isAudienceActive(a.href)
                return (
                  <a
                    key={a.href}
                    href={a.href}
                    aria-current={active ? 'page' : undefined}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      active
                        ? 'bg-navy-900 text-white'
                        : 'text-navy-900 hover:bg-gray-100'
                    }`}
                  >
                    {a.label}
                  </a>
                )
              })}
            </nav>

            {onAudiencePage && (
              <nav className="hidden xl:flex items-center space-x-4 flex-1 justify-end">
                {navItems.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => scrollToSection(n.id)}
                    className={`text-sm font-medium transition-colors duration-200 py-1 whitespace-nowrap ${
                      activeSection === n.id
                        ? 'text-navy-900 font-bold border-b-2 border-accent-500'
                        : 'text-gray-600 hover:text-navy-900'
                    }`}
                  >
                    {n.label}
                  </button>
                ))}
              </nav>
            )}

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-sm py-2.5 px-4 flex-shrink-0"
            >
              Book free walkthrough
            </a>

            <button
              ref={menuButtonRef}
              className="md:hidden text-gray-700 hover:text-navy-900 transition-colors z-50 p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white" onClick={() => setIsMobileMenuOpen(false)} />
        <nav
          className={`relative h-full flex flex-col justify-center px-6 pt-20 pb-8 transform transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="space-y-2 max-w-sm mx-auto w-full">
            <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1 px-1">
              Audiences
            </p>
            {audiences.map((a, i) => {
              const active = isAudienceActive(a.href)
              return (
                <a
                  key={a.href}
                  ref={i === 0 ? firstMenuItemRef : undefined}
                  href={a.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-between rounded-xl border px-5 py-4 text-left font-bold text-lg ${
                    active
                      ? 'bg-navy-900 text-white border-navy-900 shadow'
                      : 'bg-white text-navy-900 border-gray-200 shadow-sm hover:border-accent-300'
                  }`}
                >
                  <span>{a.label}</span>
                  <FaChevronRight className={`text-sm ${active ? 'text-accent-300' : 'text-accent-500'}`} />
                </a>
              )
            })}

            {onAudiencePage && (
              <>
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mt-5 mb-1 px-1">
                  On this page
                </p>
                {navItems.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => scrollToSection(n.id)}
                    className="w-full flex items-center justify-between bg-white rounded-xl border border-gray-200 px-5 py-4 shadow-sm hover:shadow hover:border-accent-300 text-left font-bold text-lg text-navy-900"
                  >
                    <span>{n.label}</span>
                    <FaChevronRight className="text-accent-500 text-sm" />
                  </button>
                ))}
              </>
            )}

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 block text-center btn-primary text-base font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book free walkthrough
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
