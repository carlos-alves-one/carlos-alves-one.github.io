'use client'

import { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Move focus to first menu item when menu opens
      setTimeout(() => firstMenuItemRef.current?.focus(), 100)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
      // Return focus to hamburger button
      setTimeout(() => menuButtonRef.current?.focus(), 300)
    }
  }

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-lg sm:text-xl font-bold text-navy-900">
                Carlos Alves Consulting
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-navy-900 transition-colors duration-200 text-base font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-navy-900 transition-colors duration-200 text-base font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-navy-900 transition-colors duration-200 text-base font-medium"
              >
                Contact
              </button>
              <a
                href="mailto:carlos.alves.one@gmail.com"
                className="btn-primary text-base"
              >
                Book Free Audit
              </a>
            </nav>

            <button
              ref={menuButtonRef}
              className="md:hidden text-gray-700 hover:text-navy-900 transition-colors z-50"
              onClick={toggleMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          prefersReducedMotion ? '' : 'ease-in-out'
        } ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop with gradient glow and grid */}
        <div 
          className="absolute inset-0 bg-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
          
          {/* Soft gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-100/40 via-transparent to-accent-200/30" />
        </div>

        {/* Menu Content */}
        <nav 
          className={`relative h-full flex flex-col pt-24 px-6 pb-8 transform transition-all duration-300 ${
            prefersReducedMotion ? '' : 'ease-out'
          } ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex-1 flex flex-col justify-center space-y-3 max-w-md mx-auto w-full">
            {/* Services */}
            <button
              ref={firstMenuItemRef}
              onClick={() => scrollToSection('services')}
              className={`group w-full flex items-center justify-between bg-white rounded-xl border border-gray-200 px-6 py-5 shadow-sm hover:shadow-md hover:border-accent-300 hover:bg-accent-50/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ${
                prefersReducedMotion ? '' : 'hover:-translate-y-0.5'
              } ${
                isMobileMenuOpen && !prefersReducedMotion ? 'animate-slideIn' : ''
              }`}
              style={!prefersReducedMotion ? { animationDelay: '0ms' } : {}}
            >
              <span className="text-navy-900 text-[28px] font-bold">Services</span>
              <FaChevronRight className="text-accent-500 text-xl group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* About */}
            <button
              onClick={() => scrollToSection('about')}
              className={`group w-full flex items-center justify-between bg-white rounded-xl border border-gray-200 px-6 py-5 shadow-sm hover:shadow-md hover:border-accent-300 hover:bg-accent-50/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ${
                prefersReducedMotion ? '' : 'hover:-translate-y-0.5'
              } ${
                isMobileMenuOpen && !prefersReducedMotion ? 'animate-slideIn' : ''
              }`}
              style={!prefersReducedMotion ? { animationDelay: '50ms' } : {}}
            >
              <span className="text-navy-900 text-[28px] font-bold">About</span>
              <FaChevronRight className="text-accent-500 text-xl group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className={`group w-full flex items-center justify-between bg-white rounded-xl border border-gray-200 px-6 py-5 shadow-sm hover:shadow-md hover:border-accent-300 hover:bg-accent-50/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ${
                prefersReducedMotion ? '' : 'hover:-translate-y-0.5'
              } ${
                isMobileMenuOpen && !prefersReducedMotion ? 'animate-slideIn' : ''
              }`}
              style={!prefersReducedMotion ? { animationDelay: '100ms' } : {}}
            >
              <span className="text-navy-900 text-[28px] font-bold">Contact</span>
              <FaChevronRight className="text-accent-500 text-xl group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Book Free Audit Button */}
            <a
              href="mailto:carlos.alves.one@gmail.com"
              className={`w-full mt-6 bg-accent-500 text-white px-6 py-5 rounded-xl font-bold text-lg shadow-md hover:bg-accent-600 hover:shadow-lg transition-all duration-200 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ${
                prefersReducedMotion ? '' : 'hover:-translate-y-0.5'
              } ${
                isMobileMenuOpen && !prefersReducedMotion ? 'animate-slideIn' : ''
              }`}
              style={!prefersReducedMotion ? { animationDelay: '150ms' } : {}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Free Audit
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
