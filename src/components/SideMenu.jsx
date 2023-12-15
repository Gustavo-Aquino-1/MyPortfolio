import React from 'react'
import { FaHome } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { MdContacts } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import '../css/home.css'
import { FaLaptopCode } from 'react-icons/fa'

function SideMenu() {
  const { push } = useHistory()

  return (
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
  )
}

export default SideMenu
