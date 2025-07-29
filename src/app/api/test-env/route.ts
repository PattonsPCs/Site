import { NextResponse } from 'next/server'

const EMAIL_SERVICE_URL = 'https://api.emailjs.com/api/v1.0/email/send'
const EMAIL_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
const EMAIL_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
const EMAIL_USER_ID = process.env.EMAILJS_USER_ID

export async function GET() {
  try {
    // First, check environment variables
    const envCheck = {
      service_id: EMAIL_SERVICE_ID ? 'SET' : 'MISSING',
      template_id: EMAIL_TEMPLATE_ID ? 'SET' : 'MISSING',
      user_id: EMAIL_USER_ID ? 'SET' : 'MISSING'
    }

    console.log('Environment check:', envCheck)

    if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_USER_ID) {
      return NextResponse.json({
        status: 'error',
        message: 'Missing EmailJS environment variables',
        envCheck,
        error: 'Environment variables not loaded'
      }, { status: 400 })
    }

    // Log the actual values (first few characters for security)
    console.log('EmailJS Config (partial):', {
      service_id: EMAIL_SERVICE_ID.substring(0, 4) + '...',
      template_id: EMAIL_TEMPLATE_ID.substring(0, 4) + '...',
      user_id: EMAIL_USER_ID.substring(0, 4) + '...'
    })

    // Send a test email
    const formDataToSend = new URLSearchParams()
    formDataToSend.append('service_id', EMAIL_SERVICE_ID)
    formDataToSend.append('template_id', EMAIL_TEMPLATE_ID)
    formDataToSend.append('user_id', EMAIL_USER_ID)
    formDataToSend.append('template_params', JSON.stringify({
      email: 'pattonspcs@gmail.com',
      name: 'Production Test User',
      user_email: 'test@example.com',
      service: 'Production Test',
      message: `This is a test email from your production website. Timestamp: ${new Date().toISOString()}`,
      subject: 'Production Test - Contact Form',
      reply_to: 'test@example.com'
    }))

    console.log('Sending test email to EmailJS...')
    console.log('Request details:', {
      url: EMAIL_SERVICE_URL,
      method: 'POST',
      bodySize: formDataToSend.toString().length,
      bodyPreview: formDataToSend.toString().substring(0, 200) + '...'
    })

    const response = await fetch(EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Patton-PC-Clinic/1.0'
      },
      body: formDataToSend
    })

    const responseText = await response.text()
    console.log('EmailJS Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: responseText
    })

    if (!response.ok) {
      return NextResponse.json({
        status: 'error',
        message: `EmailJS API error: ${response.status}`,
        response: responseText,
        envCheck
      }, { status: 500 })
    }

    return NextResponse.json({
      status: 'success',
      message: 'Test email sent successfully from production!',
      envCheck,
      response: responseText,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Test email error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Failed to send test email',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
} 