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
    <footer className="mt-20 flex w-full flex-col items-center justify-center gap-6 border-t border-extra bg-tertiary px-5 py-8 shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none lg:px-40">
      <div className="flex items-center gap-3">
        <BernardLogo width={"50"} height={"50"} />
        <p className="font-clash-display text-2xl font-semibold tracking-wide">
          Bernard
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
        {sections.map((section, index) => (
          <a
            href={`#${section}`}
            className="hover:cursor-pointer hover:text-accent dark:hover:text-dark-accent"
            key={index}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-7 text-2xl text-accent dark:text-dark-accent">
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

      <div className="flex flex-col items-center justify-center gap-1 text-center md:flex-row">
        <p>Copyright {currentYear} All Right Reserved |</p>
        <p className="font-medium text-accent dark:text-dark-accent">
          Bernardo L. Salva Jr
        </p>
      </div>
    </footer>
  );
}
export default Footer;
