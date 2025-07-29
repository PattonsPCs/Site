'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X, MessageCircle } from 'lucide-react'

interface CalendlyWidgetProps {
  calendlyUrl: string
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ calendlyUrl }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const openCalendly = () => {
    // Open Calendly in a popup
    const width = 600
    const height = 700
    const left = window.screen.width / 2 - width / 2
    const top = window.screen.height / 2 - height / 2
    
    window.open(
      calendlyUrl,
      'calendly',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    )
  }

  return (
    <>
      {/* Floating Booking Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <motion.button
          className="relative group"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Main Button */}
          <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-full shadow-lg shadow-neon-cyan/30 flex items-center justify-center cursor-pointer relative overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green animate-spin opacity-20"></div>
            
            {/* Icon */}
            <Calendar className="w-7 h-7 text-white relative z-10" />
            
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full bg-neon-cyan animate-ping opacity-20"></div>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-dark-200 border border-neon-cyan px-4 py-2 rounded-lg shadow-lg"
              >
                <div className="text-neon-cyan font-cyber text-sm whitespace-nowrap">
                  Book Consultation
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-dark-200 border-r border-b border-neon-cyan rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-200 border border-neon-cyan rounded-lg p-6 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-neon-cyan transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-neon-cyan font-cyber font-bold text-xl mb-2">
                  Schedule Consultation
                </h3>
                <p className="text-gray-400 text-sm">
                  Book a free consultation for any of our services
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-dark-300 rounded-lg border border-neon-cyan/30">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                  <span className="text-white text-sm">Computer Repair</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-dark-300 rounded-lg border border-neon-pink/30">
                  <div className="w-3 h-3 bg-neon-pink rounded-full"></div>
                  <span className="text-white text-sm">Custom PC Building</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-dark-300 rounded-lg border border-neon-green/30">
                  <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                  <span className="text-white text-sm">Website Development</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={openCalendly}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-cyber font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300 transform hover:scale-105"
                >
                  Book Now
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-transparent border border-neon-cyan text-neon-cyan font-cyber py-3 px-6 rounded-lg hover:bg-neon-cyan/10 transition-colors duration-300"
                >
                  Maybe Later
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-4 border-t border-neon-cyan/30 text-center">
                <p className="text-gray-400 text-xs">
                  Need immediate help? 
                  <a href="tel:2192306791" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 ml-1">
                    Call (219) 230-6791
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CalendlyWidget 