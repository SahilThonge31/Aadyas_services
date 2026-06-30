import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection' // Adjust path if needed
import {
  Check,
  Target,
  Shield,
  Cog,
  Users,
  BarChart,
  LineChart,
} from 'lucide-react'

// Animation variants for staggered lists
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

const NgoSupportPage = () => {
  // Your 6 key services
  const keyServices = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description:
        'Develop comprehensive strategic plans with clear objectives, measurable outcomes, and sustainable implementation roadmaps.',
    },
    {
      icon: Shield,
      title: 'Governance & Compliance',
      description:
        'Strengthen board governance, ensure regulatory compliance, and establish transparent accountability frameworks.',
    },
    {
      icon: Cog,
      title: 'Systems & Processes',
      description:
        'Design and implement efficient operational systems, workflows, and quality management processes.',
    },
    {
      icon: Users,
      title: 'Team Development',
      description:
        'Build high-performing teams through leadership development, skills training, and organizational culture enhancement.',
    },
    {
      icon: BarChart,
      title: 'Performance Management',
      description:
        'Establish monitoring and evaluation frameworks to track progress and demonstrate impact effectively.',
    },
    {
      icon: LineChart,
      title: 'Sustainability Planning',
      description:
        'Develop financial sustainability strategies and diversified funding models for long-term organizational health.',
    },
  ]

  return (
    <div className="pt-20">
      <title>NGO Support & Organizational Development | Aadyas Services</title>
<meta
  name="description"
  content="Strengthen your NGO's foundation. We offer expert strategic planning, governance, and systems development to enhance your capacity and create lasting impact."
/>
      {/* --- Hero Section --- */}
      <section className="bg-gradient-to-br from-primary-light/30 via-background-soft to-secondary-light/30 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Organizational Development Services
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Build stronger, more effective organizations with our comprehensive
              development services designed for NGOs and social sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary">Get Started</button>
              </Link>
              <Link to="/services">
                <button className="btn-secondary">All Services</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Intro Section --- */}
      <section className="bg-background py-20 md:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Strengthen Your Organization's Foundation
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our organizational development services help NGOs and social
                organizations build robust structures, improve governance, and
                enhance their capacity to create lasting impact. We work with
                you to assess current capabilities and design sustainable
                growth strategies.
              </p>
            </motion.div>

            {/* Right Content - Key Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="bg-background-soft p-8 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Strategic Planning:</strong> Develop clear
                      vision, mission, and strategic roadmaps.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Governance Strengthening:</strong> Enhance board
                      effectiveness and organizational oversight.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Systems & Processes:</strong> Streamline
                      operations and improve efficiency.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Key Services Section --- */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Key Services
            </h2>
            <p className="text-lg md:text-xl text-text-secondary">
              Comprehensive solutions to build organizational excellence and
              sustainable impact.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {keyServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="card flex flex-col h-full p-6  bg-background"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0 w-fit mb-4">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <CTASection />
    </div>
  )
}

export default NgoSupportPage