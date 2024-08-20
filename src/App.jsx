import { useState, useEffect, useRef } from "react";
import useGeneral from "./context/useGeneral";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
//Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ThemeButton from "./components/ThemeButton";

function App() {
  const { showNav, mainContainerRef } = useGeneral();

  return (
    <div
      className={`relative h-screen grid-rows-12 flex-col font-archivo`}
      ref={mainContainerRef}
    >
      <ThemeButton />
      <Navbar />
      <Sidebar />

      {/* Home */}
      <main
        className={`smoother ${showNav ? "pointer-events-none cursor-not-allowed select-none blur-sm" : ""}`}
      >
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
