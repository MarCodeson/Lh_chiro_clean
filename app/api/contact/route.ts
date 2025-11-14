import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Valid email required'),
  message: z.string().trim().min(1, 'Message is required'),

})

const resend = new Resend(process.env.RESEND_API_KEY)

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

    const { name, email, message} = parsed.data

    // email template
    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `

    const fromAddress = "Contact Form <onboarding@resend.dev>"

    // send email using Resend SDK
    const response = await resend.emails.send({
      from: fromAddress,
      to: ['omardixon@hotmail.co.uk'],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html,
    })

    if (response.error) {
      console.error('Resend SDK error:', response.error)
      return NextResponse.json({ error: 'Unable to send message.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact route error', error)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
