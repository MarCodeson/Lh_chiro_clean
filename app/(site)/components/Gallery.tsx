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

// Fixed spans for 3 + 3 + 4 + 3 layout
const spans = [
  'col-span-4', 'col-span-4', 'col-span-4',               // Row 1 (3)
  'col-span-4', 'col-span-4', 'col-span-4',               // Row 2 (3)
  'col-span-3', 'col-span-3', 'col-span-3', 'col-span-3', // Row 3 (4)
  'col-span-4', 'col-span-4', 'col-span-4',               // Row 4 (3)
]

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeOverlay = () => setActiveIndex(null)

  return (
    <section className="min-h-[75vh] py-14 flex flex-col justify-center bg-white">
      <div
        className="
          w-full
          grid grid-cols-12 gap-2
          px-[20%]
          xl:px-[25%]
          2xl:px-[30%]
          [@media(min-width:2300px)]:px-[33%]
        "
      >
        {galleryImages.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`overflow-hidden rounded-lg focus:outline-none ${spans[idx]}`}
          >
            <Image
              src={src}
              alt=""
              width={480}
              height={480}
              quality={85}
              className="h-full w-full object-cover cursor-zoom-in transition-transform duration-300 hover:scale-[1.03]"
              sizes="100vw"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen modal */}
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
              onClick={closeOverlay}
              className="absolute top-6 right-6 text-3xl text-white font-bold hover:text-neutral-300"
            >
              ×
            </button>
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
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
