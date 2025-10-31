'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { site } from '@/content/site.config'

const slides = site.testimonials.slides

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const shouldReduceMotion = useReducedMotion()
  const timer = useRef<NodeJS.Timeout | null>(null)

  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? '100%' : '-100%',
      opacity: shouldReduceMotion ? 1 : 0,
      position: 'absolute' as const,
    }),
    center: { x: '0%', opacity: 1, position: 'absolute' as const },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? '-100%' : '100%',
      opacity: shouldReduceMotion ? 1 : 0,
      position: 'absolute' as const,
    }),
  }

  useEffect(() => {
    if (shouldReduceMotion) return
    timer.current = setInterval(() => {
      setDirection(1)
      setIndex(i => (i + 1) % slides.length)
    }, 5000)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [shouldReduceMotion])

  return (
    <Section id="testimonials">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="small">Auto-advances every 5s.</p>
      </div>

      <div className="card overflow-hidden">
        {/* Fixed, smaller viewport. No cropping (object-contain). */}
        <div className="relative h-64 md:h-80 lg:h-96 bg-white">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              className="absolute inset-0 p-4 md:p-6"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeInOut' }}
            >
              <Image
                src={slides[index].img}
                alt={slides[index].alt}
                fill
                sizes="(min-width:1024px) 768px, (min-width:768px) 640px, 100vw"
                className="object-contain"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="space-y-4 px-6 pb-6 pt-4 text-center">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.blockquote
              key={`${index}-quote`}
              custom={direction}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -12 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
              className="text-lg font-medium text-neutral-800 md:text-xl"
            >
              {slides[index].quote}
            </motion.blockquote>
          </AnimatePresence>
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.p
              key={`${index}-author`}
              custom={direction}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
              className="text-lg font-semibold text-neutral-600"
            >
              {slides[index].author}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 pb-4">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              onClick={() => {
                if (dotIndex === index) return
                setDirection(dotIndex > index ? 1 : -1)
                setIndex(dotIndex)
              }}
              className={`h-2.5 w-2.5 rounded-full transition ${
                dotIndex === index ? 'bg-accent' : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
