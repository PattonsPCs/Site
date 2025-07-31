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
import CalendlyWidget from '../components/CalendlyWidget'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="relative min-h-screen w-full">
        <MatrixBackground />
        
        <Header />
        
        <Hero />
        
        <Services />
        
        <About />
        
        <Portfolio />
        
        <Contact />
        
        <Footer />
        
        <CalendlyWidget calendlyUrl="https://calendly.com/pattonspcs" />
      </main>
    </div>
  )
} 