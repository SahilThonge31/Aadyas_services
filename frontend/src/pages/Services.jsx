import React from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/CTASection' // <-- ADJUST PATH AS NEEDED

import {
FaUsers,
FaBriefcase,
FaShieldAlt,
FaCogs
} from 'react-icons/fa'
// Import Lucide icons
import {
  GraduationCap,
  Users,
  Presentation,
  Laptop,
  Briefcase,
  Wrench,
  Shield,
  Factory,
  Search,
  ClipboardList,
  Rocket,
  BarChart,
  Check,
  Award,
  LayoutGrid,
  Handshake,
} from 'lucide-react'
import CoreServicesSection from '../components/CoreServicesSection'

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

const Services = () => {

  const serviceProcess = [
    {
      icon: Search,
      title: 'Discovery',
      description:
        'We begin by understanding your unique needs, challenges, and goals.',
    },
    {
      icon: ClipboardList,
      title: 'Planning',
      description:
        'We develop a customized strategy and implementation plan for success.',
    },
    {
      icon: Rocket,
      title: 'Implementation',
      description:
        'Our team works closely with yours to execute the plan with precision.',
    },
    {
      icon: BarChart,
      title: 'Evaluation',
      description:
        'We measure outcomes and provide insights for continuous improvement.',
    },
  ]

  // UPDATED: Your core services
  const serviceCategories = [
    {
      title: 'Education & Training Services',
      icon: GraduationCap,
      color: 'primary',
      services: [
        'Establishment and operation of schools, colleges, and training institutes',
        'Online, distance learning, and certified professional courses',
        'Specialized programs: Skill and reskilling for unorganized sector',
        'Skill development initiatives aligned with different institutes',
        'EdTech-based learning platforms and franchise-driven coaching centres',
      ],
    },
    {
      title: 'Manpower Solutions & HR Services',
      icon: Users,
      color: 'secondary',
      services: [
        'End-to-end recruitment, staffing, and HR consultancy',
        'Skilled, semi-skilled, and unskilled manpower supply',
        'White-collar and blue-collar workforce solutions',
        'Payroll outsourcing, background verification, and onboarding services',
        'Specialized placement for organized sector, Industrial, Security, and Technical sectors',
      ],
    },
  ]

  // UPDATED: Your specialized services with new icons
  const additionalServices = [
    {
      icon: Presentation,
      title: 'Professional Training',
      description:
        'Certified courses and specialized training programs for career advancement',
    },
    {
      icon: Laptop,
      title: 'EdTech Solutions',
      description:
        'Modern technology-driven learning platforms for effective education',
    },
    {
      icon: Briefcase,
      title: 'Corporate HR',
      description:
        'Complete HR management and workforce solutions for businesses',
    },
    {
      icon: Wrench,
      title: 'Industrial Support',
      description:
        'Maintenance and supply of industrial assets with safety focus',
    },
    {
      icon: Shield,
      title: 'Security Services',
      description:
        'Specialized security workforce deployment and management',
    },
    {
      icon: Factory,
      title: 'Technical Services',
      description:
        'Expert technical manpower for industrial and commercial sectors',
    },
  ]

  // NEW: Data for "Why Partner With Us" section
  const whyUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description:
        'Over 10 years of experience understanding industry needs and delivering results.',
    },
    {
      icon: LayoutGrid,
      title: 'Comprehensive Coverage',
      description:
        'End-to-end services that cover all aspects of organizational development.',
    },
    {
      icon: Handshake,
      title: 'Collaborative Approach',
      description:
        'We work as an extension of your team, ensuring knowledge transfer and success.',
    },
  ]

  // --- JSX for the page ---
  return (
    <div className="pt-20">
      <title>Our Services | Aadyas Services</title>
<meta
  name="description"
  content="Explore our core services: NGO Support, Field Operations, Training & Development, Technology Solutions, and Research & Evaluation. Find tailored solutions for your organization."
/>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/30 via-background-soft to-secondary-light/30 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive solutions across Education, Training, Manpower, and
              Industrial sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW: Our Service Process --- */}
      <section className="bg-background py-10 md:py-14">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              A structured approach that ensures effective collaboration and
              successful outcomes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {serviceProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center items-center flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CoreServicesSection/>

      {/* --- REDESIGNED: Core Business Verticals --- */}
      <section className="bg-background-soft py-4 md:py-4">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Core Business Verticals
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Specialized services tailored to your industry's needs.
            </p>
          </motion.div>

          {/* New 2-column layout for core services */}
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card h-full flex flex-col bg-background" // h-full to make cards equal height
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                      category.color === 'primary'
                        ? 'from-primary to-primary-dark'
                        : 'from-secondary to-secondary-dark'
                    } flex items-center justify-center flex-shrink-0`}
                  >
                    <category.icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3 mt-4">
                  {category.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-text-secondary"
                    >
                      <Check className="text-primary mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UPDATED: Specialized Services Grid --- */}
<section className="bg-background py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Core Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-4 tracking-tight">
              Workforce Solutions
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              End-to-end personnel and strategic HR management engineered to empower modern enterprises.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                title: "End-to-End Recruitment",
                description: "Comprehensive talent sourcing strategies matching cross-industry criteria.",
                tags: ["Skilled", "Semi-Skilled", "Unskilled"],
                icon: FaUsers,
              },
              {
                title: "Payroll Outsourcing & HR Consultancy",
                description: "Streamlined operational management ensuring global regulatory compliance.",
                tags: ["Payroll Admin", "Strategic HR", "Compliance"],
                icon: FaBriefcase,
              },
              {
                title: "Background Verification & Onboarding",
                description: "Rigorous security vetting coupled with seamless employee lifecycle integration.",
                tags: ["Vetting Protocols", "Digital Sync", "Risk Mitigation"],
                icon: FaShieldAlt,
              },
              {
                title: "Specialized Placements",
                description: "Targeted critical-role deployments across high-demand industrial verticals.",
                tags: ["Industrial", "Security", "Technical Sectors"],
                icon: FaCogs,
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -6,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                }}
                className="card group bg-background-soft border border-border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-[4px] before:bg-primary before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-primary/5 text-primary p-4 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <service.icon className="text-3xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-text-secondary/20 font-bold text-4xl group-hover:text-primary/10 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {service.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-semibold bg-background border border-border/80 text-text-secondary px-3 py-1 rounded-md tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEW: Why Partner With Us --- */}
      <section className="bg-background-soft py-10 md:py-14">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Partner With Aadyas?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our comprehensive approach and deep understanding make us the
              ideal partner.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {whyUs.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 text-center items-center flex flex-col bg-background"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <reason.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Re-using the shared CTA component --- */}
      <CTASection />
    </div>
  )
}

export default Services