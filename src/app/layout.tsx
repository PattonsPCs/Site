
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Patton's PC Clinic - Computer Repair, Custom PC Building & Web Development",
  description: "Professional computer repair, custom PC building, and website development services. Modern tech solutions with a gaming aesthetic. Get your quote today!",
  keywords: [
    'computer repair',
    'custom PC building',
    'website development',
    'tech services',
    'PC repair',
    'gaming PC',
    'IT services',
    'web development'
  ],
  authors: [{ name: 'Anthony Patton' }],
  creator: "Patton's PC Clinic",
  publisher: "Patton's PC Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pattonspcclinic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Patton's PC Clinic - Professional Tech Services",
    description: "Computer repair, custom PC building, and website development with a modern gaming aesthetic.",
    url: 'https://pattonspcclinic.com',
    siteName: "Patton's PC Clinic",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Patton's PC Clinic - Tech Services",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Patton's PC Clinic - Professional Tech Services",
    description: "Computer repair, custom PC building, and website development with a modern gaming aesthetic.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00ffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-dark-300">
          {children}
        </div>
      </body>
    </html>
  )
} 