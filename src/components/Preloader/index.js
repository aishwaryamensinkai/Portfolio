import React, { useState, useEffect } from 'react'
import LogoName from '../../assets/images/logopreload.png'
import './index.scss'

const Preloader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const totalTime = 1900
    const intervalTime = 100
    const steps = totalTime / intervalTime

    let currentStep = 0
    const progressInterval = setInterval(() => {
      currentStep++
      const newProgress = (currentStep / steps) * 100
      setProgress(Math.min(newProgress, 100))

      if (currentStep >= steps) {
        clearInterval(progressInterval)
      }
    }, intervalTime)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div className="preloader">
      <div className="inner">
        <img src={LogoName} alt="Front End Developer Loader" />
        <span>Aishwarya is working</span>
        <div className="progress-bar">
          <div className="progress-bar_bg">
            <div style={{ width: `${progress}%` }}></div>{' '}
          </div>
        </div>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  )
}

export default Preloader
