'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Monitor, Code, Cpu, HardDrive, Wifi, Shield, Zap, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const [activeService, setActiveService] = useState('repair')

  const services = [
    {
      id: 'repair',
      title: 'Computer Repair',
      icon: <Wrench className="w-12 h-12" />,
      color: 'neon-green',
      description: 'Professional computer diagnostics and repair services',
      features: [
        'Virus & Malware Removal',
        'Hardware Diagnostics',
        'Software Installation',
        'Data Recovery',
        'Performance Optimization',
        'Network Troubleshooting'
      ],
      pricing: {
        diagnostic: 29,
        virusRemoval: 79,
        hardwareRepair: 99,
        dataRecovery: 149
      },
      turnaround: '24-48 hours'
    },
    {
      id: 'building',
      title: 'Custom PC Building',
      icon: <Monitor className="w-12 h-12" />,
      color: 'neon-cyan',
      description: 'High-performance custom gaming and workstation builds',
      features: [
        'Gaming PC Assembly',
        'Workstation Builds',
        'Component Selection',
        'Cable Management',
        'Overclocking Setup',
        'Warranty Support'
      ],
      pricing: {
        assembly: 150,
        consultation: 50,
        overclocking: 75,
        maintenance: 100
      },
      turnaround: '3-5 business days'
    },
    {
      id: 'webdev',
      title: 'Website Development',
      icon: <Code className="w-12 h-12" />,
      color: 'neon-pink',
      description: 'Modern, responsive websites with cutting-edge technology',
      features: [
        'Responsive Design',
        'E-commerce Integration',
        'SEO Optimization',
        'Content Management',
        'Performance Optimization',
        'Ongoing Support'
      ],
      pricing: {
        basic: 999,
        standard: 1999,
        premium: 3999,
        maintenance: 99
      },
      turnaround: '2-4 weeks'
    }
  ]

  const currentService = services.find(s => s.id === activeService)

  return (
    <section id="services" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-cyan mb-4">
            OUR SERVICES
          </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional tech solutions
            </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-3 border-2 font-cyber font-semibold transition-all duration-300 ${
                activeService === service.id
                  ? `border-${service.color} bg-${service.color} text-dark-300`
                  : `border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-dark-300`
              }`}
            >
              {service.title}
            </motion.button>
          ))}
        </div>

        {/* Service Details */}
        {currentService && (
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Service Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className={`text-${currentService.color}`}>
                  {currentService.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-cyber font-bold text-white">
                    {currentService.title}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {currentService.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-cyber font-semibold text-neon-cyan mb-4">
                  What's Included
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 bg-${currentService.color} rounded-full`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Turnaround Time */}
              <div className="flex items-center space-x-3 text-neon-cyan">
                <Clock className="w-5 h-5" />
                <span className="font-cyber font-semibold">
                  Turnaround: {currentService.turnaround}
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="pixel-card">
              <h4 className="text-2xl font-cyber font-bold text-neon-cyan mb-6">
                Pricing
              </h4>
              <div className="space-y-4">
                {Object.entries(currentService.pricing).map(([service, price]) => (
                  <motion.div
                    key={service}
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-between items-center p-4 border border-neon-cyan/30 hover:border-neon-cyan transition-colors duration-300"
                  >
                    <div>
                      <h5 className="font-cyber font-semibold text-white capitalize">
                        {service.replace(/([A-Z])/g, ' $1').trim()}
                      </h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-neon-cyan" />
                      <span className="text-2xl font-cyber font-bold text-neon-cyan">
                        {price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 cyber-button border-${currentService.color} text-${currentService.color} hover:bg-${currentService.color} hover:text-dark-300`}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Services 