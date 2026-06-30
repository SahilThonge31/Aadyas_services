import React from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react' // Use Lucide for consistency

const PolicyModal = ({ title, children, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close on backdrop click
    >
      <motion.div
        className="bg-card rounded-xl shadow-2xl max-w-3xl w-full h-[85vh] flex flex-col overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content (Scrollable) */}
        <div className="p-6 overflow-y-auto">
          {/* This child will be our formatted policy text */}
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PolicyModal