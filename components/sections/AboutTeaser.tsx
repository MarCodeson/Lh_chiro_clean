'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

export function AboutTeaser() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="about">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold">About Dr. Les Hall</h2>
          <p className="mt-3 text-neutral-700">
            With 27+ years’ experience in chiropractic and holistic care, Dr Les Hall supports patients across Aberdeen Clinic, Barbados Clinic, and Kirkwall Clinic. His Optimal Performance focus brings structural, metabolic, and emotional balance to every programme.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">Clinics</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-700">
              {site.locations.map((location) => (
                <li key={location.key}>
                  <span className="font-medium text-neutral-800">{location.label}</span>
                  <br />
                  <span>{location.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-2xl border border-neutral-200 shadow-soft"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.1 }}
        >
          <img src={site.media.aboutPortrait} alt="Dr Les Hall portrait" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </Section>
  )
}
