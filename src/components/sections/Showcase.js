import React from "react";
import WideCard from "../WideCard";
import slidebg from "../../assets/slidesbg.gif";
import strssCal from "../../assets/stresscal.gif";
import phutball from "../../assets/phut.gif";
import bookshelf from "../../assets/bookshelf.png";
import {
  SiGooglecloud,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFlutter,
  SiDart,
} from "react-icons/si";

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
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "#57c4dc",
      },
      {
        name: "Google Cloud",
        icon: SiGooglecloud,
        color: "#4185f4",
      },
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "#fcdc00",
      },
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
    skills: [
      {
        name: "NextJS",
        icon: SiNextdotjs,
        color: "gray",
      },
      {
        name: "Mongo DB",
        icon: SiMongodb,
        color: "#00ec64",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#37bcf8",
      },
    ],
    tags: ["Next.js", "TailwindCSS", "MongoDB", "REST API"],
  },
  {
    name: "Stress Calendar",
    image: strssCal,
    description:
      "A mood, stress tracking, and productivity application that records and analyzes feelings, and produces a stress based task list to help students coordinate and declutter their lives.",
    links: ["https://github.com/Doshy-Org/flutter-StressCalendar"],
    linkDescriptions: ["Github"],
    skills: [
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "#61b3e9",
      },
      {
        name: "Dart",
        icon: SiDart,
        color: "#2fb6f6",
      },
    ],
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
    skills: [
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "#61b3e9",
      },
      {
        name: "Dart",
        icon: SiDart,
        color: "#2fb6f6",
      },
    ],
  },
];

function Showcase() {
  return (
    <div
      className="w-full flex flex-col p-4 lg:px-60 space-y-4 dark:text-stone-100"
      id="showcase"
    >
      <div className="text-2xl p-4 pl-0 font-bold">Projects</div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {projects.map((project, i) => {
          return <WideCard key={i} project={project}></WideCard>;
        })}
      </div>
    </div>
  );
}

export default Showcase;
