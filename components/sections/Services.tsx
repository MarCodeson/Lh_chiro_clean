'use client'

export function Services() {
  return (
    <section id="services" className="py-12 bg-white text-black text-center">
      <h2 className="text-3xl font-semibold mb-6 border-b-2 border-[#D4AF37] inline-block pb-2">
        Areas of Expertise
      </h2>

      <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10">
        27+ years providing holistic, conservative care.
        <br />
        Focused on the triad of health — <strong>Structural • Metabolic • Emotional</strong> — helping patients achieve
        optimal performance and wellbeing.
      </p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-base md:text-lg text-gray-800 tracking-wide">
        <span>Pain</span>
        <span>Resolution</span>
        <span>Relief</span>
        <span>Improved Range of Motion</span>
        <span>Traumatic &amp; Sports Injuries</span>
        <span>Optimal Performance for Athletes</span>
      </div>
    </section>
  )
}
