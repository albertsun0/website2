import React from "react";

function Footer() {
  return (
    <div className="p-4 lg:px-60 dark:text-stone-400  text-sm flex flex-row items-center space-x-2">
      <div className="grow"></div>
      <div>
        Proud member of{" "}
        <a href="https://leetpals.com/" className="underline">
          Leetpals
        </a>
      </div>

      <a href="https://leetpals.com/next?host=asun.dev">
        <img
          alt="badge"
          src="https://leetpals.com/badge?host=asun.dev"
          width="24px"
          height="24px"
        />
      </a>
    </div>
  );
}

export default Footer;
