import React from "react";
import useGeneral from "../context/GeneralContext";
import Quote from "../assets/svg/Quote";
import Rate from "../assets/svg/Rate";
import Sample from "../assets/img/Unknown.png";
import Arc from "../assets/img/Clients/Arc.png";

import { useInView } from "react-intersection-observer";

function Testimonials() {
  const { testimonialRef } = useGeneral();

  const testimonies = [
    {
      name: "Jetlorel",
      project: "GKeep Client",
      description:
        "The GKeep app Bernardo built for us was exactly what we needed — straightforward, effective, and easy to use. It helped us track goats in real time, and he was always responsive to feedback. It felt like working with a partner, not just a developer.",
      img: Sample,
      fill: "fill-gkeep",
      "bg-color": "bg-gkeep",
    },
    {
      name: "Julius ",
      project: "Pinyaxtract Client",
      description:
        "Working with Bernardo was a great experience. He developed a clean, reliable app that was easy to use and aligned with what we had envisioned. He treats your project with care, always open to suggestions, and brings thoughtful ideas to the table.",
      img: Sample,
      fill: "fill-pinyaxtact",
      "bg-color": "bg-pinyaxtact",
    },
    {
      name: "Lawrence ",
      project: "BalingTech Client",
      description:
        "Bernardo built the Balingtech app exactly how we needed it. It lets us set timers for each step in the cassava chip process — like slicing, drying, and more — and it even records all the operations. There's also a start/stop button and flavor selection, which made things more flexible. Everything worked well, and he was easy to work with the whole time.",
      img: Sample,
      fill: "fill-balingtech",
      "bg-color": "bg-balingtech",
    },
    {
      name: "Myca",
      project: "BananaCare Client",
      description:
        "We worked with Bernardo to build BananaCare, a web app that detects banana diseases through image analysis. He made the process simple for users — just capture an image and get instant results. The UI was clean, and the detection was surprisingly accurate. His technical skills and user-focused design really stood out.",
      img: Sample,
      fill: "fill-bananacare",
      "bg-color": "bg-bananacare",
    },
    {
      name: "Arc",
      project: "BeeWatch Client",
      description:
        "Bernardo was instrumental in bringing our BeeWatch concept to life. He developed a real-time monitoring system for temperature and humidity with built-in alerts that help us respond quickly to any changes. His attention to detail and clear communication made the whole process smooth from start to finish.",
      img: Sample,
      fill: "fill-beewatch",
      "bg-color": "bg-beewatch",
    },
    {
      name: "Joseph",
      project: "Envirometrix Client",
      description:
        "We needed a smart solution for tracking environmental conditions in a garden setting, and Bernardo delivered exactly that. The system he built monitors moisture, pH, humidity, and more — all with real-time notifications. He really listened to our goals and built something that worked beyond expectations.",
      img: Sample,
      fill: "fill-envirometrix",
      "bg-color": "bg-envirometrix",
    },
  ];

  const { ref: testimonialTitleRef, inView: testimonialTitle } = useInView({
    threshold: 0,
  });

  return (
    <section
      className="scroll-m-12 overflow-hidden px-5 py-10 md:px-10 lg:px-40"
      id="testimonials"
      ref={testimonialRef}
    >
      <div
        className={`mb-20 pb-5 text-center ${testimonialTitle ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        ref={testimonialTitleRef}
      >
        <p className="font-clash-display text-2xl font-bold uppercase tracking-wider md:text-3xl">
          Testimonials
        </p>
        <p className="text-sm font-light md:text-base">
          See how my clients describe their experiences and the impact of my
          work.
        </p>
      </div>

      <div className="mt-7 grid gap-20 md:grid-cols-2 md:gap-x-7 md:gap-y-20">
        {testimonies.map((testimony, index) => {
          const { ref: testimonialBoxRef, inView: testimonialBox } = useInView({
            threshold: 0,
          });

          const testimonialAnimation = testimonialBox
            ? index % 2 === 0
              ? "animate__animated animate__fadeInLeft"
              : "animate__animated animate__fadeInRight"
            : "opacity-0";

          return (
            <div
              className={`relative basis-1/2 rounded-md border border-extra bg-tertiary shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none ${testimonialAnimation}`}
              key={index}
              ref={testimonialBoxRef}
            >
              {/* Avatar */}
              <div
                className={`absolute -top-10 left-1/2 h-[80px] w-[80px] -translate-x-1/2 transform overflow-hidden rounded-full ${testimony["bg-color"]}`}
              >
                <img src={testimony.img} alt="" />
              </div>

              <div className="flex h-full flex-col px-8 py-8">
                {/* Header */}
                <div className="grid grid-cols-3">
                  <Quote width={75} height={75} color={testimony.fill} />
                  <div className="flex flex-col items-center justify-center">
                    <p className="mt-4 whitespace-nowrap text-2xl font-medium">
                      {testimony.name}
                    </p>
                    <p className="whitespace-nowrap font-light">
                      {testimony.project}
                    </p>
                  </div>
                  <div></div>
                </div>

                {/* Body */}
                <div className="grid grow place-items-center">
                  <p className="text-align-last-center py-4 text-justify">
                    {testimony.description}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <Rate width={"150"} height={"25"} color={testimony.color} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
