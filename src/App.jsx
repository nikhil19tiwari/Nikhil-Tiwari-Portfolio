import { MotionConfig } from 'framer-motion'
import { useTheme } from './hooks'
import Background from './components/Background'
import ScrollProgress from './components/ScrollProgress'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, toggle] = useTheme()
  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <ScrollProgress />
      <Loader />
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
