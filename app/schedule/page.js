'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const classes = [
  { day: 'Monday', time: '06:30', name: 'Morning HIIT', instructor: 'Sara L.', duration: '45 min', spots: 12, category: 'HIIT' },
  { day: 'Monday', time: '09:00', name: 'Yoga Flow', instructor: 'Nina M.', duration: '60 min', spots: 15, category: 'Yoga' },
  { day: 'Monday', time: '17:30', name: 'Spin Class', instructor: 'Tommi K.', duration: '45 min', spots: 20, category: 'Cardio' },
  { day: 'Monday', time: '19:00', name: 'Boxing Fitness', instructor: 'Alex R.', duration: '50 min', spots: 14, category: 'Combat' },
  { day: 'Tuesday', time: '07:00', name: 'Power Pilates', instructor: 'Nina M.', duration: '55 min', spots: 12, category: 'Pilates' },
  { day: 'Tuesday', time: '12:00', name: 'Lunchtime HIIT', instructor: 'Sara L.', duration: '30 min', spots: 16, category: 'HIIT' },
  { day: 'Tuesday', time: '18:00', name: 'Strength & Conditioning', instructor: 'Tommi K.', duration: '60 min', spots: 10, category: 'Strength' },
  { day: 'Wednesday', time: '06:30', name: 'Early Bird Yoga', instructor: 'Nina M.', duration: '60 min', spots: 12, category: 'Yoga' },
  { day: 'Wednesday', time: '10:00', name: 'Aqua Aerobics', instructor: 'Mia P.', duration: '45 min', spots: 18, category: 'Cardio' },
  { day: 'Wednesday', time: '17:30', name: 'CrossFit WOD', instructor: 'Alex R.', duration: '60 min', spots: 8, category: 'Strength' },
  { day: 'Wednesday', time: '19:30', name: 'Zumba', instructor: 'Sara L.', duration: '50 min', spots: 22, category: 'Dance' },
  { day: 'Thursday', time: '07:00', name: 'Morning Spin', instructor: 'Tommi K.', duration: '45 min', spots: 20, category: 'Cardio' },
  { day: 'Thursday', time: '12:00', name: 'Core & Stretch', instructor: 'Mia P.', duration: '30 min', spots: 15, category: 'Pilates' },
  { day: 'Thursday', time: '18:00', name: 'Kickboxing', instructor: 'Alex R.', duration: '50 min', spots: 14, category: 'Combat' },
  { day: 'Friday', time: '06:30', name: 'HIIT Circuit', instructor: 'Sara L.', duration: '45 min', spots: 12, category: 'HIIT' },
  { day: 'Friday', time: '09:00', name: 'Mindful Yoga', instructor: 'Nina M.', duration: '60 min', spots: 15, category: 'Yoga' },
  { day: 'Friday', time: '17:00', name: 'Friday Spin Party', instructor: 'Tommi K.', duration: '60 min', spots: 20, category: 'Cardio' },
  { day: 'Saturday', time: '09:00', name: 'Weekend Warrior HIIT', instructor: 'Alex R.', duration: '60 min', spots: 16, category: 'HIIT' },
  { day: 'Saturday', time: '11:00', name: 'Yoga & Meditation', instructor: 'Nina M.', duration: '75 min', spots: 12, category: 'Yoga' },
  { day: 'Saturday', time: '13:00', name: 'Aqua Aerobics', instructor: 'Mia P.', duration: '45 min', spots: 18, category: 'Cardio' },
  { day: 'Sunday', time: '10:00', name: 'Sunday Flow Yoga', instructor: 'Nina M.', duration: '75 min', spots: 15, category: 'Yoga' },
  { day: 'Sunday', time: '12:00', name: 'Stretch & Recovery', instructor: 'Mia P.', duration: '45 min', spots: 20, category: 'Pilates' },
];

const categories = ['All', 'HIIT', 'Yoga', 'Cardio', 'Strength', 'Pilates', 'Combat', 'Dance'];

const categoryColors = {
  HIIT: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  Yoga: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Cardio: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Strength: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Pilates: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  Combat: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  Dance: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
};

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState('Monday');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = classes.filter(
    (c) => c.day === activeDay && (activeCategory === 'All' || c.category === activeCategory)
  );

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
            Weekly Timetable
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Class Schedule</h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Find a class that fits your week. New classes added regularly.
          </p>
        </motion.div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Day Filter */}
          <div className="flex overflow-x-auto gap-2 pb-2 mb-6">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeDay === day
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Classes */}
          {filtered.length === 0 ? (
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center text-gray-400 py-12 text-lg"
            >
              No classes found for this filter.
            </motion.p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((c, i) => (
                <motion.div
                  key={`${c.day}-${c.time}-${c.name}`}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl font-bold text-orange-500">{c.time}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[c.category]}`}>
                      {c.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{c.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{c.instructor}</p>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-gray-400">{c.duration}</span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      {c.spots} spots left
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
