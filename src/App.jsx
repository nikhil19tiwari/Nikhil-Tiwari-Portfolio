import React, { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'

function App() {
  useEffect(() => {
    // Update document title with name for better SEO
    document.title = "Nikhil Tiwari - Software Developer | Java | Microservices | Spring Boot"
  }, [])

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <SEO />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App