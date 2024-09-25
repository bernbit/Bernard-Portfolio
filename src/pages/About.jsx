import React from "react";
import useGeneral from "../context/GeneralContext";
import Skills from "../components/Skills";
import Technology from "../components/Technology";
import { useInView } from "react-intersection-observer";

function About() {
  const { aboutRef } = useGeneral();
  const { ref: aboutHeaderRef, inView: aboutHeader } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <section
      className="scroll-m-12 px-5 py-10 md:px-10 lg:px-40"
      id="about"
      ref={aboutRef}
    >
      <div
        className={`text-center ${aboutHeader ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        ref={aboutHeaderRef}
      >
        <p className="font-clash-display text-2xl font-bold uppercase tracking-wider md:text-3xl">
          About Me
        </p>
        <p className="text-sm font-light md:text-base">
          Discover about what I do, and my current skills, mainly in
          programming, technology, and design.
        </p>
      </div>

      <Skills />
      <Technology />
    </section>
  );
}

export default About;
