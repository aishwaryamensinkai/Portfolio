import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import Education from './components/Education'
import Projects from './components/Projects'
import Terminal from './components/Terminal'
import ReactGA from 'react-ga4'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  const trackingId = process.env.REACT_APP_GA_TRACKING_ID

  useEffect(() => {
    if (trackingId) {
      ReactGA.initialize(trackingId)
      ReactGA.send('pageview')
    }

    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [trackingId])

  return (
    <>
      {showPreloader && <Preloader />}
      {!showPreloader && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/terminal" element={<Terminal />} />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App
