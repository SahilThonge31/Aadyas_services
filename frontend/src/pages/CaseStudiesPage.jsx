import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Import Lucide icons
import {
  CheckCircle,
  Heart,
  Map,
  Percent,
  Check,
  Calendar,
  MapPin,
  GraduationCap,
  HeartPulse,
  TrendingUp,
  MonitorSmartphone,
} from 'lucide-react'

// --- Animation Variants ---
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

// --- Data for Featured Case Studies ---
const featuredStories = [
  {
    tags: ['Education', 'Rural Development', 'Technology'],
    title: 'Digital Learning Revolution in Rural Rajasthan',
    description:
      'Partnering with local NGOs, we transformed 25 government schools across rural Rajasthan, bringing digital literacy to over 8,000 students. Our comprehensive approach included teacher training, infrastructure development, and sustainable technology integration.',
    image: '/1.jpg',
    stats: [
      { value: '8,000+', label: 'Students Reached' },
      { value: '25', label: 'Schools Transformed' },
      { value: '200+', label: 'Teachers Trained' },
      { value: '85%', label: 'Improvement Rate' },
    ],
    bullets: [
      'Established sustainable digital learning infrastructure',
      'Achieved 85% improvement in digital literacy scores',
      'Created local employment for 50+ technology coordinators',
    ],
    duration: '18 months',
    location: 'Rajasthan, India',
  },
  {
    tags: ['Digital Transformation', 'NGO Support', 'Capacity Building'],
    title: 'Empowering 50+ NGOs Through Technology',
    description:
      'Our comprehensive digital transformation program helped 50+ grassroots NGOs across India modernize their operations, improve donor engagement, and amplify their social impact through strategic technology adoption.',
    image: '/2.jpg',
    stats: [
      { value: '50+', label: 'NGOs Transformed' },
      { value: '300%', label: 'Efficiency Increase' },
      { value: '₹2.5Cr', label: 'Additional Funding' },
      { value: '12', label: 'States Covered' },
    ],
    bullets: [
      'Implemented cloud-based management systems',
      'Increased donor engagement by 250%',
      'Reduced operational costs by 40%',
    ],
    duration: '24 months',
    location: 'Pan-India Initiative',
  },
  {
    tags: ['Workforce Development', 'Skill Training', 'Employment'],
    title: 'Creating Sustainable Employment in Urban Slums',
    description:
      'Our comprehensive workforce development program in Mumbai and Delhi transformed unemployed youth from urban slums into skilled professionals, creating sustainable employment opportunities and breaking cycles of poverty.',
    image: '/3.jpg',
    stats: [
      { value: '2,500+', label: 'Youth Trained' },
      { value: '92%', label: 'Placement Rate' },
      { value: '₹18K', label: 'Avg. Monthly Salary' },
      { value: '150+', label: 'Partner Companies' },
    ],
    bullets: [
      'Established 15 skill development centers',
      'Created partnerships with 150+ companies',
      'Achieved 92% job placement success rate',
    ],
    duration: '36 months',
    location: 'Mumbai & Delhi',
  },
]

