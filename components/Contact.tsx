import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-gray-700">
            Ready to streamline your operations? Let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 mb-4">
              <FaEnvelope className="text-accent-600 text-xl" />
            </div>
            <h3 className="font-semibold text-navy-900 mb-2">Email</h3>
            <a
              href="mailto:carlos.alves.one@gmail.com"
              className="text-accent-600 hover:text-accent-700 transition-colors"
            >
              carlos.alves.one@gmail.com
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 mb-4">
              <FaLinkedin className="text-accent-600 text-xl" />
            </div>
            <h3 className="font-semibold text-navy-900 mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/carlos-alves-one"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-accent-700 transition-colors"
            >
              carlos-alves-one
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 mb-4">
              <FaMapMarkerAlt className="text-accent-600 text-xl" />
            </div>
            <h3 className="font-semibold text-navy-900 mb-2">Location</h3>
            <p className="text-gray-700">London, UK</p>
          </div>
        </div>
      </div>
    </section>
  )
}
