'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, MessageCircle, CheckCircle, Gift, Users, Award, ArrowLeft, Calendar, Phone } from 'lucide-react'
import Link from 'next/link'

const PortfolioPage = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<number | null>(null)

  const feedbackSlots = [
    {
      id: 1,
      status: 'available',
      title: 'Customer Feedback Spot #1',
      description: 'Be one of our first customers and share your experience',
      benefits: ['Free consultation', 'Priority support', 'Special discount'],
      icon: <Star className="w-6 h-6" />,
      category: 'premium'
    },
    {
      id: 2,
      status: 'available',
      title: 'Customer Feedback Spot #2',
      description: 'Help us improve while getting premium service',
      benefits: ['Exclusive pricing', 'Extended warranty', 'Follow-up support'],
      icon: <MessageCircle className="w-6 h-6" />,
      category: 'standard'
    },
    {
      id: 3,
      status: 'available',
      title: 'Customer Feedback Spot #3',
      description: 'Join our founding customers program',
      benefits: ['Lifetime support', 'Referral rewards', 'Beta testing access'],
      icon: <Award className="w-6 h-6" />,
      category: 'premium'
    },
    {
      id: 4,
      status: 'available',
      title: 'Customer Feedback Spot #4',
      description: 'Shape our services while getting exclusive benefits',
      benefits: ['Custom solutions', 'Priority scheduling', 'Direct access'],
      icon: <Gift className="w-6 h-6" />,
      category: 'standard'
    },
    {
      id: 5,
      status: 'available',
      title: 'Customer Feedback Spot #5',
      description: 'Be part of our success story from the beginning',
      benefits: ['Founding member status', 'Exclusive events', 'Lifetime discounts'],
      icon: <Users className="w-6 h-6" />,
      category: 'premium'
    },
    {
      id: 6,
      status: 'available',
      title: 'Customer Feedback Spot #6',
      description: 'Help us perfect our craft while getting premium service',
      benefits: ['Beta testing', 'Custom features', 'Extended support'],
      icon: <CheckCircle className="w-6 h-6" />,
      category: 'standard'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Spots', icon: <Users className="w-4 h-4" /> },
    { id: 'premium', name: 'Premium Spots', icon: <Star className="w-4 h-4" /> },
    { id: 'standard', name: 'Standard Spots', icon: <CheckCircle className="w-4 h-4" /> }
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredSlots = selectedCategory === 'all' 
    ? feedbackSlots 
    : feedbackSlots.filter(slot => slot.category === selectedCategory)

  const handleFeedbackClick = (id: number) => {
    setSelectedFeedback(id)
    // Here you could open a survey form or redirect to a feedback page
    console.log(`Customer feedback slot ${id} selected`)
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
            FOUNDING CUSTOMERS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be one of our first customers and help shape our services while getting exclusive benefits. 
            Limited spots available for our founding customers program.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="pixel-card text-center">
            <div className="text-neon-cyan mb-4 flex justify-center">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-cyber font-bold text-white mb-2">6</div>
            <div className="text-gray-400 font-cyber">Spots Available</div>
          </div>
          <div className="pixel-card text-center">
            <div className="text-neon-pink mb-4 flex justify-center">
              <Gift className="w-8 h-8" />
            </div>
            <div className="text-3xl font-cyber font-bold text-white mb-2">Exclusive</div>
            <div className="text-gray-400 font-cyber">Benefits</div>
          </div>
          <div className="pixel-card text-center">
            <div className="text-neon-green mb-4 flex justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="text-3xl font-cyber font-bold text-white mb-2">Priority</div>
            <div className="text-gray-400 font-cyber">Service</div>
          </div>
          <div className="pixel-card text-center">
            <div className="text-neon-cyan mb-4 flex justify-center">
              <Star className="w-8 h-8" />
            </div>
            <div className="text-3xl font-cyber font-bold text-white mb-2">Lifetime</div>
            <div className="text-gray-400 font-cyber">Support</div>
          </div>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 border-2 font-cyber font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'border-neon-cyan bg-neon-cyan text-dark-300'
                  : 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-300'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Feedback Slots Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="pixel-card group cursor-pointer relative overflow-hidden"
              onClick={() => handleFeedbackClick(slot.id)}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs bg-neon-green text-black font-cyber font-bold rounded-full">
                  AVAILABLE
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-2 py-1 text-xs font-cyber ${
                  slot.category === 'premium' 
                    ? 'bg-neon-pink/20 text-neon-pink' 
                    : 'bg-neon-cyan/20 text-neon-cyan'
                }`}>
                  {slot.category === 'premium' ? 'PREMIUM' : 'STANDARD'}
                </span>
              </div>

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-neon-pink/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="text-neon-cyan group-hover:text-neon-pink transition-colors duration-300">
                  {slot.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-cyber font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {slot.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {slot.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-neon-pink font-cyber font-semibold text-sm">
                      Exclusive Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {slot.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-neon-green" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open('https://calendly.com/pattonspcs', '_blank')
                  }}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-cyber font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
                >
                  Claim This Spot
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="pixel-card bg-gradient-to-r from-dark-300 to-dark-200 border-neon-cyan">
            <h3 className="text-2xl font-cyber font-bold text-neon-cyan mb-4">
              Why Become a Founding Customer?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">Exclusive pricing and discounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">Priority scheduling and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">Direct input on service improvements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">Extended warranty coverage</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">Referral rewards program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">Beta testing for new services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">Lifetime support access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-300">Founding member status</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-neon-cyan/30">
              <p className="text-gray-400 text-sm mb-4">
                Limited spots available - secure your place today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open('https://calendly.com/pattonspcs', '_blank')
                  }}
                  className="bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-cyber font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2 inline" />
                  Book Your Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open('tel:2192306791', '_self')
                  }}
                  className="bg-transparent border border-neon-cyan text-neon-cyan font-cyber font-bold py-3 px-8 rounded-lg hover:bg-neon-cyan hover:text-dark-300 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call Directly
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PortfolioPage 