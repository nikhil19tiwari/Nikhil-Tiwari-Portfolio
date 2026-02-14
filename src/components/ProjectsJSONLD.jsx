import React from 'react'
import { Helmet } from 'react-helmet-async'

const ProjectsJSONLD = ({ projects }) => {
  const itemsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareSourceCode",
        "name": project.title,
        "description": project.description,
        "codeRepository": project.github,
        "programmingLanguage": project.technologies,
        "url": project.live || project.github,
        "author": {
          "@type": "Person",
          "name": "Nikhil Tiwari"
        }
      }
    }))
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(itemsListSchema)}
      </script>
    </Helmet>
  )
}

export default ProjectsJSONLD