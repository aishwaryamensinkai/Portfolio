/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react'
import './index.scss'
import Preloader from '../Preloader'
import TextAnimation from '../TextAnimation'
import terminalimage from '../../assets/images/terminal.png'

const Terminal = () => {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {showPreloader && <Preloader />}
      {!showPreloader && (
        <div className="container terminal-page">
          <div className="text-zones" style={{ textAlign: 'justify' }}>
            <h1>
              <p style={{ display: 'flex' }} className="extraCSS">
                <TextAnimation text="Terminal Portfolio" />
              </p>
            </h1>
            <img
              src={terminalimage}
              alt="Smiley face"
              className="terminalimage"
            />
            <p>
              Welcome to my React-powered terminal portfolio! Step into a
              digital realm where the sleek efficiency of modern web development
              meets the nostalgic charm of command-line interfaces. With a click
              or a command, explore a curated collection of my latest projects,
              each a testament to my passion for innovation and creativity.
              Navigate through project listings reminiscent of directory
              structures, where concise descriptions and relevant links await
              your discovery. Engage with the interface by typing commands or
              clicking elements to unveil more details about a project or dive
              deeper into its intricacies.
            </p>
            <p>
              Styled to evoke the classic allure of terminal environments, my
              portfolio offers a unique blend of functionality and aesthetics.
              Monospaced fonts, minimalist color schemes, and occasional ASCII
              art add to the immersive experience. Whether you're a fellow
              developer, an enthusiast, or simply curious, I invite you to
              explore my terminal portfolio and embark on a journey through the
              intersections of technology and creativity. Get ready to be
              inspired, intrigued, and perhaps even entertained, as you traverse
              this digital landscape of innovation and exploration.
            </p>
            <a
              href="https://aishwaryamensinkai.github.io/Terminal-Portfolio/"
              className="flat-button"
              target="_blank"
            >
              TERMINAL PORTFOLIO
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Terminal
