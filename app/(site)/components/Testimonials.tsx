import Image from 'next/image'
import { site } from '@/content/site.config'

const testimonials = site.testimonials.slides

export function Testimonials() {
  return (
    <section className="min-h-screen px-4 py-16 flex flex-col justify-center space-y-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-[rgba(95,105,109,1)]">Testimonials</h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {testimonials.map(testimonial => (
          <figure
            key={testimonial.img}
            className="space-y-4 rounded-2xl border border-neutral-200 bg-white/80 p-6 text-center shadow-sm"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src={testimonial.img}
                alt={testimonial.alt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-xl md:text-2xl text-[rgba(95,105,109,1)]">
              {testimonial.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
