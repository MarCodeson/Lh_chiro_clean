'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

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
        <h2 className="text-2xl font-semibold">Request help</h2>
        <p className="mt-1 text-neutral-700">Send your details. We’ll call you to schedule.</p>
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
          <textarea id="message" name="message" rows={4} placeholder="How can we help?" />
        </div>
        <div className="flex items-center gap-2">
          <input id="gdpr" name="gdpr" type="checkbox" required className="h-4 w-4" />
          <label htmlFor="gdpr" className="text-sm">I agree to be contacted about my enquiry.</label>
        </div>
        <button className="btn btn-primary" disabled={status==='sending'}>
          {status==='sending' ? 'Sending…' : status==='sent' ? 'Sent' : 'Send'}
        </button>
        {status==='error' && <p className="small text-red-600">Something went wrong. Please try again later.</p>}
      </motion.form>
      <p className="small mt-3 text-center">UK {site.contacts.phoneUK} · BB {site.contacts.phoneBB} · {site.contacts.email}</p>
    </Section>
  )
}
