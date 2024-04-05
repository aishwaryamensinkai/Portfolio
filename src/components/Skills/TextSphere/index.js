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
    const texts = [
      'HTML 5',
      'TagCloud',
      'JavaScript',
      'CSS',
      'TypeScript',
      'REST',
      'JSON',
      'React',
      'Angular',
      'Git',
      'Bootstrap',
      'SASS',
      'RxJs',
      'C',
      'C++',
      'Java',
      'Python',
      'SwiftUI',
      'Tailwind',
      'SQL',
    ]
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

  return (
    <div className="main">
      <div className="cloud-Container" ref={cloudContainerRef}></div>
    </div>
  )
}

export default TextSphere
