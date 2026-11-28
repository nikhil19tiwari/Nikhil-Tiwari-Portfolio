import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

export function useTyped(words, { type = 70, erase = 35, hold = 1500 } = {}) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = words[i % words.length]
    let t
    if (!del && text === word) t = setTimeout(() => setDel(true), hold)
    else if (del && text === '') { setDel(false); setI((n) => n + 1) }
    else t = setTimeout(() => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)), del ? erase : type)
    return () => clearTimeout(t)
  }, [text, del, i, words, type, erase, hold])
  return text
}
