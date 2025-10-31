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
          <h2 className="text-2xl font-semibold">Professional summary</h2>
          <p className="mt-3 text-neutral-700">
            For over 27 years, Dr Les Hall has provided holistic, conservative healthcare covering the triad of health — Structural, Metabolic and Emotional — whilst encouraging active patient involvement for optimal health and wellbeing.
          </p>
          <p className="mt-3 text-neutral-700">
            Based in the UK and Barbados, he continues to work with patients of all ages seeking pain resolution, improved mobility and overall wellbeing.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" /><span>GCC Registered No. 00616 · Barbados Registration Board approved.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" /><span>90% of new patients attend following recommendation from existing clients or healthcare colleagues.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" /><span>Clinical collaborator with physiotherapists, veterinary teams, occupational health providers and insurers.</span></li>
          </ul>
          <div className="mt-6">
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-200 shadow-soft">
              <iframe
                className="h-full w-full"
                src={`https://player.vimeo.com/video/${site.media.vimeoId}?title=0&byline=0&portrait=0`}
                title="Practice ethos video"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
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
