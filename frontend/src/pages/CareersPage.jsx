import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection' // Adjust path if needed
import {
  Heart,
  TrendingUp,
  Users,
  Globe,
  Clock,
  Shield,
  HeartHandshake,
  Lightbulb,
  Handshake,
  Send,
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

const CareersPage = () => {
  // Data for "Why Choose Us"
  const benefits = [
    {
      icon: Heart,
      title: 'Meaningful Work',
      description:
        'Every project you work on directly contributes to social good and community development.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description:
        'Continuous learning, skill development, and career advancement in the social impact sector.',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description:
        'Work with passionate, like-minded professionals who share your commitment to social change.',
    },
    {
      icon: Globe,
      title: 'National Impact',
      description:
        'Opportunity to work on projects spanning across 28+ states and impact millions of lives.',
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description:
        'Flexible working arrangements and policies that support your personal well-being.',
    },
    {
      icon: Shield,
      title: 'Competitive Benefits',
      description:
        'Comprehensive benefits package including health insurance, professional development funds, and more.',
    },
  ]

  // Data for "Our Culture"
  const cultureValues = [
    {
      icon: HeartHandshake,
      title: 'Inclusivity & Diversity',
      description:
        'We celebrate diverse perspectives and create an environment where everyone belongs.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Learning',
      description:
        'We encourage creative problem-solving and invest in continuous learning and development.',
    },
    {
      icon: Handshake,
      title: 'Transparency & Trust',
      description:
        'Open communication, honest feedback, and mutual respect form the foundation of our relationships.',
    },
  ]

  // Data for "Hiring Process"
  const hiringProcess = [
    {
      step: '1',
      title: 'Application',
      description:
        'Submit your application through our contact form or email with your resume and cover letter.',
    },
    {
      step: '2',
      title: 'Initial Review',
      description:
        'Our team reviews your application and experience to assess fit with the role and our mission.',
    },
    {
      step: '3',
      title: 'Interview Process',
      description:
        'Multiple rounds of interviews including technical, cultural fit, and leadership team discussions.',
    },
    {
      step: '4',
      title: 'Decision & Onboarding',
      description:
        'Final decision, offer discussion, and comprehensive onboarding to welcome you to the team.',
    },
  ]

  return (
    <div className="pt-10">
      <title>Careers at Aadyas Services | Join Our Social Impact Team</title>
<meta
  name="description"
  content="Explore careers at Aadyas Services. We're hiring passionate individuals for social impact jobs in India. View our culture, benefits, and hiring process."
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
              Join Our Mission of Creating Impact
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Be part of a team that's dedicated to empowering NGOs and creating
              meaningful change in communities across India.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <button className="btn-primary">View Open Positions</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- "Why Choose Us?" Section --- */}
      <section className="bg-background-soft py-10 md:py-14">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Choose Aadyas Services?
            </h2>
            <p className="text-lg text-text-secondary">
              When you join our team, you're not just taking a job – you're
              joining a mission to create positive social impact.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="card p-6 bg-background"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0 w-fit mb-4">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- "Our Culture & Values" Section --- */}
      <section className="bg-background py-10 md:py-14">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Our Culture & Values
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                We've built a culture where every team member feels valued,
                empowered, and inspired to do their best work.
              </p>
              
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {cultureValues.map((value) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-secondary/10 text-secondary p-3 rounded-full flex-shrink-0">
                      <value.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {value.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <img
                src="/Culture_Image.jpg"
                alt="Our Team Culture at Aadyas Services"
                className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- "Our Hiring Process" Section --- */}
      <section className="bg-background-soft py-10 md:py-14">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg text-text-secondary">
              We've designed a transparent and efficient process to help you
              understand what to expect.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {hiringProcess.map((step) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="card p-6 bg-background"
              >
                <div className="text-primary font-bold text-6xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <i className="text-text-secondary leading-relaxed">
                  {step.description}
                </i>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-4 md:py-4">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto bg-background-soft p-10 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We're always looking for talented individuals who share our passion
              for social impact. Send us your resume and we'll keep you in mind
              for future opportunities.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 py-3 px-6 mx-auto" // btn-secondary to stand out
              >
                <Send size={20} />
                <span>Send Your Resume</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <CTASection />
    </div>
  )
}

export default CareersPage