'use client'

import Image from 'next/image'

export function HeroImage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-20 -mb-24">
      <div className="mx-auto w-full max-w-3xl sm:max-w-4xl md:max-w-5xl px-4">
        <Image
          src="/images/about.png"
          alt="Portrait of Dr Les Hall"
          width={1400}
          height={1750}
          priority
          className="h-auto w-full rounded-[32px] object-cover mix-blend-multiply"
        />
      </div>
    </section>
  )
}
