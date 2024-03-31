import { useEffect, useState } from 'react'
import './index.scss'
import Preloader from '../Preloader'
import Timeline from './Timeline'
import AnimatedLetters from '../AnimatedLetters'

const Education = () => {
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
        <div className="container skills">
          <div className="text-zone">
            <br />
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'E',
                  'd',
                  'u',
                  'c',
                  'a',
                  't',
                  'i',
                  'o',
                  'n',
                  ' ',
                  '&',
                  ' ',
                  'E',
                  'x',
                  'p',
                  'e',
                  'r',
                  'i',
                  'e',
                  'n',
                  'c',
                  'e',
                ]}
                idx={50}
              />
            </h1>
            <Timeline />
          </div>
        </div>
      )}
    </>
  )
}

export default Education
