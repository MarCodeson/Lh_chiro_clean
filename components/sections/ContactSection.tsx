'use client'

import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-semibold mb-10 border-b-2 border-[#D4AF37] inline-block pb-2">
          Connect with Dr Hall
        </h2>

        {/* Contact details */}
        <div className="flex flex-col md:flex-row md:justify-center md:gap-20 text-neutral-800 mb-12">
          <p className="text-base">
            <strong>Email</strong> –{' '}
            <a
              href="mailto:drleshall@aol.com"
              className="text-[#D4AF37] hover:underline"
            >
              drleshall@aol.com
            </a>
          </p>
          <p className="text-base mt-4 md:mt-0">
            <strong>WhatsApp</strong> –{' '}
            <a
              href="https://wa.me/447715168864"
              target="_blank"
              rel="noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              +44 7715 168864 (UK)
            </a>{' '}
            /{' '}
            <a
              href="https://wa.me/12462548864"
              target="_blank"
              rel="noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              +1 (246) 254-8864 (Barbados)
            </a>
          </p>
        </div>

        {/* Clinics grid */}
        <div className="grid md:grid-cols-3 gap-10 text-sm text-neutral-700 text-left">
          {/* Aberdeen */}
          <div className="space-y-3">
            <h3 className="font-semibold uppercase tracking-wide text-neutral-600 text-center md:text-left">
              Aberdeen Clinic
            </h3>
            <p className="text-center md:text-left text-neutral-800">
              Oldfold Drive, Milltimber, Aberdeen, United Kingdom
            </p>
            <div className="flex justify-center md:justify-start gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/share/1D5FmFXTJm/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 transition hover:border-[#D4AF37] hover:text-neutral-900"
              >
                <Facebook className="h-4 w-4 text-[#1877F2]" />
                Facebook
              </a>
            </div>
          </div>

          {/* Barbados */}
          <div className="space-y-3">
            <h3 className="font-semibold uppercase tracking-wide text-neutral-600 text-center md:text-left">
              Barbados Clinic
            </h3>
            <p className="text-center md:text-left text-neutral-800">
              Poui Avenue, Holetown, Barbados
            </p>
            <div className="flex justify-center md:justify-start gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/share/1G3v5cktkn/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 transition hover:border-[#D4AF37] hover:text-neutral-900"
              >
                <Facebook className="h-4 w-4 text-[#1877F2]" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/lh_chiropractor_barbados?igsh=ZjZkNHIwdDNlZzV1&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 transition hover:border-[#D4AF37] hover:text-neutral-900"
              >
                <Instagram className="h-4 w-4 text-[#E4405F]" />
                Instagram
              </a>
            </div>
          </div>

          {/* Kirkwall */}
          <div className="space-y-3">
            <h3 className="font-semibold uppercase tracking-wide text-neutral-600 text-center md:text-left">
              Kirkwall Clinic
            </h3>
            <p className="text-center md:text-left text-neutral-800">
              Crowness Road, Hatston, Kirkwall, United Kingdom
            </p>
            <div className="flex justify-center md:justify-start gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/share/19gzficnPH/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 transition hover:border-[#D4AF37] hover:text-neutral-900"
              >
                <Facebook className="h-4 w-4 text-[#1877F2]" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* LinkedIn footer line */}
        <div className="mt-12">
          <a
            href="https://www.linkedin.com/in/les-hall-13722b152"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition hover:border-[#D4AF37] hover:text-neutral-900"
          >
            <Linkedin className="h-4 w-4 text-[#0A66C2]" />
            LinkedIn – Les Hall
          </a>
        </div>
      </div>
    </section>
  )
}