// --- Data for Impact Across Sectors ---
const sectorImpact = [
  {
    icon: GraduationCap,
    title: 'Education & Literacy',
    description: 'Transforming educational landscapes through digital integration, teacher training, and infrastructure.',
    stats: [
      { value: '25+', label: 'Projects Completed' },
      { value: '50,000+', label: 'Students Impacted' },
      { value: '1,200+', label: 'Teachers Trained' },
    ],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Wellness',
    description: 'Improving healthcare access and outcomes through innovative program management and community outreach.',
    stats: [
      { value: '40+', label: 'Health Centers' },
      { value: '200,000+', label: 'Patients Served' },
      { value: '800+', label: 'Health Workers' },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Economic Development',
    description: 'Creating sustainable livelihoods through skill development, entrepreneurship support, and job placement.',
    stats: [
      { value: '15,000+', label: 'Job Placements' },
      { value: '2,500+', label: 'Entrepreneurs' },
      { value: '180%', label: 'Avg. Income Increase' },
    ],
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Innovation',
    description: 'Modernizing organizations through technology adoption, digital infrastructure, and capacity building.',
    stats: [
      { value: '75+', label: 'Organizations' },
      { value: '200+', label: 'Digital Tools Deployed' },
      { value: '3,000+', label: 'Staff Trained' },
    ],
  },
]

const CaseStudiesPage = () => {
  return (
    <div className="pt-10">
      <title>Case Studies | Real Success Stories by Aadyas Services</title>
<meta
  name="description"
  content="Explore in-depth case studies from Aadyas Services. See our real-world success in digital transformation, NGO support, and workforce development in India."
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
              Real Impact Stories
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Discover real stories of transformation and impact. From rural
              education initiatives to digital transformation projects, see
              how our partnerships create lasting change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Stats Bar --- */}
      <section className="bg-background-soft py-10 md:py-14">
        <div className="section-container">
          {/* --- NEW: Heading and Info --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg md:text-xl text-text-secondary">
              These figures represent our commitment to driving measurable,
              sustainable change across India's diverse communities.
            </p>
          </motion.div>

          {/* --- Stats Grid (No changes here, just included for context) --- */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="card p-6 flex flex-col items-center bg-background">
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <CheckCircle className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-text-primary">50+</div>
              <p className="text-text-secondary">Projects Completed</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card p-6 flex flex-col items-center bg-background">
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Heart className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-text-primary">2M+</div>
              <p className="text-text-secondary">Lives Impacted</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card p-6 flex flex-col items-center bg-background">
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Map className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-text-primary">15+</div>
              <p className="text-text-secondary">States Covered</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card p-6 flex flex-col items-center bg-background">
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Percent className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-text-primary">98%</div>
              <p className="text-text-secondary">Success Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Featured Success Stories --- */}
      <section className="bg-background py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-text-secondary">
              Dive deep into our most impactful projects and see how strategic
              partnerships create sustainable change across diverse
              communities.
            </p>
          </motion.div>

          <div className="space-y-20">
            {featuredStories.map((story, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                {/* Image Column */}
                <div className={index === 1 ? 'lg:order-last' : ''}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video"
                  />
                </div>
                {/* Text Column */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-primary bg-primary/10 rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary mb-4">
                    {story.title}
                  </h3>
                  <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                    {story.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {story.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-4xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <p className="text-sm text-text-secondary">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {story.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start space-x-3"
                      >
                        <Check className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-text-secondary">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
                    <div className="flex items-center space-x-2">
                      <Calendar size={18} />
                      <span>
                        Project Duration:{' '}
                        <strong className="text-text-primary">
                          {story.duration}
                        </strong>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={18} />
                      <span>
                        Location:{' '}
                        <strong className="text-text-primary">
                          {story.location}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Impact Across Sectors --- */}
      <section className="bg-background-soft py-10 md:py-14">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Impact Across Sectors
            </h2>
            <p className="text-lg text-text-secondary">
              Our comprehensive approach creates lasting change across multiple
              sectors, ensuring sustainable development and measurable impact.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {sectorImpact.map((sector) => (
              <motion.div
                key={sector.title}
                variants={itemVariants}
                className="card p-6 flex flex-col bg-background "
              >
                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0 w-fit mb-4">
                  <sector.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {sector.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-5">
                  {sector.description}
                </p>
                <div className="space-y-3 mt-auto pt-4 border-t border-border">
                  {sector.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-text-primary">
                        {stat.value}
                      </div>
                      <p className="text-sm text-text-secondary">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Final, Custom CTA --- */}
      <section className="bg-background py-10 md:py-14">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join the growing list of organizations creating measurable impact
              across India. Let's discuss how we can help you achieve your
              mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary">Start Your Project</button>
              </Link>
              <Link to="/services">
                <button className="btn-secondary">Explore Our Services</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage