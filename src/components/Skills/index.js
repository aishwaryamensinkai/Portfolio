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
              <div style={{ display: 'flex' }} className="extraCSS">
                <TextAnimation text="Skills" />
              </div>
            </h1>
            <div className="response">
              <p>
                I bring expertise in various aspects of software development,
                including a strong foundation in technologies such as{' '}
                <span className="tech-tag">
                  HTML5, CSS3, JavaScript, jQuery, Angular, React, TypeScript,
                  Bootstrap, Sass, Git
                </span>
                , and more. My skills span both front-end and back-end
                development, allowing me to build robust and scalable solutions.
              </p>
              <p>
                With a keen eye for design and a deep understanding of
                responsive, mobile-first web practices, I am dedicated to
                optimizing code and delivering outstanding user experiences. I
                pride myself on providing comprehensive support throughout and
                after project completion, ensuring that your requirements are
                met with the highest level of professionalism. My commitment to
                excellence ensures that every project is handled with care,
                resulting in impactful and effective solutions.
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
                &nbsp;profile for more details. Also you can checkout my cv
                <br />
                <a
                  style={{ fontSize: '16px' }}
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1S8OFTZpjQOSMUM4BV1RJRgvgxOaSi12X?usp=sharing"
                  rel="noreferrer"
                >
                  click here
                </a>
                .
              </p>
            </div>
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
