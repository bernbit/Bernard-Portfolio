import React from "react";
import BernardLogo from "../assets/svg/BernardLogo";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
  const sections = ["home", "about", "projects", "testimonials", "contact"];
  const platforms = [
    {
      title: "Linkedin",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/bernardo-salva-jr",
    },
    {
      title: "GitHub",
      icon: FaGithub,
      link: "https://github.com/bernbit",
    },
    {
      title: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/salvabernardojr23/",
    },
    {
      title: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/bernardosj75/",
    },
  ];

  return (
    <footer className="mt-20 flex flex-col items-center justify-center gap-6 border-t border-extra bg-tertiary px-5 py-8 shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none lg:px-40">
      <div className="flex items-center gap-3">
        <BernardLogo width={"50"} height={"50"} />
        <p className="font-clash-display text-2xl font-semibold tracking-wide">
          Bernard
        </p>
      </div>

      <div className="flex gap-7">
        {sections.map((section, index) => (
          <a
            href={`#${section}`}
            className="dark:hover:text-dark-accent hover:cursor-pointer hover:text-accent"
            key={index}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <div className="dark:text-dark-accent flex items-center gap-7 text-2xl text-accent">
        {platforms.map((platform, index) => (
          <a
            className="hover:cursor-pointer hover:opacity-70"
            href={platform.link}
            target="_blank"
            name={platform.title}
            key={index}
          >
            <platform.icon />
          </a>
        ))}
      </div>

      <hr className="w-full border-[1.5px] border-accent dark:border-accent" />

      <p className="whitespace-nowrap">
        Copyright {currentYear} All Right Reserved |{" "}
        <span className="dark:text-dark-accent font-medium text-accent">
          Bernardo L. Salva Jr
        </span>{" "}
      </p>
    </footer>
  );
}
export default Footer;
