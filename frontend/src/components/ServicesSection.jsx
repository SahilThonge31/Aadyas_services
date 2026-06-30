import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaGraduationCap,
  FaUsers,
  FaCogs,
  FaChalkboardTeacher,
  FaBriefcase,
  FaIndustry,
} from 'react-icons/fa'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: FaGraduationCap,
      title: 'Education & Training',
      description:
        'Establishment and operation of schools, colleges, and training institutes with online and distance learning capabilities.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Skill Development',
      description:
        'Specialized programs for skill and reskilling initiatives aligned with different institutes and EdTech-based platforms.',
      color: 'from-secondary to-secondary-dark',
    },
    {
      icon: FaUsers,
      title: 'Manpower Solutions',
      description:
        'End-to-end recruitment, staffing, and HR consultancy for skilled, semi-skilled, and unskilled workforce supply.',
      color: 'from-primary-light to-primary',
    },
    {
      icon: FaBriefcase,
      title: 'HR Services',
      description:
        'White-collar and blue-collar workforce solutions with payroll outsourcing, background verification, and onboarding.',
      color: 'from-secondary-light to-secondary',
    },
    {
      icon: FaIndustry,
      title: 'Industrial Services',
      description:
        'Supply and maintenance of industrial assets and infrastructure with high efficiency and safety standards.',
      color: 'from-neutral to-primary-dark',
    },
    {
      icon: FaCogs,
      title: 'Specialized Placement',
      description:
        'Specialized placement for organized sector, industrial, security, and technical sectors with industry partnerships.',
      color: 'from-neutral to-secondary-dark',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="bg-background-soft py-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto pb-10">
            Comprehensive solutions across Education, HR, and Industrial sectors
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="card group cursor-pointer bg-background"
            >
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
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
  )
}
export default ServicesSection