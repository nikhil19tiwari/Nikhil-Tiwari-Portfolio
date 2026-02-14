import React from 'react'

const SocialShare = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: '𝕏',
      color: 'hover:bg-black'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: 'in',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: 'f',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: '📱',
      color: 'hover:bg-green-600'
    }
  ]

  return (
    <div className="flex space-x-2">
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full ${link.color} hover:text-white transition-colors`}
          aria-label={`Share on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialShare