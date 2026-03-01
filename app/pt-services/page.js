'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const trainers = [
  {
    name: 'Alex Rönkkö',
    initials: 'AR',
    title: 'Head Personal Trainer',
    specialties: ['Strength & Power', 'Sports Performance', 'Body Composition'],
    bio: 'With 8+ years of experience and a BSc in Sports Science, Alex specialises in transforming athletes and everyday people alike. Former national-level powerlifter.',
    color: 'bg-orange-500',
    certs: ['CSCS', 'NSCA-CPT', 'FMS Level 2'],
  },
  {
    name: 'Nina Mäkinen',
    initials: 'NM',
    title: 'Wellness & Yoga Trainer',
    specialties: ['Yoga & Mobility', 'Stress Management', 'Post-rehab Training'],
    bio: 'Nina blends mindfulness with movement science to help clients build strength, flexibility, and mental resilience. 500hr RYT certified yoga teacher.',
    color: 'bg-blue-500',
    certs: ['500hr RYT', 'NASM-CPT', 'Pre/Post Natal'],
  },
  {
    name: 'Tommi Koskinen',
    initials: 'TK',
    title: 'Performance & Cardio Specialist',
    specialties: ['HIIT & Cardio', 'Weight Loss', 'Endurance Training'],
    bio: 'Tommi is passionate about making cardio fun and effective. A former marathon runner with a talent for designing programmes that torch calories and build endurance.',
    color: 'bg-green-500',
    certs: ['ACSM-CPT', 'Precision Nutrition L1', 'TRX Certified'],
  },
];

const packages = [
  {
    icon: '🎯',
    name: '1-on-1 Training',
    desc: 'Fully personalised sessions with your dedicated trainer, focused 100% on your goals.',
    price: 'From €65/session',
    features: ['Initial fitness assessment', 'Custom training plan', 'Nutrition guidance', 'Weekly check-ins', 'Progress tracking'],
  },
  {
    icon: '👥',
    name: 'Duo / Small Group',
    desc: 'Train with a friend or small group (2–4 people) and split the cost without splitting the quality.',
    price: 'From €40/person',
    features: ['Semi-personalised programming', 'Shared sessions', 'Group accountability', 'Nutritional tips', 'Fun group dynamic'],
  },
  {
    icon: '💻',
    name: 'Online Coaching',
    desc: 'Get expert coaching wherever you are with customised plans, video feedback, and weekly support.',
    price: 'From €89/month',
    features: ['Custom workout plan', 'Video form check', 'Weekly plan updates', 'WhatsApp support', 'Nutrition coaching'],
  },
];

const steps = [
  { step: '01', title: 'Book a Free Consultation', desc: 'Tell us about your goals, experience, and schedule. No commitment required.' },
  { step: '02', title: 'Get Your Assessment', desc: 'Your trainer will assess your current fitness level and movement patterns.' },
  { step: '03', title: 'Receive Your Custom Plan', desc: 'We design a programme built exclusively around you and your goals.' },
  { step: '04', title: 'Train & Transform', desc: 'Start your sessions and watch the results roll in with expert guidance every step of the way.' },
];

export default function PTServicesPage() {
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
            Personal Training
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Train Smarter, Not Harder
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Work with certified experts who create programmes built around your unique goals, lifestyle, and body.
          </p>
        </motion.div>
      </section>

      {/* Trainers */}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Your Trainers</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Our team of certified professionals is dedicated to your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`${t.color} h-32 flex items-center justify-center`}>
                  <span className="text-5xl font-extrabold text-white opacity-60">{t.initials}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                  <p className="text-orange-500 font-medium text-sm mb-3">{t.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{t.bio}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-1">
                      {t.specialties.map((s) => (
                        <span key={s} className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-1">
                      {t.certs.map((c) => (
                        <span key={c} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Training Packages</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Choose the format that works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-orange-500 font-semibold text-sm mb-3">{pkg.price}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{pkg.desc}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-orange-500 font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Getting started is simple — here is the process.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors text-lg"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
