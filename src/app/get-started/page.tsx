'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Monitor, Code, Calendar, Clock, DollarSign, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const GetStartedPage = () => {
  const [selectedService, setSelectedService] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  })

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

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Appointment scheduled:', {
      service: selectedService,
      date: appointmentDate,
      time: appointmentTime,
      ...formData
    })
    // Here you would typically send this to your backend
    alert('Appointment request submitted! We\'ll contact you soon.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-cyber font-bold text-white mb-6">
              Schedule Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection Display */}
              {selectedService && (
                <div className="pixel-card bg-neon-cyan/10 border-neon-cyan">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-neon-green" />
                    <span className="text-white font-cyber">
                      Selected: {services.find(s => s.id === selectedService)?.title}
                    </span>
                  </div>
                </div>
              )}

              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your project or what you need help with..."
                  className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={!selectedService}
                className={`w-full cyber-button text-lg py-4 ${
                  !selectedService ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Appointment
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedPage 