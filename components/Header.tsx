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
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Carlos Alves Consulting
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
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
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full Screen White */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white">
          <div className="h-full flex flex-col px-6 pt-20">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-2xl font-bold text-gray-900">
                Carlos Alves Consulting
              </h1>
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-900 hover:text-blue-600 transition-colors text-2xl font-semibold py-4"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-900 hover:text-blue-600 transition-colors text-2xl font-semibold py-4"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-900 hover:text-blue-600 transition-colors text-2xl font-semibold py-4"
              >
                Contact
              </button>

              <div className="border-t border-gray-300 my-4"></div>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-900 hover:text-blue-600 transition-colors text-2xl font-semibold py-4"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
