import React from "react";
import useGeneral from "../context/useGeneral";
import BernardLogo from "../assets/BernardLogo";

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
      className={`fixed top-0 flex w-full items-center ${isScrolled ? "bg-white" : "bg-box"} z-40 row-span-1 px-5 py-2 transition-colors duration-300 lg:px-36`}
    >
      <div className="flex grow items-center gap-3">
        <a href="#home">
          <BernardLogo width={50} height={50} />
        </a>
        <h1 className="font-clash-display text-2xl font-semibold tracking-wide">
          <a href="#home">Bernard</a>
        </h1>
      </div>
      <ul className="hidden grow justify-end gap-8 text-lg md:flex">
        {navOptions.map((option, index) => (
          <li
            className={`${activeNav === index ? "text-accent" : "text-dark-text"} hover:cursor-pointer hover:text-accent hover:opacity-75`}
            key={index}
            onClick={() => handleActiveNav(index)}
          >
            <a href={`#${option.label.toLowerCase()}`}>{option.label}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <label className="hamburger md:hidden">
        <input type="checkbox" onChange={handleShowNav} checked={showNav} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom stroke-dark-text"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line stroke-dark-text" d="M7 16 27 16"></path>
        </svg>
      </label>
    </nav>
  );
}

export default Navbar;
