import './index.scss'
import LogoS from '../../../assets/images/logo-A.png'
import { useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="JavaScript,  Developer" />{' '}
    </div>
  )
}

export default Logo
