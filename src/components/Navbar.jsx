import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV } from '../data'
import { Sun, Moon, Menu, Close } from './Icons'

function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg hover:border-accent hover:text-accent transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="grid place-items-center"
        >
          {theme === 'dark' ? <Sun width={18} height={18} /> : <Moon width={18} height={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav aria-label="Primary" className="w-full max-w-3xl">
        <div className="flex items-center justify-between gap-2 rounded-full border border-line bg-card px-3 py-2 backdrop-blur-xl shadow-[0_8px_40px_-12px_var(--glow)]">
          <a href="#home" aria-label="Nikhil Tiwari – home" className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-display text-sm font-bold text-white">
            NT
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === n.id ? 'text-fg' : 'text-muted hover:text-fg'}`}
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent/15 border border-accent/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{n.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} toggle={toggle} />
            <button
              className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-line text-fg"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 rounded-3xl border border-line bg-card p-2 backdrop-blur-xl"
            >
              {NAV.map((n, i) => (
                <motion.li key={n.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-base font-medium ${active === n.id ? 'bg-accent/15 text-fg' : 'text-muted'}`}
                  >
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
