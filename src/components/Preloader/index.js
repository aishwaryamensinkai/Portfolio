import React from 'react'
import LogoName from '../../assets/images/logopreload.png'
import './index.scss'

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="inner">
        <img src={LogoName} alt="Front End Developer Loader" />
        <span>Aishwarya is working</span>
        <div className="progress-bar">
          <div className="progress-bar_bg">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
