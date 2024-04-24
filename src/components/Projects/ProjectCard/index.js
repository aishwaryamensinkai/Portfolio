import React, { useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = (props) => {
  const { title, image, link, source } = props.data
  const [showHover, setShowHover] = useState(false)

  const handleMouseEnter = () => {
    setShowHover(true)
  }

  const handleMouseLeave = () => {
    setShowHover(false)
  }

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="project-title">{title}</h2>
      <div className="image-container">
        <img
          className="project-image"
          src={require(`../../../assets/projectImages/${image}.png`)}
          alt={image}
        />
        <div className={`hover-overlay ${showHover ? 'show' : ''}`}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} color="white" /> {'           '}
            </a>
          )}
          <a href={source} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
