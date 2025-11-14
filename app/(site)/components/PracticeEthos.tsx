export function PracticeEthos() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center space-y-10 px-4 py-16 text-center text-[rgba(95,105,109,1)]">
        <h2 className="font-heading text-4xl md:text-5xl">Practice Ethos</h2>
        <div className="mx-auto aspect-video w-full max-w-4xl">
          <iframe
            src="https://player.vimeo.com/video/598294286"
            title="Practice ethos video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-full w-full rounded-2xl shadow-sm"
          />
        </div>
      </section>
      <section className="px-4 py-12 text-center text-[rgba(95,105,109,1)] bg-white">
        <h3 className="mx-auto max-w-3xl font-heading text-[1.8rem] leading-relaxed">
          For over 27 years, Dr Hall has been providing holistic, conservative healthcare, covering the triad of
          health – Structural, Metabolic & Emotional… whilst encouraging active patient involvement for optimal health
          and wellbeing.
        </h3>
      </section>
    </>
  )
}
