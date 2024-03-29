/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import TextAnimation from '../TextAnimation'
import TextSphere from './TextSphere'
import './index.scss'

const Skills = () => {
  return (
    <>
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
            , etc.
          </p>
          <p>
            I'm not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
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
            &nbsp;profile for more details. Also you can checkout my cv on this
            &nbsp;
            <a target="_blank" href="">
              link
            </a>
            .
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
    </>
  )
}

export default Skills
