import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection' // Adjust path if needed
import {
  Check,
  Database,
  AppWindow,
  MonitorSmartphone,
  Cloud,
  Shield,
  Map,
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

const TechnologyPage = () => {
  const keyServices = [
    {
      icon: Database,
      title: 'Database Management',
      description:
        'Design and manage secure, scalable databases (CRM, beneficiary tracking) to organize your most valuable asset: your data.',
    },
    {
      icon: AppWindow,
      title: 'Digital Tools Training',
      description:
        'Empower your team with hands-on training for modern collaboration suites (Google Workspace, M365) and project tools.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Website Development',
      description:
        'Build professional, mobile-responsive websites that clearly communicate your mission, engage donors, and serve your community.',
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Support',
      description:
        'Move your infrastructure to the cloud for enhanced security, accessibility, and cost savings. We provide full migration and IT support.',
    },
    {
      icon: Shield,
      title: 'Data Security & Compliance',
      description:
        'Protect your organization and beneficiaries with robust data security protocols and compliance (e.g., GDPR, data laws) audits.',
    },
    {
      icon: Map,
      title: 'GIS & Mapping Solutions',
      description:
        'Leverage geographic information systems (GIS) to visualize your impact, map resources, and plan field operations effectively.',
    },
  ]

  return (
    <div className="pt-20">
      <title>Technology Solutions for NGOs | Aadyas Services</title>
<meta
  name="description"
  content="Drive your mission with our technology solutions. We specialize in digital transformation, database management, digital tools training, and website development for NGOs."
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
              Technology Solutions
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Digital transformation support including system implementation,
              data management, and technology training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary">Start Digital Transformation</button>
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
                Harness Technology for Social Good
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                We bridge the technology gap for NGOs and social sectors,
                implementing solutions that streamline operations, enhance
                outreach, and dramatically improve data-driven
                decision-making.
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
                      <strong>Database Management:</strong> Secure and organize
                      your beneficiary and donor data effectively.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Digital Tools Training:</strong> Empower your team to
                      use modern technology with confidence.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Website Development:</strong> Build a compelling
                      online presence to showcase your impact.
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Technology Services
            </h2>
            <p className="text-lg md:text-xl text-text-secondary">
              From infrastructure to analytics, we are your end-to-end
              technology partner.
            </p>
          </motion.div>

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

export default TechnologyPage