import React from "react";
import useGeneral from "../context/useGeneral";
import { MdLightMode } from "react-icons/md";

function ThemeButton() {
  const { showNav } = useGeneral();
  return (
    <div
      className={`fixed right-0 top-1/2 z-30 -translate-y-1/2 transform rounded-l-md bg-accent px-3 py-2 text-2xl text-white ${showNav ? "blur-sm" : ""} hover:cursor-pointer hover:opacity-80`}
    >
      <MdLightMode />
    </div>
  );
}

export default ThemeButton;
