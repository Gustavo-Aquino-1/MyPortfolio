import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { FaHome, FaLaptopCode, FaSun } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { MdContacts } from 'react-icons/md'

function HamburgerLinks() {
  const {
    hamburgerClicked,
    setHamburgerClicked,
    isLight,
    setIsLight,
  } = useContext(Context)
  return (
    <div
        className='justify-center mobile__links__page'
        style={{
          display: hamburgerClicked ? 'flex' : 'none',
          background: !isLight && '#1b314c',
          color: !isLight && 'white',
        }}
      >
        <div>
          <p
            onClick={(e) => setHamburgerClicked(false)}
            className='fixed top-0 right-0 m-5 text-lg font-extralight font-mono hover:cursor-pointer'
          >
            X
          </p>
          <div className='links__container'>
            <a
              href='#home'
              onClick={(e) => setHamburgerClicked(false)}
              className='flex flex-col items-center gap-5 link__container'
            >
              <span href='#home'>
                <FaHome className='link__icon' />
              </span>
              <span href='#home' className='link__name'>
                Home
              </span>
            </a>

            <a
              href='#projects'
              onClick={(e) => setHamburgerClicked(false)}
              className='flex flex-col items-center gap-5 link__container'
            >
              <span href='#projects'>
                <GoProject className='link__icon' />
              </span>
              <span href='#projects' className='link__name'>
                Projects
              </span>
            </a>

            <a
              href='#skills'
              onClick={(e) => setHamburgerClicked(false)}
              className='flex flex-col items-center gap-5 link__container'
            >
              <span href='#skills'>
                <FaLaptopCode className='link__icon' />
              </span>
              <span href='#skills' className='link__name'>
                Skills
              </span>
            </a>

            <a
              href='#contact'
              onClick={(e) => setHamburgerClicked(false)}
              className='flex flex-col items-center gap-5 link__container'
            >
              <span href='#contact'>
                <MdContacts className='link__icon' />
              </span>
              <span href='#contact' className='link__name'>
                Contact
              </span>
            </a>

            <span className='flex flex-col items-center gap-5 link__container'>
              <FaSun
                onClick={(e) => setIsLight(!isLight)}
                className='link__icon hover:cursor-pointer'
              />
              <span className='link__name'>Theme</span>
            </span>
          </div>
        </div>
      </div>
  )
}

export default HamburgerLinks