import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'
import './index.scss'

const container = '.content'
const texts = [
  'HTML 5',
  'TagCloud',
  'JavaScript',
  'CSS3',
  'TypeScript',
  'REST',
  'JSON',
  'React',
  'Angular',
  'Git',
  'Bootstrap',
  'SASS',
  'RxJs',
  'C',
  'C++',
  'Java',
  'Python',
]
const options = {
  radius: 350,
  maxSpeed: 'normal',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  keep: true,
}

const TextSphere = () => {
  useEffect(() => {
    TagCloud(container, texts, options)
  })
  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}
export default TextSphere
