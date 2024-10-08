/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import TagCloud from 'TagCloud'
import './index.scss'

const TextSphere = () => {
  const cloudContainerRef = useRef(null)
  const tagCloudRef = useRef(null)

  useEffect(() => {
    const cloudContainer = cloudContainerRef.current
    const texts = []

    texts.push(
      'HTML/HTML5',
      'CSS3',
      'CSS',
      'XML',
      'JavaScript',
      'AJAX',
      'jQuery',
      'JSON',
      'Bootstrap'
    )

    texts.push('Agile/Scrum', 'Waterfall')

    texts.push('Java', 'C++', 'Python', 'C', 'TypeScript')

    texts.push('Angular.js', 'Node.js', 'React.js')

    texts.push('MySQL', 'SQL Server', 'JDBC', 'NoSQL', 'MongoDB')

    texts.push('Spring Boot', 'Angular', 'Docker', 'Hibernate', 'Kubernetes')

    texts.push('Node.js', 'Python', 'Java', '.NET', 'Express.js')

    texts.push(
      'Visual Studio Code',
      'Intellij',
      'Eclipse',
      'Spring Tool Suite',
      'Postman',
      'SOAP UI',
      'Jenkins',
      'JIRA',
      'Confluence'
    )

    texts.push(
      'AWS',
      'Windows',
      'Mac',
      'Linux',
      'Git',
      'GitHub',
      'GitLab'
    )

    const options = {
      radius: 350,
      maxSpeed: 'normal',
      initSpeed: 'fast',
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      keep: true,
    }

    if (!tagCloudRef.current) {
      tagCloudRef.current = TagCloud(cloudContainer, texts, options)
    }

    const handleWheel = (event) => {
      event.preventDefault()
      const scaleFactor = event.deltaY > 0 ? 1.2 : 0.5
      const currentTransform = cloudContainer.style.transform || 'scale(1)'
      const currentScale = parseFloat(
        currentTransform.match(/scale\(([^)]+)\)/)[1]
      )

      let newScale = currentScale * scaleFactor

      const maxScale = 1.2
      const minScale = 0.5

      newScale = Math.min(Math.max(newScale, minScale), maxScale)

      cloudContainer.style.transform = `scale(${newScale})`

      if (newScale > 1) {
        cloudContainer.classList.add('zoomed-in')
        cloudContainer.classList.remove('zoomed-out')
      } else if (newScale < 1) {
        cloudContainer.classList.remove('zoomed-in')
        cloudContainer.classList.add('zoomed-out')
      } else {
        cloudContainer.classList.remove('zoomed-in')
        cloudContainer.classList.remove('zoomed-out')
      }
    }
    cloudContainer.addEventListener('wheel', handleWheel)

    return () => {
      cloudContainer.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return <div className="cloud-Container" ref={cloudContainerRef}></div>
}

export default TextSphere
