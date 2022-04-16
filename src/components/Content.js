import React from 'react';
import Top from './sections/Top';
import Showcase from './sections/Showcase';

function Content() {
  return <div className = 'w-full flex flex-col font-mono'>
      <Top>
      </Top>
      <Showcase></Showcase>
  </div>;
}

export default Content;
