import React, { useState } from "react";
import useGeneral from "../context/GeneralContext";
import { MdPhoneIphone, MdComputer } from "react-icons/md";

import Laptop from "../assets/svg/Laptop";
import Phone from "../assets/svg/Phone";
//BeeWatch
import BeeWatch_SS1 from "../assets/img/BeeWatch/BeeWatch_SS1.jpg";
import BeeWatchPhone_SS1 from "../assets/img/BeeWatch/BeeWatchPhone_SS1.jpg";
import BeeWatchPhone_SS3 from "../assets/img/BeeWatch/BeeWatchPhone_SS3.jpg";
//Enviromentrix
import Enviromentrix_SS1 from "../assets/img/Enviromentrix/Enviromentrix_SS1.jpg";
import EnviromentrixPhone_SS1 from "../assets/img/Enviromentrix/EnviromentrixPhone_SS1.jpg";
import EnviromentrixPhone_SS2 from "../assets/img/Enviromentrix/EnviromentrixPhone_SS2.jpg";
//Campus Echo
import CampusEcho_SS1 from "../assets/img/CampusEcho/CampusEcho_SS1.jpg";
import CampusEchoPhone_SS1 from "../assets/img/CampusEcho/CampusEchoPhone_SS1.jpg";
import CampusEchoPhone_SS2 from "../assets/img/CampusEcho/CampusEchoPhone_SS2.jpg";
//Variety Verse
import VarietyVerse_SS1 from "../assets/img/VarietyVerse/VarietyVerse_SS1.jpg";
import VarietyVersePhone_SS1 from "../assets/img/VarietyVerse/VarietyVersePhone_SS1.jpg";
import VarietyVersePhone_SS2 from "../assets/img/VarietyVerse/VarietyVersePhone_SS2.jpg";
// Tic Tac Toe
import TTT_SS1 from "../assets/img/TTT/TTT_SS1.jpg";
import TTTPhone_SS1 from "../assets/img/TTT/TTTPhone_SS1.jpg";
import TTTPhone_SS2 from "../assets/img/TTT/TTTPhone_SS2.jpg";

import { useInView } from "react-intersection-observer";

