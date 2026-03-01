'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const contactDetails = [
  { icon: '📍', lines: ['123 Fitness Street', 'Helsinki 00100, Finland'] },
  { icon: '📞', lines: ['+358 40 123 4567'] },
  { icon: '✉️', lines: ['info@mitroxgym.fi'] },
]

const openingHours = [
  'Mon–Fri: 6:00–22:00',
  'Sat: 8:00–20:00',
  'Sun: 9:00–18:00',
]

const subjects = [
  'General Enquiry',
  'Book a Free Trial Session',
  'Membership Information',
  'Personal Training',
  'Group Classes',
  'Corporate Membership',
  'Feedback',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: subjects[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Have a question, want to book a tour, or just say hello? We'd love
            to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600 dark:text-green-300 text-sm">
                    Thank you for reaching out, {form.name}. We'll get back to
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        name: '',
                        email: '',
                        subject: subjects[0],
                        message: '',
                      })
                    }}
                    className="mt-4 text-sm text-green-600 dark:text-green-400 underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5"
                >
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-400 mb-3">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    {contactDetails.map((item) => (
                      <div key={item.icon} className="flex items-start gap-2">
                        <span className="text-base mt-0.5">{item.icon}</span>
                        <div>
                          {item.lines.map((line) => (
                            <p
                              key={line}
                              className="text-sm text-gray-700 dark:text-gray-200"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5"
                >
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-400 mb-3">
                    Opening Hours
                  </h3>
                  <div className="flex items-start gap-2">
                    <span className="text-base mt-0.5">🕐</span>
                    <div className="space-y-1">
                      {openingHours.map((line) => (
                        <p
                          key={line}
                          className="text-sm text-gray-700 dark:text-gray-200"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-72 border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://maps.google.com/maps?q=Helsinki,Finland&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mitrox Gym Oy location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
