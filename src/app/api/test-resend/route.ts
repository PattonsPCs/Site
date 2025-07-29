import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    console.log('Testing Resend configuration...')
    
    // Check if API key is set
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({
        status: 'error',
        message: 'Missing Resend API key',
        envCheck: {
          RESEND_API_KEY: 'MISSING'
        }
      }, { status: 400 })
    }

    console.log('Resend API key is set')

    // Send a test email
    const { data, error } = await resend.emails.send({
      from: 'Patton\'s PC Clinic <noreply@pattonspcs.com>',
      to: ['pattonspcs@gmail.com'],
      subject: 'Test Email from Patton\'s PC Clinic Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Test Email - Resend Integration
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Test Information</h3>
            <p><strong>Service:</strong> Resend Email Service</p>
            <p><strong>Status:</strong> Working correctly!</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">
              This is a test email to verify that the Resend integration is working correctly 
              for your Patton's PC Clinic website contact form.
            </p>
            <p style="line-height: 1.6; color: #555;">
              If you received this email, the contact form should now be working properly!
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #666; font-size: 14px;">
            <p><strong>From:</strong> Patton's PC Clinic Website - Resend Test</p>
          </div>
        </div>
      `,
      text: `
Test Email - Resend Integration

Test Information:
- Service: Resend Email Service
- Status: Working correctly!
- Timestamp: ${new Date().toLocaleString()}

Message:
This is a test email to verify that the Resend integration is working correctly 
for your Patton's PC Clinic website contact form.

If you received this email, the contact form should now be working properly!

From: Patton's PC Clinic Website - Resend Test
      `
    })

    if (error) {
      console.error('Resend test error:', error)
      return NextResponse.json({
        status: 'error',
        message: 'Failed to send test email via Resend',
        error: error.message,
        errorDetails: error,
        envCheck: {
          RESEND_API_KEY: 'SET'
        }
      }, { status: 500 })
    }

    console.log('Test email sent successfully:', data)

    return NextResponse.json({
      status: 'success',
      message: 'Test email sent successfully via Resend!',
      data: data,
      envCheck: {
        RESEND_API_KEY: 'SET'
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Resend test error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Resend test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 