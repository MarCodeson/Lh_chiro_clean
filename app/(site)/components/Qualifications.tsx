const headingLines = [
  'Dr Les Hall BSc (Hons), MSc, DC',
  'Human & Equine Chiropractor',
  'Applied Kinesiologist',
  '& Neuro Emotional Technique Practitioner',
]

const bodyLines = [
  'AECC University College Graduate, Bournemouth, England, UK.',
  'UK General Chiropractic Council Registered No. 00616',
  'Barbados Registered',
]

export function Qualifications() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 text-center text-[rgba(95,105,109,1)] pt-0">
      <div className="-mt-12 w-full space-y-6">
        <div className="space-y-3 leading-tight">
          {headingLines.map(line => (
            <p key={line} className="font-heading text-4xl md:text-5xl leading-tight">
              {line}
            </p>
          ))}
        </div>
        <div className="space-y-2 text-2xl md:text-3xl leading-relaxed">
          {bodyLines.map(line => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
