import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Microservices Architecture: A Comprehensive Guide",
      excerpt: "Deep dive into microservices architecture, its benefits, challenges, and implementation strategies using Spring Boot.",
      date: "2024-03-15",
      readTime: "8 min read",
      slug: "microservices-architecture-guide",
      tags: ["Microservices", "Spring Boot", "System Design"]
    },
    {
      title: "Mastering Low Level Design: Key Patterns and Principles",
      excerpt: "Learn essential LLD concepts, design patterns, and best practices for writing maintainable code.",
      date: "2024-03-10",
      readTime: "6 min read",
      slug: "mastering-low-level-design",
      tags: ["LLD", "Design Patterns", "OOP"]
    },
    {
      title: "My Journey of Solving 300+ DSA Problems on LeetCode",
      excerpt: "Tips, strategies, and resources that helped me solve 300+ problems and improve problem-solving skills.",
      date: "2024-03-05",
      readTime: "5 min read",
      slug: "dsa-journey-leetcode",
      tags: ["DSA", "LeetCode", "Interview Prep"]
    }
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Sharing knowledge and experiences in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog