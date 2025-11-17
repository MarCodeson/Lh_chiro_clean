import { PropsWithChildren } from 'react'

export function Section({
  id,
  className = '',
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section
      id={id}
      className={`container py-20 md:py-24 my-24 md:my-28 ${className}`}
    >
      {children}
    </section>
  )
}
