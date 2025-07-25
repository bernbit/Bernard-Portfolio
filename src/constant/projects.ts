import { PROJECT_IMAGES } from "./images";

export const projects = [
  //Application Projects
  {
    isApp: true,
    title: "GKeep",
    description:
      "GKeep is a  smart goat monitoring app for real-time goat tracking and management. It monitors goat locations, sends alerts if they leave the farm zone, supports live camera viewing, and allows remote control of the farm gate.",
    techology: ["React Native", "Expo", "Nativewind", "Firebase"],
    isLightText: true,
    color: "bg-gkeep",
    textColor: "text-gkeep",
    textHoverColor: "hover:text-gkeep",
    fill: "fill-gkeep",
    desktopImg: PROJECT_IMAGES.GKeep.desktop,
    phoneImg: PROJECT_IMAGES.GKeep.phone,
    link: "https://www.youtube.com/embed/lW9lv-QJyvw?rel=0",
  },
  {
    isApp: true,
    title: "Pinyaxtract",
    description:
      "Pinyaxtract is a smart control and monitoring app for pineapple fiber extraction machines. It allows users to adjust fan, blade, roller speed, and heater levels, monitor real-time temperature, receive overheat alerts, and track the weight of extracted fiber with automatic recording.",
    techology: ["React Native", "Expo", "Nativewind", "Firebase"],
    isLightText: false,
    color: "bg-pinyaxtact",
    textColor: "text-pinyaxtact",
    textHoverColor: "hover:text-pinyaxtact",
    fill: "fill-pinyaxtact",
    desktopImg: PROJECT_IMAGES.Pinyaxtract.desktop,
    phoneImg: PROJECT_IMAGES.Pinyaxtract.phone,
    link: "https://www.youtube.com/embed/uqmcu0BoUqw?rel=0",
  },
  {
    isApp: true,
    title: "BalingTech",
    description:
      "BalingTech is a smart automation app for cassava chip production. It allows users to set precise operation times for each stage—such as slicing and drying—select desired chip flavors, log production activities, and control the machine with built-in start/stop functionality.",
    techology: ["React Native", "Expo", "Nativewind", "Firebase"],
    isLightText: false,
    color: "bg-balingtech",
    textColor: "text-balingtech",
    textHoverColor: "hover:text-balingtech",
    fill: "fill-balingtech",
    desktopImg: PROJECT_IMAGES.BalingTech.desktop,
    phoneImg: PROJECT_IMAGES.BalingTech.phone,
    link: "https://www.youtube.com/embed/ad0RYx8uaSs?rel=0",
  },

  //Website Projects
  {
    isApp: false,
    title: "BananaCare",
    description:
      "BananaCare is a web app for detecting banana plant diseases through image uploads. It identifies diseases like Moko, Cordana, and Sigatoka and more, provides a percentage-based analysis, and offers care recommendations. An admin dashboard visualizes detection results and tracks disease trends.",

    techology: ["Next.js", "Prisma", "Postgresql", "Shadcn", "Tailwind"],
    isLightText: true,
    color: "bg-bananacare",
    textColor: "text-beewatch",
    textHoverColor: "hover:text-bananacare",
    fill: "fill-bananacare",
    desktopImg: PROJECT_IMAGES.BananaCare.desktop,
    phoneImg: PROJECT_IMAGES.BananaCare.phone,
    link: "",
  },
  {
    isApp: false,
    title: "BeeWatch",
    description:
      "BeeWatch is a smart beehive monitoring web app that tracks temperature and humidity in real time. It automates fan control based on climate conditions, supports manual overrides, and visualizes data through interactive graphs and tables. The system includes user management for secure access and allows data export in formats like XLS and PDF.",

    techology: ["React", "Tailwind", "Firebase", "Chart.js", "ESP32"],
    isLightText: false,
    color: "bg-beewatch",
    textColor: "text-beewatch",
    textHoverColor: "hover:text-beewatch",
    fill: "fill-beewatch",
    desktopImg: PROJECT_IMAGES.BeeWatch.desktop,
    phoneImg: PROJECT_IMAGES.BeeWatch.phone,
    link: "https://beewatch-demo.web.app/",
  },
  {
    isApp: false,
    title: "Envirometrix",
    description:
      "Envirometrix is a smart plant monitoring web app that integrates IoT sensors to track temperature, humidity, soil moisture, and pH levels. It features motion detection, automated and manual control of a water pump, and sends alerts when soil moisture drops below normal. Designed to support efficient and data-driven plant care.",

    techology: ["React", "CSS", "Firebase", "ESP32"],
    isLightText: true,
    color: "bg-envirometrix",
    textColor: "text-envirometrix",
    textHoverColor: "hover:text-envirometrix",
    fill: "fill-envirometrix",
    desktopImg: PROJECT_IMAGES.Envirometrix.desktop,
    phoneImg: PROJECT_IMAGES.Envirometrix.phone,
    link: "https://envirometrix-demo.web.app/",
  },
  //   {
  //     isApp: false,
  //     title: "Campus Echo",
  //     description:
  //       "Campus Echo is a platform where users can freely share their thoughts, rants, and complaints in real-time. It utilizes Firebase Firestore to store posts and Firebase Authentication for authetication, ensuring a seamless experience for users. Built with React for a dynamic frontend and styled with Tailwind CSS, Campus Echo offers a modern and responsive interface. The project promotes an open space for user expression, enabling easy interaction and community engagement.",

  //     techology: ["React", "Tailwind", "Firebase"],
  //     color: "bg-campus-echo",
  //     textColor: "text-campus-echo",
  //     desktopImg: [
  //       CampusEcho_SS1,
  //       CampusEcho_SS2,
  //       CampusEcho_SS3,
  //       CampusEcho_SS4,
  //       CampusEcho_SS5,
  //     ],
  //     phoneImg: CampusEchoPhone_SS1,
  //     phoneImg2: CampusEchoPhone_SS2,
  //     link: "https://campus-echo.web.app/",
  //   },
];
