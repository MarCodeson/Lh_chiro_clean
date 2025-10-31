'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'
export function Services() {
  const shouldReduceMotion = useReducedMotion()
  const items = site.services
  const wellbeingHighlights = site.wellbeingHighlights

  return (
    <Section id="services" className="pt-20">
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-8 space-y-3"
      >
        <h2 className="text-2xl font-semibold">Areas of Expertise</h2>
        <p className="max-w-3xl text-neutral-700">
          Clinics operate as an Aberdeen chiropractor and Barbados chiropractor resource, uniting human and equine chiropractic,
          applied kinesiology and neuro emotional technique to support pain relief, stress management and athletic performance{' '}
          across generations.
        </p>
      </motion.div>

      <motion.ul
        className="grid gap-4 text-sm text-neutral-800 md:grid-cols-2 md:text-base"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {items.map((item) => (
          <li key={item.slug} className="flex items-start gap-3">
            <span className="mt-2 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <span>{item.title}</span>
          </li>
        ))}
      </motion.ul>
    </Section>
  )
}
