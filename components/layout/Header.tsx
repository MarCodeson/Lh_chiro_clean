'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Route } from 'next'
import { site } from '@/content/site.config'

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container flex h-28 items-center justify-center">
        <Link
          href={"/" as Route}
          aria-label={`${site.brand.name} home`}
          className="flex items-center justify-center"
        >
          <Image
            src={site.testimonials.logo.src}
            alt={`${site.brand.name} logo`}
            width={400}
            height={400}
            className="h-40 w-auto"
            priority
          />
        </Link>
      </div>
    </header>
  )
}
