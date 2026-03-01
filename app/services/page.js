import Link from 'next/link'

const services = [
  {
    icon: '🏃',
    title: 'Cardio Zone',
    desc: 'Over 50 state-of-the-art treadmills, bikes, ellipticals, and rowing machines for every fitness level.',
    highlights: ['50+ cardio machines', 'Heart rate monitoring', 'Entertainment screens', 'Climate controlled'],
    color: 'from-orange-500/20 to-orange-500/5',
  },
  {
    icon: '🏋️',
    title: 'Weight Room',
    desc: 'A fully equipped free weights area with dumbbells up to 80kg, barbells, and Olympic lifting platforms.',
    highlights: ['Dumbbells up to 80kg', 'Olympic platforms', 'Power racks', 'Cable machines'],
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    icon: '👥',
    title: 'Group Classes',
    desc: 'Over 25 weekly classes ranging from yoga and pilates to HIIT, spin, and boxing — for all levels.',
    highlights: ['25+ weekly classes', 'All fitness levels', 'Expert instructors', 'Small group sizes'],
    color: 'from-green-500/20 to-green-500/5',
  },
  {
    icon: '🏊',
    title: 'Pool & Spa',
    desc: '25m heated swimming pool, jacuzzi, sauna, and steam room to help you recover and relax.',
    highlights: ['25m heated pool', 'Jacuzzi & sauna', 'Steam room', 'Towel service'],
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    icon: '💪',
    title: 'Personal Training',
    desc: 'Work one-on-one with a certified personal trainer who will design a program tailored just for you.',
    highlights: ['Certified trainers', 'Custom programs', 'Progress tracking', 'Flexible scheduling'],
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    icon: '🥗',
    title: 'Nutrition Coaching',
    desc: 'Reach your goals faster with personalised meal plans and ongoing support from our nutrition experts.',
    highlights: ['Personalised plans', 'Dietary analysis', 'Supplement guidance', 'Ongoing support'],
    color: 'from-yellow-500/20 to-yellow-500/5',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg mb-8">
            From cardio to strength, classes to recovery — everything you need to reach your best self.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/membership"
              className="inline-flex justify-center items-center px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
            >
              View Membership Plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-7 py-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-colors"
            >
              Book a Free Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl p-6 bg-gradient-to-br ${s.color} border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow`}
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-1">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-orange-500 font-bold">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-orange-100 mb-6">
            Choose a membership plan and get full access to all our services.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-500 font-bold rounded-xl hover:bg-orange-50 transition-colors"
          >
            View Membership Plans
          </Link>
        </div>
      </section>
    </>
  )
}
