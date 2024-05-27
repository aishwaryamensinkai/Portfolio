import { useEffect, useState } from 'react'
import TextAnimation from '../TextAnimation'
import TextSphere from './TextSphere'
import './index.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Preloader from '../Preloader'

const Skills = () => {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info('Scroll to Zoom In/Out', {
        autoClose: 3000,
      })
    }, 4000)
    const timer1 = setTimeout(() => {
      setShowPreloader(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer1)
    }
  }, [])
  return (
    <>
      {showPreloader && <Preloader />}
      {!showPreloader && (
        <div className="container skills">
          <div className="text-zone">
            <h1>
              <p style={{ display: 'flex' }} className="extraCSS">
                <TextAnimation text="Skills" />
              </p>
            </h1>
            <p>
              Expert in front-end development including technologies like{' '}
              <span className="tech-tag">
                HTML5, CSS3, JavaScript, jQuery, Angular2, React, TypeScript,
                Bootstrap, Sass, Git
              </span>
              , etc.
            </p>
            <p>
              As a skilled designer with a strong sense of aesthetics and
              extensive experience in responsive, mobile-first web design, I am
              dedicated to optimizing code and delivering the best possible user
              experience. I am committed to providing ongoing support even after
              the project's completion, ensuring that your needs are met every
              step of the way. My commitment to excellence guarantees that your
              project will be handled with the utmost care and professionalism.
            </p>
            <p>
              Visit my &nbsp;
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aishwarya-mensinkai/"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              &nbsp;profile for more details. Also you can checkout my cv on
              this &nbsp;
              <a target="_blank" href="www.google.com">
                link
              </a>
            </p>
          </div>
          <div className="skills-charts">
            <div id="myCanvasContainer">
              <TextSphere id="myCanvas" />
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        toastStyle={{
          fontSize: '12px',
          padding: '5px',
          minHeight: 'unset',
          borderRadius: '10px',
        }}
      />
    </>
  )
}

export default Skills
