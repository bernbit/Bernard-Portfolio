import React from "react";
import useGeneral from "../context/useGeneral";
import { Typewriter } from "react-simple-typewriter";

import HeroPic from "../assets/img/HeroPic.png";
import { MdArrowOutward } from "react-icons/md";

import ReactLogo from "../assets/technologies/ReactLogo";
import TailwindLogo from "../assets/technologies/TailwindLogo";
import FigmaLogo from "../assets/technologies/FigmaLogo";
import PhotoshopLogo from "../assets/technologies/PhotoshopLogo";
import HTMLLogo from "../assets/technologies/HTMLLogo";
import CSSLogo from "../assets/technologies/CSSLogo";
import JSLogo from "../assets/technologies/JSLogo";
import ESPLogo from "../assets/technologies/ESPLogo";
import ArduinoLogo from "../assets/technologies/ArduinoLogo";

function Home() {
  const { homeRef } = useGeneral();
  return (
    <section
      className="flex flex-col items-center gap-16 bg-box px-5 py-10 pt-28 lg:h-[101vh] lg:flex-row lg:px-36"
      id="home"
      ref={homeRef}
    >
      <div className="relative flex basis-5/12 items-center justify-center">
        <img
          src={HeroPic}
          alt="Hero Image"
          className="drop-shadow-lg"
          width={420}
          height={420}
        />
        <div className="absolute left-20 top-1 -translate-y-1 animate-float drop-shadow-lg">
          <ReactLogo width={50} height={50} />
        </div>
        <div className="absolute right-10 top-1 -translate-y-1 animate-float drop-shadow-lg">
          <TailwindLogo width={50} height={50} />
        </div>

        <div className="absolute -right-3 top-[45%] -translate-y-[45%] animate-float drop-shadow-lg">
          <FigmaLogo width={50} height={50} />
        </div>

        <div className="absolute -left-3 top-[45%] -translate-y-[45%] animate-float drop-shadow-lg">
          <PhotoshopLogo width={50} height={50} />
        </div>
        <div className="absolute left-20 top-[93%] -translate-y-[93%] animate-float drop-shadow-lg">
          <ArduinoLogo width={50} height={50} />
        </div>
        <div className="absolute right-10 top-[93%] -translate-y-[93%] animate-float drop-shadow-lg">
          <JSLogo width={50} height={50} />
        </div>
      </div>

      <div className="flex basis-7/12 flex-col items-center gap-2 lg:items-start">
        <p>
          <span className="font-fira-code">---- </span>
          Hello I'm
        </p>
        <p className="font-clash-display text-3xl font-medium tracking-wider md:text-5xl">
          <span className="text-accent underline">Bernardo</span> Salva Jr.
        </p>
        <p className="font-clash-display text-xl font-bold tracking-wider md:text-3xl">
          A{" "}
          <span>
            <Typewriter
              words={[
                "Front-end Developer",
                "Web/Graphic Designer",
                "Internet of Things Developer",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              // typeSpeed={70}
              // deleteSpeed={50}
              // delaySpeed={1}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </p>
        <p className="text-align-last text-justify">
          A passionate Front-End Developer, Web/Graphic Designer, and IoT
          Developer. I excel at creating dynamic, user-centric web experiences,
          designing clean, responsive interfaces, and developing innovative IoT
          solutions. Let's turn your vision into reality with cutting-edge
          solutions.
        </p>
        <div className="flex gap-4 pt-5">
          <button className="rounded-md bg-accent px-6 py-3 text-white">
            View Resume
          </button>
          <button className="flex items-center px-6 py-3">
            Projects{" "}
            <span>
              <MdArrowOutward />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
