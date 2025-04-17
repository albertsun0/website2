import React from "react";
import IconList from "./IconList";
import { useSpring, animated, config } from "react-spring";
import { ReactComponent as DownArrow } from "../../icons/down.svg";

function Top() {
  const anim2 = useSpring({
    config: { config: config.slow },
    from: { opacity: 0, marginTop: 20 },
    to: {
      opacity: 1,
      marginTop: 0,
    },
    delay: 100,
  });
  return (
    <animated.div
      className=" dark:text-stone-100 transition-all duration-700 lg:px-60 px-10"
      style={anim2}
    >
      <div className="w-full flex flex-col space-y-6">
        <div className="flex flex-col items-baseline">
          <div className="mb-4 dark:text-orange-400 font-semibold text-orange-400">
            Hi, my name is
          </div>
          <div className="text-6xl font-bold text-gray-800 dark:text-white">
            Albert Sun.
          </div>
        </div>

        <div className="text-xl md:w-1/2">
          I'm a computer science student at{" "}
          <span className="font-bold">UT Austin</span> who is interested in{" "}
          <span className="font-bold">data engineering</span>, human centered
          computing, and <span className="font-bold">physical simulation</span>.
        </div>
        <div className="flex flex-row items-center space-x-4 sm:w-full">
          <IconList></IconList>
          {/* <div
            className="relative inline-block text-xl font-bold border-orange-400 border-2 p-2 text-center px-4
                        before:block before:absolute before:bg-gradient-to-br before:from-orange-100 
                        before:to-orange-300 before:w-full before:h-full before:top-0 before:-left-40 
                        hover:before:left-0 before:transition-all before:ease-in-out before:duration-700 before:-z-10 
                        cursor-pointer rounded overflow-hidden dark:hover:text-black transition-colors"
          >
            <a href="mailto:albertsun0@utexas.edu">Contact Me</a>
          </div> */}
        </div>
        <div>
          <a href="#experience" className="w-24">
            <DownArrow className="arrowAnimate"></DownArrow>
          </a>
        </div>
      </div>
    </animated.div>
  );
}

export default Top;
