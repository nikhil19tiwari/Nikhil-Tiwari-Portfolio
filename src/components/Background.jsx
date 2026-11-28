import { useEffect } from 'react'

export default function Background() {
  useEffect(() => {
    let raf
    const root = document.documentElement
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--cx', e.clientX + 'px')
        root.style.setProperty('--cy', e.clientY + 'px')
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="aurora a1" />
      <div className="aurora a2" />
      <div className="aurora a3" />
      <div className="grid-bg" />
      <div className="cursor-glow" />
    </div>
  )
}
