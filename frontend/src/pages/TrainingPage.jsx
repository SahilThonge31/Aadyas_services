import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection' // Adjust path if needed
import {
  Check,
  Award,
  Star,
  Presentation,
  Users,
  ClipboardList,
  Laptop,
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

const TrainingPage = () => {
  const keyServices = [
    {
      icon: Award,
      title: 'Leadership Development',
      description:
        'Custom programs for new managers and senior leaders focusing on strategic thinking, team motivation, and decision-making.',
    },
    {
      icon: Star,
      title: 'Core Skills Training',
      description:
        'Practical, hands-on training in project management, effective communication, fundraising, and digital literacy.',
    },
    {
      icon: Presentation,
      title: 'Workshop Facilitation',
      description:
        'Expert-led, engaging workshops designed to tackle specific challenges, foster collaboration, and generate actionable outcomes.',
    },
    {
      icon: Users,
      title: 'Community & Beneficiary Training',
      description:
        'Train-the-trainer and direct beneficiary training programs to ensure long-term community adoption and empowerment.',
    },
    {
      icon: ClipboardList,
      title: 'Training Needs Assessment',
      description:
        'We identify skill gaps within your organization to design a training curriculum that delivers real-world results.',
    },
    {
      icon: Laptop,
      title: 'E-Learning Solutions',
      description:
        'Develop and deploy scalable online learning modules and platforms for remote and flexible team development.',
    },
  ]

  return (
    <div className="pt-20">
      <title>Training & Development Programs | Aadyas Services</title>
<meta
  name="description"
  content="Invest in your team. We offer expert leadership development, skills training, and custom workshop facilitation to build your organization's capacity."
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
              Training & Development
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Capacity building programs to enhance skills, knowledge, and
              capabilities of your team and beneficiaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary">Book a Workshop</button>
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
                Invest in Your People, Amplify Your Impact
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our training programs are transformative experiences. We empower
                your team with practical, on-the-ground skills and build
                leadership capacity, ensuring your organization can meet
                challenges and scale its impact sustainably.
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
                      <strong>Leadership Development:</strong> Cultivate strong,
                      visionary leaders within your team.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Skills Training Programs:</strong> Equip staff with
                      job-specific, practical skills for immediate results.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Workshop Facilitation:</strong> Engage your teams
                      in dynamic, collaborative problem-solving sessions.
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
              Our Training Expertise
            </h2>
            <p className="text-lg md:text-xl text-text-secondary">
              From grassroots workers to senior management, we offer a complete
              suite of training solutions.
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

export default TrainingPage