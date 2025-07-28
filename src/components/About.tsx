'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, Award, Target, Zap } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <User className="w-8 h-8" />, value: '500+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, value: '5+', label: 'Years Experience' },
    { icon: <Target className="w-8 h-8" />, value: '99%', label: 'Success Rate' },
    { icon: <Zap className="w-8 h-8" />, value: '24/7', label: 'Support' },
  ]

  return (
    <section id="about" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-cyan">
              ABOUT US
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded by Anthony Patton, Patton's PC Clinic started as a passion project 
              for gaming and technology. What began as helping friends with computer issues 
              has grown into a full-service tech company serving both individuals and businesses.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We combine cutting-edge technology with a modern gaming aesthetic to deliver 
              exceptional results. Our team of certified technicians and developers are 
              passionate about technology and committed to providing the best service possible.
            </p>
            
            {/* Mission */}
            <div className="pixel-card mt-8">
              <h3 className="text-2xl font-cyber font-bold text-neon-pink mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To provide professional, reliable, and innovative tech solutions while 
                maintaining the excitement and creativity of gaming culture.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pixel-card text-center"
              >
                <div className="text-neon-cyan mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-cyber font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-cyber">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 