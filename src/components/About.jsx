import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ABOUT_TEXT, HIGHLIGHT, FACTS, STATS } from '../data'
import { SectionHeading, Reveal, SpotlightCard, Counter } from './ui'

function Word({ children, range, progress, hot }) {
  const o = useTransform(progress, range, [0.16, 1])
  return (
    <motion.span style={{ opacity: o }} className={`mr-[0.28em] inline-block ${hot ? 'font-semibold text-accent' : 'text-fg'}`}>
      {children}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] })
  const words = ABOUT_TEXT.split(' ')
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="about-title" index="01" eyebrow="about" title="Who is Nikhil Tiwari?" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <p ref={ref} className="font-display text-2xl font-medium leading-snug sm:text-3xl">
            {words.map((w, i) => (
              <Word key={i} range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]} progress={scrollYProgress} hot={HIGHLIGHT.includes(w)}>
                {w}
              </Word>
            ))}
          </p>

          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <SpotlightCard className="p-4 text-center">
                    <div className="font-display text-3xl font-bold text-fg"><Counter to={s.value} suffix={s.suffix} /></div>
                    <div className="mt-1 text-[11px] leading-tight text-muted">{s.label}</div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
            {FACTS.map((f, i) => (
              <Reveal key={f.k} delay={0.1 + i * 0.08}>
                <SpotlightCard className="p-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">{f.k}</p>
                  <p className="mt-1 text-fg">{f.v}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
