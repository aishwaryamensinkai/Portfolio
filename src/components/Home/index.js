import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 's', 'h', 'w', 'a', 'r', 'y', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ] 

  return (
    <div className="container home-page">
      <h1>
        Hi, <br /> I'm
        <img src={LogoTitle} alt="developer" />
        ishwarya
        <br />
        web developer
      </h1>
      <h2>Frontend Developer / JavaScript </h2>
      <Link to="/contact" className="flat-button">
        CONTACT ME
      </Link>
    </div>
  )
}

export default Home
