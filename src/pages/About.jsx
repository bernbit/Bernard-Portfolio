import React from "react";
import useGeneral from "../context/useGeneral";

function About() {
  const { aboutRef } = useGeneral();
  return (
    <section
      className="border-test px-5 text-center lg:px-36"
      id="about"
      ref={aboutRef}
    >
      <p className="font-clash-display text-3xl font-bold tracking-wider">
        ABOUT ME
      </p>
      <p className="font-light">
        Here you will find more information about me, what I do, and my current
        skills, mainly in programming, technology, and design.
      </p>
    </section>
  );
}

export default About;
