import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from 'framer-motion'

export const ease = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function SplitText({ text, className = '', delay = 0, stagger = 0.035 }) {
  let n = 0
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {text.split(' ').map((w, wi, arr) => (
        <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap">
          {w.split('').map((c, ci) => {
            const d = delay + n++ * stagger
            return (
              <span key={ci} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: '115%', rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: d, ease }}
                >
                  {c}
                </motion.span>
              </span>
            )
          })}
          {wi < arr.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

export function Magnetic({ children, strength = 0.35, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16 })
  const sy = useSpring(y, { stiffness: 220, damping: 16 })
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}

export function SpotlightCard({ children, className = '' }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div onMouseMove={onMove} className={`spot ${className}`}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

export function Tilt({ children, className = '', max = 8 }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 18 })
  const sy = useSpring(y, { stiffness: 180, damping: 18 })
  const rx = useTransform(sy, [-0.5, 0.5], [max, -max])
  const ry = useTransform(sx, [-0.5, 0.5], [-max, max])
  return (
    <div
      className={className}
      style={{ perspective: 1100 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      <motion.div className="h-full" style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}>
        {children}
      </motion.div>
    </div>
  )
}

export function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (l) => setV(Math.round(l)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v}{suffix}</span>
}

export function SectionHeading({ index, eyebrow, title, id }) {
  return (
    <div className="mb-14">
      <Reveal>
        <p className="font-mono text-sm text-accent mb-3">
          <span className="opacity-60">{index} /</span> {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 id={id} className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-fg">{title}</h2>
      </Reveal>
      <motion.div
        className="mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-accent to-accent2 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.25, ease }}
      />
    </div>
  )
}
