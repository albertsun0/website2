import React from 'react';
import IconList from './IconList';
import { useSpring, animated, config} from 'react-spring'
import {ReactComponent as DownArrow} from '../../icons/down.svg'

function Top() {
    const anim2 = useSpring({
      config:{config:config.slow},
      from: {opacity:0, marginTop:20}, 
      to: { 
          opacity:1,
          marginTop:0,
      }, 
      delay: 100,
    })
    return (
      <animated.div className='pl-10 md:mr-1/3 md:w-2/3 dark:text-stone-100 transition-all duration-700' style = {anim2}>
        <div className = 'w-full flex flex-col space-y-10'>
          <div className='flex flex-row items-baseline'>
            <div className='text-7xl font-bold'>
              Hi I'm Albert
            </div>
            <div className='w-3 h-3 ml-2 rounded-full'>

            </div>
          </div>
         
          <div className='text-2xl md:w-1/2'>
          I'm a CS student at the University of Texas at Austin who loves front end development, and is interested in software engineering, human centered computing, and game development.
          </div>
          <div className='flex flex-row items-center space-x-4 sm:w-full'>
            <IconList></IconList>
            <div className='relative inline-block text-xl font-bold border-orange-400 border-2 p-2 text-center px-4
                        before:block before:absolute before:bg-orange-400 before:w-0 before:h-full before:top-0 before:left-0 
                        hover:before:w-full before:transition-all before:duration-1000 before:-z-10 cursor-pointer rounded'>
              Contact Me
            </div>
          </div>
          <a href='#showcase'>
            <DownArrow class = "arrowAnimate"></DownArrow>
          </a>
          
        </div>
      </animated.div>
    )
}

export default Top;
