import Image from 'next/image'

import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

export function AboutTeaser() {
  return (
    <Section id="about">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">About Dr. Les Hall</h2>
          <p className="mt-3 text-neutral-700">
            With 27+ years’ experience in chiropractic and holistic care, Dr Les Hall supports patients across Aberdeen Clinic,
            Barbados Clinic, and Kirkwall Clinic. His Optimal Performance focus brings structural, metabolic, and emotional
            balance to every programme.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">Clinics</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-700">
              {site.locations.map((location) => (
                <li key={location.key}>
                  <span className="font-medium text-neutral-800">{location.label}</span>
                  <br />
                  <span>{location.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-soft">
          <Image
            src={site.media.aboutPortrait}
            alt="Dr Les Hall portrait"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  )
}
