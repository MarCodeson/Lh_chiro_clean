import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { AboutTeaser } from '@/components/sections/AboutTeaser'
import { Services } from '@/components/sections/Services'
import { VideoFeature } from '@/components/sections/VideoFeature'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { ContactForm } from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutTeaser />
      <Services />
      <VideoFeature />
      <TestimonialsCarousel />
      <ProcessTimeline />
      <ContactForm />
    </>
  )
}
