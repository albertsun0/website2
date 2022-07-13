import { toArray } from '@react-spring/shared';
import React from 'react';

function WideCard({project}) {

  const colors = ['#536dfe', '#bbdefb', '#81c784', '#ff8f00', '#fdc886'];

  return <div className='w-full h-2/5 border-2 shadow-sm rounded-md flex flex-col overflow-hidden md:flex-row 
      bg-white dark:bg-zinc-900 dark:border-gray-700'>
      <img src = {project.image} className='md:w-1/6 w-full md:h-1/2 h-1/4'></img>
      <div className='py-4 px-6 grow flex flex-col space-y-6'>
        <div className='text-3xl font-bold'>
            {project.name}
        </div>
        <div className='text-xl text-gray-800 dark:text-gray-50'>
            {project.description}
        </div>
        <div className='flex flex-col underline'>
          {project.links.map((link, i) => {
            return <a href={link} key = {i} target = {'_blank'}>{project.linkDescriptions[i]}</a>
          })}
        </div>
       
        <div className='flex flex-row space-x-2 text-black'>
          {
            project.tags.map((tag, i) => {
              return <div className={`p-2 rounded-full`} style = {{backgroundColor: colors[(tag.charCodeAt(0) - 65) % colors.length]}}>{tag}</div>
            })
          }
        </div>
        
      </div>
  </div>;
}

export default WideCard;
