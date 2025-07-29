import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Contact information
const WORK_EMAIL = 'pattonspcs@gmail.com'
const WORK_PHONE = '(219) 230-6791'

interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}

// Helper function to send email via Resend
async function sendEmail(formData: ContactFormData) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing Resend API key')
      throw new Error('Resend configuration is incomplete')
    }

    console.log('Sending email via Resend:', {
      to: WORK_EMAIL,
      from: formData.email,
      subject: `New Contact Form Submission - ${formData.service}`,
      name: formData.name,
      service: formData.service
    })

    const { data, error } = await resend.emails.send({
      from: 'Patton\'s PC Clinic <onboarding@resend.dev>',
      to: [WORK_EMAIL],
      replyTo: formData.email,
      subject: `New Contact Form Submission - ${formData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Service Requested:</strong> ${formData.service}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #666; font-size: 14px;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>From:</strong> Patton's PC Clinic Website Contact Form</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Service Requested: ${formData.service}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
From: Patton's PC Clinic Website Contact Form
      `
    })

    if (error) {
      console.error('Resend email error:', error)
      throw new Error(`Email service error: ${error.message}`)
    }

    console.log('Email sent successfully via Resend:', data)
    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}

// Main API handler
export async function POST(request: NextRequest) {
  try {
    console.log('Contact form submission received')
    console.log('Environment check:', {
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 'SET' : 'MISSING',
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV
    })
    
    const body = await request.json()
    const { name, email, service, message }: ContactFormData = body

    console.log('Form data:', { name, email, service, message })

    // Validate required fields
    if (!name || !email || !service || !message) {
      console.log('Validation failed: missing required fields')
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email format')
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    console.log('Validation passed, sending email...')
    
    // Send email via Resend
    const emailSent = await sendEmail({ name, email, service, message })

    console.log('Email sent result:', emailSent)

    // Log the submission for debugging
    console.log('Contact form submission:', {
      name,
      email,
      service,
      message,
      timestamp: new Date().toISOString(),
      emailSent
    })

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.',
      emailSent
    })

  } catch (error) {
    console.error('Contact form API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
} 