import React, { useEffect, useState } from 'react'
import LogoName from '../../assets/images/logopreload.png'
import './index.scss'

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1000)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / 1000) * 100
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={`preloader ${isVisible ? 'visible' : ''}`}>
      <div className="inner">
        <img src={LogoName} alt="Front End Developer Loader" />
        <span>Aishwarya is working</span>
        <div className="progress-bar">
          <div
            className="progress-bar_bg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
