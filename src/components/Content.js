import React from 'react';
import Nav from './sections/Nav';
import Top from './sections/Top';
import Showcase from './sections/Showcase';
import Canvas from './sections/Canvas';
import Contact from './sections/Contact'
function Content() {
  return <div className = 'w-full flex flex-col selection:bg-orange-400'>
      <div className='h-screen flex flex-col items-center font-san w-full transition-all duration-700'>
        <Canvas></Canvas>
        <Nav></Nav>
        <div className='flex flex-col items-center justify-center pt-[10vh]'>
          <Top>
          </Top>
        </div>
      </div>
      <Showcase></Showcase>
      {/*<Contact></Contact>*/}
  </div>
}

export default Content;
