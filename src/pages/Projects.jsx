import React, { useState, useEffect } from "react";
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
      description:
        "Beewatch is an IoT project that monitors the real-time temperature and humidity of beehives using a DHT-22 sensor. It automates actions based on these readings and includes data collection, graphing capabilities, user management features, push notifications, and SMS alerts for specific temperature and humidity thresholds. It is designed as a Progressive Web App (PWA) for easy access and usability.",

      techology: ["React", "Tailwind", "Firebase", "Chart.js", "ESP32"],
      color: "bg-beewatch",
      textColor: "text-beewatch",
      desktopImg: BeeWatch_SS1,
      phoneImg: BeeWatchPhone_SS1,
      phoneImg2: BeeWatchPhone_SS3,
      link: "https://beewatch-demo.web.app/",
    },
    {
      title: "Envirometrix",
      description:
        "Envirometrix is a smart plant monitoring system designed for multi-micro gardening using the ESP32 microcontroller. It tracks key environmental factors like soil moisture, temperature, pH levels, and humidity in real-time to optimize plant growth. The system sends push notifications to users when sensor data exceeds specific thresholds, ensuring timely intervention. Envirometrix also features a Progressive Web App (PWA) design, making it easily installable for quick access and seamless monitoring from any device.",

      techology: ["React", "CSS", "Firebase", "ESP32"],
      color: "bg-envirometrix",
      textColor: "text-envirometrix",
      desktopImg: Enviromentrix_SS1,
      phoneImg: EnviromentrixPhone_SS2,
      phoneImg2: EnviromentrixPhone_SS1,
      link: "https://envirometrix-demo.web.app/",
    },
    {
      title: "Campus Echo",
      description:
        "Campus Echo is a platform where users can freely share their thoughts, rants, and complaints in real-time. It utilizes Firebase Firestore to store posts and Firebase Authentication for authetication, ensuring a seamless experience for users. Built with React for a dynamic frontend and styled with Tailwind CSS, Campus Echo offers a modern and responsive interface. The project promotes an open space for user expression, enabling easy interaction and community engagement.",

      techology: ["React", "Tailwind", "Firebase"],
      color: "bg-campus-echo",
      textColor: "text-campus-echo",
      desktopImg: CampusEcho_SS1,
      phoneImg: CampusEchoPhone_SS1,
      phoneImg2: CampusEchoPhone_SS2,
      link: "https://campus-echo.web.app/",
    },
    {
      title: "Variety Verse",
      description:
        "Variety Verse is a personal project that provides users with random quotes, memes, riddles, and jokes. The content is fetched from different APIs, offering fresh and entertaining options. The app also includes a feature to share the generated content directly on Twitter, making it easy to enjoy and share fun moments with others. It provides an engaging experience through a simple and intuitive interface.",
      techology: ["HTML", "CSS", "JS"],
      color: "bg-variety-verse",
      textColor: "text-variety-verse",
      desktopImg: VarietyVerse_SS1,
      phoneImg: VarietyVersePhone_SS1,
      phoneImg2: VarietyVersePhone_SS2,
      link: "https://bernbit.github.io/Variety-Verse/",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Tic-Tac-Toe is a classic game that offers a straightforward and enjoyable experience. Players can engage in typical gameplay, making their moves to claim three in a row. The app features sound effects and keyboard support, along with easy-to-follow instructions, ensuring everyone can join in on the fun.",
      techology: ["HTML", "CSS", "JS"],
      color: "bg-ttt",
      textColor: "text-ttt",
      desktopImg: TTT_SS1,
      phoneImg: TTTPhone_SS1,
      phoneImg2: TTTPhone_SS2,
      link: "https://bernbit.github.io/Let-s-Play-Tic-Tac-Toe/",
    },
  ];

  const [phoneSize, setPhoneSize] = useState("320");
  const [isExpanded, setIsExpanded] = useState(projects.map(() => false));

  const toggleExpand = (index) => {
    const isExpandedCopy = [...isExpanded];
    isExpandedCopy[index] = !isExpandedCopy[index];
    setIsExpanded(isExpandedCopy);
  };

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

  useEffect(() => {
    // Window Resize Handler
    const screenSize = window.innerWidth;
    const mdScreen = 768;
    const lgScreen = 1024;

    const handleResize = () => {
      if (screenSize >= mdScreen && screenSize < lgScreen) {
        // Md Screen
        setPhoneSize("480");
        // Lg Screen
      } else if (screenSize >= lgScreen) {
        setPhoneSize("480");
      } else {
        // Sm Screen
        setPhoneSize("320");
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial Window Resize
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="scroll-m-12 overflow-hidden px-5 py-10 md:px-10 lg:px-40"
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
          Explore my personal and client projects, showcasing a range of work
          from innovative IoT solutions to web development.
        </p>
      </div>

      {projects.map((project, index) => {
        const { ref: projectBoxRef, inView: projectBox } = useInView({
          threshold: 0.1,
        });

        return (
          <div
            className={`mt-7 flex flex-col gap-5 overflow-hidden rounded-md border border-extra bg-tertiary pt-5 shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none md:items-center md:justify-center md:p-10 lg:flex-row ${projectBox ? "animate__animated animate__fadeInUp" : "opacity-0"} `}
            key={index}
            ref={projectBoxRef}
          >
            <div className="relative flex h-96 items-center justify-center px-5 py-3 lg:basis-6/12">
              {/* Toggle Device View */}
              {showPhone[index] ? (
                <div className="flex h-full items-center justify-between gap-5">
                  <div className="flex h-full items-center justify-between">
                    <Phone img={project.phoneImg} />
                  </div>
                  <div className="hidden h-full items-center justify-between md:flex">
                    <Phone img={project.phoneImg2} />
                  </div>
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Laptop img={project.desktopImg} />
                </div>
              )}

              {/* Toggle Device Icon */}
            </div>

            <div
              className={`${project.color} absolute left-0 top-0 m-5 rounded-full p-2 text-3xl dark:text-dark-text`}
            >
              {showPhone[index] ? (
                <MdComputer onClick={() => handleShowPhone(index)} />
              ) : (
                <MdPhoneIphone onClick={() => handleShowPhone(index)} />
              )}
            </div>

            <div className="flex flex-col justify-center gap-10 lg:basis-6/12">
              <div className="flex flex-col gap-5 px-6">
                <p className="relative w-fit text-2xl font-bold tracking-widest md:text-3xl">
                  <span
                    className={`${project.color} absolute -left-1.5 top-5 z-0 h-[10px] w-[106%] dark:bg-opacity-80 md:top-6`}
                  ></span>
                  <span className="relative z-10 dark:font-[800] dark:text-gray-700 dark:text-stroke">
                    {project.title}
                  </span>
                </p>

                <p className="hidden text-justify md:block">
                  {project.description}
                </p>

                <p className="text-justify md:hidden">
                  {isExpanded[index]
                    ? project.description
                    : project.description.length <= 280
                      ? project.description
                      : `${project.description.slice(0, 280)}...`}

                  {project.description.length > 280 && (
                    <span
                      className={`cursor-pointer ${project.textColor}`}
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded[index] ? " See Less" : " See More"}
                    </span>
                  )}
                </p>

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
                <a href={project.link} target="_blank">
                  <button
                    className={` ${project.color} relative w-full py-4 text-lg font-semibold tracking-wide hover:cursor-pointer hover:opacity-75 dark:text-dark-text md:rounded-md`}
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
