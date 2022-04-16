import React from 'react';
import slidebg from '../assets/slidesbg.gif';
function WideCard() {
  return <div className='w-full h-2/5 border-2 shadow-sm rounded-xl flex flex-col overflow-hidden md:flex-row bg-white'>
      <img src = {slidebg} className='md:w-1/5 w-full h-1/4'></img>
      <div className='py-4 px-6 grow flex flex-col space-y-3'>
        <div className='text-3xl font-normal'>
            Slides Background
        </div>
        <div>
            Generate beautiful material backgrounds for Google Slides presentations. 
            Over 20 nature inspired themes and 3 types of backgrounds to choose from. 
            1 million users and a 4.5 star rating!
        </div>
      </div>
  </div>;
}

export default WideCard;
