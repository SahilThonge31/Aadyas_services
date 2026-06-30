import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import {
  FaHandshake,
  FaUserCheck,
  FaChalkboardTeacher,
  FaSmileBeam,
} from 'react-icons/fa'

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    {
      icon: FaHandshake,
      number: 100,
      suffix: '+',
      label: 'Industry Partners',
    },
    {
      icon: FaUserCheck,
      number: 500,
      suffix: '+',
      label: 'Successful Placements',
    },
    {
      icon: FaChalkboardTeacher,
      number: 50,
      suffix: '+',
      label: 'Training Programs',
    },
    {
      icon: FaSmileBeam,
      number: 99,
      suffix: '%',
      label: 'Client Satisfaction',
    },
  ]

  return (
    <section className="bg-background-soft py-10">
      <div className="section-container">
        {/* --- NEW HEADING --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We are proud of the impact we've made and the relationships we've
            built.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              // We'll wrap each stat in a "card" for better visual separation
              className="card flex flex-col items-center text-center bg-background"
            >
              {/* NEW: Icon now uses the primary theme color */}
              <stat.icon className="text-4xl text-primary mb-4" />

              {/* NEW: Number now uses the primary text color */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              {/* NEW: Label now uses the secondary text color */}
              <p className="text-lg text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection 