'use client'

export function Services() {
  return (
    <section id="services" className="py-12 bg-white text-black text-center">
      <h2 className="text-3xl font-semibold mb-6 border-b-2 border-[#D4AF37] inline-block pb-2">
        Services &amp; Focus Areas
      </h2>

      <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10">
        27+ years providing holistic, conservative care.
        <br />
        Focused on the triad of health — <strong>Structural • Metabolic • Emotional</strong> — helping patients
        achieve optimal performance and wellbeing.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8 text-base md:text-lg font-medium">
        <span className="px-4 py-2 border border-[#D4AF37] rounded-full">Pain</span>
        <span className="px-4 py-2 border border-[#D4AF37] rounded-full">Resolution</span>
        <span className="px-4 py-2 border border-[#D4AF37] rounded-full">Relief</span>
        <span className="px-4 py-2 border border-[#D4AF37] rounded-full">Improved Range of Motion</span>
        <span className="px-4 py-2 border border-[#D4AF37] rounded-full">Traumatic &amp; Sports Injuries</span>
        <span className="px-4 py-2 border border-[#D4AF37] rounded-full">Optimal Performance for Athletes</span>
      </div>

      <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed">
        Common areas of care include <strong>back pain</strong>, <strong>neck pain</strong>,{' '}
        <strong>posture support</strong>, <strong>sports injuries</strong>, and <strong>neuro-emotional work</strong> for
        stress release and mind-body balance.
      </p>
    </section>
  )
}
