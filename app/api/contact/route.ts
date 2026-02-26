import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Changed: Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Changed: Define the shape of the contact form payload
interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData

    // Changed: Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Changed: Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Changed: Send email using Resend from my@email.com to my@email.com
    const { error } = await resend.emails.send({
      from: 'my@email.com',
      to: 'my@email.com',
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <div style="padding: 20px 0;">
            <p style="margin: 0 0 12px;"><strong>Name:</strong> ${body.name}</p>
            <p style="margin: 0 0 12px;"><strong>Email:</strong> ${body.email}</p>
            <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #6366f1;">
              <p style="margin: 0; white-space: pre-wrap; color: #334155;">${body.message}</p>
            </div>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">
            This message was sent from the Digital Gurus contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}