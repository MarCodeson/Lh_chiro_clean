'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { site } from '@/content/site.config'

const slides = site.testimonials.slides

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [isOpen, setIsOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
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

  // Auto-advance with hover pause
  useEffect(() => {
    if (shouldReduceMotion || isOpen || isPaused) return
    timer.current = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [shouldReduceMotion, isOpen, isPaused])

  // Keyboard navigation in fullscreen
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
      if (e.key === 'ArrowRight') {
        setDirection(1)
        setIndex((i) => (i + 1) % slides.length)
      }
      if (e.key === 'ArrowLeft') {
        setDirection(-1)
        setIndex((i) => (i - 1 + slides.length) % slides.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <Section id="testimonials">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="small">Hover to pause · Click image to view fullscreen</p>
      </div>

      <div
        className="relative mx-auto h-80 w-full overflow-hidden md:h-[30rem] lg:h-[36rem]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            className="absolute inset-0"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: 'easeInOut',
            }}
          >
            <button
              type="button"
              aria-label="Open testimonial fullscreen"
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 cursor-zoom-in"
            >
              <Image
                src={slides[index].img}
                alt={slides[index].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority={index === 0}
              />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
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
              dotIndex === index
                ? 'bg-accent'
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close fullscreen"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-[70] rounded p-2 text-white/90 transition hover:text-white"
            >
              <CloseIcon className="h-7 w-7" />
            </button>

            <button
              type="button"
              aria-label="Exit fullscreen"
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 cursor-zoom-out"
            />

            <motion.div
              className="absolute inset-0 z-[65] p-4 md:p-8"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.25,
                ease: 'easeOut',
              }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={slides[index].img}
                  alt={slides[index].alt}
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
    </Section>
  )
}
