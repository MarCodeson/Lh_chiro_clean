import Image from 'next/image'

export function HeroImage() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 -mb-24">
      <div className="mx-auto w-full max-w-xl md:max-w-2xl px-4">
        <Image
          src="/images/about.png"
          alt="Portrait of Dr Les Hall"
          width={1200}
          height={1500}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </section>
  )
}
