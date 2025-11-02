'use client'

import { Section } from '@/components/ui/Section'

export function Services() {
  return (
    <Section id="services" className="bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold border-b-2 border-[#D4AF37] inline-block pb-2">
          Areas of Expertise
        </h2>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-10">
        <p className="text-xl leading-relaxed text-neutral-900">
          27+ years providing holistic, conservative care. <br />
          Focused on the triad of health — <strong>Structural • Metabolic • Emotional</strong> <br/>— 
          helping patients achieve optimal performance and wellbeing.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm md:text-base text-neutral-500">
          <span>Pain Relief</span>
          <span>Resolution</span>
          <span>Improved Range of Motion</span>
          <span>Sports &amp; Traumatic Injuries</span>
          <span>Optimal Performance</span>
          <span>Wellbeing &amp; Recovery</span>
        </div>
      </div>
    </Section>
  )
}
