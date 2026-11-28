import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => { setShow(false); document.body.style.overflow = '' }, 1500)
    return () => { clearTimeout(t); document.body.style.overflow = '' }
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-6xl font-bold bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent"
          >
            NT
          </motion.div>
          <div className="mt-6 h-[2px] w-40 overflow-hidden rounded bg-line">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent2"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
          <p className="mt-4 font-mono text-xs text-muted">initializing portfolio…</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
