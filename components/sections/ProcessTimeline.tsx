'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const POINTS = [
  'GCC Registered No. 00616',
  'AECC University College Graduate',
  '27 + years clinical experience providing chiropractic healthcare for all ages',
  'Registered in both Barbados and the United Kingdom',
  'Experienced in Applied Kinesiology (AK) and Neuro Emotional Technique (NET)',
  'Focused on the triad of health — Structural, Metabolic and Emotional — to support long-term wellbeing',
  'Member of professional associations (list to be confirmed)',
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
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700 md:text-base">
          {POINTS.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </Section>
  )
}
