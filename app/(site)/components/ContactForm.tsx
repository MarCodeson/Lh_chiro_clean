'use client'

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error ?? 'Unable to send message.')
      }

      setStatus('success')
      setFeedback('Thank you. Your message has been sent to Dr Hall.')
      setForm(initialState)
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="min-h-screen py-16 px-4 flex items-center">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-lg flex-col space-y-5 text-center text-[rgba(95,105,109,1)]"
        noValidate
      >
        <h2 className="text-4xl font-heading">Message Les Hall</h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
          className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Message"
          rows={5}
          className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-2xl bg-neutral-900 px-6 py-4 text-lg text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
        {feedback && (
          <p className={`text-base ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>{feedback}</p>
        )}
      </form>
    </section>
  )
}
