import React from "react";
import FrontEndLogo from "../assets/svg/FrontEndLogo";
import Web_GraphicLogo from "../assets/svg/Web_GraphicLogo";
import IoTLogo from "../assets/svg/IoTLogo";
import { useInView } from "react-intersection-observer";

function Skills() {
  const skills = [
    {
      title: "Front-end Developement",
      description: (
        <p className="leading-[1.8]">
          Skilled in building user-friendly websites using{" "}
          <span className="rounded-md bg-beewatch px-1 py-1.5 font-semibold uppercase dark:text-dark-text">
            HTML, CSS, and JavaScript
          </span>
          {""} along with{" "}
          <span className="rounded-md bg-beewatch px-1 py-1.5 font-semibold uppercase dark:text-dark-text">
            React, Tailwind CSS, and Bootstrap
          </span>{" "}
          to create responsive designs that perform well on any device.
          Experienced in turning design prototypes into functional and engaging
          websites, focusing on the details and ensuring everything runs
          smoothly..
        </p>
      ),
      icon: FrontEndLogo,
      color: "bg-beewatch",
    },
    {
      title: "Web/Graphic Design",
      description: (
        <p className="leading-[1.8]">
          Proficient in {""}
          <span className="rounded-md bg-envirometrix px-1 py-1.5 font-semibold uppercase dark:text-dark-text">
            Figma
          </span>{" "}
          for designing clean, intuitive websites and{" "}
          <span className="rounded-md bg-envirometrix px-1 py-1.5 font-semibold uppercase dark:text-dark-text">
            Photoshop
          </span>{" "}
          for creating standout graphics. Experienced in making visuals for both
          digital and print that look great and work well. Focused on turning
          ideas into designs that connect with the audience and communicate the
          right message.
        </p>
      ),
      icon: Web_GraphicLogo,
      color: "bg-envirometrix",
    },
    {
      title: "IoT Development",
      description: (
        <p className="leading-[1.8]">
          Experienced in using{" "}
          <span className="rounded-md bg-campus-echo px-1 py-1.5 font-semibold uppercase dark:text-dark-text">
            ESP32/ESP8266
          </span>{" "}
          and{" "}
          <span className="rounded-md bg-campus-echo px-1 py-1.5 font-semibold uppercase dark:text-dark-text">
            Firebase
          </span>{" "}
          to build smart systems that connect devices and sensors. Skilled in
          combining hardware and software to create efficient, scalable IoT
          solutions. Focused on developing connected systems that enhance
          automation and improve efficiency."
        </p>
      ),
      icon: IoTLogo,
      color: "bg-campus-echo",
    },
  ];

  const { ref: skillTitleRef, inView: skillTitle } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="py-5">
      <p
        className={`pb-2 text-lg font-bold uppercase md:text-xl ${
          skillTitle ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
        ref={skillTitleRef}
      >
        Skills
      </p>
      <div className={`flex flex-col gap-7`}>
        {skills.map((skill, index) => {
          const { ref: skillBoxRef, inView: skillBox } = useInView({
            // threshold: 0.2,
            initialInView: true,
          });

          return (
            <div
              key={index}
              ref={skillBoxRef}
              className={`rounded-md border border-extra bg-tertiary px-5 py-7 shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none ${skillBox ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
            >
              <div className="flex items-center gap-3 md:gap-5">
                <skill.icon width={55} height={55} />
                <p className="relative font-clash-display text-[1.05rem] font-semibold uppercase tracking-widest md:text-xl">
                  <span
                    className={`absolute -left-1.5 top-3.5 z-0 h-[10px] w-[104%] ${skill.color} bg-opacity-85 dark:bg-opacity-80`}
                  ></span>
                  <span className="relative z-10 whitespace-nowrap font-semibold text-dark-text dark:font-bold dark:text-gray-700 dark:text-stroke">
                    {skill.title}
                  </span>
                </p>
              </div>

              <div className="flex gap-0 pt-5 md:gap-5">
                <div className="flex flex-col items-center px-2 font-fira-code text-sm text-gray-400">
                  <p className="">{"<h3>"}</p>
                  <p className="dark-text h-full border-l-2 border-gray-400"></p>
                  <p className="whitespace-nowrap">{"</h3>"}</p>
                </div>

                <div className="py-6 text-justify text-base font-light leading-[1.85rem] md:text-lg">
                  {skill.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
