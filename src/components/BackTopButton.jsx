import React, { useEffect } from "react";
import { MdKeyboardArrowUp as ArrowUp } from "react-icons/md";
import useGeneral from "../context/GeneralContext";

function BackTopButton() {
  const { isScrolled } = useGeneral();

  const handleBackToTop = () => {
    if (isScrolled) {
      window.scroll({
        top: 0, //y-axis
        left: 0, // x-axis
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Escape Shortcut Handler
    const handleShortcut = (event) => {
      if (event.key === "b") {
        handleBackToTop();
      }
    };
    document.addEventListener("keydown", handleShortcut);

    return () => {
      document.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  return (
    <div
      className={`fixed right-5 top-[98%] z-30 translate-y-[-98%] transform flex-col items-center justify-center gap-1 lg:hidden ${isScrolled ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}`}
    >
      <div
        className="w-fit rounded-full bg-accent p-1 text-4xl text-light-text hover:cursor-pointer hover:opacity-85 dark:bg-dark-accent"
        onClick={handleBackToTop}
      >
        <ArrowUp />{" "}
      </div>
    </div>
  );
}

export default BackTopButton;
