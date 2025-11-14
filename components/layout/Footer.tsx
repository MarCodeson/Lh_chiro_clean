'use client'

import Image from 'next/image'
import { site } from '@/content/site.config'

const getSocialHref = (key: string) => site.socials.find(s => s.key === key)?.href ?? '#'

const ICONS = {
  facebook: { src: '/brand/Facebook_Logo_Primary.png', alt: 'Facebook logo' },
  instagram: { src: '/brand/Instagram_Glyph_Gradient.png', alt: 'Instagram logo' },
  linkedin: { src: '/brand/LI-In-Bug.png', alt: 'LinkedIn logo' },
} as const

type SocialLinkProps = {
  href: string
  label: string
  icon: keyof typeof ICONS
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  const iconData = ICONS[icon]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <Image src={iconData.src} alt={iconData.alt} width={20} height={20} />
      <span>{label}</span>
    </a>
  )
}

export function Footer() {
  const aberdeenFacebook = getSocialHref('facebook-aberdeen')
  const aberdeenInstagram = getSocialHref('instagram-aberdeen')
  const orkneyFacebook = getSocialHref('facebook-kirkwall')
  const barbadosFacebook = getSocialHref('facebook-barbados')
  const linkedin = getSocialHref('linkedin-les-hall')

  return (
    <footer className="flex flex-col items-center space-y-4 py-12 text-center text-base md:text-lg text-[#555]">
      <p className="font-medium">Main Office: {site.brand.name}, Aberdeen</p>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Aberdeen — </span>
          <SocialLink href={aberdeenFacebook} label="Facebook" icon="facebook" />{' '}
          <span className="text-gray-400 mx-1">|</span>{' '}
          <SocialLink href={aberdeenInstagram} label="Instagram" icon="instagram" />
        </p>

        <p>
          <span className="font-semibold">Orkney — </span>
          <SocialLink href={orkneyFacebook} label="Facebook" icon="facebook" />
        </p>

        <p>
          <span className="font-semibold">Barbados — </span>
          <SocialLink href={barbadosFacebook} label="Facebook" icon="facebook" />
        </p>
      </div>

      <div className="pt-2">
        <SocialLink href={linkedin} label="LinkedIn" icon="linkedin" />
      </div>

      <p className="text-sm text-gray-500 pt-2">© 2005 LH Chiropractic</p>
    </footer>
  )
}
