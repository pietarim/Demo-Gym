'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const stats = [
  { value: '2014', label: 'Founded' },
  { value: '500+', label: 'Active Members' },
  { value: '15+', label: 'Expert Staff' },
  { value: '2,000m²', label: 'Gym Floor Area' },
]

const team = [
  {
    name: 'Juhani Virtanen',
    role: 'Founder & CEO',
    initials: 'JV',
    color: 'bg-orange-500',
  },
  {
    name: 'Erika Leinonen',
    role: 'Head of Operations',
    initials: 'EL',
    color: 'bg-blue-500',
  },
  {
    name: 'Alex Rönkkö',
    role: 'Head Personal Trainer',
    initials: 'AR',
    color: 'bg-green-500',
  },
  {
    name: 'Mia Partanen',
    role: 'Nutrition & Wellness Lead',
    initials: 'MP',
    color: 'bg-purple-500',
  },
]

const values = [
  {
    icon: '💪',
    title: 'Empowerment',
    desc: 'We believe fitness is for everyone. We empower people of all ages, backgrounds, and fitness levels to reach their potential.',
  },
  {
    icon: '🤝',
    title: 'Community',
    desc: 'Mitrox Gym Oy is more than a gym — it is a community where members support and motivate each other every single day.',
  },
  {
    icon: '🔬',
    title: 'Science-Backed',
    desc: 'Every programme and recommendation we make is grounded in exercise science, research, and proven methodology.',
  },
  {
    icon: '🌱',
    title: 'Continuous Growth',
    desc: 'We are committed to constant improvement — in our facilities, our services, and ourselves.',
  },
]

const milestones = [
  {
    year: '2014',
    event: 'Mitrox Gym Oy opens its doors with 200m² and 50 founding members.',
  },
  {
    year: '2016',
    event: 'Expansion to 800m², adding dedicated group fitness studios.',
  },
  {
    year: '2018',
    event: 'Launched PT services division — now with 8 certified trainers.',
  },
  {
    year: '2020',
    event:
      'Pivoted to online coaching during the pandemic, serving 300+ remote clients.',
  },
  {
    year: '2022',
    event: 'Grand renovation — 2,000m² state-of-the-art facility opens.',
  },
  {
    year: '2024',
    event:
      'Named "Best Gym in Helsinki" by FitLife Magazine for the second year running.',
  },
]

export default function AboutPage() {
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
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            About Mitrox Gym Oy
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Born in Helsinki in 2014, Mitrox Gym Oy was founded with a simple
            mission: create a world-class fitness environment that is welcoming,
            inspiring, and results-driven for every member.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-extrabold">{s.value}</p>
                <p className="text-sm opacity-90 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              "To inspire and empower every member to live a stronger,
              healthier, and more confident life — through world-class
              facilities, expert coaching, and a community that never lets you
              quit."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet the Leadership Team
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Passionate people dedicated to making Mitrox Gym Oy the best it
              can be.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className={`${member.color} w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center`}
                >
                  <span className="text-2xl font-extrabold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-orange-500 font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-500/30" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 flex-1 shadow-sm">
                    <span className="text-orange-500 font-bold text-sm">
                      {m.year}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Become Part of Our Story
          </h2>
          <p className="text-orange-100 mb-6">
            Join hundreds of members who call Mitrox Gym Oy their home.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-500 font-bold rounded-xl hover:bg-orange-50 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </>
  )
}
