'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-200 border-t border-neon-cyan/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-neon-cyan animate-pulse"></div>
              <span className="text-neon-cyan font-cyber font-bold text-xl">
                PATTON'S PC CLINIC
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional computer repair, custom PC building, and website development 
              services with a modern gaming aesthetic.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-neon-cyan/20 flex items-center justify-center hover:bg-neon-cyan/40 transition-colors duration-300 cursor-pointer">
                <ExternalLink className="w-5 h-5 text-neon-cyan" />
              </div>
              <div className="w-10 h-10 bg-neon-pink/20 flex items-center justify-center hover:bg-neon-pink/40 transition-colors duration-300 cursor-pointer">
                <ExternalLink className="w-5 h-5 text-neon-pink" />
              </div>
              <div className="w-10 h-10 bg-neon-green/20 flex items-center justify-center hover:bg-neon-green/40 transition-colors duration-300 cursor-pointer">
                <ExternalLink className="w-5 h-5 text-neon-green" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-neon-cyan font-cyber font-bold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-neon-cyan font-cyber font-bold text-lg mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span className="text-gray-400 text-sm">contact@pattonspcclinic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-neon-pink" />
                <span className="text-gray-400 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-neon-green" />
                <span className="text-gray-400 text-sm">Serving the Greater Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-cyan/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Patton's PC Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 