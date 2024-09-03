import React, { useState } from "react";
import useGeneral from "../context/GeneralContext";
import BeeWatch from "../assets/img/BeeWatch.png";
import Bee from "../assets/img/Bee.png";
// import Phone from "../assets/img/Phone.png";
import { MdPhoneIphone, MdComputer } from "react-icons/md";

import Laptop from "../assets/svg/Laptop";
import Phone from "../assets/svg/Phone";
import BeeWatch_SS1 from "../assets/img/BeeWatch_SS1.jpg";
import BeeWatchPhone_SS1 from "../assets/img/BeeWatch/BeeWatchPhone_SS1.jpg";
import BeeWatchPhone_SS2 from "../assets/img/BeeWatch/BeeWatchPhone_SS2.jpg";

import Enviromentrix_SS1 from "../assets/img/Enviromentrix/Enviromentrix_SS1.jpg";
import EnviromentrixPhone_SS1 from "../assets/img/Enviromentrix/EnviromentrixPhone_SS1.jpg";
import EnviromentrixPhone_SS2 from "../assets/img/Enviromentrix/EnviromentrixPhone_SS2.jpg";

function Projects() {
  const { projectRef } = useGeneral();
  const [showPhone, setShowPhone] = useState(false);

  const projects = [
    {
      image: BeeWatch,
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
      img: BeeWatch_SS1,
      phoneImg: BeeWatchPhone_SS1,
      phoneImg2: BeeWatchPhone_SS2,
      color: "#FDE767",
    },
    {
      image: BeeWatch,
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
      color: "#05BFDB",
      phoneImg: EnviromentrixPhone_SS2,
      phoneImg2: EnviromentrixPhone_SS1,
      img: Enviromentrix_SS1,
    },
  ];
  return (
    <section className="px-5 py-10 lg:px-40" id="projects" ref={projectRef}>
      <div className="pb-5 text-center">
        <p className="font-clash-display text-2xl font-bold uppercase tracking-wider md:text-3xl">
          Projects
        </p>
        <p className="text-sm font-light md:text-base">
          Here you’ll find a selection of personal and client projects I’ve
          developed. Each project showcases my skills and creativity in action
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          className="mt-7 flex flex-col overflow-hidden rounded-md border border-extra bg-tertiary shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none md:p-10 lg:flex-row odd:lg:flex-row-reverse"
          key={index}
        >
          <div className="border-test relative flex h-96 items-center justify-center p-2 px-5 lg:w-6/12">
            {showPhone ? (
              <div className="flex justify-between gap-5">
                <Phone img={project.phoneImg} />
                <div className="hidden md:block">
                  <Phone img={project.phoneImg2} />
                </div>
              </div>
            ) : (
              <Laptop img={project.img} />
            )}

            {showPhone ? (
              <MdComputer
                className="absolute right-0 top-0 m-2 rounded-full p-2 text-5xl dark:text-gray-700"
                style={{ backgroundColor: project.color }}
                onClick={() => setShowPhone(!showPhone)}
              />
            ) : (
              <MdPhoneIphone
                className="absolute right-0 top-0 m-2 rounded-full p-2 text-5xl dark:text-gray-700"
                style={{ backgroundColor: project.color }}
                onClick={() => setShowPhone(!showPhone)}
              />
            )}
          </div>

          <div className="flex flex-col justify-center gap-10 lg:w-6/12">
            <div className="flex flex-col gap-3 px-10">
              <p className="relative w-fit text-2xl font-bold tracking-widest md:text-3xl">
                <span
                  className="absolute -left-1.5 top-5 z-0 h-[10px] w-[106%] md:top-6"
                  style={{ backgroundColor: project.color }}
                ></span>
                <span className="relative z-10 dark:font-[800] dark:text-gray-700 dark:text-stroke">
                  {project.title}
                </span>
              </p>

              {project.description}

              <div className="flex flex-wrap justify-center gap-2">
                {project.techology.map((tech, index) => (
                  <p
                    className="w-fit rounded-full px-5 py-1 dark:text-dark-text"
                    key={index}
                    style={{ backgroundColor: project.color }}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>

            <div className="md:px-10">
              <button
                className="w-full py-4 text-lg font-semibold tracking-wide hover:cursor-pointer hover:opacity-75 dark:text-dark-text md:rounded-md"
                style={{ backgroundColor: project.color }}
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
