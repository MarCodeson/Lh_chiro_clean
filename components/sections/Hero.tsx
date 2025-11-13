'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      <Image
        src="/brand/lh-logo.png"
        alt="LH Chiropractic logo"
        fill
        priority
        className="object-contain object-center"
        sizes="100vw"
      />
    </section>
  )
}
