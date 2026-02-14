// import React from 'react'

// const Achievements = () => {
//   const achievements = [
//     {
//       title: "LeetCode",
//       description: "Solved 200+ problems with 5-star rating in Problem Solving",
//       icon: "🏆",
//       link: "https://leetcode.com/nikhiltiwari"
//     },
//     {
//       title: "GeeksforGeeks",
//       description: "Solved 150+ problems, Institute rank in top 10",
//       icon: "⭐",
//       link: "https://auth.geeksforgeeks.org/user/nikhiltiwari"
//     },
//     {
//       title: "Courses Completed",
//       description: "System Design (LLD & HLD) and Microservices Architecture",
//       icon: "📚",
//       link: "#"
//     },
//     {
//       title: "Certifications",
//       description: "Java Spring Boot Certification, DSA Specialization",
//       icon: "🎓",
//       link: "#"
//     }
//   ]

//   return (
//     <section id="achievements" className="py-20 bg-white dark:bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Achievements & Certifications
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {achievements.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
//             >
//               <div className="text-4xl mb-3">{item.icon}</div>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400 text-sm">
//                 {item.description}
//               </p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Achievements