'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

const whatsappHref = `https://wa.me/${site.contacts.whatsapp.replace(/[^\d]/g, '')}`

const ICONS: Record<string, ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.352V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.604 0 4.27 2.372 4.27 5.456v6.287zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM7.114 20.452H3.559V9h3.555v11.452z"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-2.75a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"
      />
    </svg>
  ),
}

export function ContactForm() {
  const params = useMemo(() => new URLSearchParams(typeof window !== 'undefined' ? window.location.search : ''), [])
  const initialLoc = (params.get('location') || 'aberdeen') as 'aberdeen' | 'orkney' | 'barbados'
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Support hash-based deep link like #contact?location=orkney
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      const q = hash.split('?')[1]
      if (q) {
        const qp = new URLSearchParams(q)
        const loc = qp.get('location') as string | null
        if (loc) {
          const select = formRef.current?.querySelector('select[name="location"]') as HTMLSelectElement | null
          if (select) select.value = loc
        }
      }
    }
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold">Enquiries &amp; contact</h2>
        <p className="mt-1 text-neutral-700">
          Share a brief overview of your requirements and preferred clinic. Dr Hall or a member of the team will respond to
          arrange the next steps.
        </p>
      </motion.div>
      <motion.form
        ref={formRef}
        onSubmit={onSubmit}
        className="card mx-auto max-w-2xl space-y-4 p-6"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required placeholder="+44 …" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select id="location" name="location" defaultValue={initialLoc}>
              {site.locations.map(l => <option key={l.key} value={l.key}>{l.label}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Outline focus areas, background and availability (optional)" />
        </div>
        <div className="flex items-center gap-2">
          <input id="gdpr" name="gdpr" type="checkbox" required className="h-4 w-4" />
          <label htmlFor="gdpr" className="text-sm">I agree to be contacted about my enquiry.</label>
        </div>
        <button className="btn btn-primary" disabled={status==='sending'}>
          {status==='sending' ? 'Sending…' : status==='sent' ? 'Sent' : 'Send enquiry'}
        </button>
        {status==='error' && <p className="small text-red-600">Something went wrong. Please try again later.</p>}
      </motion.form>
      <div className="mt-6 space-y-3 text-center text-sm text-neutral-700">
        <p>UK {site.contacts.phoneUK} · BB {site.contacts.phoneBB} · {site.contacts.email}</p>
        <p>
          <a href={whatsappHref} className="text-accent hover:underline" target="_blank" rel="noreferrer">
            WhatsApp direct message
          </a>
        </p>
        <div className="flex items-center justify-center gap-4">
          {site.socials.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition hover:border-accent hover:text-neutral-900"
            >
              <span className="text-accent">{ICONS[social.icon] ?? null}</span>
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
