import { Hero } from '@/components/sections/Hero'
import { ContactStrip } from './(site)/components/ContactStrip'
import { HeroImage } from './(site)/components/HeroImage'
import { Qualifications } from './(site)/components/Qualifications'
import { PracticeEthos } from './(site)/components/PracticeEthos'
import { ClinicalFocus } from './(site)/components/ClinicalFocus'
import { Gallery } from './(site)/components/Gallery'

import { ContactForm } from './(site)/components/ContactForm'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ContactStrip />
      <HeroImage />
      <Qualifications />
      <PracticeEthos />
      <ClinicalFocus />
      <Gallery />
      <TestimonialsCarousel />
      <ContactForm />
    </>
  )
}
