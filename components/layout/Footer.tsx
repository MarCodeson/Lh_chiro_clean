import { site } from '@/content/site.config'

const getSocialHref = (key: string) => site.socials.find(social => social.key === key)?.href ?? '#'

export function Footer() {
  const aberdeenFacebook = getSocialHref('facebook-aberdeen')
  const aberdeenInstagram = getSocialHref('instagram-barbados')
  const orkneyFacebook = getSocialHref('facebook-kirkwall')
  const barbadosFacebook = getSocialHref('facebook-barbados')
  const linkedin = getSocialHref('linkedin-les-hall')

  return (
    <footer className="flex flex-col items-center space-y-3 py-12 text-center text-base md:text-lg text-[#555]">
      <p>Main Office: {site.brand.name}, Aberdeen</p>
      <p>
        Aberdeen –{' '}
        <a href={aberdeenFacebook} target="_blank" rel="noopener" className="underline hover:text-neutral-800">
          Facebook
        </a>{' '}
        |{' '}
        <a href={aberdeenInstagram} target="_blank" rel="noopener" className="underline hover:text-neutral-800">
          Instagram
        </a>
      </p>
      <p>
        Orkney –{' '}
        <a href={orkneyFacebook} target="_blank" rel="noopener" className="underline hover:text-neutral-800">
          Facebook
        </a>
      </p>
      <p>
        Barbados –{' '}
        <a href={barbadosFacebook} target="_blank" rel="noopener" className="underline hover:text-neutral-800">
          Facebook
        </a>
      </p>
      <p>
        <a href={linkedin} target="_blank" rel="noopener" className="underline hover:text-neutral-800">
          LinkedIn
        </a>
      </p>
      <p>© 2005 LH Chiropractic</p>
    </footer>
  )
}
