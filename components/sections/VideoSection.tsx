'use client'

export function VideoSection() {
  return (
    <section id="video" className=" bg-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Clinical Ethos</h2>
        <p className="text-sm text-neutral-600 mb-6">
          Applied kinesiology, neuro emotional technique and chiropractic programmes supporting patients
          in Barbados and Aberdeen.
        </p>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
          <iframe
            className="w-full h-[220px] md:h-[440px]"
            src="https://player.vimeo.com/video/598294286?title=0&byline=0&portrait=0"
            title="Practice ethos video"
            loading="lazy"
            allow="fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </section>
  )
}
