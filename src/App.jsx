import { useEffect } from "react";
import useGeneral from "./context/GeneralContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

//Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeButton from "./components/ThemeButton";
import BackTopButton from "./components/BackTopButton";

function App() {
  const { showNav, mainContainerRef } = useGeneral();

  return (
    <div
      className={`relative h-screen grid-rows-12 flex-col font-archivo text-dark-text dark:text-secondary`}
      ref={mainContainerRef}
    >
      <BackTopButton />
      <ThemeButton />
      <Navbar />
      <Sidebar />

      {/* Home */}
      <main
        className={`bg-primary dark:bg-dark-primary ${showNav ? "pointer-events-none cursor-not-allowed select-none blur-sm" : ""}`}
      >
        <Home />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
