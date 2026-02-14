import React from 'react'
import { Helmet } from 'react-helmet-async'

const AdvancedSEO = ({ pageTitle, pageDescription, pageUrl, imageUrl }) => {
  const fullName = "Nikhil Tiwari"
  const baseUrl = "https://nikhiltiwari.dev"
  const currentUrl = pageUrl ? `${baseUrl}${pageUrl}` : baseUrl
  
  // Comprehensive Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": fullName,
    "givenName": "Nikhil",
    "familyName": "Tiwari",
    "url": baseUrl,
    "sameAs": [
      "https://github.com/nikhiltiwari",
      "https://linkedin.com/in/nikhiltiwari",
      "https://twitter.com/nikhiltiwari",
      "https://leetcode.com/nikhiltiwari",
      "https://auth.geeksforgeeks.org/user/nikhiltiwari",
      "https://stackoverflow.com/users/your-id",
      "https://medium.com/@nikhiltiwari",
      "https://dev.to/nikhiltiwari"
    ],
    "jobTitle": "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Tech Company Name",
      "url": "https://companywebsite.com"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Your University Name",
        "sameAs": "https://university-website.com"
      }
    ],
    "knowsAbout": [
      "Java",
      "Microservices",
      "Spring Boot",
      "System Design",
      "Low Level Design",
      "High Level Design",
      "Data Structures",
      "Algorithms",
      "Database Design",
      "REST APIs",
      "Docker",
      "Kubernetes",
      "Cloud Computing",
      "Distributed Systems"
    ],
    "knowsLanguage": ["Java", "SQL", "JavaScript", "TypeScript"],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "B.Tech in Computer Science",
        "credentialCategory": "degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Java Spring Boot Certification",
        "credentialCategory": "certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "System Design Specialization",
        "credentialCategory": "certification"
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Your City",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Your City",
          "addressCountry": "Your Country"
        }
      },
      "skills": "Java, Spring Boot, Microservices, System Design, DSA"
    }
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${fullName} - Software Developer Portfolio`,
    "url": baseUrl,
    "description": "Portfolio website of Nikhil Tiwari, a software developer specializing in Java, Microservices, and System Design",
    "author": {
      "@type": "Person",
      "name": fullName
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle || "Portfolio",
        "item": currentUrl
      }
    ]
  }

  // Local Business Schema (if applicable)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": fullName,
    "description": "Software Development Services",
    "url": baseUrl,
    "telephone": "+1234567890",
    "email": "nikhil.tiwari@email.com",
    "areaServed": "Worldwide",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your Region",
      "addressCountry": "Your Country"
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle || `${fullName} - Software Developer | Java | Microservices | System Design`}</title>
      <meta name="title" content={pageTitle || `${fullName} - Software Developer | Java | Microservices | System Design`} />
      <meta name="description" content={pageDescription || `${fullName} is a software developer with 1+ year experience in Java, Microservices, Spring Boot, DSA, LLD & HLD. View portfolio, projects, and achievements.`} />
      <meta name="keywords" content={`Nikhil Tiwari, Nikhil Tiwari developer, Nikhil Tiwari Java, Nikhil Tiwari software developer, Java developer India, Microservices expert, Spring Boot developer, DSA specialist, System Design expert, Low Level Design, High Level Design, LeetCode solver, GFG contributor, Java microservices portfolio, backend developer, full stack developer`} />
      <meta name="author" content={fullName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Your City, India" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle || `${fullName} - Software Developer Portfolio`} />
      <meta property="og:description" content={pageDescription || `Portfolio of ${fullName} - Software Developer specializing in Java, Microservices & System Design`} />
      <meta property="og:image" content={imageUrl || `${baseUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={`${fullName} Portfolio`} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={pageTitle || `${fullName} - Software Developer`} />
      <meta name="twitter:description" content={pageDescription || `Software developer specializing in Java, Microservices & System Design`} />
      <meta name="twitter:image" content={imageUrl || `${baseUrl}/twitter-image.jpg`} />
      <meta name="twitter:creator" content="@nikhiltiwari" />
      <meta name="twitter:site" content="@nikhiltiwari" />
      
      {/* LinkedIn */}
      <meta property="linkedin:author" content="https://linkedin.com/in/nikhiltiwari" />
      
      {/* Pinterest */}
      <meta name="pinterest-rich-pin" content="true" />
      
      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Icons */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Verification for Search Console */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://github.com" />
      <link rel="dns-prefetch" href="https://linkedin.com" />
    </Helmet>
  )
}

export default AdvancedSEO