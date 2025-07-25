import React, { useState, useEffect } from "react";
//Context
import useGeneral from "../context/GeneralContext";
//External Libraries
import { useInView } from "react-intersection-observer";
//Constants
import { projects } from "../constant/projects";
//Icons
import {
  MdPhoneIphone,
  MdComputer,
  MdArrowForward,
  MdArrowBack,
  MdFullscreen,
} from "react-icons/md";
//Assests
import Laptop from "../assets/svg/Laptop";
import Phone from "../assets/svg/Phone";
//Custom Components
import Modal from "../components/Modal";

function Projects() {
  //* useRef
  const { projectRef } = useGeneral();

  //* useStates
  const [phoneSize, setPhoneSize] = useState("320");
  const [isExpanded, setIsExpanded] = useState(projects.map(() => false));
  const [desktopImgIndex, setDesktopImgIndex] = useState(projects.map(() => 0));
  const [phoneImgIndex, setPhoneImgIndex] = useState(projects.map(() => 0));
  const [imgAnimation, setImageAnimation] = useState("animate__fadeIn");
  const [showPhone, setShowPhone] = useState(
    projects.map((project) => project.isApp),
  );

  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [focusedProjectIndex, setFocusedProjectIndex] = useState(null);

  //* Functions
  const toggleExpand = (index) => {
    const isExpandedCopy = [...isExpanded];
    isExpandedCopy[index] = !isExpandedCopy[index];
    setIsExpanded(isExpandedCopy);
  };

  const handlePrevImg = (projectIndex) => {
    setDesktopImgIndex((prevIndices) =>
      prevIndices.map((imgNumber, idx) =>
        idx === projectIndex && imgNumber !== 0 ? imgNumber - 1 : imgNumber,
      ),
    );
  };

  const handleNextImg = (projectIndex) => {
    setImageAnimation("animate__fadeIn animate__faster");
    setDesktopImgIndex((prevIndices) =>
      prevIndices.map((imgNumber, idx) =>
        idx === projectIndex &&
        imgNumber !== projects[projectIndex].desktopImg.length - 1
          ? imgNumber + 1
          : imgNumber,
      ),
    );

    setTimeout(() => setImageAnimation(""), 500); // Reset animation after 1 second
  };

  const handleNextPhoneImg = (index) => {
    setPhoneImgIndex((prev) =>
      prev.map((val, i) =>
        i === index && val < projects[index].phoneImg.length - 1
          ? val + 1
          : val,
      ),
    );
  };

  const handlePrevPhoneImg = (index) => {
    setPhoneImgIndex((prev) =>
      prev.map((val, i) => (i === index && val > 0 ? val - 1 : val)),
    );
  };

  const handleShowPhone = (index) => {
    const showPhoneCopy = [...showPhone];
    showPhoneCopy[index] = !showPhoneCopy[index];
    setShowPhone(showPhoneCopy);
  };

  const { ref: projectTitleRef, inView: projectTitle } = useInView({
    threshold: 0,
  });

  const handleOpenModal = (index) => {
    setCurrentProjectIndex(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentProjectIndex(null);
  };

  const nextProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev < projects.length - 1 ? prev + 1 : 0), // Wrap around
    );
  };

  const previousProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev > 0 ? prev - 1 : projects.length - 1), // Wrap around
    );
  };

  //* useEffects
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (focusedProjectIndex === null) return;

      if (e.key === "ArrowLeft") {
        handlePrevImg(focusedProjectIndex);
        handlePrevPhoneImg(focusedProjectIndex);
      } else if (e.key === "ArrowRight") {
        handleNextImg(focusedProjectIndex);
        handleNextPhoneImg(focusedProjectIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedProjectIndex, desktopImgIndex, phoneImgIndex]);

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
            onMouseEnter={() => setFocusedProjectIndex(index)}
            onMouseLeave={() => setFocusedProjectIndex(null)}
          >
            <div className="relative flex h-96 flex-col items-center justify-center px-5 py-3 lg:basis-6/12">
              {/* Toggle Device View */}
              {showPhone[index] ? (
                <div className="relative flex h-full w-full items-center justify-center gap-5">
                  <div
                    className={`absolute left-0 z-10 rounded-full p-2 hover:cursor-pointer ${project.color} ${phoneImgIndex[index] === 0 ? "pointer-events-none opacity-20" : "hover:opacity-80"} `}
                    onClick={() => handlePrevPhoneImg(index)}
                  >
                    <MdArrowBack className="text-lg dark:text-dark-text" />
                  </div>

                  <div className="flex h-full items-center justify-center">
                    <Phone img={project.phoneImg[phoneImgIndex[index]]} />
                  </div>

                  <div
                    className={`absolute right-0 z-10 rounded-full p-2 hover:cursor-pointer ${project.color} ${phoneImgIndex[index] === project.phoneImg.length - 1 ? "pointer-events-none opacity-20" : "hover:opacity-80"} `}
                    onClick={() => handleNextPhoneImg(index)}
                  >
                    <MdArrowForward className="text-lg dark:text-dark-text" />
                  </div>
                </div>
              ) : (
                <div className="relative flex h-full w-full items-center justify-center">
                  <Laptop img={project.desktopImg[desktopImgIndex[index]]} />

                  {project.desktopImg.length > 1 && (
                    <>
                      {" "}
                      <div
                        className={`${project.color} ${desktopImgIndex[index] === 0 ? "pointer-events-none opacity-20" : "opacity-100"} absolute -left-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-dark-text transition-all duration-300 hover:cursor-pointer hover:opacity-75 md:p-2`}
                        onClick={() => handlePrevImg(index)}
                      >
                        <MdArrowBack className="text-lg" />
                      </div>
                      <div
                        className={`${project.color} ${desktopImgIndex[index] === project.desktopImg.length - 1 ? "pointer-events-none opacity-20" : "opacity-100"} absolute -right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-dark-text transition-all duration-300 hover:cursor-pointer hover:opacity-75 md:p-2`}
                        onClick={() => handleNextImg(index)}
                      >
                        <MdArrowForward className="text-lg" />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Circle Indicator */}
              <div
                className={`${showPhone[index] ? "mt-6" : "mt-0"} flex gap-1`}
              >
                {(showPhone[index] ? project.phoneImg : project.desktopImg).map(
                  (_, dotIndex) => (
                    <span
                      key={dotIndex}
                      onClick={() => {
                        if (showPhone[index]) {
                          setPhoneImgIndex((prev) =>
                            prev.map((val, i) =>
                              i === index ? dotIndex : val,
                            ),
                          );
                        } else {
                          setDesktopImgIndex((prev) =>
                            prev.map((val, i) =>
                              i === index ? dotIndex : val,
                            ),
                          );
                        }
                      }}
                      className={`h-2 w-2 rounded-full transition-all duration-300 hover:cursor-pointer ${
                        (showPhone[index]
                          ? phoneImgIndex[index]
                          : desktopImgIndex[index]) === dotIndex
                          ? "bg-black opacity-100 dark:bg-white"
                          : "bg-black opacity-40 dark:bg-white"
                      }`}
                    />
                  ),
                )}
              </div>
            </div>

            {/* Toggle Device Icon */}
            <div
              className={`${project.color} ${project.isApp ? "hidden" : ""} absolute left-0 top-0 m-5 rounded-full p-2 text-3xl dark:text-dark-text`}
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
                      className={`${project.color} ${project.isLightText ? "text-light-text" : "text-dark-text"} w-fit rounded-full px-5 py-1`}
                      key={index}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              <div className="md:px-10">
                <button
                  onClick={() => handleOpenModal(index)}
                  className={` ${project.color} ${project.isLightText ? "text-light-text" : "text-dark-text"} relative w-full py-4 text-lg font-semibold tracking-wide hover:cursor-pointer hover:opacity-75 md:rounded-md`}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal */}
      <Modal
        openModal={openModal}
        onClose={handleCloseModal}
        project={projects[currentProjectIndex]}
        onNext={nextProject}
        onPrevious={previousProject}
        hasPrevious={currentProjectIndex > 0}
        hasNext={currentProjectIndex < projects.length - 1}
      />
    </section>
  );
}

export default Projects;
