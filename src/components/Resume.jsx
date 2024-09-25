import React, { useRef, useState, useEffect } from "react";
import useGeneral from "../context/GeneralContext";
import {
  MdClose,
  MdPrint,
  MdDownload,
  MdAdd,
  MdRemove,
  MdZoomIn,
  MdZoomOut,
} from "react-icons/md";
import { useReactToPrint } from "react-to-print";

function Resume() {
  const { showResume, setShowResume } = useGeneral();
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [imageSize, setImageSize] = useState(50);

  const pdfRef = useRef(null);
  const resumeContainerRef = useRef(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Bernardo_Resume.pdf";
    link.download = "Bernardo_Resume.pdf"; // PDF File Name
    link.click();
  };

  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
  });

  const handleZoomIn = () => {
    if (imageSize < 100) {
      setImageSize(imageSize + 10);
    }
  };
  const handleZoomOut = () => {
    if (imageSize > 50) {
      setImageSize(imageSize - 10);
    }
  };
  const handleZoomReset = () => {
    if (imageSize > 50 && (lg || md)) {
      setImageSize(50);
    }
  };

  useEffect(() => {
    // Window Resize Handler
    const handleResize = () => {
      const screenSize = window.innerWidth;
      if (screenSize >= 768 && screenSize < 1024) {
        setMd(true);
        setLg(false);
        setImageSize(50);
      } else if (screenSize >= 1024) {
        setMd(false);
        setLg(true);
        setImageSize(50);
      } else {
        setMd(false);
        setLg(false);
        setImageSize(100);
      }
    };

    // Scroll Handler
    const handleScroll = () => {
      const scrollTreshold = 80;
      if (resumeContainerRef.current.scrollTop > scrollTreshold) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Escape Shortcut Handler
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShowResume(false);
        handleZoomReset();
        resumeContainerRef.current.scrollTo(0, 0);
      }
    };

    // Initial Window Resize
    handleResize();

    // Add Event Listerners
    window.addEventListener("resize", handleResize);
    resumeContainerRef.current.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleEsc);

    // Cleanup Function/Remove Event Listener
    return () => {
      window.removeEventListener("resize", handleResize);
      resumeContainerRef.current.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 h-screen w-screen flex-col gap-3 overflow-y-auto bg-stone-900 bg-opacity-75 text-light-text backdrop-blur-sm transition-all ${showResume ? "animate__animated animate__fadeInUp animate__fast flex" : "hidden"}`}
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
      ref={resumeContainerRef}
    >
      {/* Resume Navbar */}
      <div
        className={`sticky top-0 z-20 flex w-full px-2 py-4 transition-all duration-300 md:px-6 ${isScroll ? "bg-dark-primary bg-opacity-40 dark:bg-opacity-90" : ""}`}
      >
        <div className="flex grow items-center gap-2 md:gap-6">
          <MdClose
            title="Close"
            className="text-3xl hover:cursor-pointer hover:text-accent hover:opacity-75"
            onClick={() => {
              setShowResume(false);
              handleZoomReset();
              resumeContainerRef.current.scrollTo(0, 0);
            }}
          />
          <p className="whitespace-nowrap text-lg font-medium">
            {"Bernardo_Resume.pdf"}
          </p>
        </div>

        <div className="flex grow items-center justify-end gap-2 md:gap-6">
          <MdDownload
            title="Download"
            className="text-3xl hover:cursor-pointer hover:text-accent hover:opacity-75"
            onClick={handleDownload}
          />
          <MdPrint
            title="Print"
            className="text-3xl hover:cursor-pointer hover:text-accent hover:opacity-75"
            onClick={handlePrint}
          />
        </div>
      </div>

      {/* Resume Image/PDF */}
      <div className="grid grow place-items-center overflow-visible px-2 lg:pb-10">
        <img
          src={"/Bernardo_Resume.jpg"}
          alt=""
          className="print-resume"
          width={`${imageSize}%`}
          ref={pdfRef}
        />
      </div>

      {/* Zoom Buttons */}
      <div
        className={
          "sticky bottom-5 left-1/2 z-50 hidden w-fit -translate-x-1/2 gap-4 rounded-full border border-gray-700 bg-dark-primary bg-opacity-80 px-5 py-1.5 md:flex"
        }
      >
        <MdRemove
          className={`text-2xl hover:cursor-pointer hover:opacity-75 ${imageSize === 50 ? "pointer-events-none opacity-40" : ""}`}
          title="Zoom Out"
          onClick={handleZoomOut}
        />

        {imageSize !== 100 ? (
          <MdZoomIn
            title="Fit to Width"
            className="text-2xl hover:cursor-pointer hover:opacity-75"
            onClick={() => setImageSize(100)}
          />
        ) : (
          <MdZoomOut
            title="Reset Zoom"
            className="text-2xl hover:cursor-pointer hover:opacity-75"
            onClick={handleZoomReset}
          />
        )}

        <MdAdd
          className={`text-2xl hover:cursor-pointer hover:opacity-75 ${imageSize >= 100 ? "pointer-events-none opacity-40" : ""}`}
          title="Zoom In"
          onClick={handleZoomIn}
        />
      </div>
    </div>
  );
}

export default Resume;
