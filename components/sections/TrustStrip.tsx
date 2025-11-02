'use client'

import Image from 'next/image'
import { Section } from '@/components/ui/Section'


export function TrustStrip() {
  return (
        <Section className="bg-white border-t border-neutral-200">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
        
        <div>
          <Image
            src="/images/hero.png"
            alt="Dr Les Hall providing chiropractic care in clinic"
            width={600}
            height={400}
            className="rounded-2xl shadow-sm object-cover w-full h-auto"
          />
        </div>

<div className="space-y-4 text-neutral-800">
  <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
    Professional Background
  </h2>
  <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
  <li>
    <strong>Dr Les Hall BSc (Hons), MSc, DC</strong> — Human &amp; Equine Chiropractor
  </li>
  <li>Applied Kinesiologist · Neuro Emotional Technique Practitioner</li>
  <li>AECC University College Graduate · GCC Reg. No. 00616 · Barbados Registered</li>
</ul>
</div>
      </div>
    </Section>
  )
}
