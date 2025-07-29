import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET() {
  try {
    console.log('Testing Resend with minimal configuration...')
    
    // Check API key
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({
        status: 'error',
        message: 'Missing Resend API key'
      }, { status: 400 })
    }

    console.log('API key found, length:', apiKey.length)
    console.log('API key starts with:', apiKey.substring(0, 3))

    const resend = new Resend(apiKey)

    // Try a very simple email first
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use Resend's default domain
      to: ['pattonspcs@gmail.com'],
      subject: 'Simple Test from Patton\'s PC Clinic',
      text: 'This is a simple test email to verify Resend is working.'
    })

    console.log('Resend response:', { data, error })

    if (error) {
      return NextResponse.json({
        status: 'error',
        message: 'Resend error',
        error: error.message,
        errorDetails: error
      }, { status: 500 })
    }

    return NextResponse.json({
      status: 'success',
      message: 'Simple test email sent successfully!',
      data: data
    })

  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Unexpected error occurred',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
} 