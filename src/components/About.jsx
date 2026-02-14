import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who is Nikhil Tiwari?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate Software Developer with 1+ year of experience in building 
              robust and scalable applications. My expertise lies in Java development, 
              Microservices architecture, and System Design (both Low Level and High Level).
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I have a strong foundation in Data Structures and Algorithms, having solved 
              300+ problems on LeetCode and GeeksforGeeks. I believe in writing clean, 
              maintainable code and following best practices in software development.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently, I'm focused on mastering cloud technologies and expanding my 
                knowledge in distributed systems. I'm always eager to learn new technologies 
              and take on challenging problems.
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">🎓 Information Technology Graduate</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">💼 1+ Year Experience in Software Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">🚀 3+  Projects on GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">📊 300+ DSA Problems Solved</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">🏆 Completed 2 Advanced Courses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About