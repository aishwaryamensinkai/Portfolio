import './index.scss'
import LogoTitle from '../../assets/images/logo-A.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Preloader from '../Preloader'
import Photo from '../../assets/images/photo.jpeg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 's', 'h', 'w', 'a', 'r', 'y', 'a']
  const jobArray = [
    'G',
    'i',
    'r',
    'i',
    's',
    'h',
    ' ',
    'M',
    'e',
    'n',
    's',
    'i',
    'n',
    'k',
    'a',
    'i',
  ]
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

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
        <div className="container home-page">
          <div className="image-zone">
            <img src={Photo} alt="Not available" className="unique-image" />
          </div>
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>
              Software Engineer | Developer |<br /> Programmer | Tech Enthusiast
            </h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>{' '}
          <Logo />
        </div>
      )}
    </>
  )
}

export default Home
