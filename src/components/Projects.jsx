import { PROJECTS } from '../data'
import { SectionHeading, Reveal, SpotlightCard, Tilt, Magnetic } from './ui'
import { GitHub, Arrow } from './Icons'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="projects-title" index="04" eyebrow="projects" title="Selected work" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className={p.featured ? 'lg:col-span-2' : ''}>
              <Tilt max={5} className="h-full">
                <SpotlightCard className="group h-full p-7 sm:p-8">
                  <span aria-hidden="true" className="absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none text-fg/[0.05]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex h-full flex-col">
                    <GitHub width={26} height={26} className="mb-5 text-accent" />
                    <h3 className={`font-display font-semibold text-fg ${p.featured ? 'text-3xl' : 'text-2xl'}`}>{p.title}</h3>
                    <p className="mt-3 flex-1 text-muted leading-relaxed">{p.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded-md border border-line bg-bg/40 px-2.5 py-1 font-mono text-[11px] text-muted">{t}</li>
                      ))}
                    </ul>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source code on GitHub`}
                      className="mt-6 inline-flex w-fit items-center gap-2 font-medium text-accent after:absolute after:inset-0 after:content-['']"
                    >
                      View on GitHub
                      <Arrow width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </SpotlightCard>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Magnetic>
            <a href="https://github.com/nikhil19tiwari" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GitHub width={18} height={18} /> All repositories
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
