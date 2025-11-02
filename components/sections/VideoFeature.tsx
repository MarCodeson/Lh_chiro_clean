import { Section } from '@/components/ui/Section'
import { site } from '@/content/site.config'

export function VideoFeature() {
  return (
    <Section id="video">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold">Clinical ethos</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Applied kinesiology, neuro emotional technique and chiropractic programmes supporting patients in Barbados and
          Aberdeen.
        </p>
      </div>
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 shadow-soft">
        <iframe
          className="h-[220px] w-full md:h-[440px]"
          src={`https://player.vimeo.com/video/${site.media.vimeoId}?title=0&byline=0&portrait=0`}
          title="Practice ethos video"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </div>
    </Section>
  )
}
