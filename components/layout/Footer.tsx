'use client'

import Image from 'next/image'
import { site } from '@/content/site.config'

const getSocialHref = (key: string) =>
  site.socials.find((s) => s.key === key)?.href ?? '#'

const ICONS = {
  facebook: { src: '/brand/Facebook_Logo_Primary.png', alt: 'Facebook logo' },
  instagram: { src: '/brand/Instagram_Glyph_Gradient.png', alt: 'Instagram logo' },
  linkedin: { src: '/brand/LI-In-Bug.png', alt: 'LinkedIn logo' },
} as const

type SocialLinkProps = {
  href: string
  icon: keyof typeof ICONS
}

function SocialLink({ href, icon }: SocialLinkProps) {
  const iconData = ICONS[icon]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center hover:opacity-80 transition-opacity"
    >
      <Image
        src={iconData.src}
        alt={iconData.alt}
        width={icon === 'linkedin' ? 28 : 20}
        height={icon === 'linkedin' ? 28 : 20}
        className={icon === 'linkedin' ? 'scale-[1.15]' : ''}
      />
    </a>
  )
}

export function Footer() {
  const aberdeenFacebook = getSocialHref('facebook-aberdeen')
  const aberdeenInstagram = getSocialHref('instagram-barbados')
  const orkneyFacebook = getSocialHref('facebook-kirkwall')
  const orkneyInstagram = getSocialHref('instagram-barbados')
  const barbadosFacebook = getSocialHref('facebook-barbados')
  const barbadosInstagram = getSocialHref('instagram-barbados')
  const linkedin = getSocialHref('linkedin-les-hall')

  return (
    <footer className="flex flex-col items-center space-y-4 py-12 text-center text-base md:text-lg text-[#555]">

      {/* LinkedIn – centered */}
      <div className="pb-2">
        <SocialLink href={linkedin} icon="linkedin" />
      </div>

      <div className="space-y-3">

        {/* Aberdeen */}
        <p className="flex items-center justify-center gap-6">
          <span className="font-semibold min-w-[90px] text-center inline-block">
            Aberdeen
          </span>
          <span className="inline-flex items-center gap-4">
            <SocialLink href={aberdeenFacebook} icon="facebook" />
            <SocialLink
              href="https://www.instagram.com/les_hall__chiropractor?igsh=MXJsM2ozaXV1MDgybQ%3D%3D&utm_source=qr"
              icon="instagram"
            />
          </span>
        </p>

        {/* Orkney */}
        <p className="flex items-center justify-center gap-6">
          <span className="font-semibold min-w-[90px] text-center inline-block">
            Orkney
          </span>
          <span className="inline-flex items-center gap-4">
            <SocialLink href={orkneyFacebook} icon="facebook" />
            <SocialLink
              href="https://www.instagram.com/les_hall__chiropractor?igsh=MXJsM2ozaXV1MDgybQ%3D%3D&utm_source=qr"
              icon="instagram"
            />
          </span>
        </p>

        {/* Barbados */}
        <p className="flex items-center justify-center gap-6">
          <span className="font-semibold min-w-[90px] text-center inline-block">
            Barbados
          </span>
          <span className="inline-flex items-center gap-4">
            <SocialLink href={barbadosFacebook} icon="facebook" />
            <SocialLink href={barbadosInstagram} icon="instagram" />
          </span>
        </p>

      </div>

      <p className="text-sm text-gray-500 pt-2">© 2005 LH Chiropractic</p>
    </footer>
  )
}
