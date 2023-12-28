import React, { useContext, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { MdContacts } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import '../css/home.css'
import { FaLaptopCode } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Context } from '../context/Context'

function SideMenu() {
  const { push } = useHistory()
  const { setHamburgerClicked, setDimensions } = useContext(Context)

  const handleClick = (e) => {
    setDimensions([window.scrollY, window.scrollX])
    setHamburgerClicked(true)
  }


  return (
    // md 768, for up will apears if go down tha this disapear
    <>
      <div className='md:block hidden'>
        <div className='side_menu h-[100%]'>
          <div className='links_menu'>
            <div className='link__container'>
              <a href='#home'>
                <FaHome className='link__icon' />
              </a>
              <a href='#home' className='link__name'>
                Home
              </a>
            </div>

            <div className='flex flex-col items-center gap-5 link__container'>
              <a href='#projects'>
                <GoProject className='link__icon' />
              </a>
              <a href='#projects' className='link__name'>
                Projects
              </a>
            </div>

            <div className='flex flex-col items-center gap-5 link__container'>
              <a href='#skills'>
                <FaLaptopCode className='link__icon' />
              </a>
              <a href='#skills' className='link__name'>
                Skills
              </a>
            </div>

            <div className='flex flex-col items-center gap-5 link__container'>
              <a href='#contact'>
                <MdContacts className='link__icon' />
              </a>
              <a href='#contact' className='link__name'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='max-md:flex max-sm:justify-between hidden py-4 w-full z-10 fixed navbar__mobile'>
        <span>
          <RxHamburgerMenu onClick={(e) => handleClick(e)} size={30} className='ml-4' />
        </span>

        <span id='author__name' className='text-center flex justify-center items-center text-lg mr-4'>
          Gustavo Aquino
        </span>

        <div></div>
      </div>

      {/* {!hidden && (div->links)} */}
    </>
  )
}

export default SideMenu
