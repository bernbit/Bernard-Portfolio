import React, { useRef, useEffect } from "react";
import useGeneral from "../context/useGeneral";
import { Typewriter } from "react-simple-typewriter";

function Sidebar() {
  const { navOptions, activeNav, showNav, setShowNav, handleActiveNav } =
    useGeneral();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        event.target.closest(".hamburger") === null
      ) {
        setShowNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <nav
      className={`smoother fixed z-30 grid h-full w-[55%] grid-rows-12 bg-box ${!showNav ? "-left-full" : "-left-0"} md:hidden`}
      ref={navbarRef}
    >
      <div className="row-span-1"></div>
      <div className="row-span-10 flex justify-center pt-12">
        <div className="flex w-full flex-col gap-4 text-left">
          <p className="px-3 text-sm text-accent">Menu</p>
          {navOptions.map((option, index) => (
            <a
              href={`#${option.label.toLowerCase()}`}
              className={`flex items-center gap-3 px-3 py-3 hover:cursor-pointer hover:bg-accent hover:text-light-text focus:bg-accent ${activeNav === index ? "bg-accent text-light-text" : "text-dark-text transition-all duration-75"}`}
              key={index}
              onClick={() => handleActiveNav(index)}
            >
              {option.icon}
              <p>{option.label}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="row-span-1 text-center font-clash-display">
        <p className="font-semibold">
          <span className="tracking-wide text-accent underline">Bernardo</span>{" "}
          Salva Jr
        </p>
        <p>
          A{" "}
          <span className="text-sm">
            <Typewriter
              words={[
                "Front-end Developer",
                "Web/Graphic Designer",
                "Internet of Things Developer",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
            />
          </span>
        </p>
      </div>
    </nav>
  );
}

export default Sidebar;
