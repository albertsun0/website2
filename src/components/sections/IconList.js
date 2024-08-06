import React from "react";
import { ReactComponent as Pdf } from "../../icons/file-text.svg";
import { ReactComponent as Github } from "../../icons/github.svg";
import { ReactComponent as Linkedin } from "../../icons/linkedin.svg";
function IconList() {
  return (
    <div className="flex flex-row space-x-4 fill-orange-200">
      <a href="https://github.com/albertsun0" target={"_blank"}>
        {" "}
        <Github className="hover:stroke-orange-400 cursor-pointer transition-all duration-1000 opacity-80"></Github>
      </a>
      <a href="https://www.linkedin.com/in/albertsun0" target={"_blank"}>
        <Linkedin className="hover:stroke-orange-400 cursor-pointer transition-all duration-1000 opacity-80"></Linkedin>
      </a>
      <a
        href="https://drive.google.com/file/d/1eH6FXebBsHN2iWyje1mqe71hZifxwATW/view?usp=sharing"
        target={"_blank"}
      >
        <Pdf className="hover:stroke-orange-400 cursor-pointer transition-all duration-1000 opacity-80"></Pdf>
      </a>
    </div>
  );
}

export default IconList;
