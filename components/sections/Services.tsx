'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'
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
              {item.blurb ? <p className="mt-2 text-sm text-neutral-700">{item.blurb}</p> : null}
            </motion.article>
          )
        })}
      </div>
    
    </Section>
  )
}
