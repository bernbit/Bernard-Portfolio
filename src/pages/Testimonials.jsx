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
      name: "Arc Datario",
      project: "BeeWatch Client",
      description:
        "Working with Bernardo on our BeeWatch IoT project has been a great experience! He created a system that monitors the temperature and humidity of our beehives in real-time. Bernardo paid great attention to detail, making sure that we receive automatic alerts for any critical changes, so we can respond quickly. The data insights and user-friendly interface have really improved how we manage our hives. Highly recommend him for any IoT or web development work!",
      img: Sample,
      fill: "fill-beewatch",
      "bg-color": "bg-beewatch",
    },
    {
      name: "Joseph Ortega",
      project: "Envirometrix Client",
      description:
        "Envirometrix has completely changed the way we approach gardening! Bernardo delivered an outstanding smart monitoring system that tracks everything from soil moisture to humidity in real-time. The push notifications are a lifesaver, ensuring we never miss a critical change. It's not just about data; it’s about peace of mind knowing our plants are in good hands. I can't thank Bernardo enough for his expertise and dedication—he truly understands the needs of his clients!",
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

      <div className="mt-7 flex flex-col gap-20 md:flex-row md:gap-7">
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
