import React from "react";
import Chip from "./Chips";
function WideCard({ project }) {
  const colors = ["#536dfe", "#bbdefb", "#81c784", "#ff8f00", "#fdc886"];

  return (
    <div
      className="w-full md:w-1/4 border-2 shadow-sm rounded-sm flex flex-col overflow-hidden
      bg-white dark:bg-zinc-900 dark:border-gray-800 min-h-1/2"
    >
      <img
        src={project.image}
        className="w-full h-60 object-cover object-top"
      ></img>
      <div className="py-4 px-6 grow flex flex-col space-y-6">
        <div className="text-xl font-bold">{project.name}</div>
        <div className="text-md text-gray-800 dark:text-gray-50">
          {project.description}
        </div>
        <div className="flex flex-col underline text-sm">
          {project.links.map((link, i) => {
            return (
              <a href={link} key={i} target={"_blank"}>
                {project.linkDescriptions[i]}
              </a>
            );
          })}
        </div>
        <Chip skills={project.skills} />
      </div>
    </div>
  );
}

export default WideCard;
