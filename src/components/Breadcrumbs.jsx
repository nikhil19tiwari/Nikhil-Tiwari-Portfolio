import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 dark:bg-gray-800 py-2 px-4">
      <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          
          return (
            <li key={name} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-900 dark:text-white font-medium capitalize">
                  {name.replace(/-/g, ' ')}
                </span>
              ) : (
                <Link to={routeTo} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 capitalize">
                  {name.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs