import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection' // Adjust path if needed
import {
  Check,
  Megaphone,
  Rocket,
  Database,
  Presentation,
  GanttChartSquare,
  Clock,
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

const LaborServicesPage = () => {
  // Your 6 key services
  const keyServices = [
    {
      icon: Megaphone,
      title: 'Community Outreach',
      description:
        'Skilled community mobilizers and outreach specialists to engage with local communities and build trust.',
    },
    {
      icon: Rocket,
      title: 'Project Implementation',
      description:
        'End-to-end project execution with dedicated teams for monitoring, evaluation, and quality assurance.',
    },
    {
      icon: Database,
      title: 'Data Collection',
      description:
        'Professional data collection services including surveys, assessments, and impact measurement.',
    },
    {
      icon: Presentation,
      title: 'Training & Capacity Building',
      description:
        'Local capacity building and training programs to ensure sustainable program implementation.',
    },
    {
      icon: GanttChartSquare,
      title: 'Monitoring & Evaluation',
      description:
        'Continuous monitoring and evaluation systems to track progress and ensure program effectiveness.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Round-the-clock support and emergency response capabilities for critical field operations.',
    },
  ]

  return (
    <div className="pt-20">
      <title>Field Operations & Labor Services | Aadyas Services</title>
<meta
  name="description"
  content="Get professional workforce solutions for field operations. We provide trained field staff, community outreach teams, and project support across 28+ states."
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
              Field Operations Services
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Professional workforce solutions for field operations, community
              outreach, and specialized project implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary">Get Field Support</button>
              </Link>
              <Link to="/services">
                <button className="btn-secondary">All Services</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Intro Section --- */}
      <section className="bg-background py-10 md:py-14">
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
                Professional Ground Support
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our field operations services provide you with experienced,
                trained professionals who understand grassroots work and
                community engagement. We ensure your programs reach their
                intended beneficiaries effectively and sustainably.
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
                      <strong>Trained Field Staff:</strong> Experienced
                      professionals with local knowledge and cultural
                      sensitivity.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Multi-State Coverage:</strong> Operations across
                      28+ states with local language capabilities.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Quality Assurance:</strong> Regular monitoring
                      and quality control systems.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Key Services Section --- */}
      <section className="bg-background-soft py-10 md:py-14">
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
              Field Operations Expertise
            </h2>
            <p className="text-lg md:text-xl text-text-secondary">
              Comprehensive field support services to ensure effective
              implementation of your programs.
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
            {keyServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="card flex flex-col h-full p-6 bg-background"
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

export default LaborServicesPage