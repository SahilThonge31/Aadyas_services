import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// Import the icons from Lucid React
import { Sparkles, Users, TrendingUp } from 'lucide-react'
// Keep using HiArrowRight for the button for consistency
import { HiArrowRight } from 'react-icons/hi'

// Animation variants for the staggered list
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each item will appear 0.2s after the previous
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const CTASection = () => {
  return (
    // We'll still use bg-background-soft to match the StatsSection
    <section className="bg-background-soft py-4 md:py-4">
      <div className="section-container">
        {/* Use the 'card' as a base container for the new layout */}
        <motion.div
          className="card overflow-hidden bg-background" // Add overflow-hidden for cleaner animations
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* New 2-column grid layout */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center p-6 md:p-10">
            {/* --- LEFT COLUMN: TEXT --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Partner with us to create sustainable impact. We provide the
                tools, the team, and the strategy to help you succeed.
              </p>
            </motion.div>

            {/* --- RIGHT COLUMN: BENEFITS & BUTTON --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col space-y-8" // Increased spacing
            >
              {/* Stagger-animated list using Lucid icons */}
              <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-4"
              >
                <motion.li
                  variants={listItemVariants}
                  className="flex items-center space-x-3"
                >
                  <Sparkles className="text-primary flex-shrink-0" size={24} />
                  <span className="text-text-primary text-lg font-medium">
                    Innovative Solutions
                  </span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  className="flex items-center space-x-3"
                >
                  <Users className="text-primary flex-shrink-0" size={24} />
                  <span className="text-text-primary text-lg font-medium">
                    Dedicated Expert Team
                  </span>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  className="flex items-center space-x-3"
                >
                  <TrendingUp
                    className="text-primary flex-shrink-0"
                    size={24}
                  />
                  <span className="text-text-primary text-lg font-medium">
                    Proven Growth Strategies
                  </span>
                </motion.li>
              </motion.ul>

              {/* Button */}
              <Link to="/contact" className="self-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center space-x-2 py-3 px-8 text-lg"
                >
                  <span>Get Started Today</span>
                  <HiArrowRight />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection