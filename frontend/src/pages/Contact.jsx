import React, { useState } from 'react'
import { motion } from 'framer-motion'
// Note: For on-page anchor scrolling, 'Link' from 'react-router-dom' might
// not work as expected. Using a simple <a> tag for `#` links is fine.
// If you want smooth scrolling, you could use 'react-router-hash-link'
// Import Lucide icons
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronDown,
  Building,
  Briefcase,     // New icon
  Handshake,     // New icon
  MessagesSquare, // New icon
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


// --- Reusable FAQ Item Component ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-border"
      layout
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.button
        className="flex justify-between items-center w-full py-5 text-left"
        layout
      >
        <span className="text-lg font-medium text-text-primary">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </motion.button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 pr-10 text-text-secondary leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

// --- Main Contact Page Component ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // --- WHATSAPP SUBMIT LOGIC ---
  const handleSubmit = (e) => {
    e.preventDefault()

    // Format the message for WhatsApp
    let waMessage = `*New Contact Form Inquiry:*\n\n`
    waMessage += `*Name:*\n${formData.name}\n\n`
    waMessage += `*Email:*\n${formData.email}\n\n`
    if (formData.phone) {
      waMessage += `*Phone:*\n${formData.phone}\n\n`
    }
    waMessage += `*Subject:*\n${formData.subject}\n\n`
    waMessage += `*Message:*\n${formData.message}`

    const encodedMessage = encodeURIComponent(waMessage)
    const waNumber = '919096535750' // Your WhatsApp number
    const url = `https://wa.me/${waNumber}?text=${encodedMessage}`
    window.open(url, '_blank')

    setFormData({
      name: '', email: '', phone: '', subject: '', message: '',
    })
  }

  // --- Data for Page Sections ---
  
  // NEW: "How We Can Help" Data
  const helpTopics = [
    {
      icon: Briefcase,
      title: 'Service Inquiries',
      description: 'Get detailed information about our services, request a quote, or discuss your project needs.',
    },
    {
      icon: Handshake,
      title: 'Partnership Opportunities',
      description: 'Explore how we can collaborate to create a larger social impact. We are always open to new ideas.',
    },
    {
      icon: MessagesSquare,
      title: 'General Questions',
      description: 'Have a general question about our work, our mission, or anything else? We are here to help.',
    },
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['7588420428', '9096535750'],
      color: 'primary',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['aadyaspl.info1601@gmail.com'],
      color: 'secondary',
    },
  ]

  const offices = [
    {
      icon: Building,
      title: 'Head Office',
      address:
        '21, Nagar Pune Highway, Near Post office, At Shirur, Pune, Maharashtra - India',
    },
    {
      icon: MapPin,
      title: 'Branch Office',
      address:
        'E-89, Bhosale Garden Society, Sahyadri Hospital Road, Hadapsar, Pune, Maharashtra - India',
    },
  ]

  const faqs = [
    {
      question: 'What kind of services do you offer?',
      answer:
        'We provide a comprehensive range of services, including Organizational Development for NGOs, Field Operations & Labor Services, Corporate Training, Technology Solutions, and Research & Evaluation. Visit our "Services" page for a full breakdown.',
    },
    {
      question: 'How do I apply for a job or career opportunity?',
      answer:
        'Please visit our "Careers" page to see our values and hiring process. You can send your resume to us via the contact form on our careers page, or email us directly at the address listed here.',
    },
    {
      question: 'What geographical areas do you operate in?',
      answer:
        'While our offices are based in Pune, Maharashtra, our field operations and projects span across more than 28 states in India. We are equipped to handle projects nationwide.',
    },
    {
      question: 'Who should I contact for a service quote?',
      answer:
        'The best way to get a quote is to fill out the contact form on this page with details about your project, or email us directly at aadyaspl.info1601@gmail.com. We will respond as soon as possible.',
    },
  ]

  return (
    <div className="pt-20">
      <title>Contact Aadyas Services | Get in Touch Today</title>
<meta
  name="description"
  content="Contact Aadyas Services for project quotes, service inquiries, or partnership opportunities. Reach out via WhatsApp, email, or visit our offices in Pune."
/>
      {/* --- Hero Section --- */}
      <section className="bg-gradient-to-br from-primary-light/30 via-background-soft to-secondary-light/30 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW: "How We Can Help" Section --- */}
      <section className="bg-background py-10 md:py-14">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-text-secondary">
              We're here to assist with all your inquiries. Choose a topic
              below or fill out the form, and we'll connect you with the right
              team.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {helpTopics.map((topic) => (
              <motion.div
                key={topic.title}
                variants={itemVariants}
                className="card p-8 text-center flex flex-col items-center"
              >
                <div className="bg-secondary/10 text-secondary p-4 rounded-full mb-5">
                  <topic.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {topic.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Contact Form & Info Section --- */}
      {/* Added an ID here for the FAQ anchor link */}
      <section id="contact-form-section" className="bg-background py-4 md:py-4">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 card p-8"
            >
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ... (Your form inputs - no changes) ... */}
                <div>
                  <label className="block text-text-secondary font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2 py-3"
                >
                  <Send size={20} />
                  <span>Send Message via WhatsApp</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {contactInfo.map((info) => (
                <div key={info.title} className="card p-6 ">
                  <div className={`w-12 h-12 rounded-lg bg-${info.color}/10 text-${info.color} flex items-center justify-center mb-4`}>
                    <info.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-text-secondary">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
              {offices.map((office) => (
                <div key={office.title} className="card p-6">
                  <div className="w-12 h-12 rounded-lg bg-neutral/10 text-neutral flex items-center justify-center mb-4">
                    <office.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {office.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {office.address}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ENHANCED: FAQ Section --- */}
      <section className="bg-background py-10 md:py-14">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Heading & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Find quick answers to common questions about our services and
                operations.
              </p>
              
              {/* "Still have questions?" Card */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Still have questions?
                </h3>
                <p className="text-text-secondary mb-6">
                  If you can't find the answer you're looking for, please
                  don't hesitate to reach out to us directly.
                </p>
                <a
                  href="#contact-form-section"
                  className="btn-primary inline-block"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* Right Column: Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="bg-background-soft py-10 md:py-14">
        {/* ... (Map section remains the same) ... */}
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We're located in Pune, Maharashtra. Come visit us!
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card p-0 overflow-hidden"
            >
              <div className="aspect-video bg-border/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0435965405!2d73.7929269190161!3d18.5246035434224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1671234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Pune"
                  className="min-h-[450px]"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact