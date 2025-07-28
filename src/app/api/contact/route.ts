import { NextRequest, NextResponse } from 'next/server'

// Email service configuration
const EMAIL_SERVICE_URL = 'https://api.emailjs.com/api/v1.0/email/send'
const EMAIL_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
const EMAIL_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
const EMAIL_USER_ID = process.env.EMAILJS_USER_ID

// SMS service configuration (using Twilio) - Disabled for now
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
const TARGET_PHONE_NUMBER = '(219) 230-6791'

// Contact information
const WORK_EMAIL = 'pattonspcs@gmail.com'
const WORK_PHONE = '(219) 230-6791'

interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}

// Helper function to send email via EmailJS
async function sendEmail(formData: ContactFormData) {
  try {
    // Validate environment variables
    if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_USER_ID) {
      console.error('Missing EmailJS environment variables:', {
        service_id: EMAIL_SERVICE_ID ? 'SET' : 'MISSING',
        template_id: EMAIL_TEMPLATE_ID ? 'SET' : 'MISSING',
        user_id: EMAIL_USER_ID ? 'SET' : 'MISSING'
      })
      throw new Error('EmailJS configuration is incomplete')
    }

    // Log the environment variables for debugging (remove in production)
    console.log('EmailJS Config:', {
      service_id: EMAIL_SERVICE_ID,
      template_id: EMAIL_TEMPLATE_ID,
      user_id: EMAIL_USER_ID
    })

    // EmailJS form data format (this is the correct format)
    const formDataToSend = new URLSearchParams()
    formDataToSend.append('service_id', EMAIL_SERVICE_ID)
    formDataToSend.append('template_id', EMAIL_TEMPLATE_ID)
    formDataToSend.append('user_id', EMAIL_USER_ID)
    formDataToSend.append('template_params', JSON.stringify({
      email: WORK_EMAIL,
      name: formData.name,
      user_email: formData.email,
      service: formData.service,
      message: formData.message,
      subject: `New Contact Form Submission - ${formData.service}`,
      reply_to: formData.email
    }))

    console.log('Sending to EmailJS:', {
      url: EMAIL_SERVICE_URL,
      service_id: EMAIL_SERVICE_ID,
      template_id: EMAIL_TEMPLATE_ID,
      template_params: {
        email: WORK_EMAIL,
        name: formData.name,
        user_email: formData.email,
        service: formData.service,
        message: formData.message
      }
    })

    const response = await fetch(EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataToSend
    })

    const responseText = await response.text()
    console.log('EmailJS Response:', response.status, responseText)

    if (!response.ok) {
      throw new Error(`Email service error: ${response.status} - ${responseText}`)
    }

    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}

// Helper function to send SMS via Twilio
async function sendSMS(formData: ContactFormData) {
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER) {
    console.log('Twilio credentials not configured, skipping SMS')
    return true // Don't fail the request if SMS is not configured
  }

  try {
    const messageBody = `New Contact Form Submission:
From: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}`

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: TARGET_PHONE_NUMBER,
        From: TWILIO_PHONE_NUMBER,
        Body: messageBody
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      throw new Error(`SMS service error: ${response.status} - ${errorData}`)
    }

    return true
  } catch (error) {
    console.error('SMS sending failed:', error)
    return false
  }
}

// Main API handler
export async function POST(request: NextRequest) {
  try {
    console.log('Contact form submission received')
    
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
    
    // Send email only (SMS disabled for now)
    const emailSent = await sendEmail({ name, email, service, message })
    const smsSent = true // SMS disabled, always return true

    console.log('Email sent result:', emailSent)

    // Log the submission for debugging
    console.log('Contact form submission:', {
      name,
      email,
      service,
      message,
      timestamp: new Date().toISOString(),
      emailSent,
      smsSent
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.',
      emailSent,
      smsSent
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