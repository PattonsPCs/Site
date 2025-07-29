import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('Testing basic network connectivity...')
    
    // Test 1: Simple HTTP request to a public API
    const testResponse = await fetch('https://httpbin.org/get', {
      method: 'GET',
      headers: {
        'User-Agent': 'Patton-PC-Clinic-Test/1.0'
      }
    })
    
    const testData = await testResponse.json()
    
    // Test 2: Try to reach EmailJS with a minimal request
    const emailjsTestResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Patton-PC-Clinic-Test/1.0'
      },
      body: 'service_id=test&template_id=test&user_id=test&template_params={}'
    })
    
    const emailjsResponseText = await emailjsTestResponse.text()
    
    return NextResponse.json({
      status: 'success',
      tests: {
        basicConnectivity: {
          status: testResponse.status,
          success: testResponse.ok,
          data: testData
        },
        emailjsConnectivity: {
          status: emailjsTestResponse.status,
          success: emailjsTestResponse.ok,
          response: emailjsResponseText
        }
      },
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Network test error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Network test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
} 