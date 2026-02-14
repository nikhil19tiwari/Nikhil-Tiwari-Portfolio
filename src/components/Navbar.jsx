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
    { name: 'Home', href: '#home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'About', href: '#about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Skills', href: '#skills', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { name: 'Experience', href: '#experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Projects', href: '#projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { name: 'Contact', href: '#contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
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
          {/* Logo with gradient and animation */}
          <div className="flex-shrink-0 group">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="relative block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-pulse"></div>
              <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-xl font-bold text-white transform group-hover:rotate-12 transition-transform duration-300">
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
                    className={`relative group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <svg 
                        className="w-4 h-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                      <span>{item.name}</span>
                    </span>
                    
                    {/* Animated background on hover */}
                    <span className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-left ${
                      isActive ? 'scale-100 bg-blue-500/10' : ''
                    }`}></span>
                    
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 ${
                      isActive ? 'w-full' : ''
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
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transform transition-all duration-300 hover:scale-105 ${
                  activeLink === item.href.substring(1)
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
                <span>{item.name}</span>
                {activeLink === item.href.substring(1) && (
                  <svg className="w-5 h-5 ml-auto animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar