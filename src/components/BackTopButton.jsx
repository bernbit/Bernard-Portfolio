import React from "react";
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

  return (
    <div
      className={`fixed right-3 top-[98%] z-30 hidden translate-y-[-98%] transform flex-col items-center justify-center gap-1 lg:flex ${isScrolled ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}`}
    >
      <div
        className="w-fit rounded-full bg-accent p-1 text-4xl text-light-text hover:cursor-pointer hover:opacity-85"
        onClick={handleBackToTop}
      >
        <ArrowUp />{" "}
      </div>
      <p className="font-medium">Back To Top </p>
    </div>
  );
}

export default BackTopButton;
