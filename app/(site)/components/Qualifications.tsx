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
    <section className="min-h-[75vh] flex items-center justify-center px-4 text-center text-[rgba(95,105,109,1)] pt-0">
      <div className="-mt-12 w-full space-y-5">
        <div className="space-y-4 leading-tight">
          {headingLines.map(line => (
            <h3 key={line} className="font-heading text-[2rem] md:text-[2.8rem] leading-tight">
              {line}
            </h3>
          ))}
        </div>
        <div className="space-y-4 text-[1.8rem] leading-[1.9rem] font-semibold">
          {bodyLines.map(line => (
            <p key={line} className="font-semibold">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
