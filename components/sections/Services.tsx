'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'
export function Services() {
  const shouldReduceMotion = useReducedMotion()
  const items = site.services
  const wellbeingHighlights = site.wellbeingHighlights

  // Map service index to local image path
  const localImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
  ]

  return (
    <Section id="services" className="pt-20">
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-8 space-y-3"
      >
        <h2 className="text-2xl font-semibold">Clinical expertise</h2>
        <p className="max-w-3xl text-neutral-700">
          Chiropractic care for humans and horses, delivered with an evidence-based, multi-disciplinary approach. Programmes are
          designed to dovetail with medical teams, coaches and employers as required.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((s, index) => (
          <motion.article
            key={s.slug}
            className="card flex h-full flex-col p-5"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              ease: 'easeOut',
              delay: shouldReduceMotion ? 0 : index * 0.08,
            }}
          >
            <div className="mb-4 h-28 w-full overflow-hidden rounded-xl bg-neutral-100 md:h-36">
              <img
                src={s.slug === 'equine' ? site.media.equine : localImages[index] || localImages[0]}
                alt={s.title}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{s.blurb}</p>
          </motion.article>
        ))}
        <motion.article
          className="card flex h-full flex-col justify-between p-5"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: shouldReduceMotion ? 0 : items.length * 0.08 }}
        >
          <div>
            <h3 className="text-lg font-medium">Wellbeing &amp; stress management</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Complementary programmes for organisations and individuals, reflecting insights shared regularly on the clinic
              Instagram feed.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {wellbeingHighlights.map(point => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </Section>
  )
}
