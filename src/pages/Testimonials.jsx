import React from "react";
import useGeneral from "../context/GeneralContext";
import Quote from "../assets/svg/Quote";
import Rate from "../assets/svg/Rate";
import Sample from "../assets/img/Sample.jpg";

import { useInView } from "react-intersection-observer";

function Testimonials() {
  const { testimonialRef } = useGeneral();

  const testimonies = [
    {
      name: "Arc Datario",
      project: "BeeWatch Client",
      description:
        "Working with Pedro was a fantastic experience! He brought our vision to life with his keen eye for design and exceptional front-end development skills. The website he built is not only visually stunning but also incredibly responsive across all devices. Pedro's attention to detail and ability to seamlessly integrate our feedback made the process smooth and efficient.Highly recommend him for any web development project!",
      img: Sample,
      color: "fill-beewatch",
    },
    {
      name: "Joseph Ortega",
      project: "Enviromentrix Client",
      description:
        "Working with Pedro was a fantastic experience! He brought our vision to life with his keen eye for design and exceptional front-end development skills. The website he built is not only visually stunning but also incredibly responsive across all devices. Pedro's attention to detail and ability to seamlessly integrate our feedback made the process smooth and efficient.Highly recommend him for any web development project!",
      img: Sample,
      color: "fill-enviromentrix",
    },
  ];

  const { ref: testimonialTitleRef, inView: testimonialTitle } = useInView({
    threshold: 0,
  });

  return (
    <section
      className="scroll-m-12 overflow-hidden px-5 py-10 lg:px-40"
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
          See what clients say about my work, highlighting my focus on clean
          design and seamless user experiences.
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
              <div className="absolute -top-10 left-1/2 h-[80px] w-[80px] -translate-x-1/2 transform overflow-hidden rounded-full border border-dark-primary">
                <img src={testimony.img} alt="" />
              </div>

              <div className="px-8 py-8">
                {/* Header */}
                <div className="grid grid-cols-3">
                  <Quote width={75} height={75} color={testimony.color} />
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
                <p className="text-align-last-center py-4 text-justify">
                  {testimony.description}
                </p>

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
