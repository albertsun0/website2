import React from "react";
import { ReactComponent as C1Logo } from "../../assets/CapitalOne.svg";
import {
  SiRoblox,
  SiTesla,
  SiMongodb,
  SiApachespark,
  SiSnowflake,
  SiNextdotjs,
  SiTypescript,
  SiFastapi,
  SiPython,
  SiAwslambda,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BsDot } from "react-icons/bs";

import Chip from "../Chips";
const experiences = [
  {
    company: "Tesla",
    role: "SWE Intern",
    icon: SiTesla,
    team: "Automation Engineering",
    dates: "Current",
    location: "SF",
    skills: [
      {
        name: "Mongo DB",
        icon: SiMongodb,
        color: "#00ec64",
      },
      {
        name: "GraphQL",
        icon: GrGraphQl,
        color: "#f6009b",
      },
      {
        name: "Fast Api",
        icon: SiFastapi,
        color: "#12988a",
      },
    ],
  },
  {
    company: "Capital One",
    role: "SWE Intern",
    icon: C1Logo,
    team: "Autonomous Insights",
    dates: "Jun 2024 - Aug 2024",
    location: "Dallas",
    skills: [
      { name: "Python", icon: SiPython, color: "#ffdc69" },
      {
        name: "Spark",
        icon: SiApachespark,
        color: "#e25a1b",
      },
      {
        name: "Snowflake",
        icon: SiSnowflake,
        color: "#259edc",
      },
      {
        name: "AWS",
        icon: SiAwslambda,
        color: "#ff9900",
      },
    ],
  },
  {
    company: "Roblox",
    role: "SWE Intern",
    icon: SiRoblox,
    team: "Creator Success",
    dates: "May 2023 - Aug 2023",
    location: "SF",
    skills: [
      {
        name: "NextJS",
        icon: SiNextdotjs,
        color: "gray",
      },
      {
        name: "Typescript",
        icon: SiTypescript,
        color: "#3077c6",
      },
    ],
  },
];

function Experience() {
  return (
    <div
      className="w-full flex flex-col lg:px-60 px-4 space-y-4 dark:text-stone-100 pb-10"
      id="experience"
    >
      <div className="text-2xl py-4 font-bold">Experience</div>
      <div className="flex flex-col space-y-4 md:space-y-0 dark:bg-zinc-800/90 px-4 border dark:border-gray-800 rounded-sm bg-white bg-opacity-80">
        {experiences.map((experience, i) => {
          return (
            <div className="flex flex-row p-4 space-x-4 items-center">
              <experience.icon className="w-8 h-8" />
              <div className="flex flex-col grow space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <div className=" flex flex-row space-x-2 grow items-center rounded-md">
                    <div className="text-md font-semibold">
                      {experience.company}
                    </div>
                  </div>
                  <div className="opacity-80 text-sm">{experience.dates}</div>
                </div>
                <div className="text-sm flex flex-row items-center">
                  <div>{experience.role}</div>
                  <BsDot />
                  <div>{experience.team}</div>
                </div>
                <Chip skills={experience.skills}></Chip>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
