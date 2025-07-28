'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye, Monitor, Code, Wrench, Star, Calendar, ArrowLeft, Filter } from 'lucide-react'
import Link from 'next/link'

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    client: string;
    date: string;
    rating: number;
    price: string;
    features: string[];
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Eye className="w-4 h-4" /> },
    { id: 'pc', name: 'Custom PCs', icon: <Monitor className="w-4 h-4" /> },
    { id: 'web', name: 'Web Development', icon: <Code className="w-4 h-4" /> },
    { id: 'repair', name: 'Repairs', icon: <Wrench className="w-4 h-4" /> }
  ]

  const projects = [
    {
      id: 1,
      title: 'Gaming Beast RTX 4090',
      category: 'pc',
      image: '/api/placeholder/400/300',
      description: 'Ultra-high-end gaming rig featuring RTX 4090, Intel i9-13900K, 32GB DDR5 RAM, and custom liquid cooling.',
      tech: ['RTX 4090', 'i9-13900K', '32GB DDR5', '2TB NVMe', 'Custom Loop'],
      client: 'Gaming Enthusiast',
      date: '2024',
      rating: 5,
      price: '$4,500',
      features: [
        '4K Gaming at 144Hz',
        'Ray Tracing Enabled',
        'Custom Cable Management',
        'RGB Lighting Setup',
        'Overclocked Performance'
      ]
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'Modern e-commerce website with payment integration, inventory management, and mobile-responsive design.',
      tech: ['Next.js', 'Stripe', 'Tailwind CSS', 'Firebase', 'TypeScript'],
      client: 'Local Business',
      date: '2024',
      rating: 5,
      price: '$2,500',
      features: [
        'Payment Processing',
        'Inventory Management',
        'Mobile Responsive',
        'SEO Optimized',
        'Admin Dashboard'
      ]
    },
    {
      id: 3,
      title: 'Video Editing Workstation',
      category: 'pc',
      image: '/api/placeholder/400/300',
      description: 'Professional workstation optimized for 4K video editing, 3D rendering, and content creation.',
      tech: ['RTX 4080', 'Ryzen 9 7950X', '64GB RAM', '4TB Storage', '10Gbps Network'],
      client: 'Content Creator',
      date: '2024',
      rating: 5,
      price: '$3,200',
      features: [
        '4K Video Editing',
        '3D Rendering',
        'Fast Export Times',
        'Multiple Monitor Setup',
        'Professional Audio'
      ]
    },
    {
      id: 4,
      title: 'Virus Removal & Optimization',
      category: 'repair',
      image: '/api/placeholder/400/300',
      description: 'Complete system cleanup, virus removal, and performance optimization for a business client.',
      tech: ['Virus Removal', 'System Optimization', 'Data Recovery', 'Backup Setup'],
      client: 'Small Business',
      date: '2024',
      rating: 5,
      price: '$150',
      features: [
        'Malware Removal',
        'System Optimization',
        'Data Backup',
        'Security Setup',
        'Performance Boost'
      ]
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'Modern portfolio website with animations, contact forms, and professional design.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Netlify', 'EmailJS'],
      client: 'Freelance Designer',
      date: '2024',
      rating: 5,
      price: '$1,200',
      features: [
        'Smooth Animations',
        'Contact Forms',
        'Portfolio Gallery',
        'Blog Integration',
        'SEO Optimized'
      ]
    },
    {
      id: 6,
      title: 'Streaming PC Build',
      category: 'pc',
      image: '/api/placeholder/400/300',
      description: 'Dual-purpose gaming and streaming PC with capture card integration and professional audio setup.',
      tech: ['RTX 4070', 'Ryzen 7 7700X', '32GB RAM', 'Capture Card', 'Audio Interface'],
      client: 'Twitch Streamer',
      date: '2024',
      rating: 5,
      price: '$2,800',
      features: [
        '1080p Streaming',
        'High FPS Gaming',
        'Professional Audio',
        'Capture Card',
        'Dual Monitor Setup'
      ]
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
    if (!project) return null

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-dark-200 border border-neon-cyan max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-cyber font-bold text-neon-cyan">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="w-full h-64 bg-dark-300 flex items-center justify-center mb-4">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Client:</span>
                    <span className="text-white font-cyber">{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white font-cyber">{project.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-neon-cyan font-cyber font-bold">{project.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Rating:</span>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-cyber font-bold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-cyber font-bold text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
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
            PORTFOLIO
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our best work and achievements. Each project represents our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="pixel-card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden mb-4">
                <div className="w-full h-48 bg-dark-300 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-cyber ${
                    project.category === 'pc' ? 'bg-neon-cyan/20 text-neon-cyan' :
                    project.category === 'web' ? 'bg-neon-pink/20 text-neon-pink' :
                    'bg-neon-green/20 text-neon-green'
                  }`}>
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-cyber font-bold text-white group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-neon-pink" />
                    <span className="text-sm text-gray-400">{project.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-neon-cyan font-cyber font-bold">{project.price}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <ExternalLink className="w-4 h-4 text-neon-cyan" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-cyber font-bold text-neon-cyan">50+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-cyber font-bold text-neon-green">100%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-cyber font-bold text-neon-pink">5.0</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-cyber font-bold text-neon-cyan">24/7</div>
            <div className="text-sm text-gray-400">Support Available</div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  )
}

export default PortfolioPage 