'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'Gaming PC Build - RTX 4090',
      category: 'Custom PC',
      image: '/api/placeholder/400/300',
      description: 'High-end gaming rig with RTX 4090 and Intel i9-13900K',
      tech: ['RTX 4090', 'i9-13900K', '32GB RAM', '2TB NVMe']
    },
    {
      title: 'E-commerce Website',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      description: 'Modern e-commerce platform with payment integration',
      tech: ['Next.js', 'Stripe', 'Tailwind CSS', 'Firebase']
    },
    {
      title: 'Workstation Build',
      category: 'Custom PC',
      image: '/api/placeholder/400/300',
      description: 'Professional workstation for video editing',
      tech: ['RTX 4080', 'Ryzen 9', '64GB RAM', '4TB Storage']
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-cyan mb-4">
            PORTFOLIO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Check out some of our recent work and custom builds
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pixel-card group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4">
                <div className="w-full h-48 bg-dark-300 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neon-pink font-cyber">{project.category}</span>
                  <ExternalLink className="w-4 h-4 text-neon-cyan" />
                </div>
                
                <h3 className="text-xl font-cyber font-bold text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio 