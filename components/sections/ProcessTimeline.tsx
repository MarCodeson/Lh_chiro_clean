'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const STEPS = [
  {
    title: 'Initial conversation',
    description: 'Share relevant history, priorities and preferred clinic location.',
  },
  {
    title: 'Clinical assessment',
    description: 'Structured examination covering joints, muscles, neurological and functional testing.',
  },
  {
    title: 'Plan & collaboration',
    description: 'Agree next steps, liaise with healthcare or coaching teams and outline home strategies.',
  },
] as const

export function ProcessTimeline() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section>
      <motion.div
        className="card p-6"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold">Working together</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <motion.li
              key={step.title}
              className="group relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: shouldReduceMotion ? 0 : index * 0.08 }}
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 text-base font-semibold text-accent">
                {index + 1}
              </span>
              <h3 className="text-lg font-medium text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{step.description}</p>
              {index < STEPS.length - 1 && (
                <span className="pointer-events-none absolute inset-y-10 left-[calc(100%+0.5rem)] hidden w-px bg-neutral-200 md:block">
                  <span className="absolute inset-x-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-neutral-300 bg-white" />
                </span>
              )}
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </Section>
  )
}
