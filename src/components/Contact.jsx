import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {/* Email */}
          <a href="mailto:nikhil.tiwari@email.com" 
             className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">
            <span className="text-xl">📧</span>
            <span>nikhil19tiwari@email.com</span>
          </a>

          {/* Phone */}
          <a href="tel:+9028696860" 
             className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">
            <span className="text-xl">📱</span>
            <span>+91 9028696860</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/nikhil19tiwari" target="_blank" rel="noopener noreferrer"
             className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">
            <span className="text-xl">💻</span>
            <span>nikhil19tiwari</span>
          </a>

          {/* LinkedIn */}
          <a href="linkedin.com/in/nikhil-tiwari-261a64306" target="_blank" rel="noopener noreferrer"
             className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">
            <span className="text-xl">🔗</span>
            <span>Nikhil Tiwari</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact