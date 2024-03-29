import React from 'react'
import { useSpring, animated } from 'react-spring'
import './index.scss'

const TextAnimation = ({ text }) => {
  const [hovered, setHovered] = React.useState(false)

  const springProps = useSpring({
    width: hovered ? '120%' : '100%',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    color: hovered ? 'white' : '#ffd700',
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...springProps,
        overflow: 'hidden',
        margin: 0,
        display: 'contents',
        color: springProps.color,
      }}
      className="spanCss"
    >
      {text}
    </animated.span>
  )
}

export default TextAnimation
