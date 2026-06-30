import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection' // Adjust path if needed
import {
  Check,
  TrendingUp,
  Search,
  DatabaseZap,
  ClipboardList,
  PieChart,
  FileText,
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

const ResearchPage = () => {
  const keyServices = [
    {
      icon: TrendingUp,
      title: 'Impact Assessment',
      description:
        'We design and conduct rigorous evaluations (e.g., RCTs, quasi-experimental) to measure your true social return on investment.',
    },
    {
      icon: Search,
      title: 'Needs Analysis',
      description:
        'Conduct comprehensive community and landscape assessments to identify critical needs, service gaps, and strategic opportunities.',
    },
    {
      icon: DatabaseZap,
      title: 'Data Collection & Analysis',
      description:
        'Deploy quantitative (surveys) and qualitative (FGDs, KIIs) data collection, followed by advanced statistical and thematic analysis.',
    },
    {
      icon: ClipboardList,
      title: 'M&E Framework Development',
      description:
        'Build robust Monitoring & Evaluation (M&E) frameworks and logic models that align with your program goals and donor requirements.',
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description:
        'Transform complex data into clear, compelling reports and interactive dashboards that communicate your story to stakeholders.',
    },
    {
      icon: FileText,
      title: 'Report & Grant Writing',
      description:
        'Translate your evaluation findings into powerful reports, white papers, and grant proposals to secure future funding.',
    },
  ]

  return (
    <div className="pt-20">
      <title>Research & Impact Evaluation Services | Aadyas Services</title>
<meta
  name="description"
  content="Measure your true impact. Our research and evaluation services include impact assessments, needs analysis, and data collection to inform your strategy."
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
              Research & Evaluation
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Comprehensive M&E services to measure impact, assess needs, and
              inform strategic decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary">Measure Your Impact</button>
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
                Turn Data into Actionable Insight
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Understanding *what* works is key to *doing* what works. Our
                M&E services provide you with clear, rigorous, and unbiased
                data to prove your impact, satisfy stakeholders, and
                intelligently guide your future strategy.
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
                      <strong>Impact Assessment:</strong> Prove your effectiveness
                      with robust, evidence-based evaluation.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Needs Analysis:</strong> Identify community needs to
                      design high-impact programs.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary">
                      <strong>Data Collection & Analysis:</strong> Get clean data
                      and clear insights to guide decisions.
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
              Our Research Expertise
            </h2>
            <p className="text-lg md:text-xl text-text-secondary">
              We provide end-to-end research support, from initial design to
              final reporting.
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

export default ResearchPage