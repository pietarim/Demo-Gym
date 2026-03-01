'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Active Members' },
  { value: '25+', label: 'Weekly Classes' },
  { value: '15+', label: 'Expert Trainers' },
]

const features = [
  {
    icon: '🏋️',
    title: 'State-of-the-Art Equipment',
    desc: 'Train with the latest cardio machines, free weights, and strength equipment.',
  },
  {
    icon: '👥',
    title: 'Expert Instructors',
    desc: 'Our certified trainers are here to guide and motivate you every step of the way.',
  },
  {
    icon: '📅',
    title: 'Flexible Schedules',
    desc: 'Morning, afternoon, or evening — we have classes that fit your lifestyle.',
  },
  {
    icon: '🥗',
    title: 'Nutrition Guidance',
    desc: 'Complement your training with personalised nutrition plans and coaching.',
  },
]

const testimonials = [
  {
    name: 'Anna K.',
    role: 'Member since 2022',
    text: 'Mitrox Gym Oy changed my life. The trainers are amazing and the community is so supportive!',
    avatar: 'AK',
  },
  {
    name: 'Mikael R.',
    role: 'Elite Member',
    text: 'Best gym in the city, hands down. Clean, modern, and the PT sessions are world class.',
    avatar: 'MR',
  },
  {
    name: 'Liisa P.',
    role: 'Member since 2021',
    text: "I've lost 20kg and gained so much confidence. I can't imagine my life without Mitrox Gym Oy.",
    avatar: 'LP',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-orange-400 font-semibold uppercase tracking-wider text-sm mb-4"
            >
              Welcome to Mitrox Gym Oy
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Build Your <span className="text-orange-500">Strongest</span> Self
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              World-class equipment, expert coaches, and a community that lifts
              you up. Start your transformation today.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/membership"
                className="inline-flex justify-center items-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors text-lg"
              >
                Join Now
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center items-center px-8 py-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-colors text-lg"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold">{s.value}</p>
                <p className="text-sm opacity-90 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Mitrox Gym Oy?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Everything you need to reach your goals, all under one roof.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Members Say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-orange-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Join hundreds of members who have already transformed their lives.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center px-10 py-4 bg-white text-orange-500 font-bold rounded-xl hover:bg-orange-50 transition-colors text-lg"
          >
            View Membership Plans
          </Link>
        </div>
      </section>
    </>
  )
}
