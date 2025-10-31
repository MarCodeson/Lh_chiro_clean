import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const name = String(formData.get('name') || '')
  const email = String(formData.get('email') || '')
  const phone = String(formData.get('phone') || '')
  const location = String(formData.get('location') || '')
  const message = String(formData.get('message') || '')
  const gdpr = formData.get('gdpr') === 'on'

  if (!name || !email || !phone || !gdpr) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  console.log('CONTACT', { name, email, phone, location, message })

  return NextResponse.json({ ok: true })
}
