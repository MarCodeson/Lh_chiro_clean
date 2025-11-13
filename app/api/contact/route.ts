import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Valid email required'),
  message: z.string().trim().min(1, 'Message is required'),
  phone: z.string().trim().optional().default(''),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Please complete the required fields.', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const { name, email, message, phone } = parsed.data

    const apiKey = process.env.RESEND_API_KEY
    const fromAddress = process.env.RESEND_FROM ?? 'LH Chiropractic <no-reply@lh-chiro.com>'

    if (!apiKey) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json({ error: 'Email service unavailable.' }, { status: 500 })
    }

    const payload = {
      from: fromAddress,
      to: ['drleshall@aol.com'],
      reply_to: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text()
      console.error('Resend error', errorBody)
      return NextResponse.json(
        { error: 'Unable to send message at this time.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact route error', error)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
