import { site } from '@/content/site.config'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-6 text-center text-sm text-neutral-600">
      <p>
        © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
      </p>
    </footer>
  )
}
