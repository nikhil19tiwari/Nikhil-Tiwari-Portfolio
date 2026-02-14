import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "SQL", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring Cloud", "Hibernate", "React.js"]
    },
    {
      title: "Microservices & Architecture",
      skills: ["Microservices", "REST APIs", "LLD", "HLD", "System Design"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "Kubernetes", "Jenkins", "Maven", "Gradle"]
    },
    {
      title: "DSA & Problem Solving",
      skills: ["Data Structures", "Algorithms", "LeetCode", "GFG"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills