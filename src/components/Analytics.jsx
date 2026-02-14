import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Analytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.hash
      })
    }
    
    // Track page view
    console.log('Page viewed:', location.pathname + location.hash)
  }, [location])

  return null
}

export default Analytics