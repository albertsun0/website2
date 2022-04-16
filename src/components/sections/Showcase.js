import React from 'react';
import WideCard from '../WideCard';

function Showcase() {
  return <div className='w-full bg-indigo-100 flex flex-col  items-center p-10 md:px-48 space-y-4'>
      <div className='text-4xl p-4 font-bold'>
        Showcase
      </div>
      <WideCard></WideCard>
      <WideCard></WideCard>
  </div>;
}

export default Showcase;
