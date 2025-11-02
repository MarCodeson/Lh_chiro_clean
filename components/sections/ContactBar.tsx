'use client'

import { Mail, MessageCircle } from 'lucide-react'

export function ContactBar() {
  return (
    <div className="border-y border-neutral-200 bg-neutral-50/60 py-5 md:py-6">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="text-sm md:text-base text-neutral-700 leading-relaxed tracking-wide flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#D4AF37]" />
            <span className="font-medium text-neutral-800">Email</span>{' '}
            <a
              href="mailto:drleshall@aol.com"
              className="text-[#D4AF37] hover:underline"
            >
              drleshall@aol.com
            </a>
          </span>

          <span className="hidden md:inline text-neutral-400">|</span>

          <span className="inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span className="font-medium text-neutral-800">WhatsApp</span>{' '}
            <a
              href="https://wa.me/447715168864"
              target="_blank"
              rel="noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              +44 7715 168864 (UK)
            </a>{' '}
            <span className="text-neutral-400">/</span>{' '}
            <a
              href="https://wa.me/12462548864"
              target="_blank"
              rel="noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              +1 (246) 254-8864 (Barbados)
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}
