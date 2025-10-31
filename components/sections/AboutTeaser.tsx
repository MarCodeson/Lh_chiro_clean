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
          <h2 className="text-2xl font-semibold">Meet Dr Les Hall</h2>
          <p className="mt-3 text-neutral-700">
            Dr Les Hall BSc (Hons), MSc, DC — Human &amp; Equine Chiropractor, Applied Kinesiologist and Neuro Emotional Technique Practitioner. AECC University College graduate. UK General Chiropractic Council Registered No. 00616. Barbados Registered.
          </p>
          <p className="mt-3 text-neutral-700">
            For over 27 years, Dr Hall has provided holistic, conservative healthcare, covering the triad of health — structural, metabolic and emotional — while encouraging active patient involvement for optimal health and wellbeing.
          </p>
          <div className="mt-4">
            <a href="#contact" className="btn btn-primary">
              Request help
            </a>
          </div>
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
