import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Nikhil Tiwari. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer