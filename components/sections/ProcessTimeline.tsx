'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/ui/Section'

const POINTS = [
  { title: 'GCC Registration', detail: 'No. 00616' },
  { title: 'AECC University College', detail: 'Bsc(Hons), MSc, DC' },
  { title: '27+ Years Clinical Experience', detail: 'For Chiropractic healthcare across all ages' },
  { title: 'Dual Registration', detail: 'Barbados and United Kingdom' },
  { title: 'Applied Kinesiology (AK)', detail: 'Experienced practitioner' },
  { title: 'Neuro Emotional Technique (NET)', detail: 'Experienced practitioner' },
  { title: 'Triad of Health Focus', detail: 'Structural · Metabolic · Emotional wellbeing' },
  { title: 'Clinics', detail: '3 – Kirkwall, Aberdeen & Barbados' },
] as const

export function QualificationsAffiliations() {
  const reduce = useReducedMotion()

  return (
    <Section>
      <motion.div
        className="card p-6"
        initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        aria-labelledby="qualifications-heading"
      >
        <h2 id="qualifications-heading" className="text-2xl font-semibold">
          Professional Qualifications & Achievements
        </h2>

        <dl className="mt-6 grid gap-6 md:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.title} className="flex items-start gap-3">
              <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 text-neutral-500" />
              <div>
                <dt className="text-sm font-semibold tracking-wide text-neutral-700">
                  {p.title}
                </dt>
                <dd className="text-base text-neutral-900">
                  {p.detail}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </motion.div>
    </Section>
  )
}
