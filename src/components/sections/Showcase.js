import React from 'react';
import WideCard from '../WideCard';
import slidebg from '../../assets/slidesbg.gif';
import strssCal from '../../assets/stresscal.gif';
import phutball from '../../assets/phut.gif';

const projects = [
  {
    name: "Slides Background",
    image: slidebg,
    description: "Generate beautiful material backgrounds for Google Slides presentations. Over 20 nature inspired themes and 3 types of backgrounds to choose from. over 1 million users and a 4.6 star rating!",
    links : ['https://workspace.google.com/marketplace/app/slides_background/732310380877', 'https://slides.doshy.org/', 'https://github.com/Doshy-Org/Slides-Background'],
    linkDescriptions : ['Available on the G Suite Marketplace', 'Website', 'Github'],
    tags : ["Google Apps Script", "Google Cloud", "Javascript", "HTML"]
  },
  {
    name: "Stress Calendar",
    image: strssCal,
    description: "A mood, stress tracking, and productivity application that records and analyzes feelings, and produces a stress based task list to help students coordinate and declutter their lives. It features a calendar page with important reminders and notifications, a to-do list with tasks sorted by stress and importance, and a diary page where users can record feelings and stress, as well as reflect on previous days.",
    links : ['https://github.com/Doshy-Org/flutter-StressCalendar'],
    linkDescriptions : ['Github'],
    tags : ["Flutter", "Dart", "APIs"]
  },
  {
    name: "Phutball",
    image: phutball,
    description: "A modern take and mobile app implementation of the Philosopher's Football mathmatical and strategy board game. Philospher's Football is similar to GO but the goal is to jump the ball into the opposing side goal. This game has simple concepts, but has NP-Complete complexity. The App Features a two player local gamemode, multple rounds, and a scoreboard.",
    links : ['https://github.com/Doshy-Org/Phutball'],
    linkDescriptions : [ 'Github'],
    tags : ["Flutter", 'Dart']
  }
]

function Showcase() {
  return <div className='w-full flex flex-col p-10 md:px-48 space-y-10 dark:text-stone-100' id = "showcase">
      <div className='text-6xl p-4 font-bold'>
        Projects
      </div>
      {projects.map((project, i) => {
        return <WideCard key={i} project = {project}></WideCard>
      }) 
      }
  </div>;
}

export default Showcase;
