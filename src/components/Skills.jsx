import React from "react";
import FrontEndLogo from "../assets/svg/FrontEndLogo";
import Web_GraphicLogo from "../assets/svg/Web_GraphicLogo";
import IoTLogo from "../assets/svg/IoTLogo";

function Skills() {
  const skills = [
    {
      title: "Front-end Developement",
      description: (
        <p>
          Experienced in converting design concepts into high-quality,
          functional websites through the use of{" "}
          <span className="rounded-md bg-beewatch p-1 font-semibold uppercase dark:text-dark-text">
            HTML, CSS, JavaScript, and React
          </span>
          . Adept at utilizing{" "}
          <span className="rounded-md bg-beewatch p-1 font-semibold uppercase dark:text-dark-text">
            Tailwind CSS and Bootstrap
          </span>{" "}
          to develop responsive, intuitive interfaces that deliver a seamless
          user experience across various devices. Dedicated to translating
          creative visions into polished digital solutions, with a strong
          emphasis on attention to detail, usability, and optimal performance.
        </p>
      ),
      icon: FrontEndLogo,
      color: "bg-beewatch",
    },
    {
      title: "Web/Graphic Design",
      description: (
        <p>
          Proficient in leveraging{" "}
          <span className="rounded-md bg-enviromentrix p-1 font-semibold uppercase dark:text-dark-text">
            Figma
          </span>{" "}
          for crafting intuitive web designs and{" "}
          <span className="rounded-md bg-enviromentrix p-1 font-semibold uppercase dark:text-dark-text">
            Photoshop
          </span>{" "}
          for producing visually striking graphic designs. Expertise in creating
          compelling visuals for both digital and print media, ensuring that
          every design not only captivates but also functions seamlessly.
          Skilled in transforming abstract concepts into engaging, aesthetically
          pleasing designs that resonate with the target audience and
          effectively communicate the intended message.
        </p>
      ),
      icon: Web_GraphicLogo,
      color: "bg-enviromentrix",
    },
    {
      title: "IoT Development",
      description: (
        <p>
          Experienced in using{" "}
          <span className="rounded-md bg-campus-echo p-1 font-semibold uppercase dark:text-dark-text">
            ESP32/ESP8266
          </span>{" "}
          and{" "}
          <span className="rounded-md bg-campus-echo p-1 font-semibold uppercase dark:text-dark-text">
            Firebase
          </span>{" "}
          to develop smart systems that connect devices and sensors for
          real-world applications. Skilled in merging hardware with software to
          build efficient, scalable IoT solutions that address specific
          challenges. Focused on creating connected systems that enhance
          automation, improve efficiency, and bring the Internet of Things into
          practical use.
        </p>
      ),
      icon: IoTLogo,
      color: "bg-campus-echo",
    },
  ];

  return (
    <div className="py-5">
      <p className="pb-2 text-lg font-bold uppercase md:text-xl">Skills</p>
      <div className="flex flex-col gap-7">
        {skills.map((skill, index) => (
          <div
            className="transform rounded-md border border-extra bg-tertiary px-5 py-7 shadow-custom transition-transform duration-150 hover:scale-[1.03] dark:border-none dark:bg-dark-tertiary dark:shadow-none"
            key={index}
          >
            <div className="flex items-center gap-5">
              <skill.icon width={55} height={55} />
              <p className="relative font-clash-display text-[1.05rem] font-semibold uppercase tracking-widest md:text-xl">
                <span
                  className={`absolute -left-1.5 top-3.5 z-0 h-[10px] w-[104%] ${skill.color}`}
                ></span>
                <span className="relative z-10 whitespace-nowrap font-semibold text-dark-text dark:font-bold dark:text-gray-700 dark:text-stroke">
                  {skill.title}
                </span>
              </p>
            </div>

            <div className="flex gap-5 pt-5">
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
        ))}
      </div>
    </div>
  );
}

export default Skills;
