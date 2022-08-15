import React, {useState} from 'react'
import DarkModeToggle from './DarkModeToggle'

function Nav() {
    const[open, toggleOpen] = useState(false);
    return (
        <div className='w-full dark:text-stone-100 md:pt-10'>
            <div className='md:hidden pl-10 text-7xl font-bold mt-10 md:pointer-events-none' onClick={() => toggleOpen(!open)}>=</div>
            <div className={`
            md:flex md:flex-row flex-col space-y-4 pl-10 md:p-10 md:space-x-10 text-2xl md:text-lg font-bold md:items-center
            md:h-full md:opacity-100 
            ${open? 'h-full opacity-100' : 'h-0 opacity-0 sm:-translate-y-10'} transition-all duration-700
            `}
            >
                <div className='md:flex-grow'>  
                </div>
                <a href='#showcase'>
                    <div className='hover:text-orange-400 cursor-pointer transition-all duration-500'>
                        Projects
                    </div>
                </a>
                
                <div className='hover:text-orange-400 cursor-pointer transition-all duration-500'>
                Contact
                </div>
                <DarkModeToggle></DarkModeToggle>
            
            </div>
        </div> 
  )
}

export default Nav