import { site } from '@/content/site.config'

const formatTelHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`

export function ContactStrip() {
  const { phoneUK, phoneBB, email } = site.contacts

  return (
    <section className="bg-[#FAFAFA] min-h-screen px-4 text-center text-[rgba(95,105,109,1)] flex items-center justify-center">
      <div className="space-y-4 text-xl md:text-2xl">
        <p className="font-heading text-4xl md:text-5xl">Les Hall – Chiropractor</p>
        <p>Clinics in Aberdeen, Orkney &amp; Barbados</p>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-12">
          <a href={formatTelHref(phoneUK)} className="transition hover:text-[#8C6C2B]">
            UK {phoneUK}
          </a>
          <a href={formatTelHref(phoneBB)} className="transition hover:text-[#8C6C2B]">
            BB {phoneBB}
          </a>
          <a href={`mailto:${email}`} className="transition hover:text-[#8C6C2B]">
            {email}
          </a>
        </div>
      </div>
    </section>
  )
}
