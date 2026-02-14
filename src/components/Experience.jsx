import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "VELOX Solutions",
      period: "Jan 2026 - Present",
      description: [
        "Working on Java-based microservices architecture using Spring Boot",
        "Designing and implementing RESTful APIs for scalable applications",
        "Participating in system design discussions for LLD and HLD",
        "Writing unit tests and integration tests using JUnit and Mockito"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "TEXOSMART",
      period: "May 2025 - Dec 2025",
      description: [
        "Developed and maintained Java applications",
        "Worked on database design and optimization",
        "Collaborated with cross-functional teams on various projects",
        "Participated in code reviews and agile ceremonies"
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Reduced spacing */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 last:pb-0">
              {/* Timeline line - Shorter */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-5 bottom-0 w-0.5 bg-blue-600/30"></div>
              )}
              
              {/* Timeline dot - Smaller */}
              <div className="absolute left-0 top-2 w-5 h-5 bg-blue-600 rounded-full border-2 border-white dark:border-gray-800"></div>
              
              {/* Card - Reduced padding and spacing */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg hover:shadow-md transition-shadow">
                {/* Title and company in same line for compactness */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    @ {exp.company}
                  </span>
                </div>
                
                {/* Period with icon */}
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.period}
                </div>
                
                {/* Description with bullet points - Compact */}
                <ul className="space-y-1.5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-blue-600 mr-2 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience