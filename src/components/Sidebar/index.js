/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoA from '../../assets/images/logo-A.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCog,
  faEnvelope,
  faHome,
  faUser,
  faUserGraduate,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Preloader from '../Preloader'
import { useEffect, useState } from 'react'

const Sidebar = () => {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {showPreloader && <Preloader />}
      {!showPreloader && (
        <div className="nav-bar">
          <Link className="logo" to="/">
            <img src={LogoA} alt="logo" />
            <img src={LogoSubtitle} alt="logo" className="sub-logo" />
          </Link>
          <nav>
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/about"
              className="about-link"
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/education"
              className="education-link"
            >
              <FontAwesomeIcon icon={faUserGraduate} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/skills"
              className="skills-link"
            >
              <FontAwesomeIcon icon={faCog} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/projects"
              className="project-link"
            >
              <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/contact"
              className="contact-link"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/aishwarya-mensinkai/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/aishwaryamensinkai"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Sidebar
