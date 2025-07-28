'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-cyan mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss your needs and get you a quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="repair">Computer Repair</option>
                  <option value="building">Custom PC Building</option>
                  <option value="webdev">Website Development</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-neon-cyan font-cyber font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-200 border border-neon-cyan/30 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="cyber-button w-full text-lg py-4"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="pixel-card">
              <h3 className="text-2xl font-cyber font-bold text-neon-cyan mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-cyan/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-cyber font-semibold text-white">Email</h4>
                    <p className="text-gray-400">contact@pattonspcclinic.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-pink/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="font-cyber font-semibold text-white">Phone</h4>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-green/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-cyber font-semibold text-white">Location</h4>
                    <p className="text-gray-400">Serving the Greater Area</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pixel-card">
              <h3 className="text-2xl font-cyber font-bold text-neon-pink mb-6">
                Quick Response
              </h3>
              <p className="text-gray-300 mb-4">
                We typically respond to all inquiries within 24 hours. 
                For urgent repairs, please call us directly.
              </p>
              <div className="flex items-center space-x-2 text-neon-cyan">
                <MessageSquare className="w-5 h-5" />
                <span className="font-cyber font-semibold">24/7 Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 