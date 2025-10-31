'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

const MAP_IMAGES: Record<string, string> = {
  aberdeen: '/images/maps/aberdeen.svg',
  kirkwall: '/images/maps/orkney.svg',
  barbados: '/images/maps/barbados.svg',
}

export function Locations() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="locations">
      <motion.div
        className="mb-6 flex items-end justify-between"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold">Locations</h2>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-3">
        {site.locations.map((loc, index) => {
          const locationLine = `${loc.label} – ${loc.address}`

          return (
            <motion.article
              key={loc.key}
              className="card flex h-full flex-col overflow-hidden"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : index * 0.08 }}
            >
              <div className="relative h-48 w-full border-b border-neutral-200">
                <Image
                  src={MAP_IMAGES[loc.key] ?? MAP_IMAGES.aberdeen}
                  alt={`${loc.label} map`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-lg font-medium text-neutral-900">{locationLine}</h3>
                <p className="small">Hours: {loc.hours}</p>
                <div className="mt-auto pt-4">
                  <a href={`#contact?location=${loc.key}`} className="btn btn-primary w-full text-sm">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
