'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const galleryImages = [
  '/images/gallery/decay.png',
  '/images/gallery/theragun.png',
  '/images/gallery/meridian.png',
  '/images/gallery/handsanitiser.png',
  '/images/gallery/trigger patterns.png',
  '/images/gallery/activator 4.png',
  '/images/gallery/nerves.png',
  '/images/gallery/bottles.png',
  '/images/gallery/first-second-last.png',
  '/images/gallery/baby.png',
  '/images/gallery/clinic-back-massage.png',
  '/images/gallery/horse-chiro.png',
  '/images/gallery/dogs.png',
]

const desktopSpans = [
  'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4',
  'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4',
  'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3',
  'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4',
]

export function Gallery() {
  const spans = desktopSpans
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeOverlay = () => setActiveIndex(null)

  return (
    <section className="min-h-screen py-16 px-4 flex flex-col justify-center">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {galleryImages.map((src, idx) => (
            <button
              type="button"
              key={src}
              className={`overflow-hidden rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent ${spans[idx] ?? 'lg:col-span-4'}`}
              onClick={() => setActiveIndex(idx)}
            >
              <Image
                src={src}
                alt=""
                width={480}
                height={480}
                className="h-full w-full cursor-zoom-in object-cover transition hover:opacity-90"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 18vw"
                priority={idx === 0}
                loading={idx === 0 ? 'eager' : 'lazy'}
                quality={80}
              />
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOverlay}
          >
            <button
              type="button"
              aria-label="Close gallery"
              className="absolute right-6 top-6 text-3xl text-white transition hover:text-neutral-200"
              onClick={closeOverlay}
            >
              ×
            </button>
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={galleryImages[activeIndex]}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
