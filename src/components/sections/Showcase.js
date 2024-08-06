import React from "react";
import WideCard from "../WideCard";
import slidebg from "../../assets/slidesbg.gif";
import strssCal from "../../assets/stresscal.gif";
import phutball from "../../assets/phut.gif";
import bookshelf from "../../assets/bookshelf.png";

const projects = [
  {
    name: "Slides Background",
    image: slidebg,
    description:
      "Generate beautiful material backgrounds for Google Slides presentations. Over 1 million users!",
    links: [
      "https://workspace.google.com/marketplace/app/slides_background/732310380877",
      "https://slides.doshy.org/",
      "https://github.com/Doshy-Org/Slides-Background",
    ],
    linkDescriptions: [
      "Available on the G Suite Marketplace",
      "Website",
      "Github",
    ],
    tags: ["Google Apps Script", "Google Cloud", "Javascript", "HTML"],
  },
  {
    name: "Bookshelf",
    image: bookshelf,
    description:
      "Create, share, and edit booklists with friends! View friends reading progress in real time.",
    links: [
      "https://bookshelf-kappa-two.vercel.app/",
      "https://github.com/nabil989/Bookshelf",
    ],
    linkDescriptions: ["Website", "Github"],
    tags: ["Next.js", "TailwindCSS", "MongoDB", "REST API"],
  },
  {
    name: "Stress Calendar",
    image: strssCal,
    description:
      "A mood, stress tracking, and productivity application that records and analyzes feelings, and produces a stress based task list to help students coordinate and declutter their lives.",
    links: ["https://github.com/Doshy-Org/flutter-StressCalendar"],
    linkDescriptions: ["Github"],
    tags: ["Flutter", "Dart", "APIs"],
  },
  {
    name: "Phutball",
    image: phutball,
    description:
      "A modern take and mobile app implementation of the Philosopher's Football mathmatical and strategy board game.",
    links: ["https://github.com/Doshy-Org/Phutball"],
    linkDescriptions: ["Github"],
    tags: ["Flutter", "Dart"],
  },
];

function Showcase() {
  return (
    <div
      className="w-full flex flex-col p-10 lg:px-48 space-y-4 dark:text-stone-100"
      id="showcase"
    >
      <div className="text-4xl p-4 pl-0 font-bold">Projects</div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {projects.map((project, i) => {
          return <WideCard key={i} project={project}></WideCard>;
        })}
      </div>
    </div>
  );
}

export default Showcase;
