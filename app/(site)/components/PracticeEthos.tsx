export function PracticeEthos() {
  return (
    <section className="min-h-screen px-4 py-16 flex flex-col justify-center space-y-10">
      <div className="mx-auto max-w-prose text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-[rgba(95,105,109,1)]">Practice Ethos</h2>
      </div>
      <div className="mx-auto aspect-video w-full max-w-4xl">
        <iframe
          src="https://player.vimeo.com/video/598294286"
          title="Practice ethos video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full rounded-2xl shadow-sm"
        />
      </div>
      <div className="mx-auto max-w-prose text-center">
        <p className="font-heading text-2xl md:text-3xl text-[rgba(95,105,109,1)]">
          For over 27 years, Dr Hall has been providing holistic, conservative healthcare, covering the triad of health – Structural, Metabolic & Emotional… whilst encouraging active patient involvement for optimal health and wellbeing.
        </p>
      </div>
    </section>
  )
}
