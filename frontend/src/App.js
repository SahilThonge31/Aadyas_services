import React, { Suspense, lazy } from 'react' // <-- 1. Import Suspense and lazy
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingSpinner from './components/LoadingSpinner' // <-- 2. Import your spinner

// 3. LAZY-LOAD ALL YOUR PAGES
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const NgoSupportPage = lazy(() => import('./pages/NgoSupportPage'))
const LaborServicesPage = lazy(() => import('./pages/LaborServicesPage'))
const TrainingPage = lazy(() => import('./pages/TrainingPage'))
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'))
const ResearchPage = lazy(() => import('./pages/ResearchPage'))

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

const AppContent = () => {
  return (
    <div className="bg-background text-text-primary">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/services/ngo-support" element={<NgoSupportPage />} />
            <Route path="/services/labor-services" element={<LaborServicesPage />} />
            <Route path="/services/training" element={<TrainingPage />} />
            <Route path="/services/technology" element={<TechnologyPage />} />
            <Route path="/services/research" element={<ResearchPage />} />
            <Route path="/services/contact" element={<Contact/>}/>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App