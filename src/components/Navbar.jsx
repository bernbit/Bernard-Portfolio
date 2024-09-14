import React from "react";
import useGeneral from "../context/GeneralContext";
import BernardLogo from "../assets/svg/BernardLogo";

function Navbar() {
  const {
    navOptions,
    activeNav,
    handleActiveNav,
    showNav,
    handleShowNav,
    isScrolled,
  } = useGeneral();

  return (
    <nav
      className={`fixed left-1/2 z-40 row-span-1 flex -translate-x-1/2 transform items-center px-5 py-2 transition-all duration-200 ease-out lg:px-40 ${isScrolled || showNav ? "bg-secondary dark:bg-dark-secondary" : "bg-primary dark:bg-dark-primary"} ${isScrolled ? "top-0 w-full rounded-none" : "top-6 w-5/6 rounded-full"} ${!isScrolled || showNav ? "shadow-custom dark:shadow-none" : "shadow-none"} ${!isScrolled && showNav ? "border border-gray-600" : "border-none"}`}
    >
      <div className="flex grow items-center gap-3">
        <a href="/">
          <BernardLogo width={50} height={50} />
        </a>
        <h1 className="font-clash-display text-2xl font-semibold tracking-wide">
          <a href="#home">Bernard</a>
        </h1>
      </div>
      <div className="hidden grow justify-end gap-8 text-lg font-medium md:flex">
        {navOptions.map((option, index) => (
          <a
            className={`${activeNav === index ? "text-accent" : ""} py-2 hover:cursor-pointer hover:text-accent hover:opacity-75`}
            key={index}
            onClick={() => handleActiveNav(index)}
            href={`#${option.label.toLowerCase()}`}
          >
            {option.label}
          </a>
        ))}
      </div>

      {/* Hamburger Menu */}
      <label className="hamburger md:hidden">
        <input type="checkbox" onChange={handleShowNav} checked={showNav} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom stroke-dark-text dark:stroke-light-text"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path
            className="line stroke-dark-text dark:stroke-light-text"
            d="M7 16 27 16"
          ></path>
        </svg>
      </label>
    </nav>
  );
}

export default Navbar;
