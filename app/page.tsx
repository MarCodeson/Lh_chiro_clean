import { Hero } from '@/components/sections/Hero'
import { VideoSection } from '@/components/sections/VideoSection'
import { Services } from '@/components/sections/Services'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { ContactSection } from '@/components/sections/ContactSection'
import  {TrustStrip} from "@/components/sections/TrustStrip"
import { ContactBar } from '@/components/sections/ContactBar'

export default function HomePage() {
  return (
    <>
      <Hero />
    <ContactBar/>
       <TrustStrip/>
      <VideoSection/>
      <Services />
      <TestimonialsCarousel />
      <ContactSection />
  
    </>
  )
}
