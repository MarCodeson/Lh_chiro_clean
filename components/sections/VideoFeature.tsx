'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

export function VideoFeature() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="video">
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold">Clinical ethos</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Applied kinesiology, neuro emotional technique and chiropractic programmes supporting patients in Barbados and Aberdeen.
        </p>
      </motion.div>
      <motion.div
        className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 shadow-soft"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <iframe
          className="h-[220px] w-full md:h-[440px]"
          src={`https://player.vimeo.com/video/${site.media.vimeoId}?title=0&byline=0&portrait=0`}
          title="Practice ethos video"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </motion.div>
    </Section>
  )
}
