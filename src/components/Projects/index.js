import React, { useEffect, useState } from 'react'
import projectsData from './ProjectCard/projectsData'
import ProjectCard from './ProjectCard/index'
import './index.scss'
import Preloader from '../Preloader'
import AnimatedLetters from '../AnimatedLetters'

const Projects = () => {
  const [showPreloader, setShowPreloader] = useState(true)
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
      {showPreloader && <Preloader />}
      {!showPreloader && (
        <div className="container skills scrollable1" style={{}}>
          <div className="text-zone with">
            <br />
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={50}
              />
            </h1>
            <div className="projects-container">
              <div className="projects-grid">
                {projectsData.map((data, index) => (
                  <ProjectCard key={index} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
