import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { Services } from '@/components/sections/Services'
import { AboutTeaser } from '@/components/sections/AboutTeaser'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { Locations } from '@/components/sections/Locations'
import { ContactForm } from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <AboutTeaser />
      <TestimonialsCarousel />
      <ProcessTimeline />
      <Locations />
      <ContactForm />
    </>
  )
}
