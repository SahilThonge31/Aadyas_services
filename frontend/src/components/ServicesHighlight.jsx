import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// Using Lucid icons for a professional look
import { Target, Users, Presentation, MonitorSmartphone } from 'lucide-react'
import { HiArrowRight } from 'react-icons/hi'

const ServicesHighlight = () => {
  // Content from your screenshot
  const title = 'Comprehensive Services for Social Impact'
  const paragraph =
    'From organizational development to field operations, we provide end-to-end support that enables NGOs and unorganized sectors to operate more effectively and achieve greater impact.'
  
  // The list items, now with matching icons
  const features = [
    {
      icon: Target,
      text: 'Strategic planning and organizational development',
    },
    {
      icon: Users,
      text: 'Field operations and community outreach',
    },
    {
      icon: Presentation,
      text: 'Training and capacity building programs',
    },
    {
      icon: MonitorSmartphone,
      text: 'Technology solutions and digital transformation',
    },
  ]

  // Animation variants for the feature list
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger the animation of each item
      },
    },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    // Section uses bg-background to toggle with light/dark mode
    <section className="bg-background-soft py-10 md:py-14">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT: Text Content --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Eyebrow text, uses primary palette color */}
            <span className="text-primary font-semibold uppercase tracking-wider">
              Services
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary my-4">
              {title}
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              {paragraph}
            </p>

            {/* New Feature Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-background-soft rounded-lg"
                  variants={listItemVariants}
                >
                  <feature.icon
                    className="text-primary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-text-secondary">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Button routes to /services */}
            <Link to="/services">
              <motion.button
                className="btn-primary flex items-center space-x-2 text-lg py-3 px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Services</span>
                <HiArrowRight />
              </motion.button>
            </Link>
          </motion.div>

          {/* --- RIGHT: Image --- */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src="/services-volunteer.avif" // Make sure this path is correct
              alt="Volunteer working for social impact"
              className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-square"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHighlight