import React from 'react'
import mapPart from '../data/stacksPart'
import { mapBlack } from '../data/stacksIcons'
import '../css/home.css'

function Skills() {
  return (
    <div id='skills' className='skills__area'>
          <h2 className='section__title'>Skills</h2>
          <div className='flex gap-10 justify-evenly mt-20 flex-wrap'>
            {Object.keys(mapPart).map((key, i) => (
              <div key={key} className='skills__box '>
                <p className='skills__specify__title text-2xl'>{key}</p>
                <div className={`${key}__stacks skills__container`} key={key}>
                  {mapPart[key].map((e,i) => (
                    <span className='max-h-[50px]' key={e + i}>
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