import React, {useState} from 'react'
import DarkModeToggle from './DarkModeToggle'

function Nav() {
    //const[open, toggleOpen] = useState(false);
    return (
        <div className='w-full dark:text-stone-100 pt-10'>
            {/*<div className='md:hidden pl-10 text-7xl font-bold mt-10 md:pointer-events-none' onClick={() => toggleOpen(!open)}>=</div>*/}
            <div className={`
            flex flex-row space-y-4 pl-10 md:pr-10 pb-10 space-x-10 text-lg font-bold items-center
            transition-all duration-700
            `}
            >
                <div className='flex-grow'>  
                </div>
                <a href='#showcase'>
                    <div className='hover:text-orange-400 cursor-pointer transition-all duration-500'>
                        Projects
                    </div>
                </a>
                <DarkModeToggle></DarkModeToggle>
            
            </div>
        </div> 
  )
}

export default Nav