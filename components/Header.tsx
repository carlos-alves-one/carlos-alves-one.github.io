'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-navy-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-white">Carlos Alves</span>
                <span className="text-orange-500"> Consulting</span>
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-base font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-base font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-base font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-base"
              >
                Get Started
              </button>
            </nav>

            <button
              className="md:hidden text-gray-300 hover:text-orange-400 transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full Screen */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-navy-950/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <nav 
          className={`relative h-full flex flex-col justify-center items-center space-y-8 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <button
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-orange-400 transition-colors text-3xl font-semibold py-4 px-8 hover:bg-orange-500/10 rounded-lg w-64 text-center"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-orange-400 transition-colors text-3xl font-semibold py-4 px-8 hover:bg-orange-500/10 rounded-lg w-64 text-center"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-orange-400 transition-colors text-3xl font-semibold py-4 px-8 hover:bg-orange-500/10 rounded-lg w-64 text-center"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-xl w-64 text-center glow-orange-strong"
          >
            Get Started
          </button>
        </nav>
      </div>
    </>
  )
}
