import { NextResponse } from 'next/server'

export async function GET() {
  const envVars = {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID ? 'SET' : 'MISSING',
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID ? 'SET' : 'MISSING',
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY ? 'SET' : 'MISSING',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL
  }

  // Check if any EmailJS vars are missing
  const missingVars = Object.entries(envVars)
    .filter(([key, value]) => key.startsWith('EMAILJS_') && value === 'MISSING')
    .map(([key]) => key)

  return NextResponse.json({
    status: missingVars.length > 0 ? 'error' : 'success',
    message: missingVars.length > 0 
      ? `Missing environment variables: ${missingVars.join(', ')}`
      : 'All EmailJS environment variables are set',
    environment: envVars,
    timestamp: new Date().toISOString()
  })
} 