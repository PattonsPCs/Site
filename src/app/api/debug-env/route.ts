import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    emailjs_service_id: process.env.EMAILJS_SERVICE_ID || 'NOT_SET',
    emailjs_template_id: process.env.EMAILJS_TEMPLATE_ID || 'NOT_SET',
    emailjs_user_id: process.env.EMAILJS_USER_ID || 'NOT_SET',
    // Show first few characters for verification (don't expose full values)
    service_id_preview: process.env.EMAILJS_SERVICE_ID ? process.env.EMAILJS_SERVICE_ID.substring(0, 4) + '...' : 'NOT_SET',
    template_id_preview: process.env.EMAILJS_TEMPLATE_ID ? process.env.EMAILJS_TEMPLATE_ID.substring(0, 4) + '...' : 'NOT_SET',
    user_id_preview: process.env.EMAILJS_USER_ID ? process.env.EMAILJS_USER_ID.substring(0, 4) + '...' : 'NOT_SET',
  })
} 