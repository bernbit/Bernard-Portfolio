import React from "react";
import useGeneral from "../context/GeneralContext";
import Skills from "../components/Skills";
import Technology from "../components/Technology";

function About() {
  const { aboutRef } = useGeneral();

  return (
    <section className="px-5 py-10 lg:px-40" id="about" ref={aboutRef}>
      <div className="text-center">
        <p className="font-clash-display text-2xl font-bold uppercase tracking-wider md:text-3xl">
          About Me
        </p>
        <p className="text-sm font-light md:text-base">
          Here you will find more information about me, what I do, and my
          current skills, mainly in programming, technology, and design.
        </p>
      </div>

      <Skills />
      <Technology />
    </section>
  );
}

export default About;
