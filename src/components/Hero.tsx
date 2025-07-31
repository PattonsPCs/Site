'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Monitor, Code, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Computer Repair',
      description: 'Fast diagnostics & repair',
      color: 'neon-green'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Custom PC Building',
      description: 'High-performance gaming rigs',
      color: 'neon-cyan'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern responsive websites',
      color: 'neon-pink'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-neon-pink animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-neon-green animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-neon-blue animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-cyber font-bold leading-tight">
              <span className="text-neon-cyan neon-text-shadow">PATTON'S</span>
              <br />
              <span className="text-white">PC CLINIC</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Professional computer repair, custom PC building, and website development
            </p>
          </motion.div>

          {/* Service Quick Selector */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            {services.map((service, index) => (
              <Link key={service.title} href="/get-started">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`pixel-card cursor-pointer group hover:border-${service.color} transition-all duration-300`}
                >
                  <div className={`text-${service.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-cyber font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{service.description}</p>
                  <ArrowRight className={`w-5 h-5 text-${service.color} mt-3 group-hover:translate-x-1 transition-transform duration-300`} />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-started" className="cyber-button text-lg px-8 py-4 group inline-block">
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get Started Today
            </Link>
            <Link href="/portfolio" className="px-8 py-4 border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-dark-300 transition-all duration-300 font-cyber inline-block">
              View Portfolio
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl font-cyber font-bold text-neon-cyan">500+</div>
              <div className="text-sm text-gray-400">PCs Repaired</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cyber font-bold text-neon-green">200+</div>
              <div className="text-sm text-gray-400">Custom Builds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cyber font-bold text-neon-pink">50+</div>
              <div className="text-sm text-gray-400">Websites Built</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 