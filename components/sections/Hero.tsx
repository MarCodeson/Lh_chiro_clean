'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'

const Dot = () => <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 32 },
    visible: { opacity: 1, y: 0 },
  }

  const buttonVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative">
      <div className="container grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-semibold md:text-5xl">Holistic chiropractic care for body, mind &amp; movement.</h1>
          <p className="text-neutral-700">
            Helping patients move freely and feel balanced across Aberdeen, Orkney and Barbados.
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary inline-flex px-8 py-4 text-base md:text-lg"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
          >
            Request help
          </motion.a>
          <p className="text-sm text-neutral-600">
            Human &amp; Equine Chiropractic · Applied Kinesiology · Neuro Emotional Technique (NET)
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2"><Dot /> GCC Registered No. 00616</span>
            <span className="inline-flex items-center gap-2"><Dot /> AECC University College Graduate</span>
            <span className="inline-flex items-center gap-2"><Dot /> 27+ years</span>
          </div>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-2xl border border-neutral-200 shadow-soft"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <img src={site.media.hero} alt="Chiropractic care in clinic" className="h-[360px] w-full object-cover md:h-[520px]" />
        </motion.div>
      </div>
    </div>
  )
}
