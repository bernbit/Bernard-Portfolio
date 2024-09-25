import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Loader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-secondary dark:bg-dark-secondary">
      <div className="loading dark:text-dark-accent flex items-center text-3xl text-accent">
        <MdArrowBackIos className="icon" />
        <MdArrowForwardIos className="icon" />
      </div>
      {/* <p className="loader-text font-clash-display text-3xl font-semibold tracking-wider dark:text-light-text">
        Bernardo
      </p> */}

      <p className="font-clash-display text-3xl font-semibold tracking-[0.08em] dark:text-light-text">
        {Array.from("Bernardo").map((letter, index) => (
          <span
            key={index}
            className="animate__animated animate__fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Loader;
