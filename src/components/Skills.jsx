import { motion } from 'framer-motion'
import { SKILLS } from '../data'
import { SectionHeading, Reveal, SpotlightCard } from './ui'

const all = SKILLS.flatMap((s) => s.items)
const rowA = all.slice(0, Math.ceil(all.length / 2))
const rowB = all.slice(Math.ceil(all.length / 2))

function Marquee({ items, reverse }) {
  const list = [...items, ...items, ...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className={`marquee ${reverse ? 'marquee-rev' : ''}`}>
        {list.map((t, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-line bg-card px-6 py-3 font-display text-lg font-semibold text-fg backdrop-blur">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="skills-title" index="02" eyebrow="skills" title="Tech I work with" />
      </div>

      <div aria-hidden="true" className="mb-16 space-y-3">
        <Marquee items={rowA} />
        <Marquee items={rowB} reverse />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 0.08}>
              <SpotlightCard className="h-full p-6">
                <h3 className="font-display text-xl font-semibold text-fg">{cat.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((s, j) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.05, type: 'spring', stiffness: 260, damping: 18 }}
                      className="rounded-lg border border-accent/25 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
