import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikhil Tiwari",
    "url": "https://nikhiltiwari.dev",
    "sameAs": [
      "https://github.com/nikhiltiwari",
      "https://linkedin.com/in/nikhiltiwari",
      "https://leetcode.com/nikhiltiwari",
      "https://auth.geeksforgeeks.org/user/nikhiltiwari"
    ],
    "jobTitle": "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Software Development"
    },
    "knowsAbout": [
      "Java", "Microservices", "Spring Boot", "System Design",
      "DSA", "LLD", "HLD", "Database", "REST APIs", "Git"
    ],
    "description": "Software Developer with 1+ year experience in Java, Microservices, and System Design",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Your University Name"
    }
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>Nikhil Tiwari - Software Developer | Java | Microservices | Spring Boot</title>
      <meta name="description" content="Nikhil Tiwari is a software developer with 1+ year experience in Java, Microservices, Spring Boot, DSA, LLD, HLD. View portfolio, projects, and GitHub repositories." />
      <meta name="keywords" content="Nikhil Tiwari, Nikhil Tiwari developer, Nikhil Tiwari Java, Nikhil Tiwari software developer, Java developer, Microservices expert, Spring Boot developer, DSA, LLD, HLD, System Design, GFG, LeetCode" />
      <meta name="author" content="Nikhil Tiwari" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Nikhil Tiwari - Software Developer" />
      <meta property="og:description" content="Experienced software developer specializing in Java, Microservices, and System Design" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nikhiltiwari.dev" />
      <meta property="og:image" content="https://nikhiltiwari.dev/og-image.jpg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nikhil Tiwari - Software Developer" />
      <meta name="twitter:description" content="Experienced software developer specializing in Java, Microservices, and System Design" />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}

export default SEO