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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
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
            className="md:hidden text-gray-300 hover:text-orange-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-navy-800">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-orange-400 transition-colors text-lg py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-orange-400 transition-colors text-lg py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-orange-400 transition-colors text-lg py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full text-center text-base"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
