import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CTASection from '../components/CTASection' // Adjust path if needed
import {
  Camera,
  LayoutGrid,
  Globe,
  Users,
  Filter,
  Info,
  Smartphone,
  Image as ImageIcon,
  TrendingUp,
} from 'lucide-react'

// --- Data for the Gallery ---

const filterCategories = [
  'All',
  'Community Outreach',
  'Team Work',
  'Education & Training',
  'Technology & Innovation',
  'Field Operations',
  'Impact & Results',
  'Events & Partnerships',
]

// 30+ Images with categories. Replace placeholders with your real image paths.
const allImages = [
  // Community Outreach (3)
  { id: 1, src: '/images/gallery/image-1.jpg', title: 'Community Development Program', location: 'Rural India', category: 'Community Outreach' },
  { id: 2, src: '/images/gallery/image-2.jpg', title: 'Community Outreach Initiative', location: 'Maharashtra, India', category: 'Community Outreach' },
  { id: 3, src: '/images/gallery/image-3.jpg', title: 'Community Collaboration', location: 'Uttar Pradesh, India', category: 'Community Outreach' },
  // Team Work (3)
  { id: 4, src: '/images/gallery/image-4.jpg', title: 'Strategic Planning Session', location: 'Aadyas Services Office', category: 'Team Work' },
  { id: 5, src: '/images/gallery/image-5.jpg', title: 'Professional Team Collaboration', location: 'Office Environment', category: 'Team Work' },
  { id: 6, src: '/images/gallery/image-6.jpg', title: 'Cross-Functional Team Work', location: 'Remote & Office Hybrid', category: 'Team Work' },
  // Education & Training (4)
  { id: 7, src: '/images/gallery/image-7.jpg', title: 'Education & Training Programs', location: 'Various Locations', category: 'Education & Training' },
  { id: 8, src: '/images/gallery/image-8.jpg', title: 'Skills Development Workshops', location: 'Karnataka, India', category: 'Education & Training' },
  { id: 9, src: '/images/gallery/image-9.jpg', title: 'Rural Education Support', location: 'Tamil Nadu, India', category: 'Education & Training' },
  { id: 10, src: '/images/gallery/image-10.jpg', title: 'Digital Literacy Program', location: 'Uttar Pradesh, India', category: 'Education & Training' },
  // Technology & Innovation (4)
  { id: 11, src: '/images/gallery/image-11.jpg', title: 'Digital Transformation Initiative', location: 'Bangalore, India', category: 'Technology & Innovation' },
  { id: 12, src: '/images/gallery/image-12.jpg', title: 'Digital Transformation Project', location: 'Haryana, India', category: 'Technology & Innovation' },
  { id: 13, src: '/images/gallery/image-13.jpg', title: 'Data Management Training', location: 'West Bengal, India', category: 'Technology & Innovation' },
  { id: 14, src: '/images/gallery/image-14.jpg', title: 'Mobile Solutions Development', location: 'Bangalore, India', category: 'Technology & Innovation' },
  // Field Operations (4)
  { id: 15, src: '/images/gallery/image-15.jpg', title: 'Community Assessment Survey', location: 'Madhya Pradesh, India', category: 'Field Operations' },
  { id: 16, src: '/images/gallery/image-16.jpg', title: 'Field Operations Coordination', location: 'Assam, India', category: 'Field Operations' },
  { id: 17, src: '/images/gallery/image-17.jpg', title: 'Mobile Service Delivery', location: 'Jharkhand, India', category: 'Field Operations' },
  { id: 18, src: '/images/gallery/image-18.jpg', title: 'Field Team Collaboration', location: 'Punjab, India', category: 'Field Operations' },
  // Impact & Results (3)
  { id: 19, src: '/images/gallery/image-19.jpg', title: 'Impact Assessment Documentation', location: 'Himachal Pradesh, India', category: 'Impact & Results' },
  { id: 20, src: '/images/gallery/image-20.jpg', title: 'Project Success Celebration', location: 'Goa, India', category: 'Impact & Results' },
  { id: 21, src: '/images/gallery/image-21.jpg', title: 'Community Transformation', location: 'Chhattisgarh, India', category: 'Impact & Results' },
  // Events & Partnerships (3)
  { id: 22, src: '/images/gallery/image-22.jpg', title: 'Strategic Partnership Ceremony', location: 'Chennai, India', category: 'Events & Partnerships' },
  { id: 23, src: '/images/gallery/image-23.jpg', title: 'Annual NGO Conference', location: 'Pune, India', category: 'Events & Partnerships' },
  { id: 24, src: '/images/gallery/image-24.jpg', title: 'Excellence Award Ceremony', location: 'Hyderabad, India', category: 'Events & Partnerships' },
  // Added 6 more images to reach 30
  { id: 25, src: '/images/gallery/image-25.jpg', title: 'Health Camp Outreach', location: 'Odisha, India', category: 'Community Outreach' },
  { id: 26, src: '/images/gallery/image-26.jpg', title: 'Leadership Training', location: 'New Delhi, India', category: 'Education & Training' },
  { id: 27, src: '/images/gallery/image-27.jpg', title: 'Water Resource Management', location: 'Rajasthan, India', category: 'Impact & Results' },
  { id: 28, src: '/images/gallery/image-28.jpg', title: 'Logistics Planning', location: 'Gujarat, India', category: 'Field Operations' },
  { id: 29, src: '/images/gallery/image-29.jpg', title: 'Technology for Good Hackathon', location: 'Pune, India', category: 'Technology & Innovation' },
  { id: 30, src: '/images/gallery/image-30.jpg', title: 'Annual Team Retreat', location: 'Kerala, India', category: 'Team Work' },
]

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

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredImages =
    activeFilter === 'All'
      ? allImages
      : allImages.filter((image) => image.category === activeFilter)

  return (
    <div className="pt-20">
      <title>Project Gallery | Aadyas Services Impact & Field Work</title>
<meta
  name="description"
  content="View our gallery of 30+ images showcasing real impact. See photos of our community outreach, education programs, and field operations across 28+ states."
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
              Gallery of Impact & Transformation
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Witness the power of collaboration and sustainable change through
              our visual documentation of projects across 28+ Indian states.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Stats Bar --- */}
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
              A snapshot of our work, showcasing the scale of our operations
              and the communities we've touched across India.
            </p>
          </motion.div>

          {/* --- REDESIGNED: Stats Grid --- */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Stat 1: Images */}
            <motion.div
              variants={itemVariants}
              className="card p-6 flex flex-col items-center bg-background"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Camera className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-text-primary">30+</div>
              <p className="text-text-secondary">Images</p>
            </motion.div>
            
            {/* Stat 2: Categories */}
            <motion.div
              variants={itemVariants}
              className="card p-6 flex flex-col items-center bg-background"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <LayoutGrid className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-text-primary">7</div>
              <p className="text-text-secondary">Categories</p>
            </motion.div>
            
            {/* Stat 3: States */}
            <motion.div
              variants={itemVariants}
              className="card p-6 flex flex-col items-center bg-background"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-text-primary">28+</div>
              <p className="text-text-secondary">States Covered</p>
            </motion.div>
            
            {/* Stat 4: Communities */}
            <motion.div
              variants={itemVariants}
              className="card p-6 flex flex-col items-center bg-background"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-text-primary">500+</div>
              <p className="text-text-secondary">Communities</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Interactive Gallery Features --- */}
      <section className="bg-background py-20 md:py-24">
        <div className="section-container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Explore Our Impact Stories
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Browse our collection of images showcasing community development,
              training programs, and transformational results across India.
            </p>
            <motion.ul
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants} className="flex items-start space-x-3">
                <Filter className="text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-text-secondary">
                  <strong>Smart Filtering:</strong> Filter by categories to find
                  specific projects.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start space-x-3">
                <Info className="text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-text-secondary">
                  <strong>Detailed Context:</strong> Each image includes location, date,
                  and project information.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start space-x-3">
                <Smartphone className="text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-text-secondary">
                  <strong>Responsive Layout:</strong> Optimized viewing
                  experience across all devices.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start space-x-3">
                <ImageIcon className="text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-text-secondary">
                  <strong>High Quality:</strong> Professional photography
                  showcasing authentic interactions.
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src="/impact-image.jpg" // Use a strong lead image
              alt="Gallery Highlight"
              className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video"
            />
          </motion.div>
        </div>
      </section>

      {/* --- Filterable Gallery --- */}
      <section className="bg-background-soft py-20 md:py-24">
        <div className="section-container">
          {/* Filter Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          >
            {filterCategories.map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-white scale-105'
                    : 'bg-card text-text-primary hover:bg-primary/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div // This prop animates layout changes (filtering)
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="card p-0 overflow-hidden group relative"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-72 object-cover"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-bold">
                      {image.title}
                    </h3>
                    <p className="text-primary-light/90 text-sm">
                      {image.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- "Our Impact" Section --- */}
      <section className="bg-background py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Every Image Tells a Story of Change
            </h2>
            <p className="text-lg text-text-secondary">
              Behind each photograph lies a story of transformation, hope, and
              sustainable community development, representing thousands of lives
              touched across India.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="card p-6 text-center items-center flex flex-col">
              <Users className="text-primary h-10 w-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Community-Centered
              </h3>
              <p className="text-text-secondary">
                Every project begins and ends with the community's needs,
                ensuring sustainable and meaningful impact.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="card p-6 text-center items-center flex flex-col">
              <Globe className="text-primary h-10 w-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Culturally Sensitive
              </h3>
              <p className="text-text-secondary">
                Our approach respects local traditions, languages, and customs
                across India's diverse cultural landscape.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="card p-6 text-center items-center flex flex-col">
              <TrendingUp className="text-primary h-10 w-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Results-Driven
              </h3>
              <p className="text-text-secondary">
                Each image documents measurable outcomes and tangible
                improvements in community wellbeing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <CTASection />
    </div>
  )
}

export default GalleryPage