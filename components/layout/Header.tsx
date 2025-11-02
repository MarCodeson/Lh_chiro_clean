'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Route } from 'next'
import { site } from '@/content/site.config'

const SECTION_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          href={"/" as Route}
          className="flex items-center gap-3"
          aria-label={`${site.brand.name} home`}
        >
          <Image
            src={site.testimonials.logo.src}
            alt={`${site.brand.name} logo`}
            width={180}
            height={180}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <nav className="flex items-center gap-6">
          {SECTION_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-700 transition hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
