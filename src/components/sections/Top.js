import React from 'react';
import WideCard from '../WideCard';
import Canvas from './Canvas';
function Top() {
    return <div className='h-screen flex flex-col items-center  font-sans text-white '>
      <Canvas></Canvas>
      <div className='w-full flex flex-row  p-10 space-x-16 text-xl font-bold'>
        <div className='flex-grow'>
          
        </div>
        <div>
        Home
        </div>
        <div>
        Showcase
        </div>
        <div>
        In The Works
        </div>
        <div>
          Contact
        </div>
        
      </div>
      <div className='h-1/5'>

      </div>
      <div className='mr-1/3 w-2/3'>
        <div className = 'w-full flex flex-col space-y-10'>
          <div className='flex flex-row items-baseline'>
            <div className='text-7xl font-bold'>
              Hi I'm Albert
            </div>
            <div className='w-3 h-3 ml-2 bg-cyan-500 rounded-full'>

            </div>
          </div>
         
          <div className='text-2xl w-2/3 font-bold'>
          I'm a computer science student at the University of Texas at Austin who loves front end development, and is interested in software engineering, human centered computing, and game development.
          </div>
          <div className='relative inline-block text-2xl font-bold border-cyan-500 border-4 p-2 text-center w-1/6
                      before:block before:absolute before:bg-cyan-500 before:w-0 before:h-full before:top-0 before:left-0 
                      hover:before:w-full before:transition-all before:duration-1000 before:-z-10 cursor-pointer'>
            Contact Me
          </div>
        </div>
      </div>
      
      
      
      
    </div>;
}

export default Top;
