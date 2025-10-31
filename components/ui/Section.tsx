import { PropsWithChildren } from 'react'

export function Section({ id, className = '', children }: PropsWithChildren<{ id?: string, className?: string }>) {
  return (
    <section id={id} className={`container py-12 md:py-16 ${className}`}>{children}</section>
  )
}
