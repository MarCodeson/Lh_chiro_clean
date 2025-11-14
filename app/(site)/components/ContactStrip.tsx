import { site } from '@/content/site.config'

const formatTelHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`

export function ContactStrip() {
  const lines = [
    { label: `Les Hall – Chiropractor` },
    { clinics: 'Clinics in Aberdeen, Orkney & Barbados' },
    { label: `UK ${site.contacts.phoneUK}`, href: formatTelHref(site.contacts.phoneUK) },
    { label: `BB ${site.contacts.phoneBB}`, href: formatTelHref(site.contacts.phoneBB) },
    { label: site.contacts.email, href: `mailto:${site.contacts.email}` },
  ]

  return (
    <section className="bg-[#FAFAFA] flex min-h-screen items-center justify-center px-4 py-16 text-center text-[rgba(95,105,109,1)]">
      <div className="mx-auto max-w-3xl space-y-6 text-[1.8rem] leading-[1.6] font-semibold md:space-y-6">
        {lines.map(({ label, href,clinics }) =>
          href ? (
            <h3><a key={label} href={href} className="block transition hover:text-[#8C6C2B]">
              {label}
            </a></h3>
          ) : clinics?(<p key={clinics}>{clinics}</p>):(
            <h3 key={label}>{label}</h3>
          ),
        )}
      </div>
    </section>
  )
}
