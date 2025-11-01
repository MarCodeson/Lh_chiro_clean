'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

export function Wellbeing() {
  const shouldReduceMotion = useReducedMotion()
  const wellbeingHighlights = site.wellbeingHighlights

  return (
    <Section id="wellbeing" className="pt-20">
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-5"
      >
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Wellbeing &amp; stress management</h2>
          <p className="max-w-3xl text-neutral-700">
            In addition to chiropractic care, Dr Hall helps individuals and teams manage stress, improve posture and build
            sustainable wellbeing routines.
          </p>
        </div>
        <ul className="space-y-3 text-sm text-neutral-700 md:columns-2 md:gap-8">
          {wellbeingHighlights.map((point) => (
            <li key={point} className="flex items-start gap-3 break-inside-avoid">
              <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  )
}
