import React from "react";

function Chip({ skills }) {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {skills.map((skill, i) => {
        return (
          <div
            key={skill}
            className="flex flex-row items-center gap-1 border rounded-md px-1.5 border-gray-600"
          >
            <skill.icon className={`w-3 h-3`} style={{ fill: skill.color }} />
            <div className="text-xs">{skill.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Chip;
