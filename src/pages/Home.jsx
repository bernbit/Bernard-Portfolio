import React from "react";
import useGeneral from "../context/GeneralContext";
import { Typewriter } from "react-simple-typewriter";

import HeroPic from "../assets/img/HeroPic.png";
import { MdArrowOutward } from "react-icons/md";

import ReactLogo from "../assets/svg/ReactLogo";
import TailwindLogo from "../assets/svg/TailwindLogo";
import FigmaLogo from "../assets/svg/FigmaLogo";
import PhotoshopLogo from "../assets/svg/PhotoshopLogo";
import HTMLLogo from "../assets/svg/HTMLLogo";
import CSSLogo from "../assets/svg/CSSLogo";
import JSLogo from "../assets/svg/JSLogo";
import ESPLogo from "../assets/svg/ESPLogo";
import ArduinoLogo from "../assets/svg/ArduinoLogo";

function Home() {
  const { homeRef } = useGeneral();
  return (
    <section
      className="flex flex-col items-center gap-16 bg-secondary px-5 pb-10 pt-32 dark:bg-dark-secondary lg:h-[101vh] lg:flex-row lg:px-40 lg:pt-28"
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
          <ReactLogo
            width={55}
            height={55}
            circle={
              <rect
                width="88"
                height="88"
                rx="44"
                className="fill-tertiary dark:fill-dark-tertiary"
              ></rect>
            }
          />
        </div>
        <div className="absolute right-10 top-1 -translate-y-1 animate-float drop-shadow-lg">
          <TailwindLogo
            width={55}
            height={55}
            circle={
              <rect
                width="88"
                height="88"
                rx="44"
                className="fill-tertiary dark:fill-dark-tertiary"
              ></rect>
            }
          />
        </div>

        <div className="absolute -right-3 top-[45%] -translate-y-[45%] animate-float drop-shadow-lg">
          <FigmaLogo
            width={55}
            height={55}
            circle={
              <rect
                width="88"
                height="88"
                rx="44"
                className="fill-tertiary dark:fill-dark-tertiary"
              ></rect>
            }
          />
        </div>

        <div className="absolute -left-3 top-[45%] -translate-y-[45%] animate-float drop-shadow-lg">
          <PhotoshopLogo
            width={55}
            height={55}
            circle={
              <rect
                width="88"
                height="88"
                rx="44"
                className="fill-tertiary dark:fill-dark-tertiary"
              ></rect>
            }
          />
        </div>
        <div className="absolute left-20 top-[93%] -translate-y-[93%] animate-float drop-shadow-lg">
          <ArduinoLogo
            width={55}
            height={55}
            circle={
              <rect
                width="88"
                height="88"
                rx="44"
                className="fill-tertiary dark:fill-dark-tertiary"
              ></rect>
            }
          />
        </div>
        <div className="absolute right-10 top-[93%] -translate-y-[93%] animate-float drop-shadow-lg">
          <JSLogo
            width={55}
            height={55}
            circle={
              <rect
                width="88"
                height="88"
                rx="44"
                className="fill-tertiary dark:fill-dark-tertiary"
              ></rect>
            }
          />
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
          <span className="whitespace-nowrap">
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
              // deleteSpeed={55}
              // delaySpeed={1}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </p>
        <p className="text-align-last text-light text-justify">
          A passionate Front-End Developer, Web/Graphic Designer, and IoT
          Developer. I excel at creating dynamic, user-centric web experiences,
          designing clean, responsive interfaces, and developing innovative IoT
          solutions. Let's turn your vision into reality with cutting-edge
          solutions.
        </p>
        <div className="flex gap-4 pt-5">
          <button className="rounded-md bg-accent px-6 py-3 text-light-text">
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
