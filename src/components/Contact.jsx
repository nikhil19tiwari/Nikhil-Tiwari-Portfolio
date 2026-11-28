import { LINKS } from '../data'
import { Reveal, SpotlightCard, Magnetic } from './ui'
import { Mail, Phone, LinkedIn, GitHub, LeetCode, Medium, Arrow } from './Icons'

const cards = [
  { label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}`, Icon: Mail },
  { label: 'Phone', value: LINKS.phoneLabel, href: `tel:${LINKS.phone}`, Icon: Phone },
  { label: 'LinkedIn', value: 'nikhil-tiwari', href: LINKS.linkedin, Icon: LinkedIn },
  { label: 'GitHub', value: 'nikhil19tiwari', href: LINKS.github, Icon: GitHub },
  { label: 'LeetCode', value: 'Practice profile', href: LINKS.leetcode, Icon: LeetCode },
  { label: 'Medium', value: '@nikhil19tiwari', href: LINKS.medium, Icon: Medium },
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent"><span className="opacity-60">05 /</span> contact</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="contact-title" className="font-display text-5xl font-bold tracking-tight text-fg sm:text-7xl">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">scalable</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Have a role, a project or an idea in mind? My inbox is open, and I'd love to hear about it.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10">
          <Magnetic strength={0.4}>
            <a href={`mailto:${LINKS.email}`} className="btn-primary text-lg !px-9 !py-4">
              Say hello <Arrow width={20} height={20} />
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-20 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={(i % 3) * 0.08}>
              <SpotlightCard className="group">
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon width={20} height={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-wider text-muted">{label}</span>
                    <span className="block truncate text-fg">{value}</span>
                  </span>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
