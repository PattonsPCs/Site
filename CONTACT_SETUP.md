# Contact Form Setup Guide

## Overview
The contact form now sends submissions to your email (pattonspcs@gmail.com) and phone ((219) 230-6791) using EmailJS for emails and Twilio for SMS.

## Required Setup

### 1. Email Service (EmailJS)
**Sign up at:** https://www.emailjs.com/

1. Create an account and verify your email
2. Add your Gmail service (pattonspcs@gmail.com)
3. Create an email template with these variables:
   - `{{to_email}}` - recipient email
   - `{{from_name}}` - sender name
   - `{{from_email}}` - sender email
   - `{{service}}` - requested service
   - `{{message}}` - message content
   - `{{subject}}` - email subject

4. Get your credentials:
   - Service ID
   - Template ID
   - User ID

### 2. SMS Service (Twilio) - Optional
**Sign up at:** https://www.twilio.com/

1. Create an account and verify your phone number
2. Get a Twilio phone number
3. Get your credentials:
   - Account SID
   - Auth Token
   - Twilio Phone Number

### 3. Environment Variables
Create a `.env.local` file in your project root with:

```env
# Email Service Configuration (EmailJS)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_USER_ID=your_user_id

# SMS Service Configuration (Twilio) - Optional
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

## Email Template Example
```
Subject: New Contact Form Submission - {{service}}

Received a message from: {{from_name}}
Email: {{from_email}}
Service Needed: {{service}}
Message: {{message}}

---
Sent from Patton's PC Clinic Contact Form
```

## SMS Template
The SMS will be formatted as:
```
New Contact Form Submission:
From: [Name]
Email: [Email]
Service: [Service]
Message: [Message]
```

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email (pattonspcs@gmail.com)
4. Check your phone ((219) 230-6791) if SMS is configured

## Troubleshooting
- Check browser console for errors
- Verify environment variables are set correctly
- Ensure EmailJS service is properly configured
- Check Twilio credentials if using SMS

## Security Notes
- Never commit `.env.local` to version control
- Keep your API keys secure
- Monitor your EmailJS and Twilio usage 