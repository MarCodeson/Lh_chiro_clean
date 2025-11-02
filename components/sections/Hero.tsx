'use client'

import Image from 'next/image'
import { site } from '@/content/site.config'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-start bg-white text-center overflow-hidden pt-8 md:pt-12"
    >
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        <div className="relative w-full max-w-3xl aspect-[3/2] mb-6">
          <Image
            src={site.media.aboutPortrait}
            alt="Dr Les Hall outside his clinic"
            fill
            priority
            className="rounded-2xl object-cover shadow-sm"
          />
        </div>

        <div className="mt-2">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-1">
            Dr Les Hall
          </h1>
          <p className="text-lg text-neutral-700 mb-2">Chiropractor</p>

          <p className="text-base text-neutral-800 mb-3">
            Chiropractic care for pain, relief, and performance.
          </p>

       
        </div>
      </div>
    </section>
  )
}
