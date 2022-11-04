import React from 'react';

function WideCard({project}) {

  const colors = ['#536dfe', '#bbdefb', '#81c784', '#ff8f00', '#fdc886'];

  return <div className='w-full md:w-1/4 border-2 shadow-sm rounded-md flex flex-col overflow-hidden
      bg-white dark:bg-zinc-900 dark:border-gray-800 min-h-1/2'>
      <img src = {project.image} className='w-full h-60 object-cover object-top'></img>
      <div className='py-4 px-6 grow flex flex-col space-y-6'>
        <div className='text-3xl font-bold'>
            {project.name}
        </div>
        <div className='text-lg text-gray-800 dark:text-gray-50'>
            {project.description}
        </div>
        <div className='flex flex-col underline'>
          {project.links.map((link, i) => {
            return <a href={link} key = {i} target = {'_blank'}>{project.linkDescriptions[i]}</a>
          })}
        </div>
       
        <div className='flex flex-row text-black flex-wrap'>
          {
            project.tags.map((tag, i) => {
              return <div className={`px-2 border-2 rounded-md text-md overflow-hidden mb-2 mr-2 dark:text-white`} style = {{borderColor: colors[(tag.charCodeAt(0) - 65) % colors.length]}}>{tag}</div>
            })
          }
        </div>
        
      </div>
  </div>;
}

export default WideCard;
