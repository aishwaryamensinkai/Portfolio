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
                <TextAnimation text="&#038;" />
              </p>
              <TextAnimation text="Experience" />
            </h1>
            <p>
              Expert in front-end development including technologies like{' '}
              <span className="tech-tag">
                HTML5, CSS3, JavaScript, jQuery, Angular2, React, TypeScript,
                Bootstrap, Sass, Git
              </span>
              {/* Noncompliant: ambiguous spacing */}, etc.
            </p>
            <p>
              I'm not a designer but I have a good sense of aesthetics, and
              experience in responsive, mobile-first web design. I put special
              effort into optimizing my code and providing the best user
              experience. I would love to give you any kind of support also
              after the project's completion. I guarantee a commitment during
              work on your project.
            </p>
            <p>
              Visit my &nbsp;
              {/* Noncompliant: ambiguous spacing */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aishwarya-mensinkai/"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {/* Noncompliant: ambiguous spacing */}
              &nbsp;profile for more details. Also you can checkout my cv on
              this &nbsp;
              <a target="_blank" href="www.google.com">
                link
              </a>
              {/* Noncompliant: ambiguous spacing */}.
            </p>
          </div>
          <div className="clear"></div>
          <div className="skills-charts">
            <div id="myCanvasContainer">
              <TextSphere id="myCanvas" />
            </div>
            <div className="clear"></div>
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
