import React from 'react'
import { motion } from 'framer-motion'
import { Loader } from 'lucide-react'

const LoadingSpinner = () => (
  <div className="flex justify-center items-center w-full h-screen bg-background-soft">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <Loader className="text-primary" size={48} />
    </motion.div>
  </div>
)

export default LoadingSpinner