import React from 'react'
import projects from '../data/project'
import '../css/project.css'
import { FaGithub } from 'react-icons/fa'
import map from '../data/stacksIcons'
import { MdOutlineOpenInNew } from 'react-icons/md'

function Project() {
  return (
    <>
      <div className='projects__page m-auto'>
        <div className='projects__container'>
          {projects.map((e, i) => (
            <div
              key={e.id + i}
              className={`project-${i % 2 == 0 ? 'left' : 'right'}`}
            >
              <div className='project__container'>
                <div className='flex items-center gap-5'>
                  <p className='project__name text-center'>{e.name}</p>
                  <a href={e.repositoryLink} target='_blank' rel='noreferrer'>
                    <FaGithub size={40} />
                  </a>
                </div>

                <div className='img__link__container'>
                  <img
                    src={e.images[0]}
                    className='project__image'
                    alt={e.name}
                  />
                  <div className='project__link'>
                    <a
                      href={e.repositoryLink}
                      target='_blank'
                      className='hover:text-gray-600'
                      rel='noreferrer'
                    >
                      <MdOutlineOpenInNew
                        size={60}
                        className='bg-white rounded-[50%] p-2'
                      />
                    </a>
                  </div>
                </div>

                <div className='stacks__container flex gap-5 flex-wrap'>
                  {e.stacks.split('-').map((e) => (
                    <span key={e} className='stack__icon'>{map[e]}</span>
                  ))}
                </div>
                <p className='project__description'>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project
