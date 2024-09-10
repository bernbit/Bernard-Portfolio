import React from "react";
import useGeneral from "../context/GeneralContext";

function Contact() {
  const { contactRef } = useGeneral();

  return (
    <section
      className="scroll-m-12 px-5 py-10 lg:px-40"
      id="testimonials"
      ref={contactRef}
    >
      <div className="border-test mb-20 pb-5 text-center">
        <p className="font-clash-display text-2xl font-bold uppercase tracking-wider md:text-3xl">
          Contact Me
        </p>
        <p className="text-sm font-light md:text-base">
          See what clients say about my work, highlighting my focus on clean
          design and seamless user experiences.
        </p>
      </div>
    </section>
  );
}

export default Contact;
