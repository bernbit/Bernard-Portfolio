import React, { useEffect } from "react";
import useGeneral from "../context/GeneralContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ThemeButton() {
  const { showNav, darkMode, handleDarkMode } = useGeneral();

  useEffect(() => {
    // Escape Shortcut Handler
    const handleShortcut = (event) => {
      if (event.key === "t") {
        handleDarkMode();
      }
    };
    document.addEventListener("keydown", handleShortcut);

    return () => {
      document.removeEventListener("keydown", handleShortcut);
    };
  }, []);
  return (
    <div
      className={`fixed right-0 top-1/2 z-30 -translate-y-1/2 transform rounded-l-md bg-accent px-3 py-2 text-2xl text-white dark:bg-dark-accent ${showNav ? "blur-sm" : ""} hover:cursor-pointer hover:opacity-80`}
      onClick={handleDarkMode}
    >
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </div>
  );
}

export default ThemeButton;