function Projects() {
  const projects = [
    {
      title: "BeeWatch",
      description: (
        <p className="text-justify">
          Beewatch is an IoT project that monitors the real-time temperature and
          humidity of beehives using a DHT-22 sensor. It automates actions based
          on these readings and includes data collection, graphing capabilities,
          user management features, push notifications, and SMS alerts for
          specific temperature and humidity thresholds. It is designed as a
          Progressive Web App (PWA) for easy access and usability.
        </p>
      ),
      techology: ["React", "Tailwind", "Firebase", "Chart.js", "ESP32"],
      desktopImg: BeeWatch_SS1,
      phoneImg: BeeWatchPhone_SS1,
      phoneImg2: BeeWatchPhone_SS3,
      color: "bg-beewatch",
    },
    {
      title: "Enviromentrix",
      description: (
        <p className="text-justify">
          The Envirometrix is a smart plant monitoring system designed for
          multi-micro gardening using the ESP32 microcontroller. It enables
          real-time tracking of various environmental parameters, such as soil
          moisture, temperature, pH level and humidity, ensuring optimal
          conditions for plant growth. One main benefit of this system is its
          ability to automate and optimize plant care, reducing manual
          monitoring efforts and improving plant health and yield through
          precise, data-driven adjustments.
        </p>
      ),
      techology: ["React", "CSS", "Firebase", "ESP32"],
      color: "bg-enviromentrix",
      desktopImg: Enviromentrix_SS1,
      phoneImg: EnviromentrixPhone_SS2,
      phoneImg2: EnviromentrixPhone_SS1,
    },
    {
      title: "Campus Echo",
      description: (
        <p className="text-justify">
          The Envirometrix is a smart plant monitoring system designed for
          multi-micro gardening using the ESP32 microcontroller. It enables
          real-time tracking of various environmental parameters, such as soil
          moisture, temperature, pH level and humidity, ensuring optimal
          conditions for plant growth. One main benefit of this system is its
          ability to automate and optimize plant care, reducing manual
          monitoring efforts and improving plant health and yield through
          precise, data-driven adjustments.
        </p>
      ),
      techology: ["React", "CSS", "Firebase"],
      color: "bg-campus-echo",
      desktopImg: CampusEcho_SS1,
      phoneImg: CampusEchoPhone_SS1,
      phoneImg2: CampusEchoPhone_SS2,
    },
    {
      title: "Variety Verse",
      description: (
        <p className="text-justify">
          The Envirometrix is a smart plant monitoring system designed for
          multi-micro gardening using the ESP32 microcontroller. It enables
          real-time tracking of various environmental parameters, such as soil
          moisture, temperature, pH level and humidity, ensuring optimal
          conditions for plant growth. One main benefit of this system is its
          ability to automate and optimize plant care, reducing manual
          monitoring efforts and improving plant health and yield through
          precise, data-driven adjustments.
        </p>
      ),
      techology: ["HTML", "CSS", "JS"],
      color: "bg-variety-verse",
      desktopImg: VarietyVerse_SS1,
      phoneImg: VarietyVersePhone_SS1,
      phoneImg2: VarietyVersePhone_SS2,
    },
    {
      title: "Tic-Tac-Toe",
      description: (
        <p className="text-justify">
          The Envirometrix is a smart plant monitoring system designed for
          multi-micro gardening using the ESP32 microcontroller. It enables
          real-time tracking of various environmental parameters, such as soil
          moisture, temperature, pH level and humidity, ensuring optimal
          conditions for plant growth. One main benefit of this system is its
          ability to automate and optimize plant care, reducing manual
          monitoring efforts and improving plant health and yield through
          precise, data-driven adjustments.
        </p>
      ),
      techology: ["HTML", "CSS", "JS"],
      color: "bg-ttt",
      desktopImg: TTT_SS1,
      phoneImg: TTTPhone_SS1,
      phoneImg2: TTTPhone_SS2,
    },
  ];

  const { projectRef } = useGeneral();
  const [showPhone, setShowPhone] = useState(projects.map(() => false));
  const handleShowPhone = (index) => {
    const showPhoneCopy = [...showPhone];
    showPhoneCopy[index] = !showPhoneCopy[index];
    setShowPhone(showPhoneCopy);
  };

  const { ref: projectTitleRef, inView: projectTitle } = useInView({
    threshold: 0,
  });

  return (
    <section
      className="scroll-m-12 overflow-hidden px-5 py-10 lg:px-40"
      id="projects"
      ref={projectRef}
    >
      <div
        className={`pb-5 text-center ${projectTitle ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        ref={projectTitleRef}
      >
        <p className="font-clash-display text-2xl font-bold uppercase tracking-wider md:text-3xl">
          Projects
        </p>
        <p className="text-sm font-light md:text-base">
          Here you’ll find a selection of personal and client projects I’ve
          developed. Each project showcases my skills and creativity in action
        </p>
      </div>

      {projects.map((project, index) => {
        const { ref: projectBoxRef, inView: projectBox } = useInView({
          threshold: 0.1,
        });

        const projectAnimation = projectBox
          ? index % 2 === 0
            ? "animate__animated animate__fadeInLeft"
            : "animate__animated animate__fadeInRight"
          : "opacity-0";

        return (
          <div
            className={`mt-7 flex flex-col overflow-hidden rounded-md border border-extra bg-tertiary shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none md:items-center md:justify-center md:p-10 lg:flex-row ${projectAnimation}`}
            key={index}
            ref={projectBoxRef}
          >
            <div className="relative flex h-96 items-center justify-center p-2 px-5 lg:w-6/12">
              {/* Toggle Device View */}
              {showPhone[index] ? (
                <div className="flex justify-between gap-5">
                  <Phone img={project.phoneImg} />
                  <div className="hidden md:block">
                    <Phone img={project.phoneImg2} />
                  </div>
                </div>
              ) : (
                <Laptop img={project.desktopImg} />
              )}

              {/* Toggle Device Icon */}
              {showPhone[index] ? (
                <MdComputer
                  className={`${project.color} absolute right-0 top-0 m-2 rounded-full p-2 text-5xl dark:text-dark-text`}
                  onClick={() => handleShowPhone(index)}
                />
              ) : (
                <MdPhoneIphone
                  className={`${project.color} absolute right-0 top-0 m-2 rounded-full p-2 text-5xl dark:text-dark-text`}
                  onClick={() => handleShowPhone(index)}
                />
              )}
            </div>

            <div className="flex flex-col justify-center gap-10 lg:w-6/12">
              <div className="flex flex-col gap-3 px-10">
                <p className="relative w-fit text-2xl font-bold tracking-widest md:text-3xl">
                  <span
                    className={`${project.color} absolute -left-1.5 top-5 z-0 h-[10px] w-[106%] md:top-6`}
                  ></span>
                  <span className="relative z-10 dark:font-[800] dark:text-gray-700 dark:text-stroke">
                    {project.title}
                  </span>
                </p>

                {project.description}

                <div className="flex flex-wrap justify-center gap-2">
                  {project.techology.map((tech, index) => (
                    <p
                      className={`${project.color} w-fit rounded-full px-5 py-1 dark:text-dark-text`}
                      key={index}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              <div className="md:px-10">
                <button
                  className={` ${project.color} relative w-full py-4 text-lg font-semibold tracking-wide hover:cursor-pointer hover:opacity-75 dark:text-dark-text md:rounded-md`}
                >
                  <span>View Project</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
