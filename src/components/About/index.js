/* eslint-disable react/style-prop-object */
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Preloader from '../Preloader'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showPreloader, setShowPreloader] = useState(true)

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
        <div className="container about-page">
          <div className="text-zone" style={{ textAlign: 'justify' }}>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              Hello! I'm Aishwarya Girish Mensinkai, a dynamic Computer Science
              graduate with a solid foundation in Software Development
              Engineering (SDE). My passion lies in crafting high-performance
              applications that address real-world challenges and deliver
              exceptional user experiences. With a keen interest in both backend
              and frontend technologies, I focus on creating scalable and
              innovative solutions that drive meaningful impact.
            </p>
            <p align="">
              I'm confident, naturally curious, and always excited to tackle new
              challenges. Whether I'm collaborating with a team or working
              independently, I thrive on solving complex problems and
              continuously improving my skills. My curiosity fuels my drive to
              stay ahead of technological advancements and push the boundaries
              of what's possible.
            </p>
            <p>
              In my career so far, I've transformed legacy systems, developed
              intuitive user interfaces, and enhanced application performance.
              I'm committed to delivering high-quality code and leveraging my
              diverse skill set to build solutions that are both effective and
              impactful. From developing robust software to optimizing user
              engagement, I enjoy every aspect of the development process.
            </p>
            <p>
              Explore my GitHub, LinkedIn, and Portfolio to learn more about my
              projects and connect with me. Let's innovate together!
            </p>
            <div className="clear"></div>
          </div>
          <div className="stage">
            <div className="stage-cube-cont">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default About
