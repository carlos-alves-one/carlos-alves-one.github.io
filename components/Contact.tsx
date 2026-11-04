'use client'

import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-900 to-navy-950 relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-beige-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your back-office operations? Book a free 30-minute Spreadsheet Audit 
            or reach out to discuss your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none 
                           transition text-white text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none 
                           transition text-white text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Company / Operation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none 
                           transition text-white text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none 
                           transition resize-none text-white text-base"
                  placeholder="Tell me about the weekly report that&apos;s taking too much time..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-lg glow-orange"
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact <span className="gradient-text">Information</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <FaEnvelope className="text-orange-500 text-2xl flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-lg">Email</h4>
                    <a
                      href="mailto:carlos.alves.one@gmail.com"
                      className="text-orange-400 hover:text-orange-300 transition text-base"
                    >
                      carlos.alves.one@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <FaLinkedin className="text-orange-500 text-2xl flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-lg">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/carlos-alves-one"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition text-base"
                    >
                      linkedin.com/in/carlos-alves-one
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <FaMapMarkerAlt className="text-orange-500 text-2xl flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-lg">Location</h4>
                    <p className="text-gray-300 text-base">London, England, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <FaClock className="text-orange-500 text-2xl flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-lg">Booking Slots</h4>
                    <p className="text-gray-300 text-base mb-2">
                      Mondays and Fridays, 15:00–18:00 UK
                    </p>
                    <a
                      href="https://calendar.app.google/Mkrr1BtdEgPpELHX8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition text-base"
                    >
                      Book a free audit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-2 border-orange-500/30">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                Free 30-minute Spreadsheet Audit
              </h4>
              <p className="text-gray-300 mb-4 text-base leading-relaxed">
                Free 30-minute Spreadsheet Audit (Google Meet video call). Bring one weekly report you rebuild by hand and share it on screen (a redacted copy is fine). If you can, note where the data comes from and roughly how long it takes each week. I&apos;ll show you the 2–3 changes I&apos;d make first, then email a written summary within 2 working days. No files sent, no recording, no obligation. Questions: carlos.alves.one@gmail.com
              </p>
              <p className="text-sm text-gray-400">
                Founding clients: my first 3 clients get the Reporting Review at a reduced rate in return for an anonymised case study.
              </p>
            </div>

            <div className="card bg-navy-900/50">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                What to Prepare
              </h4>
              <ul className="space-y-2 text-gray-300 text-base">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  One weekly report that takes too long to build
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Notes on where the data comes from
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Rough estimate of time spent on it each week
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
