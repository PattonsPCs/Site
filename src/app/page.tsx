'use client'

import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MatrixBackground from '../components/MatrixBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      
      <Header />
      
      <Hero />
      
      <Services />
      
      <About />
      
      <Portfolio />
      
      <Contact />
      
      <Footer />
    </main>
  )
} 