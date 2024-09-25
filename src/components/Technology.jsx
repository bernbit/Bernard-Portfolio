import React from "react";
import HTMLLogo from "../assets/svg/HTMLLogo";
import CSSLogo from "../assets/svg/CSSLogo";
import JSLogo from "../assets/svg/JSLogo";
import BootstrapLogo from "../assets/svg/BootstrapLogo";
import TailwindLogo from "../assets/svg/TailwindLogo";
import ReactLogo from "../assets/svg/ReactLogo";
import FigmaLogo from "../assets/svg/FigmaLogo";
import PhotoshopLogo from "../assets/svg/PhotoshopLogo";
import ESPLogo from "../assets/svg/ESPLogo";
import FirebaseLogo from "../assets/svg/FirebaseLogo";
import ArduinoLogo from "../assets/svg/ArduinoLogo";
import CPlusPlusLogo from "../assets/svg/CPlusPlusLogo";
import CSharpLogo from "../assets/svg/CSharpLogo";
import GitLogo from "../assets/svg/GitLogo";
import GitHubLogo from "../assets/svg/GitHubLogo";
import VSCodeLogo from "../assets/svg/VSCodeLogo";

import { useInView } from "react-intersection-observer";

function Technology() {
  const technologies = [
    { logo: HTMLLogo, title: "HTML" },
    { logo: CSSLogo, title: "CSS" },
    { logo: JSLogo, title: "JavaScript" },
    { logo: BootstrapLogo, title: "Bootstrap" },
    { logo: TailwindLogo, title: "Tailwind CSS" },
    { logo: ReactLogo, title: "React" },
    { logo: FigmaLogo, title: "Figma" },
    { logo: PhotoshopLogo, title: "Photoshop" },
    { logo: ESPLogo, title: "ESP32" },
    { logo: FirebaseLogo, title: "Firebase" },
    { logo: ArduinoLogo, title: "Arduino" },
    { logo: CPlusPlusLogo, title: "C++" },
    { logo: CSharpLogo, title: "C#" },
    { logo: GitLogo, title: "Git" },
    { logo: GitHubLogo, title: "GitHub" },
    { logo: VSCodeLogo, title: "VS Code" },
  ];

  const { ref: techTitleRef, inView: techTitle } = useInView({
    threshold: 0,
  });
  const { ref: techBoxRef, inView: techBox } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="pt-2">
      <p
        className={`pb-2 text-lg font-bold uppercase md:text-xl ${
          techTitle ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
        ref={techTitleRef}
      >
        Technology
      </p>

      <div
        className={`rounded-md border border-extra bg-tertiary px-5 py-7 shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none ${techBox ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        ref={techBoxRef}
      >
        <div className="grid grid-cols-4 gap-y-5 md:grid-cols-8">
          {technologies.map((technology, index) => (
            <div
              className="flex flex-col items-center justify-center gap-2 text-center"
              key={index}
            >
              <div className="smoother rounded-full border-gray-300 drop-shadow-lg hover:scale-[1.3] hover:transition-all hover:duration-300 dark:drop-shadow-none">
                <technology.logo
                  width={60}
                  height={60}
                  circle={
                    <rect
                      width="88"
                      height="88"
                      rx="44"
                      className="fill-secondary dark:fill-dark-secondary"
                    ></rect>
                  }
                />
              </div>
              <p className="whitespace-nowrap font-medium">
                {technology.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
