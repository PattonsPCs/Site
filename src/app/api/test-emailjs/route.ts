import { NextResponse } from 'next/server'

export async function GET() {
  const EMAIL_SERVICE_URL = 'https://api.emailjs.com/api/v1.0/email/send'
  const EMAIL_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
  const EMAIL_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
  const EMAIL_USER_ID = process.env.EMAILJS_USER_ID

  if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_USER_ID) {
    return NextResponse.json({ error: 'Missing EmailJS configuration' })
  }

  try {
    const formDataToSend = new URLSearchParams()
    formDataToSend.append('service_id', EMAIL_SERVICE_ID)
    formDataToSend.append('template_id', EMAIL_TEMPLATE_ID)
    formDataToSend.append('user_id', EMAIL_USER_ID)
    formDataToSend.append('template_params', JSON.stringify({
      email: 'pattonspcs@gmail.com',
      name: 'Test User',
      user_email: 'test@example.com',
      service: 'Test Service',
      message: 'This is a test message from the API',
      subject: 'Test Contact Form Submission',
      reply_to: 'test@example.com'
    }))

    const response = await fetch(EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataToSend
    })

    const responseText = await response.text()
    
    return NextResponse.json({
      status: response.status,
      statusText: response.statusText,
      response: responseText,
      success: response.ok
    })
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false
    })
  }
} 