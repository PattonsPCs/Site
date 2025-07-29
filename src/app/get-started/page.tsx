'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Monitor, Code, Calendar, Clock, DollarSign, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const GetStartedPage = () => {
  const [selectedService, setSelectedService] = useState('')

  const services = [
    {
      id: 'repair',
      title: 'Computer Repair',
      icon: <Wrench className="w-8 h-8" />,
      color: 'neon-green',
      description: 'Diagnostics, virus removal, hardware repair',
      pricing: 'Starting at $29',
      duration: '24-48 hours'
    },
    {
      id: 'building',
      title: 'Custom PC Building',
      icon: <Monitor className="w-8 h-8" />,
      color: 'neon-cyan',
      description: 'High-performance gaming and workstation builds',
      pricing: 'Starting at $150',
      duration: '3-5 business days'
    },
    {
      id: 'webdev',
      title: 'Website Development',
      icon: <Code className="w-8 h-8" />,
      color: 'neon-pink',
      description: 'Modern, responsive websites',
      pricing: 'Starting at $999',
      duration: '2-4 weeks'
    }
  ]



  return (
    <div className="min-h-screen bg-dark-300">
      {/* Header */}
      <div className="bg-dark-200 border-b border-neon-cyan/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-neon-cyan hover:text-white transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-cyber font-bold text-neon-cyan mb-4">
            GET STARTED
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your service and schedule an appointment. Let's bring your tech vision to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-cyber font-bold text-white mb-6">
              Choose Your Service
            </h2>
            
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`pixel-card cursor-pointer transition-all duration-300 ${
                    selectedService === service.id 
                      ? `border-${service.color} bg-${service.color}/10` 
                      : 'hover:border-neon-cyan'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`text-${service.color} mt-1`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-cyber font-bold text-white">
                          {service.title}
                        </h3>
                        {selectedService === service.id && (
                          <CheckCircle className="w-6 h-6 text-neon-green" />
                        )}
                      </div>
                      <p className="text-gray-400 mb-3">{service.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-neon-cyan">
                          <DollarSign className="w-4 h-4 mr-1" />
                          <span>{service.pricing}</span>
                        </div>
                        <div className="flex items-center text-neon-pink">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

                    {/* Calendly Integration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-cyber font-bold text-white mb-6">
              Schedule Your Consultation
            </h2>

            {/* Service Selection Display */}
            {selectedService && (
              <div className="pixel-card bg-neon-cyan/10 border-neon-cyan mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-neon-green" />
                  <span className="text-white font-cyber">
                    Selected: {services.find(s => s.id === selectedService)?.title}
                  </span>
                </div>
              </div>
            )}

            {/* Calendly Info Card */}
            <div className="pixel-card bg-gradient-to-br from-dark-200 to-dark-300 border-neon-cyan">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-neon-cyan font-cyber font-bold text-xl mb-2">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Choose your preferred time and we'll discuss your project in detail. 
                    No commitment required!
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    <span className="text-gray-300">Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    <span className="text-gray-300">Flexible scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    <span className="text-gray-300">Video or phone call</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    <span className="text-gray-300">Instant confirmation</span>
                  </div>
                </div>

                {/* Calendly Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const width = 600
                    const height = 700
                    const left = window.screen.width / 2 - width / 2
                    const top = window.screen.height / 2 - height / 2
                    
                    window.open(
                      'https://calendly.com/pattonspcs',
                      'calendly',
                      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
                    )
                  }}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-cyber font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2 inline" />
                  Schedule Now
                </motion.button>

                {/* Alternative Contact */}
                <div className="pt-4 border-t border-neon-cyan/30">
                  <p className="text-gray-400 text-sm mb-2">
                    Prefer to call directly?
                  </p>
                  <a 
                    href="tel:2192306791" 
                    className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 font-cyber"
                  >
                    (219) 230-6791
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedPage 