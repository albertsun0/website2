import React from "react";
import { SiRoblox, SiTesla } from "react-icons/si";
import { ReactComponent as C1Logo } from "../../assets/CapitalOne.svg";
import { GoDash } from "react-icons/go";

const experiences = [
  {
    company: "Tesla",
    role: "Software Engineer Intern",
    icon: SiTesla,
    team: "Automation Engineering",
    dates: "Aug 2024 - Dec 2024",
  },
  {
    company: "Capital One",
    role: "Software Engineer Intern",
    icon: C1Logo,
    team: "Autonomous Insights",
    dates: "Jun 2024 - Aug 2024",
  },
  {
    company: "Roblox",
    role: "Software Engineer Intern",
    icon: SiRoblox,
    team: "Creator Success",
    dates: "May 2023 - Aug 2023",
  },
];

function Experience() {
  return (
    <div
      className="w-full flex flex-col lg:px-60 px-4 space-y-4 dark:text-stone-100 pb-10"
      id="experiences"
    >
      <div className="text-2xl py-4 font-bold">Experience</div>
      <div className="flex flex-col space-y-4 md:space-y-0 dark:bg-zinc-800/90 px-4 border dark:border-gray-800 rounded-sm bg-white bg-opacity-80">
        {experiences.map((experience, i) => {
          return (
            <div className="flex flex-row p-4 space-x-4  items-center">
              <experience.icon className="w-10 h-10" />
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-xl font-semibold">
                    {experience.company}
                  </div>
                  <GoDash />
                  <div>{experience.role}</div>
                </div>
                <div className="opacity-80 text-sm">{experience.dates}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
