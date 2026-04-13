import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active link based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
      setActiveLink(href.substring(1))
    }
  }

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
          : 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg shadow-sm">
                <span className="text-xl font-bold text-white tracking-widest">
                  NT
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu with hover effects */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeLink === item.href.substring(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative group px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Minimalist underline */}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button - Enhanced */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative inline-flex items-center justify-center p-2 rounded-2xl transition-all duration-300 ${
                isOpen 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/50' 
                  : 'bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0 bg-white' : '-translate-y-1.5 bg-current'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100 bg-current'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0 bg-white' : 'translate-y-1.5 bg-current'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with animations */}
        <div 
          className={`md:hidden transition-all duration-500 ease-in-out transform ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none hidden'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl mt-4 border border-gray-200 dark:border-gray-700">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  activeLink === item.href.substring(1)
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar