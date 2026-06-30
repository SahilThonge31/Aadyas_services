import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building, TrendingUp } from 'lucide-react'
import {
  FaEye,
  FaBullseye,
  FaHandshake,
  FaAward,
  FaCheckCircle,
  FaBolt,
  FaCode,
} from 'react-icons/fa'
import { Heart, Award, Users, Target, Linkedin, Mail, X } from 'lucide-react'

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

const About = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null)

  const strategicAdvantages = [
    'One-stop service provider across Education, HR, and Industrial sectors',
    'Strong network of industry partnerships for placement and business linkages',
    'Commitment to quality, compliance, and safety standards',
    'Integrated B2B and B2C service models',
    'Focus on community impact & CSR-aligned initiatives',
  ]

  const missionPoints = [
    'To deliver quality education and skill development that enhances employability and entrepreneurship.',
    'To provide comprehensive manpower solutions that meet industry demands.',
    'To supply and maintain industrial assets and infrastructure with high efficiency and safety.',
    'To foster innovation, collaboration, and social responsibility in all operations.',
  ]

  // NEW: Core Values data
  const coreValues = [
    {
      icon: Heart,
      title: 'Compassion',
      description:
        'We approach every partnership with empathy, understanding the unique challenges and aspirations of each organization.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We maintain the highest standards in everything we do, continuously improving our services and capabilities.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We believe in the power of partnership and work closely with our clients to achieve shared goals.',
    },
    {
      icon: Target,
      title: 'Impact',
      description:
        'Every action we take is measured by its potential to create meaningful, lasting positive change.',
    },
  ]

  // NEW: Leadership Team data (with placeholders for image paths)
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Ramesh Dhawan',
      title: 'Chief Executive Officer',
      image: '/ceo.jpg', // Placeholder
      bio: '15+ years in nonprofit management and social enterprise development. Passionate about creating sustainable solutions for Indian communities.',
      linkedin: 'https://www.linkedin.com/in/rajeshsharma',
      email: 'rajesh@aadyas.com',
    },
    {
      id: 2,
      name: 'Mrs. Snehal Shelke',
      title: 'Founder & Director',
      image: '/Founder.jpg', // Placeholder
      bio: 'Driving sustainable operational models for grassroots organizations across India with a focus on scalable impact.',
      linkedin: 'https://www.linkedin.com/in/prasadz',
      email: 'prasad@aadyas.com',
    },
    {
      id: 3,
      name: 'Mrs.	Sonali Chavan ',
      title: 'Director',
      image: '/director.jpeg', // Placeholder
      bio: 'Expert in digital transformation for Indian nonprofits. Leads our technology initiatives and innovation programs across rural and urban areas.',
      linkedin: 'https://www.linkedin.com/in/arjunkumar',
      email: 'arjun@aadyas.com',
    },
  ]

  return (
    
    <div className="pt-20">
      <title>About Aadyas Services | Our Mission, Values & Leadership Team</title>
<meta
  name="description"
  content="Learn about Aadyas Services, our mission to empower communities, our core values (Compassion, Excellence), and the leadership team driving social impact in India."
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
              About Aadyas Services
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A multi-domain enterprise empowering individuals, strengthening
              industries, and creating sustainable growth opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-container py-16 md:py-24 bg-background"> {/* Added bg-background */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* UPDATED IMAGE: Use a more appropriate 'about us' image */}
            <img
              src="Adaya_Service_team.jpg" // Ensure this imag/e exists in your public folder
              alt="Aadyas Services Team"
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Aadyas Services Private Limited is a multi-domain enterprise
              headquartered in Pune, Maharashtra. The company operates across{' '}
              <span className="font-semibold text-primary">Education</span>,{' '}
              <span className="font-semibold text-secondary">Training</span>,{' '}
              <span className="font-semibold text-primary-dark">
                Manpower Solutions
              </span>
              , and{' '}
              <span className="font-semibold text-secondary-dark">
                Industrial Services
              </span>
              , with a vision to empower individuals, strengthen industries, and
              create sustainable growth opportunities.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              By integrating skill development, workforce management, and
              industrial support, Aadyas Services addresses the evolving needs
              of businesses, institutions, and communities across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Vision & Mission Section --- */}
      <section className="bg-background-soft py-16 md:py-24">
        <div className="section-container">
          {/* --- NEW SECTION HEADING --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              The driving force and guiding principles behind everything we do.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* --- UPDATED Vision Card --- */}
<motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="card bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-xl shadow-lg flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <FaEye className="text-5xl opacity-70 flex-shrink-0" />
                <h3 className="text-3xl md:text-4xl font-bold">Our Vision</h3>
              </div>

              {/* --- NEW Client-Targeted Points --- */}
              <ul className="space-y-4 mb-6">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <Building
                    size={24}
                    className="flex-shrink-0 mt-1 opacity-80"
                  />
                  <span className="text-lg text-white/90">
                    <strong>Empowering Businesses:</strong> Providing solutions
                    that drive efficiency and growth.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start space-x-3"
                >
                  <Users
                    size={24}
                    className="flex-shrink-0 mt-1 opacity-80"
                  />
                  <span className="text-lg text-white/90">
                    <strong>Strengthening Communities:</strong> Building skilled
                    workforces and fostering local development.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <TrendingUp
                    size={24}
                    className="flex-shrink-0 mt-1 opacity-80"
                  />
                  <span className="text-lg text-white/90">
                    <strong>Creating Sustainable Futures:</strong> Building
                    partnerships for long-term, measurable success.
                  </span>
                </motion.li>
              </ul>

              {/* --- Main Vision Statement (as a quote) --- */}
              <p className="text-lg leading-relaxed text-white/90 border-t border-white/20 pt-6 mt-auto italic">
                "To be a trusted partner in workforce solutions, talent
                upskilling, and industrial services, creating sustainable impact for
                businesses, communities, and individuals."
              </p>
            </motion.div>

            {/* --- Mission Card --- */}
<motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              className="card bg-gradient-to-br from-secondary to-secondary-dark text-white p-8 rounded-xl shadow-lg flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <FaBullseye className="text-5xl opacity-70 flex-shrink-0" />
                <h3 className="text-3xl md:text-4xl font-bold">Our Mission</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Delivering reliable workforce solutions and industrial services that empower businesses to achieve operational excellence.",
                  "Driving capability enhancement and safe practices across all operational areas.",
                  "Building long-term partnerships that create enduring value for our clients, employees, and society."
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <FaCheckCircle className="mt-1 flex-shrink-0 text-xl opacity-90" />
                    <span className="text-lg leading-relaxed text-white/90">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
<section className="section-container py-16 md:py-24 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Valuable Partners
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Collaborating with industry leaders and foundations to deliver excellence and create sustainable impact.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              name: "Sachetna Foundation",
              type: "Social Impact & Development",
              icon: FaHandshake,
            },
            {
              name: "Shri Electricals",
              type: "Industrial & Electrical Solutions",
              icon: FaBolt,
            },
            {
              name: "Mastercode Infotech",
              type: "Technology & Digital Systems",
              icon: FaCode,
            }
          ].map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                borderColor: 'var(--color-primary)' // Subtle active border accent if your theme supports it
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="card p-8 flex flex-col items-center text-center bg-background-soft border border-border rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="bg-primary/10 text-primary p-5 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110">
                <partner.icon size={40} className="opacity-90" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 tracking-tight">
                {partner.name}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
              <p className="text-text-secondary text-sm font-medium tracking-wide uppercase text-xs">
                {partner.type}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* NEW: Our Core Values Section */}
      <section className="section-container py-16 md:py-24 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            These principles guide everything we do and shape our relationships with
            partners and communities.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
              className="card p-6 flex flex-col items-center text-center bg-background-soft border border-border rounded-xl"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <value.icon size={36} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Strategic Advantages */}
      <section className="bg-background-soft py-6 md:py-14">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaHandshake className="text-5xl text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Strategic Advantages
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              What sets us apart in the market
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {strategicAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                transition={{ duration: 0.3 }}
                className="card group p-6 flex items-start space-x-4 bg-background border border-border rounded-xl"
              >
                <FaAward className="text-3xl text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-text-secondary leading-relaxed">{advantage}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: Our Leadership Team Section (at the very bottom) */}
      <section className="section-container py-16 md:py-24 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Meet the passionate individuals driving our mission forward.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
              className="card p-6 flex flex-col items-center text-center bg-background-soft border border-border rounded-xl"
            >
              {/* Image with click handler for pop-up */}
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 cursor-pointer border-4 border-primary/20 hover:border-primary transition-all duration-300"
                onClick={() => setSelectedTeamMember(member)}
                layoutId={`team-member-${member.id}`} // For smooth image transition to modal
              />
              <h3 className="text-xl font-bold text-text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary mb-4">{member.title}</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: 'var(--color-primary)' }} // Tailwind var for dynamic color
                  whileTap={{ scale: 0.9 }}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ scale: 1.2, color: 'var(--color-secondary)' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-text-secondary hover:text-secondary transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Member Pop-up Modal */}
      <AnimatePresence>
        {selectedTeamMember && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeamMember(null)} // Close on backdrop click
          >
            <motion.div
              className="relative bg-card p-6 rounded-xl shadow-2xl max-w-md w-full text-center cursor-default"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                onClick={() => setSelectedTeamMember(null)}
                className="absolute top-4 right-4 text-text-secondary hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
              <motion.img
                src={selectedTeamMember.image}
                alt={selectedTeamMember.name}
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-primary/30"
                layoutId={`team-member-${selectedTeamMember.id}`} // For smooth image transition
              />
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {selectedTeamMember.name}
              </h3>
              <p className="text-md font-semibold text-primary mb-4">
                {selectedTeamMember.title}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {selectedTeamMember.bio}
              </p>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href={selectedTeamMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href={`mailto:${selectedTeamMember.email}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-text-secondary hover:text-secondary transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default About