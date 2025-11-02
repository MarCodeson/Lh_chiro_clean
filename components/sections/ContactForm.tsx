'use client'
import { motion, useReducedMotion } from 'framer-motion'
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
  facebook: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 9H16l.5-3h-3V4.5c0-.864.203-1.5 1.5-1.5H16V0h-2.5C10.671 0 9 1.657 9 4.5V6H6v3h3v12h4.5V9z"
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
  const shouldReduceMotion = useReducedMotion()
  const phoneBBTel = site.contacts.phoneBB.replace(/[^+\d]/g, '')

  return (
    <Section id="contact">
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold">Connect with Dr Hall</h2>
      </motion.div>
      <motion.div
        className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1.1fr_1fr]"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <article className="card h-full space-y-5 p-6 text-left">
          <h3 className="text-lg font-semibold text-neutral-900">Direct contact</h3>
          <ul className="space-y-3 text-sm text-neutral-800">
            <li>
              Email –{' '}
              <a className="text-accent hover:underline" href={`mailto:${site.contacts.email}`}>
                {site.contacts.email}
              </a>
            </li>
            <li>
              WhatsApp / Call or Message –{' '}
              <a className="text-accent hover:underline" href={whatsappHref} target="_blank" rel="noreferrer">
                {site.contacts.phoneUK}
              </a>{' '}
              /{' '}
              <a className="hover:underline" href={`tel:${phoneBBTel}`}>
                {site.contacts.phoneBB}
              </a>
            </li>
          </ul>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Clinics</h4>
            <ul className="mt-2 space-y-2 text-sm text-neutral-700">
              {site.locations.map((location) => {
                const locationLine = `${location.label} – ${location.address}`
                return <li key={location.key}>{locationLine}</li>
              })}
            </ul>
          </div>
        </article>
        <article className="card h-full space-y-5 p-6 text-left">
          <h3 className="text-lg font-semibold text-neutral-900">Connect online</h3>
          <div className="space-y-4">
            {site.socials.map((group) => (
              <div key={group.key} className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">{group.title}</p>
                <ul className="space-y-2 text-sm text-neutral-800">
                  {group.links.map((link) => (
                    <li key={link.key}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 transition hover:border-accent hover:text-neutral-900"
                      >
                        <span className="text-accent">{ICONS[link.icon] ?? null}</span>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </motion.div>
    </Section>
  )
}
