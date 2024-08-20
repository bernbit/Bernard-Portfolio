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

  //   useStates
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  //   Funtions
  const handleActiveNav = (index) => {
    setActiveNav(index);
    setShowNav(false);
  };
  const handleShowNav = () => {
    setShowNav(!showNav);
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
      // Add other sections similarly

      if (homeTop <= 100 && homeTop > -window.innerHeight / 2) {
        setActiveNav(0);
      } else if (aboutTop <= 100 && aboutTop > -window.innerHeight / 2) {
        setActiveNav(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

//* Create Custom Hook- useGeneral
export default function useGeneral() {
  return useContext(GeneralContext);
}
