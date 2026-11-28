import { motion } from 'framer-motion'
import photo from '../assets/profile-photo.png'
import { LINKS, ROLES, STATS } from '../data'
import { useTyped } from '../hooks'
import { SplitText, Magnetic, Tilt, Counter, ease } from './ui'
import { GitHub, LinkedIn, LeetCode, Medium, Arrow } from './Icons'

const socials = [
  { href: LINKS.github, label: 'GitHub', Icon: GitHub },
  { href: LINKS.linkedin, label: 'LinkedIn', Icon: LinkedIn },
  { href: LINKS.leetcode, label: 'LeetCode', Icon: LeetCode },
  { href: LINKS.medium, label: 'Medium', Icon: Medium },
]

const code = [
  [['k', 'public class '], ['t', 'Nikhil '], ['k', 'implements '], ['t', 'Developer ']],
  [['p', '  role '], ['o', '= '], ['s', '"Backend Engineer"'], ['p', ';']],
  [['p', '  stack '], ['o', '= '], ['s', '{"Java","Spring","Docker"}'], ['p', ';']],
  [['p', '  scalable '], ['o', '= '], ['k', 'true'], ['p', ';']],
  [['p', '}']],
]
const colors = { k: 'text-accent', t: 'text-accent2', s: 'text-emerald-500 dark:text-emerald-400', o: 'text-muted', p: 'text-fg' }

function Chip({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 + delay, duration: 0.6, ease }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-full border border-line bg-card px-4 py-2 font-mono text-xs text-fg backdrop-blur-xl shadow-lg"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const role = useTyped(ROLES)
  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Building at VELOX Solutions
          </motion.div>

          <h1 id="hero-title" className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-fg sm:text-7xl xl:text-8xl">
            <SplitText text="Nikhil" delay={1.5} />
            <br />
            <SplitText text="Tiwari" delay={1.65} />
            <span className="text-accent">.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8, ease }}
            className="mt-6 font-display text-2xl font-semibold sm:text-3xl"
          >
            <span className="text-muted">I'm a </span>
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">{role}</span>
            <span className="ml-0.5 inline-block h-[1.1em] w-[3px] translate-y-1 animate-pulse bg-accent" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.8, ease }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
          >
            Software Developer crafting scalable backends with Java, Spring Boot and Microservices, with a strong love for System Design and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a href="#projects" className="btn-primary">
                View projects <Arrow width={18} height={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="order-2 text-xs text-muted">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-fg"><Counter to={s.value} suffix={s.suffix} /></dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.7, duration: 1.1, ease }}
          className="relative mx-auto w-full max-w-sm"
        >
          <Tilt max={9}>
            <div className="relative p-[2px] rounded-[1.7rem] overflow-hidden">
              <div className="conic-border" />
              <div className="relative overflow-hidden rounded-[1.6rem] bg-bg">
                <img
                  src={photo}
                  alt="Nikhil Tiwari, Software Developer"
                  width="900"
                  height="1088"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-xs text-white/90">// backend · system design</div>
              </div>
            </div>
          </Tilt>

          <Chip className="-right-4 top-10 sm:-right-10">Spring Boot</Chip>
          <Chip className="-left-4 top-1/3 sm:-left-12" delay={0.4}>Microservices</Chip>
          <Chip className="right-2 bottom-24 sm:-right-8" delay={0.8}>Java ☕</Chip>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.9, ease }}
            className="absolute -bottom-10 -left-2 hidden w-[290px] rounded-2xl border border-line bg-card p-4 font-mono text-[11px] leading-6 backdrop-blur-xl shadow-2xl sm:block sm:-left-14"
          >
            <div className="mb-2 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            {code.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.9 + i * 0.18, duration: 0.4 }}
                className="whitespace-pre"
              >
                {line.map(([c, t], j) => <span key={j} className={colors[c]}>{t}</span>)}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted/50 pt-2">
          <span className="scroll-dot h-2 w-1 rounded-full bg-accent" />
        </div>
      </a>
    </section>
  )
}
