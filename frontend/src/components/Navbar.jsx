import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa'
import { useTheme, palettes } from '../context/ThemeContext' // Adjust path if needed

// --- MAIN NAVBAR COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showPalettes, setShowPalettes] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme, palette, setPalette } = useTheme()

  // Effect to handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Effect to close menus on page navigation
  useEffect(() => {
    setIsOpen(false)
    setShowPalettes(false)
  }, [location])

  // Added new links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  // --- Sub-components for Theme and Palette Toggles ---
  const PaletteSwitcher = ({ isMobile = false }) => (
    <div className={isMobile ? 'w-full' : 'relative'}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPalettes(!showPalettes)}
        className={
          isMobile
            ? 'flex items-center justify-between w-full p-2 rounded-md hover:bg-background-soft'
            : 'p-2 rounded-full hover:bg-text-primary/10 transition-colors'
        }
      >
        <span className="flex items-center space-x-2">
          <FaPalette className="text-text-primary" />
          {isMobile && <span className="text-text-primary">Change Palette</span>}
        </span>
      </motion.button>

      <AnimatePresence>
        {showPalettes && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            // UPDATED: Position logic for mobile vs desktop
            className={`absolute bg-card border border-border rounded-lg shadow-xl p-2 z-[100] ${
              isMobile
                ? 'bottom-12 left-0 w-full' // Show above button on mobile
                : 'right-0 top-12 w-40' // Show below button on desktop
            }`}
            onClick={(e) => e.stopPropagation()} // Stop click from closing menu
          >
            {Object.entries(palettes).map(([key, name]) => (
              <button
                key={key}
                onClick={() => {
                  setPalette(key)
                  setShowPalettes(false)
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  palette === key
                    ? 'bg-primary text-white'
                    : 'text-text-primary hover:bg-background-soft'
                }`}
              >
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  const ThemeToggle = ({ isMobile = false }) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={
        isMobile
          ? 'flex items-center space-x-2 p-2 rounded-md hover:bg-background-soft w-full'
          : 'p-2 rounded-full hover:bg-text-primary/10 transition-colors'
      }
    >
      {theme === 'light' ? (
        <FaMoon className="text-text-primary" />
      ) : (
        <FaSun className="text-text-primary" />
      )}
      {isMobile && (
        <span className="text-text-primary">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </span>
      )}
    </motion.button>
  )
  // --- End of Sub-components ---

  // Smart background logic
  const isSolidNav = scrolled || location.pathname !== '/'

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-40 transition-all duration-300 ${ // z-40 to be below the new menu
          isSolidNav
            ? 'bg-card/90 shadow-lg backdrop-blur-sm py-4' // Solid background
            : 'bg-transparent py-6' // Transparent background
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Aadyas Services"
                className="h-12 md:h-16 w-auto"
              />
              <div className="block">
                <h1 className="text-lg md:text-xl font-bold text-primary">
                  Aadyas Services
                </h1>
                <p className="hidden md:block text-xs text-text-secondary">
                  Rise - Serve - Empower
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-base font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                        layoutId="active-underline" // Desktop active link
                      />
                    )}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <PaletteSwitcher />
                <Link to="/contact">
                  <button className="btn-primary ml-4">Get Started</button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              {/* Keep menu button separate from toggles if needed, or remove toggles from here */}
              <button
                onClick={() => setIsOpen(true)} // Set to true to open
                className="text-text-primary hover:text-primary transition-colors z-50"
              >
                <HiMenu size={28} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- NEW SIDE-DRAWER MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsOpen(false)} // Click outside to close
            />

            {/* 2. The Drawer Menu Itself */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-card z-[60] flex flex-col lg:hidden"
              onClick={(e) => e.stopPropagation()} // Stop click from closing menu
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center p-4 border-b border-border">
                <h2 className="text-lg font-bold text-primary">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text-primary hover:text-primary"
                >
                  <HiX size={26} />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex-1 flex flex-col p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary text-white'
                        : 'text-text-primary hover:bg-background-soft'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Menu Footer: Toggles & Button */}
              <div className="p-4 border-t border-border space-y-4">
                <div className="relative">
                  {' '}
                  {/* Relative container for palette dropdown */}
                  <ThemeToggle isMobile={true} />
                  <PaletteSwitcher isMobile={true} />
                </div>
                <Link
                  to="/contact"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="btn-primary w-full">Get Started</button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar