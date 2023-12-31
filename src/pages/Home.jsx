import React, { useContext, useEffect } from 'react'
import '../css/home.css'
import SideMenu from '../components/SideMenu'
import Project from '../components/Project'
import Skills from '../components/Skills'
import { Context } from '../context/Context'
import HamburgerLinks from '../components/HamburgerLinks'
import Contact from '../components/Contact'
import AboutMe from '../components/AboutMe'

function Home() {
  const { hamburgerClicked, dimensions, isLight } = useContext(Context)

  useEffect(() => {
    if (dimensions[0]) {
      window.scrollTo({
        top: dimensions[0],
        left: dimensions[1],
        behavior: 'instant',
      })
    }
  })

  return (
    <div className='page__container'>
      <HamburgerLinks />
      <div
        style={{
          display: hamburgerClicked ? 'none' : 'flex',
          background: !isLight && '#1b314c',
          color: !isLight && 'lightblue',
          zIndex: 1000,
        }}
      >
        <SideMenu />
        <div id='home' className='home__container'>
          <AboutMe />
          <div id='projects' className='projects__area mt-[100px]'>
            <h2
              style={{ color: !isLight && 'white' }}
              className='section__title'
            >
              Projects
            </h2>
            <Project />
          </div>
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home
