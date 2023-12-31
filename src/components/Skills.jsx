import React, { useContext } from 'react'
import mapPart from '../data/stacksPart'
import { mapBlack } from '../data/stacksIcons'
import '../css/home.css'
import { Context } from '../context/Context'

function Skills() {
  const { isLight } = useContext(Context)
  return (
    <div id='skills' className='skills__area'>
          <h2 style={{ color: !isLight && 'white' }} className='section__title'>Skills</h2>
          <div className='skills__list'>
            {Object.keys(mapPart).map((key, i) => (
              <div key={key} className='skills__box '>
                <p className='skills__specify__title text-2xl'>{key}</p>
                <div className={`${key}__stacks skills__container`} key={key}>
                  {mapPart[key].map((e,i) => (
                    <span className='skill__icon' key={e + i}>
                      {mapBlack[e]}
                    </span>
                  ))}

                  <div className='layer__container flex justify-center items-center'>
                    <h1 className='capitalize text-3xl text-white font-extralight'>{key}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Skills