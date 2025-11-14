'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className='w-full overflow-hidden'>
    <div
      id="hero"
      className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-white"
    >

      <Image
        src="/brand/lh-logo.png"
        alt="LH Chiropractic logo"
        width={1920}
        height={1080}
        sizes="100vw"
        priority
        className="w-screen h-auto object-contain"
      />
    </div>
    </section>
  )
}
