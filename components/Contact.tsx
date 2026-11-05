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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold text-accent-500 tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your back-office operations? Book a free 30-minute Spreadsheet Audit 
            or reach out to discuss your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-navy-900 mb-2"
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
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg 
                           focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none 
                           transition text-gray-900 text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-navy-900 mb-2"
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
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg 
                           focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none 
                           transition text-gray-900 text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-base font-medium text-navy-900 mb-2"
                >
                  Company / Operation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg 
                           focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none 
                           transition text-gray-900 text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-navy-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg 
                           focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none 
                           transition text-gray-900 text-base resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-base"
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-50 p-3 rounded-lg">
                  <FaEnvelope className="text-accent-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Email</h3>
                  <a
                    href="mailto:carlos.alves.one@gmail.com"
                    className="text-accent-500 hover:text-accent-600 transition-colors text-base"
                  >
                    carlos.alves.one@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-50 p-3 rounded-lg">
                  <FaLinkedin className="text-accent-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/carlos-alves-one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-600 transition-colors text-base"
                  >
                    carlos-alves-one
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-50 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-accent-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Location</h3>
                  <p className="text-gray-700 text-base">London, UK</p>
                </div>
              </div>
            </div>

            <div className="bg-accent-50 p-6 rounded-xl border-2 border-accent-200">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <FaClock className="text-accent-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Availability</h3>
                  <p className="text-gray-700 text-base">
                    Currently accepting new consultancy engagements. All projects start with a 
                    free 30-minute Spreadsheet Audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
