import React, { useState, useEffect } from "react";
import useGeneral from "../context/GeneralContext";
import { MdEmail, MdPhone, MdLocationOn, MdWarning } from "react-icons/md";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import Swal from "sweetalert2";

import { useInView } from "react-intersection-observer";

function Contact() {
  const { contactRef, darkMode } = useGeneral();
  const contactInfo = [
    {
      title: "salvabernardojr23@gmail.com",
      icon: MdEmail,
    },
    {
      title: "+63 908 130 4805",
      icon: MdPhone,
    },
    {
      title: "Kawit, Gloria Oriental Mindoro PH",
      icon: MdLocationOn,
    },
  ];
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [inputting, setInputting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please Enter A Valid Email");
      console.log("Incorrect Email");
      return;
    }

    try {
      setError("");
      setInputting(true);
      const sendEmail = await window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "salvabernardojr23@gmail.com",
        Password: "CA79F11AD2A118396C3F55B756267BB57AD8",
        To: "salvabernardojr23@gmail.com",
        From: "salvabernardojr23@gmail.com",
        Subject: `New Message from ${formData.name} via Your Portfolio"`,
        Body: `
        <html>
        <body style="font-family: Verdana, sans-serif;">
          <p style="font-weight: 600">Hello Bernardo,</p>
          <p>I hope this message finds you well.</p>
          <p>I’m reaching out to you through the contact form on your portfolio website to discuss potential opportunities for collaboration or to explore ways we might work together.</p>
          <p><strong>${`"${formData.message}"`}</strong></p>
          <p>Here are my details for reference:</p>
          <ul>
            <li><strong>Name:</strong> ${formData.name}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Phone Number:</strong> ${formData.phoneNumber}</li>
          </ul>

          <p>I would appreciate your response at your earliest convenience. Please let me know if you need any additional information or have any questions.</p>
          <p>Thank you for your time and consideration.</p>
          <p>Best regards,<br>${formData.name}</p>
        </body>
      </html>`,
      });

      if (sendEmail === "OK") {
        const swalResult = await Swal.fire({
          title: "Message sent",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#CC001F",
          position: "center",
          background: darkMode ? "#1A2026" : "#F6F8F9",
          color: darkMode ? "#ffff" : "#111519",
          customClass: {
            container: "custom-swal-container",
            popup: `custom-modal-box swal-custom-padding`,
          },
        });

        if (swalResult.isConfirmed) {
          setFormData({ name: "", email: "", phoneNumber: "", message: "" });
        }
      } else console.log("Email send failed" + sendEmail);
    } catch (error) {
      console.error("Error sending email: " + error);
    }

    setInputting(false);
  };

  const { ref: contactTitleRef, inView: contactTitle } = useInView({
    threshold: 0,
  });

  const { ref: contactBoxRef, inView: contactBox } = useInView({
    threshold: 0,
  });

  return (
    <section
      className="scroll-m-12 px-5 py-10 md:px-10 lg:px-40"
      id="contact"
      ref={contactRef}
    >
      <div
        className={`mb-10 pb-5 text-center ${contactTitle ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        ref={contactTitleRef}
      >
        <p className="font-clash-display text-2xl font-bold uppercase tracking-wider md:text-3xl">
          Contact Me
        </p>
        <p className="text-sm font-light md:text-base">
          Have questions or project inquiries? I'd love to hear from you—let's
          connect!
        </p>
      </div>

      <div
        className={`flex flex-col gap-10 rounded-md border border-extra bg-tertiary p-7 shadow-custom dark:border-none dark:bg-dark-tertiary dark:shadow-none md:flex-row ${contactBox ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        ref={contactBoxRef}
      >
        <div className="flex basis-4/12 flex-col gap-4">
          <p className="text-2xl font-semibold">
            Let's talk on something{" "}
            <span className="text-accent dark:text-dark-accent">great </span>
            together
          </p>
          <div className="flex grow flex-col justify-center gap-6">
            {contactInfo.map((contact, index) => (
              <div className="flex items-center gap-4" key={index}>
                <contact.icon className="text-2xl text-accent dark:text-dark-accent" />
                <p className="">{contact.title}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {platforms.map((platform, index) => (
              <a
                className="rounded-full bg-primary p-2 shadow-custom hover:cursor-pointer hover:opacity-70 dark:bg-dark-primary dark:shadow-none"
                href={platform.link}
                target="_blank"
                name={platform.title}
                key={index}
              >
                <platform.icon className="bg-clip-content text-2xl text-accent dark:text-dark-accent" />
              </a>
            ))}
          </div>
        </div>

        <form
          action=""
          className="flex basis-8/12 flex-col gap-2 rounded-md bg-accent px-5 py-5 dark:bg-dark-accent"
          onSubmit={handleSubmit}
        >
          <div className="text-light-text">
            <p className="text-2xl font-semibold">Get In Touch</p>
            <p className="">Got a question? Reach out and let's connect!</p>
          </div>

          {error && (
            <div
              className={`flex items-center gap-2 rounded-md bg-dark-primary p-2 text-light-text dark:bg-primary dark:text-accent ${error && "animate__animated animate__fadeIn"}`}
            >
              <MdWarning className="text-2xl" />
              <p>{error}</p>
            </div>
          )}

          <input
            className="rounded-md bg-primary px-4 py-2 outline-none dark:bg-dark-primary"
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            placeholder="Full Name"
            required
          />
          <input
            className="rounded-md bg-primary px-4 py-2 outline-none dark:bg-dark-primary"
            onChange={handleChange}
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            required
          />

          <input
            className="rounded-md bg-primary px-4 py-2 outline-none dark:bg-dark-primary"
            onChange={handleChange}
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Phone number"
            required
          />

          <textarea
            className="h-[125px] rounded-md bg-primary px-4 py-2 outline-none dark:bg-dark-primary"
            onChange={handleChange}
            name="message"
            value={formData.message}
            placeholder="Type your message here"
            required
          ></textarea>
          <button
            className="rounded-md bg-primary p-2 text-lg font-semibold text-accent hover:cursor-pointer hover:opacity-90 dark:bg-dark-primary dark:text-dark-accent"
            type="submit"
            disabled={inputting}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
