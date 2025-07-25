import React, { useRef, useState, useEffect } from "react";
import useGeneral from "../context/GeneralContext";
import {
  MdClose,
  MdOpenInNew,
  MdArrowForward,
  MdArrowBack,
} from "react-icons/md";
import VideoLogo from "../assets/svg/VideoLogo";
import WebsiteLogo from "../assets/svg/WebsiteLogo";

function Modal({
  openModal,
  onClose,
  project,
  onNext,
  onPrevious,
  hasPrevious,
  hasNext,
}) {
  const modalContainerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        modalContainerRef.current.scrollTo(0, 0);
      }

      if (event.key === "ArrowRight" && hasNext) {
        onNext();
        modalContainerRef.current.scrollTo(0, 0);
      }

      if (event.key === "ArrowLeft" && hasPrevious) {
        onPrevious();
        modalContainerRef.current.scrollTo(0, 0);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious]);

  useEffect(() => {
    const originalStyle = document.body.style.overflow;

    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    // Clean up when the component unmounts or openModal turns false
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [openModal]);

  return (
    <div
      className={`fixed inset-0 z-50 h-screen w-screen flex-col gap-0 bg-stone-900 bg-opacity-75 text-light-text backdrop-blur-sm transition-all ${openModal ? "animate__animated animate__fadeInUp animate__fast flex" : "hidden"}`}
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
      ref={modalContainerRef}
    >
      {/* Modal Navbar */}
      <div
        className={`z-20 flex w-full bg-dark-primary bg-opacity-40 px-2 py-4 transition-all duration-300 dark:bg-opacity-90 md:px-6`}
      >
        <div className="flex grow items-center gap-2 md:gap-6">
          <MdClose
            title="Close"
            className={`text-3xl text-light-text hover:cursor-pointer hover:opacity-75 ${project?.textHoverColor}`}
            onClick={() => {
              onClose();
              modalContainerRef.current.scrollTo(0, 0);
            }}
          />
          <div className="flex items-center gap-2">
            {project?.isApp ? (
              <VideoLogo width={30} height={30} color={project?.fill} />
            ) : (
              <WebsiteLogo
                width={30}
                height={30}
                color={project?.fill}
                isLight={project?.isLightText}
              />
            )}

            <p className="whitespace-nowrap text-lg font-medium">
              {project?.title}
            </p>
          </div>
        </div>

        <div className="flex grow items-center justify-end gap-2 md:gap-6">
          <a
            href={project?.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:cursor-pointer hover:opacity-70 ${!project?.link ? "pointer-events-none opacity-50" : ""}`}
          >
            <MdOpenInNew
              title="Open in New Tab"
              className={`text-3xl hover:cursor-pointer ${project?.textHoverColor}`}
            />
          </a>
        </div>
      </div>

      {/* Modal Body */}
      <div className="flex flex-1 justify-center px-2 pt-6">
        {project?.link ? (
          <iframe
            className="h-[95%] w-full rounded-md md:aspect-video md:h-[80%] md:w-auto"
            src={project?.link}
            https:title="Balingtech"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          <>
            <div className="relative hidden h-[95%] overflow-hidden rounded-md md:block md:aspect-video md:h-[80%]">
              <div className="absolute z-30 flex h-full w-full items-center justify-center bg-black bg-opacity-80">
                <p className="text-lg font-semibold">
                  🚀 Deployment in Progress
                </p>
              </div>
              <img src={project?.desktopImg[0]} className="h-full w-full" />
            </div>

            <div className="relative block h-[95%] overflow-hidden rounded-md md:hidden md:aspect-video md:h-[80%]">
              <div className="absolute z-30 flex h-full w-full items-center justify-center bg-black bg-opacity-80">
                <p className="text-lg font-semibold">
                  🚀 Deployment in Progress...
                </p>
              </div>
              <img src={project?.phoneImg[0]} className="h-full" />
            </div>
          </>
        )}

        {/* Next and Previous Button */}
        <div
          className={`fixed left-2 top-1/2 z-30 flex h-[25px] w-[25px] -translate-y-1/2 items-center justify-center rounded-full text-light-text hover:cursor-pointer hover:bg-opacity-75 md:left-10 ${project?.color} ${!hasPrevious ? "pointer-events-none cursor-not-allowed opacity-50" : ""}`}
          onClick={() => {
            onPrevious();
            modalContainerRef.current.scrollTo(0, 0);
          }}
        >
          <MdArrowBack
            className={`text-lg md:text-xl ${project?.isLightText ? "text-light-text" : "text-dark-text"}`}
          />
        </div>

        <div
          className={`fixed right-2 top-1/2 z-30 flex h-[25px] w-[25px] -translate-y-1/2 items-center justify-center rounded-full text-light-text hover:cursor-pointer hover:bg-opacity-75 md:right-10 ${project?.color} ${!hasNext ? "pointer-events-none cursor-not-allowed opacity-50" : ""}`}
          onClick={() => {
            onNext();
            modalContainerRef.current.scrollTo(0, 0);
          }}
        >
          <MdArrowForward
            className={`text-lg md:text-xl ${project?.isLightText ? "text-light-text" : "text-dark-text"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
