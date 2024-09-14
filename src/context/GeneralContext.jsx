import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { MdHome, MdInfo, MdCode, MdContacts, MdReviews } from "react-icons/md";
import Loader from "../pages/Loader";
//* Create a Context
const GeneralContext = createContext();

//* Configure GeneralContext
export function GeneralProvider({ children }) {
  const navOptions = [
    { icon: <MdHome className="text-2xl" />, label: "Home" },
    { icon: <MdInfo className="text-2xl" />, label: "About" },
    { icon: <MdCode className="text-2xl" />, label: "Projects" },
    { icon: <MdReviews className="text-2xl" />, label: "Testimonials" },
    { icon: <MdContacts className="text-2xl" />, label: "Contact" },
  ];

  //*   useRefs
  const mainContainerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  //*   useStates
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  //*   Funtions
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

  //* useEffects
  //useEffect for Navbar
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
      const testimonialTop = testimonialRef.current.getBoundingClientRect().top;
      const contactTop = contactRef.current.getBoundingClientRect().top;
      // Add other sections similarly

      if (homeTop <= 60 && homeTop > -window.innerHeight / 2) {
        setActiveNav(0);
      } else if (aboutTop <= 60 && aboutTop > -window.innerHeight / 2) {
        setActiveNav(1);
      } else if (projectTop <= 60 && projectTop > -window.innerHeight / 2) {
        setActiveNav(2);
      } else if (
        testimonialTop <= 60 &&
        testimonialTop > -window.innerHeight / 2
      ) {
        setActiveNav(3);
      } else if (contactTop <= 60 && contactTop > -window.innerHeight / 2) {
        setActiveNav(4);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect for Dark Mode
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

  // use for PreLoader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

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
    testimonialRef,
    contactRef,
    darkMode,
    setDarkMode,
    handleDarkMode,
  };

  return (
    <GeneralContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </GeneralContext.Provider>
  );
}

//* Create Custom Hook- useGeneral
export default function useGeneral() {
  return useContext(GeneralContext);
}
