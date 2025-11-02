'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

const primaryKeywords = [
  'Pain',
  'Resolution',
  'Relief',
  'Improved Range of Motion',
  'Traumatic and Sports Injuries',
  'Optimal Performance for Athletes',
]

const focusMentions = [
  'back pain',
  'neck pain',
  'posture',
  'sports injuries',
  'emotional work',
  'neuro emotional work (stress release, mind body)',
]

export function Services() {
  const shouldReduceMotion = useReducedMotion()
  const items = site.services

  const localImages = ['/images/1.jpg', '/images/2.jpg', '/images/4.jpg', '/images/5.jpg', '/images/6.jpg']

  return (
    <Section id="services" className="pt-20">
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-8 space-y-2"
      >
        <h2 className="text-2xl font-semibold">Areas of Expertise</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mb-6 flex flex-wrap items-center gap-3"
      >
        {primaryKeywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full border border-neutral-300 px-5 py-2 text-base font-semibold tracking-wide text-neutral-900"
          >
            {keyword}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.1 }}
        className="mb-8 flex flex-wrap gap-2"
      >
        {focusMentions.map((mention) => (
          <span
            key={mention}
            className="rounded-full bg-neutral-900/5 px-4 py-1.5 text-sm font-medium text-neutral-700"
          >
            {mention}
          </span>
        ))}
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => {
          const fallbackImage = localImages[index % localImages.length]
          const imageSrc = item.image ?? (item.slug === 'chiropractic-care' ? site.media.hero : fallbackImage)
          return (
            <motion.article
              key={item.slug}
              className="card h-full p-5"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: 'easeOut',
                delay: shouldReduceMotion ? 0 : index * 0.05,
              }}
            >
              <div className="mb-3 h-28 w-full overflow-hidden rounded-xl bg-neutral-100 md:h-36">
                <img src={imageSrc} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">{item.title}</h3>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
