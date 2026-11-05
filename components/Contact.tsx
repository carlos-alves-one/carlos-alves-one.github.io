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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="eyebrow">Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="block text-base font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                           transition text-gray-900 text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                           transition text-gray-900 text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Company / Operation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                           transition text-gray-900 text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                           transition resize-none text-gray-900 text-base"
                  placeholder="Tell me about the weekly report that&apos;s taking too much time..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-lg"
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FaEnvelope className="text-blue-600 text-2xl flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">Email</h4>
                    <a
                      href="mailto:carlos.alves.one@gmail.com"
                      className="text-blue-600 hover:text-blue-700 transition text-base"
                    >
                      carlos.alves.one@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FaLinkedin className="text-blue-600 text-2xl flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/carlos-alves-one"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition text-base"
                    >
                      linkedin.com/in/carlos-alves-one
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FaMapMarkerAlt className="text-blue-600 text-2xl flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">Location</h4>
                    <p className="text-gray-600 text-base">London, England, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FaClock className="text-blue-600 text-2xl flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">Availability</h4>
                    <p className="text-gray-600 text-base mb-2">
                      Taking on a limited number of founding clients
                    </p>
                    <p className="text-gray-600 text-base mb-2">
                      Booking slots: Mondays and Fridays, 15:00–18:00 UK
                    </p>
                    <a
                      href="https://calendar.app.google/Mkrr1BtdEgPpELHX8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition text-base"
                    >
                      Book a free audit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-blue-50 border-2 border-blue-100">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Free 30-minute Spreadsheet Audit
              </h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">
                Free 30-minute Spreadsheet Audit (Google Meet video call). Bring one weekly report you rebuild by hand and share it on screen (a redacted copy is fine). If you can, note where the data comes from and roughly how long it takes each week. I&apos;ll show you the 2–3 changes I&apos;d make first, then email a written summary within 2 working days. No files sent, no recording, no obligation. Questions: carlos.alves.one@gmail.com
              </p>
              <p className="text-sm text-gray-500">
                Founding clients: my first 3 clients get the Reporting Review at a reduced rate in return for an anonymised case study.
              </p>
            </div>

            <div className="card">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                What to Prepare
              </h4>
              <ul className="space-y-2 text-gray-600 text-base">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  One weekly report that takes too long to build
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Notes on where the data comes from
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
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
