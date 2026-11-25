'use client'

import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaCheckCircle, FaPaperPlane } from 'react-icons/fa'

const BOOKING_URL = 'https://calendar.app.google/C1hnZvX1jpWYd2bv6'

// No-backend form endpoint (FormSubmit): submissions are emailed to the
// enquiry inbox. First submission triggers a one-time activation email to
// that inbox — nothing is delivered until the link in it is clicked.
const FORM_ACTION = 'https://formsubmit.co/carlos.alves.one@gmail.com'
const FORM_AJAX = 'https://formsubmit.co/ajax/carlos.alves.one@gmail.com'

export default function HealthContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  const messageText = () => `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch(FORM_AJAX, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New enquiry from carlosalves.uk',
          _template: 'table',
          _captcha: 'false',
          _honey: '',
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data || (data.success !== 'true' && data.success !== true)) {
        throw new Error('FormSubmit did not confirm the submission')
      }
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleCopy = () => {
    navigator.clipboard?.writeText(messageText())
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-16 px-7 sm:px-10 lg:px-16 bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-heading">Start with a conversation, not a contract</h2>
          <p className="section-intro mx-auto text-sm">
            Book a free 30-minute Weekly-Report Walkthrough on my calendar, or send a quick note below. I reply within one working day.
          </p>
        </div>

        <div className="mb-10 bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-300">
              <FaCalendarAlt /> Google Calendar
            </div>
            <p className="text-xl sm:text-2xl font-bold">Book a free walkthrough</p>
            <p className="text-xs text-slate-300">
              Mondays and Fridays, 3–6pm (UK time). Different time? Send a note below.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base text-center whitespace-nowrap self-start sm:self-auto"
          >
            Open booking calendar →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200">
            <h3 className="text-base font-bold text-navy-900 mb-0.5">Send a message</h3>
            <p className="text-xs text-gray-500 mb-5">Your message is sent directly from this page — no email app needed.</p>

            <form onSubmit={handleSubmit} action={FORM_ACTION} method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="New enquiry from carlosalves.uk" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
              <div>
                <label htmlFor="health-name" className="block text-xs font-semibold text-navy-900 mb-1">
                  Your name *
                </label>
                <input
                  type="text"
                  id="health-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none text-gray-900 text-sm"
                />
              </div>

              <div>
                <label htmlFor="health-email" className="block text-xs font-semibold text-navy-900 mb-1">
                  Email address *
                </label>
                <input
                  type="email"
                  id="health-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none text-gray-900 text-sm"
                />
              </div>

              <div>
                <label htmlFor="health-message" className="block text-xs font-semibold text-navy-900 mb-1">
                  What weekly report or problem would you like help with? *
                </label>
                <textarea
                  id="health-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="e.g. Our weekly appointments vs staffing report is typed by hand from booking and rota exports..."
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none text-gray-900 text-sm resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary text-xs sm:text-sm flex items-center justify-center gap-1.5 flex-1 py-2.5 disabled:opacity-60"
                >
                  <FaPaperPlane className="text-xs" /> {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn-secondary text-xs sm:text-sm flex items-center justify-center gap-1.5 py-2.5"
                >
                  {copied ? <><FaCheckCircle /> Copied</> : 'Copy message text'}
                </button>
              </div>

              {status === 'sent' && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <p className="font-bold">Message sent — thank you.</p>
                  <p className="mt-0.5">I reply within one working day. If you don’t hear back, email carlos.alves.one@gmail.com directly.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-900">
                  <p className="font-bold">Sorry — your message didn’t send.</p>
                  <p className="mt-0.5">Please try again, or email carlos.alves.one@gmail.com directly.</p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-3">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
              <div className="bg-accent-50 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-accent-500 text-base" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-900">Email</h3>
                <a
                  href="mailto:carlos.alves.one@gmail.com"
                  className="text-accent-600 hover:text-accent-700 text-xs font-semibold underline"
                >
                  carlos.alves.one@gmail.com
                </a>
                <p className="text-[11px] text-gray-500 mt-0.5">Replies within one working day</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
              <div className="bg-accent-50 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaLinkedin className="text-accent-500 text-base" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-900">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/carlos-alves-one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 text-xs font-semibold underline"
                >
                  linkedin.com/in/carlos-alves-one
                </a>
                <p className="text-[11px] text-gray-500 mt-0.5">Connect or message me there</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
              <div className="bg-accent-50 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-accent-500 text-base" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-900">Location</h3>
                <p className="text-xs text-gray-700 font-semibold">London, UK · serving clients across the UK</p>
              </div>
            </div>

            <div className="bg-accent-50 p-5 rounded-2xl border border-accent-200 shadow-sm flex items-start gap-3">
              <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaClock className="text-accent-500 text-base" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-900">Availability</h3>
                <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
                  Walkthroughs on <strong>Mondays and Fridays, 3–6pm</strong>. Need another time? Just email me with a couple of options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
