import useGeneral from "./context/GeneralContext";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
//Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ThemeButton from "./components/ThemeButton";

function App() {
  const { showNav, mainContainerRef } = useGeneral();

  return (
    <div
      className={`relative h-screen grid-rows-12 flex-col font-archivo text-dark-text dark:text-secondary`}
      ref={mainContainerRef}
    >
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
      </main>
    </div>
  );
}

export default App;
