'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const POINTS = [
  { title: 'GCC Registration', detail: 'No. 00616' },
  { title: 'AECC University College', detail: 'Graduate' },
  { title: '27+ Years Clinical Experience', detail: 'Chiropractic healthcare for all ages' },
  { title: 'Dual Registration', detail: 'Barbados and United Kingdom' },
  { title: 'Applied Kinesiology (AK)', detail: 'Experienced practitioner' },
  { title: 'Neuro Emotional Technique (NET)', detail: 'Experienced practitioner' },
  { title: 'Triad of Health Focus', detail: 'Structural · Metabolic · Emotional wellbeing' },
  { title: 'Professional Associations', detail: 'Membership details to be confirmed' },
] as const

export function ProcessTimeline() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section>
      <motion.div
        className="card p-6"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold">Professional Qualifications &amp; Affiliations</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {POINTS.map(point => (
            <div key={point.title} className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">{point.title}</p>
              <p className="text-base text-neutral-800">{point.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
