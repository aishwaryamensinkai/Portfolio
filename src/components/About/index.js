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
              I am Aishwarya Girish Mensinkai, a Computer Science graduate with
              a strong foundation in Software Development Engineering (SDE) and
              front-end development. My passion lies in building highly
              performant applications that address real-world challenges and
              provide users with exceptional experiences. Currently, I
              specialize in the MERN stack, leveraging my skills in both backend
              and frontend technologies to create robust and scalable solutions.
            </p>
            <p align="LEFT">
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              Whether working as part of a team or tackling projects
              independently, I thrive in collaborative environments and am
              always eager to solve complex problems. My curiosity drives me to
              continuously learn and adapt, ensuring that I stay at the
              forefront of technological advancements. I am committed to
              delivering high-quality code and innovative solutions that make a
              meaningful impact.
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
