import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { EXPERIENCE } from '../data'
import { SectionHeading, SpotlightCard, ease } from './ui'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 })
  return (
    <section id="experience" aria-labelledby="exp-title" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading id="exp-title" index="03" eyebrow="experience" title="Where I've worked" />

        <ol ref={ref} className="relative ml-3 space-y-10 pl-10 sm:ml-5 sm:pl-14">
          <span aria-hidden="true" className="absolute left-0 top-2 bottom-2 w-px bg-line" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent to-accent2 shadow-[0_0_12px_var(--accent)]"
          />
          {EXPERIENCE.map((e, i) => (
            <motion.li
              key={e.company}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.05, ease }}
              className="relative"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.2 }}
                className="absolute -left-[3.15rem] top-7 h-4 w-4 rounded-full border-[3px] border-bg bg-accent shadow-[0_0_0_4px_var(--glow)] sm:-left-[4.15rem]"
                aria-hidden="true"
              />
              <SpotlightCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-semibold text-fg">{e.title}</h3>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{e.period}</span>
                </div>
                <p className="mt-1 font-medium text-accent">{e.company}</p>
                <ul className="mt-5 space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
