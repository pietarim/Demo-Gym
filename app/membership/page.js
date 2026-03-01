'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 29,
    annualPrice: 24,
    color: 'border-gray-200 dark:border-gray-700',
    badge: null,
    features: [
      { text: 'Gym floor access', included: true },
      { text: 'Locker room access', included: true },
      { text: 'Free weights & machines', included: true },
      { text: 'Cardio zone', included: true },
      { text: 'Group classes', included: false },
      { text: 'Pool & spa access', included: false },
      { text: 'Personal trainer session', included: false },
      { text: 'Nutrition consultation', included: false },
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    annualPrice: 41,
    color: 'border-orange-500',
    badge: 'Most Popular',
    features: [
      { text: 'Gym floor access', included: true },
      { text: 'Locker room access', included: true },
      { text: 'Free weights & machines', included: true },
      { text: 'Cardio zone', included: true },
      { text: 'Group classes (unlimited)', included: true },
      { text: 'Pool & spa access', included: true },
      { text: 'Personal trainer session', included: false },
      { text: 'Nutrition consultation', included: false },
    ],
  },
  {
    name: 'Elite',
    monthlyPrice: 89,
    annualPrice: 74,
    color: 'border-gray-700 dark:border-gray-500',
    badge: 'Best Value',
    features: [
      { text: 'Gym floor access', included: true },
      { text: 'Locker room access', included: true },
      { text: 'Free weights & machines', included: true },
      { text: 'Cardio zone', included: true },
      { text: 'Group classes (unlimited)', included: true },
      { text: 'Pool & spa access', included: true },
      { text: '4x Personal trainer sessions/mo', included: true },
      { text: 'Monthly nutrition consultation', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'Is there a joining fee?',
    a: 'No joining fee when you sign up for a 12-month membership. Monthly plans have a one-time €20 activation fee.',
  },
  {
    q: 'Can I freeze my membership?',
    a: 'Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Monthly memberships can be cancelled with 30 days written notice. Annual memberships are non-refundable.',
  },
  {
    q: 'Can I bring a guest?',
    a: 'Pro and Elite members can bring 2 guests per month at no extra charge. Additional guest passes are €10 each.',
  },
]

export default function MembershipPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm mb-3">
            Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Membership Plans
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Flexible plans for every goal and budget. No hidden fees, cancel
            anytime.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium ${!annual ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              <span
                className={`absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow transition-transform ${annual ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span
              className={`text-sm font-medium ${annual ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}
            >
              Annual{' '}
              <span className="text-orange-500 font-semibold">(Save 15%)</span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 ${plan.color} p-8 bg-white dark:bg-gray-800 ${
                  plan.badge === 'Most Popular'
                    ? 'shadow-2xl scale-105'
                    : 'shadow-sm'
                } transition-transform`}
              >
                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-orange-500">
                    €{annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 pb-1">/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-center gap-3 text-sm"
                    >
                      {f.included ? (
                        <span className="text-green-500 font-bold">✓</span>
                      ) : (
                        <span className="text-gray-300 dark:text-gray-600 font-bold">
                          ✗
                        </span>
                      )}
                      <span
                        className={
                          f.included
                            ? 'text-gray-700 dark:text-gray-200'
                            : 'text-gray-400'
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                    plan.badge === 'Most Popular'
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm"
              >
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
