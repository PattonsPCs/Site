import { NextResponse } from 'next/server'

const EMAIL_SERVICE_URL = 'https://api.emailjs.com/api/v1.0/email/send'
const EMAIL_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAIL_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAIL_USER_ID = process.env.EMAILJS_USER_ID || process.env.NEXT_PUBLIC_EMAILJS_USER_ID

export async function GET() {
  try {
    console.log('Testing EmailJS format...')
    
    if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_USER_ID) {
      return NextResponse.json({
        status: 'error',
        message: 'Missing EmailJS environment variables'
      }, { status: 400 })
    }

    // Create the request body exactly as EmailJS expects it
    const requestBody = new URLSearchParams()
    requestBody.append('service_id', EMAIL_SERVICE_ID)
    requestBody.append('template_id', EMAIL_TEMPLATE_ID)
    requestBody.append('user_id', EMAIL_USER_ID)
    requestBody.append('template_params', JSON.stringify({
      email: 'pattonspcs@gmail.com',
      name: 'Format Test User',
      user_email: 'test@example.com',
      service: 'Format Test',
      message: 'Testing EmailJS format compatibility',
      subject: 'Format Test - Contact Form',
      reply_to: 'test@example.com'
    }))

    console.log('Request body:', requestBody.toString())
    console.log('Template params:', JSON.stringify({
      email: 'pattonspcs@gmail.com',
      name: 'Format Test User',
      user_email: 'test@example.com',
      service: 'Format Test',
      message: 'Testing EmailJS format compatibility',
      subject: 'Format Test - Contact Form',
      reply_to: 'test@example.com'
    }))

    const response = await fetch(EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody
    })

    const responseText = await response.text()
    
    console.log('EmailJS Response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseText,
      headers: Object.fromEntries(response.headers.entries())
    })

    return NextResponse.json({
      status: response.ok ? 'success' : 'error',
      message: response.ok ? 'EmailJS format test completed' : 'EmailJS format test failed',
      response: {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      },
      request: {
        url: EMAIL_SERVICE_URL,
        method: 'POST',
        body: requestBody.toString(),
        templateParams: {
          email: 'pattonspcs@gmail.com',
          name: 'Format Test User',
          user_email: 'test@example.com',
          service: 'Format Test',
          message: 'Testing EmailJS format compatibility',
          subject: 'Format Test - Contact Form',
          reply_to: 'test@example.com'
        }
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('EmailJS format test error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'EmailJS format test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 