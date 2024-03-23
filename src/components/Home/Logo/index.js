import './index.scss'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

import LogoA from '../../../assets/images/logo-A.png'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 5,
      })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 3,
      }
    )
  }, [])

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoA} ref={solidLogoRef} alt="A" />
      <svg
        version="1.0"
        id="eNDTw6iBG891"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        width="600pt"
        height="600pt"
        viewBox="0 0 1060 1050"
        ref={bgRef}
      >
        <g
          className="svg-container"
          transform="translate(0.000000,897.000000) scale(0=.100000,0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M-100.482479,0 100.482479,0"
            transform="translate(600.252953,198.393965)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-150.053836,-399.250382 150.053836,399.250383"
            transform="translate(848.109735,600.323881)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M151.393602,-400.59015 -151.393601,400.590149"
            transform="translate(351.056406,596.304582)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-101.822246,1.339766 101.822246,-1.339766"
            transform="translate(298.805517,998.234497)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-100.482479,0 100.482479,0"
            transform="translate(897.681091,999.574263)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-41.532758,100.482479 41.532758,-100.482479"
            transform="translate(439.480987,896.412252)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-40.192992,-100.482478 40.192991,100.482479"
            transform="translate(759.685154,899.091784)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-119.239209,0 119.239209,0"
            transform="translate(600.252954,801.288838)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M50.911123,-143.355003 -50.911122,143.355003"
            transform="translate(548.002065,542.713926)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-103.162011,1.339766 103.162011,-1.339766"
            transform="translate(597.573421,687.408696)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-52.250889,-142.015236 52.250889,142.015237"
            transform="translate(651,543)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M49.916575,-24.958287 -49.916575,24.958287"
            transform="translate(449.980998,225.574107)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M50.027757,-26.80881 -50.027757,26.80881"
            transform="translate(149.786354,1026.56395)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M149.769063,-400.308668 -149.769063,400.308668"
            transform="translate(250.448853,651.136796)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M47.14952,-24.96151 -47.149519,24.961511"
            transform="translate(349,1025)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-99.846042,0 99.846042,0"
            transform="translate(202.374833,1049.596463)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M48.99852,-24.96151 -48.998521,24.961511"
            transform="translate(748.754563,1026.483953)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M49.923021,-24.03701 -49.923021,24.03701"
            transform="translate(949.371147,1025.559453)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M98.921541,-0.924501 -98.921541,0.9245"
            transform="translate(798.677584,1050.520964)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-45.035692,24.888146 45.035692,-24.888146"
            transform="translate(675.103285,825.417144)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M34.961919,100.145157 -34.961919,-100.145157"
            transform="translate(665.029512,950.450447)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
          />
          <path
            d="M-86.515935,0 86.515934,0"
            transform="translate(544.736809,850.30529)"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            // ref={outlineLogoRef}
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
