'use client'

import { useEffect, useRef, useState } from 'react'

import { Section } from '@/components/ui/Section'
import { site } from '@/content/site.config'

const slides = site.testimonials.slides
const TOTAL_SLIDES = slides.length
const AUTO_ADVANCE_MS = 5000

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (paused) {
      return
    }

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % TOTAL_SLIDES)
    }, AUTO_ADVANCE_MS)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [paused])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const goTo = (target: number) => {
    setIndex((target + TOTAL_SLIDES) % TOTAL_SLIDES)
  }

  const handleMouseEnter = () => setPaused(true)
  const handleMouseLeave = () => setPaused(false)

  const currentSlide = slides[index]

  return (
    <Section id="testimonials">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="text-base text-neutral-600">Auto-advance every 5 seconds. Hover to pause.</p>
      </div>

      <div
        className="mx-auto flex max-w-3xl flex-col gap-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <article className="rounded-2xl border border-neutral-200 bg-white p-8 text-left shadow-soft" aria-live="polite">
          <p className="text-xl font-medium text-neutral-900 md:text-2xl">{currentSlide.quote}</p>
          <p className="mt-4 text-base font-semibold text-neutral-900">{currentSlide.author}</p>
          <p className="text-base text-neutral-600">{currentSlide.bio}</p>
        </article>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="rounded-full border border-neutral-300 px-4 py-2 text-base font-semibold text-neutral-700 transition hover:border-accent hover:text-neutral-900"
              aria-label="Show previous testimonial"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="rounded-full border border-neutral-300 px-4 py-2 text-base font-semibold text-neutral-700 transition hover:border-accent hover:text-neutral-900"
              aria-label="Show next testimonial"
            >
              Next
            </button>
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Select testimonial slide">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                onClick={() => goTo(dotIndex)}
                className={`h-3 w-3 rounded-full transition ${
                  dotIndex === index ? 'bg-accent' : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
