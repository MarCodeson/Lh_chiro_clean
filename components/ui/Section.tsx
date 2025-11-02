import { PropsWithChildren } from 'react'

export function Section({
  id,
  className = '',
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section
      id={id}
      className={`container py-28 my-40 md:py-40 ${className}`}
    >
      {children}
    </section>
  )
}
