import Image from 'next/image'
import { site } from '@/content/site.config'

const Dot = () => <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />

export function Hero() {
  return (
    <section className="relative" id="hero">
      <div className="container grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold md:text-5xl">Dr Les Hall</h1>
            <p className="text-neutral-700">Human &amp; Equine Chiropractor</p>
          </div>
          <p className="text-lg text-neutral-800">Chiropractic care for pain, relief, and performance.</p>
          <div className="space-y-2 text-neutral-700">
            <p>Applied Kinesiologist | Neuro Emotional Technique Practitioner</p>
            <p>Barbados &amp; UK Registered</p>
          </div>
          <p className="text-neutral-700">
            Chiropractic healthcare for all ages, provided by a chiropractor with over 27 years of experience — still happily
            working in his chosen profession.
          </p>
          <a href="#contact" className="btn btn-primary inline-flex px-8 py-4 text-base md:text-lg">
            Learn More
          </a>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2"><Dot /> GCC Registered No. 00616</span>
            <span className="inline-flex items-center gap-2"><Dot /> AECC University College Graduate</span>
            <span className="inline-flex items-center gap-2"><Dot /> 27+ years in practice</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-soft">
          <Image
            src={site.media.aboutPortrait}
            alt="Dr Les Hall outside clinic"
            width={1024}
            height={1024}
            className="h-[360px] w-full object-cover md:h-[520px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
