import { LINKS } from '../data'
import { GitHub, LinkedIn, Medium, Up } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Nikhil Tiwari. Designed &amp; built with React.</p>
        <div className="flex items-center gap-2">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn"><GitHub width={18} height={18} /></a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn"><LinkedIn width={18} height={18} /></a>
          <a href={LINKS.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="icon-btn"><Medium width={18} height={18} /></a>
          <a href="#home" aria-label="Back to top" className="icon-btn"><Up width={18} height={18} /></a>
        </div>
      </div>
    </footer>
  )
}
