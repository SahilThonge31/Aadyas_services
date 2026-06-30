import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
// Import the modal and content components
import PolicyModal from './PolicyModal'
import PrivacyPolicyContent from './PrivacyPolicyContent'
import TermsContent from './TermsContent'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [modalContent, setModalContent] = useState(null) // null, 'privacy', or 'terms'

  // Link styles for all footer links
  const linkHoverEffect =
    "relative text-sm text-text-secondary transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"

  // Class for the new policy links (buttons)
  const policyLinkClass =
    'text-sm text-text-secondary hover:text-primary transition-colors duration-300'

  return (
    <>
      <footer className="bg-background text-text-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Top Section: Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/logo.png" // Using .png as per your original file
                alt="Aadyas Services"
                className="h-20 w-auto mb-4 bg-background-soft rounded-lg p-2" // Adjusted size classes
              />
              <h3 className="text-xl font-bold mb-3 text-text-primary">
                Aadyas Services
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Rise - Serve - Empower
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-2">
                A multi-domain enterprise empowering individuals, strengthening
                industries, and creating sustainable growth opportunities.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-text-primary">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${
                        item.toLowerCase() === 'home' ? '' : item.toLowerCase()
                      }`}
                      className={linkHoverEffect}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                {/* Add Careers & Gallery to Quick Links */}
                <li>
                  <Link to="/careers" className={linkHoverEffect}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={linkHoverEffect}>
                    Gallery
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-text-primary">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaPhone className="mt-1 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <a
                      href="tel:7588420428"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      7588420428
                    </a>
                    <br />
                    <a
                      href="tel:9096535750"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      9096535750
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaEnvelope className="mt-1 text-secondary flex-shrink-0" />
                  <a
                    href="mailto:aadyaspl.info1601@gmail.com"
                    className="text-sm text-text-secondary hover:text-secondary transition-colors break-all"
                  >
                    aadyaspl.info1601@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Addresses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-text-primary">
                Our Offices
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="mt-1 text-neutral flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1 text-text-primary">
                      Head Office
                    </p>
                    <p className="text-text-secondary">
                      21, Nagar Pune Highway, Near Post office, At Shirur,
                      <br />
                      Pune, Maharashtra
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="mt-1 text-neutral flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1 text-text-primary">
                      Branch Office
                    </p>
                    <p className="text-text-secondary">
                      E-89, Bhosale Garden Society, Sahyadri Hospital Road,
                      Hadapsar
                      <br />
                      Pune, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section: Copyright, New Links, & Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-6 lg:space-y-0">
              {/* Copyright & Developer Credit */}
              <div className="text-sm text-text-secondary order-3 lg:order-1 space-y-1">
                <p>
                  © {currentYear} Aadyas Services Private Limited. All rights
                  reserved.
                </p>
                {/* --- NEWLY ADDED LINE --- */}
                <p>
                  Developed by{' '}
                  <a
                    href="https://avanir.in/" // <-- Added Avanir's website
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    Avanir Technologies
                  </a>
                </p>
              </div>

              {/* Legal & Case Study Links */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 order-2 lg:order-2 pb-2">
                <Link to="/case-studies" className={policyLinkClass}>
                  Case Studies
                </Link>
                <button
                  onClick={() => setModalContent('privacy')}
                  className={policyLinkClass}
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setModalContent('terms')}
                  className={policyLinkClass}
                >
                  Terms of Service
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-5 order-1 lg:order-3">
                {[
                  { Icon: FaFacebook, link: '#' },
                  { Icon: FaLinkedin, link: '#' },
                  { Icon: FaTwitter, link: '#' },
                  { Icon: FaInstagram, link: '#' },
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary hover:scale-125 transform transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* --- MODAL RENDER SECTION --- */}
      <AnimatePresence>
        {modalContent === 'privacy' && (
          <PolicyModal
            title="Privacy Policy"
            onClose={() => setModalContent(null)}
          >
            <PrivacyPolicyContent />
          </PolicyModal>
        )}
        {modalContent === 'terms' && (
          <PolicyModal
            title="Terms of Service"
            onClose={() => setModalContent(null)}
          >
            <TermsContent />
          </PolicyModal>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer