import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// Using Lucid icons for a professional look
import {
  Shield,
  Users,
  Lightbulb,
  Presentation,
  MonitorSmartphone,
  ClipboardCheck,
  Check,
} from 'lucide-react'
import { HiArrowRight } from 'react-icons/hi'

// Data for your 6 core services
const servicesData = [
  {
    icon: Shield,
    title: 'NGO Support Services',
    description:
      'Comprehensive support for nonprofit organizations including strategic planning, fundraising assistance, and program development.',
    subServices: [
      'Strategic Planning & Development',
      'Fundraising & Grant Writing',
      'Program Design & Implementation',
    ],
    path: '/services/ngo-support', // Example path
  },
  {
    icon: Users,
    title: 'Labor Services',
    description:
      'Professional workforce solutions for field operations, community outreach, and specialized project implementation.',
    subServices: [
      'Field Operations Team',
      'Community Outreach Specialists',
      'Project Management Support',
    ],
    path: '/services/labor-services', // Example path
  },
  {
    icon: Lightbulb,
    title: 'Consulting Services',
    description:
      'Expert consulting to optimize operations, improve efficiency, and develop sustainable organizational structures.',
    subServices: [
      'Organizational Development',
      'Process Optimization',
      'Impact Measurement',
    ],
    path: '/services/consulting', // Example path
  },
  {
    icon: Presentation,
    title: 'Training & Development',
    description:
      'Capacity building programs to enhance skills, knowledge, and capabilities of your team and beneficiaries.',
    subServices: [
      'Leadership Development',
      'Skills Training Programs',
      'Workshop Facilitation',
    ],
    path: '/services/training', // Example path
  },
  {
    icon: MonitorSmartphone,
    title: 'Technology Solutions',
    description:
      'Digital transformation support including system implementation, data management, and technology training.',
    subServices: [
      'Database Management',
      'Digital Tools Training',
      'Website Development',
    ],
    path: '/services/technology', // Example path
  },
  {
    icon: ClipboardCheck,
    title: 'Research & Evaluation',
    description:
      'Comprehensive research and evaluation services to measure impact, assess needs, and inform strategic decisions.',
    subServices: [
      'Impact Assessment',
      'Needs Analysis',
      'Data Collection & Analysis',
    ],
    path: '/services/research', // Example path
  },
]

// Animation variants for the staggered grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const CoreServicesSection = () => {
  return (
    // Set to bg-background-soft to match your other page sections
    <section className="bg-background-soft py-20 md:py-24">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            Tailored solutions designed to address the unique challenges faced
            by NGOs and unorganized sectors.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              // 'card' class, h-full, and flex-col for equal height and layout
              className="card flex flex-col h-full p-6 bg-background"
            >
              {/* Card Header: Icon and Title */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  {service.title}
                </h3>
              </div>

              {/* Card Body: Description and Sub-services */}
              <p className="text-text-secondary mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.subServices.map((point) => (
                  <li
                    key={point}
                    className="flex items-center space-x-3 text-text-secondary"
                  >
                    <Check
                      size={18}
                      className="text-primary flex-shrink-0"
                    />
                    <span>{point}</span>
                  </li>
))}
              </ul>

              {/* Card Footer: Learn More Button (pushed to bottom) */}
              <div className="mt-auto pt-4">
                <Link
                  to={service.path}
                  className="text-primary font-semibold inline-flex items-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CoreServicesSection