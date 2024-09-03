import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { MdHome, MdInfo, MdCode, MdContacts } from "react-icons/md";

//* Create a Context
const GeneralContext = createContext();

//* Configure GeneralContext
export function GeneralProvider({ children }) {
  const navOptions = [
    { icon: <MdHome className="text-2xl" />, label: "Home" },
    { icon: <MdInfo className="text-2xl" />, label: "About" },
    { icon: <MdCode className="text-2xl" />, label: "Projects" },
    { icon: <MdContacts className="text-2xl" />, label: "Contact" },
  ];

  //   useRefs
  const mainContainerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  //   useStates
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  //   Funtions
  const handleActiveNav = (index) => {
    setActiveNav(index);
    setShowNav(false);
  };
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  const handleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setDarkMode(true);
  };
  //   useEffects
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const homeTop = homeRef.current.getBoundingClientRect().top;
      const aboutTop = aboutRef.current.getBoundingClientRect().top;
      const projectTop = projectRef.current.getBoundingClientRect().top;
      // Add other sections similarly

      if (homeTop <= 60 && homeTop > -window.innerHeight / 2) {
        setActiveNav(0);
      } else if (aboutTop <= 60 && aboutTop > -window.innerHeight / 2) {
        setActiveNav(1);
      } else if (projectTop <= 60 && projectTop > -window.innerHeight) {
        setActiveNav(2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Themes
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // Initial Theme Check
    const themeCheck = () => {
      if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
        return;
      }

      setDarkMode(false);
    };

    themeCheck();
  }, [darkMode]);

  const value = {
    showNav,
    setShowNav,
    navOptions,
    activeNav,
    setActiveNav,
    handleActiveNav,
    handleShowNav,
    isScrolled,
    setIsScrolled,
    mainContainerRef,
    homeRef,
    aboutRef,
    projectRef,
    darkMode,
    setDarkMode,
    handleDarkMode,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

//* Create Custom Hook- useGeneral
export default function useGeneral() {
  return useContext(GeneralContext);
}
