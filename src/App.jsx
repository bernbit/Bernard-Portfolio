import BernardLogo from "./assets/BernardLogo";
import HeroImg from "./assets/img/HeroImg.svg";
import HeroPic from "./assets/img/HeroPic.png";
import { MdArrowOutward } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import ReactLogo from "./assets/technologies/ReactLogo";
import TailwindLogo from "./assets/technologies/TailwindLogo";
import FigmaLogo from "./assets/technologies/FigmaLogo";
import PhotoshopLogo from "./assets/technologies/PhotoshopLogo";
import HTMLLogo from "./assets/technologies/HTMLLogo";
import CSSLogo from "./assets/technologies/CSSLogo";
import JSLogo from "./assets/technologies/JSLogo";
import ESPLogo from "./assets/technologies/ESPLogo";
import ArduinoLogo from "./assets/technologies/ArduinoLogo";

import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const mainContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (mainContainerRef.current.scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    mainContainerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      mainContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative flex h-screen flex-col overflow-auto font-archivo"
      ref={mainContainerRef}
    >
      {/* <div className="fixed right-0 top-1/2 z-30 -translate-y-1/2 transform rounded-l-md bg-accent px-3 py-2 text-2xl text-white">
        <MdLightMode />
      </div> */}

      <nav
        className={`sticky top-0 z-30 flex h-full items-center ${isScrolled ? "bg-white" : "bg-box"} px-10 py-2 transition-colors duration-300 lg:px-36`}
      >
        <div className="flex grow items-center gap-3">
          <BernardLogo width={50} height={50} />
          <h1 className="font-clash-display text-2xl font-semibold tracking-wide">
            Bernard
          </h1>
        </div>
        <ul className="hidden grow justify-end gap-8 text-lg md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Home */}
      <main className="grow">
        <section className="flex flex-col items-center gap-16 bg-box px-10 py-10 lg:h-[90vh] lg:flex-row lg:px-36">
          <div className="relative flex basis-5/12 items-center justify-center">
            <img
              src={HeroPic}
              alt="Hero Image"
              className="drop-shadow-lg"
              width={420}
              height={420}
            />
            <div className="absolute left-20 top-1 -translate-y-1 animate-float drop-shadow-lg">
              <ReactLogo width={50} height={50} />
            </div>
            <div className="absolute right-10 top-1 -translate-y-1 animate-float drop-shadow-lg">
              <TailwindLogo width={50} height={50} />
            </div>

            <div className="absolute -right-8 top-[45%] -translate-y-[45%] animate-float drop-shadow-lg">
              <FigmaLogo width={50} height={50} />
            </div>

            <div className="absolute -left-8 top-[45%] -translate-y-[45%] animate-float drop-shadow-lg">
              <PhotoshopLogo width={50} height={50} />
            </div>
            <div className="absolute left-20 top-[93%] -translate-y-[93%] animate-float drop-shadow-lg">
              <ArduinoLogo width={50} height={50} />
            </div>
            <div className="absolute right-10 top-[93%] -translate-y-[93%] animate-float drop-shadow-lg">
              <JSLogo width={50} height={50} />
            </div>
          </div>

          <div className="flex basis-7/12 flex-col items-center gap-2 text-center lg:items-start">
            <p>
              <span className="font-fira-code">---- </span>
              Hello I'm
            </p>
            <p className="font-clash-display text-3xl font-medium tracking-wider md:text-5xl">
              <span className="text-accent underline">Bernardo</span> Salva Jr.
            </p>
            <p className="font-clash-display text-xl font-bold tracking-wider md:text-3xl">
              A{" "}
              <span>
                <Typewriter
                  words={[
                    "Front-end Developer",
                    "Web/Graphic Designer",
                    "Internet of Things Developer",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  // typeSpeed={70}
                  // deleteSpeed={50}
                  // delaySpeed={1}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </span>
            </p>
            <p className="text-center lg:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              distinctio cumque error quasi expedita blanditiis, soluta
              architecto iure temporibus autem ex, aspernatur obcaecati quas
              deleniti incidunt ad asperiores minus hic?lorem*100
            </p>
            <div className="flex gap-4 pt-5">
              <button className="rounded-md bg-accent px-6 py-3 text-white">
                View Resume
              </button>
              <button className="flex items-center px-6 py-3">
                Projects{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </div>
        </section>

        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa eius
          facilis. Fugiat consequuntur rem eligendi ratione molestiae, minima
          non maxime deleniti veniam facilis praesentium officia maiores eum,
          sequi deserunt. Quas laudantium sint cupiditate! Iste quod aliquam
          sapiente eum consequatur adipisci impedit reiciendis nihil molestiae
          corporis accusamus, corrupti pariatur ea accusantium dolorum assumenda
          nisi temporibus saepe, enim odit, ut voluptas. Iusto quia recusandae
          dolorem. Architecto possimus sed consectetur perspiciatis nihil
          corrupti, ratione corporis totam quo maiores harum libero laborum
          officiis magni commodi quasi? Sunt deleniti totam nihil quam
          aspernatur nostrum. Ipsum ullam nesciunt quasi sit vero accusantium
          incidunt eum soluta commodi alias. Provident tempore in tempora
          dolorum eveniet non, illum, corporis dolor, minima eum vitae nostrum
          quos necessitatibus ad dolores. At itaque consequatur earum quidem
          quisquam, minus quo officia enim deserunt labore fugit impedit laborum
          maxime harum tempora ut nihil animi et necessitatibus ipsum corporis
          adipisci deleniti. Adipisci, neque suscipit! Sit eos necessitatibus
          labore saepe molestias illum provident est ratione quasi! Vero ab
          beatae doloremque quasi! Sint facilis exercitationem illo fugit, ex
          totam dolorem voluptatibus excepturi mollitia laborum ducimus dolorum?
          Architecto qui voluptatem rerum quaerat iure delectus et dolor vero
          consectetur deleniti, aliquam odio corporis dicta, enim, accusamus
          modi inventore ut voluptas veritatis minus dolorum pariatur aliquid?
          Sunt, optio voluptatum? Iste architecto a hic ab assumenda. Cum
          tempore animi enim et aliquam. Est odit libero minus quo possimus?
          Beatae nostrum molestias pariatur quaerat, eum repellat commodi
          exercitationem dolore recusandae culpa! Ipsam quod, eos, unde in iure
          eaque ad ullam porro culpa, quam eveniet error reprehenderit modi
          perspiciatis doloremque labore! Sunt vel quasi deleniti quaerat. Odit
          debitis omnis aspernatur maxime delectus. Ratione quidem eos eveniet
          dolorem pariatur obcaecati aspernatur dolores accusantium quibusdam
          quia consectetur ducimus sed aliquam id incidunt vitae numquam, nobis
          optio consequatur deserunt quis expedita natus totam porro. Animi.
          Debitis veritatis repudiandae nam dolore eveniet, nihil temporibus
          quis eum pariatur, voluptatum cupiditate officiis fugiat
          necessitatibus quas aut dicta ipsum officia atque enim dignissimos
          recusandae. Architecto qui maiores molestias fugiat. Minus harum nihil
          praesentium ea magnam quam molestiae unde, saepe qui placeat incidunt
          corporis, omnis ut explicabo obcaecati eos aperiam veritatis quis
          voluptatem? Fuga ex quis praesentium vel est quo.
        </section>
      </main>
    </div>
  );
}

export default App;
