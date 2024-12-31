import {
  discordBlack,
  linkedin,
  github,
  react,
  html,
  css,
  js,
  bootstrap,
  tailwindcss,
  vite,
  npm,
  git,
  brainwave,
  hoobank,
  space,
  car,
  facebook,
  whatsapp,
} from "../assets/index";

export const nav = [
  {
    id: "0",
    title: "home",
    url: "#home",
  },
  {
    id: "1",
    title: "about",
    url: "#about",
  },
  {
    id: "2",
    title: "skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "projects",
    url: "#projects",
  },
  {
    id: "4",
    title: "contact",
    url: "#contact",
  },
];

export const contact = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/qB4YkRcU",
  },
  {
    id: "1",
    title: "linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/shawky-mshrif-6b920a20b/",
  },
  {
    id: "2",
    title: "github",
    iconUrl: github,
    url: "https://github.com/shawky-13",
  },
];
export const contactFooter = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/qB4YkRcU",
  },
  {
    id: "1",
    title: "linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/shawky-mshrif-6b920a20b/",
  },
  {
    id: "2",
    title: "facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=100012562778626&locale=ar_AR",
  },
  {
    id: "3",
    title: "whatsapp",
    iconUrl: whatsapp,
    url: "https://wa.me/+2001553897519",
  },
  {
    id: "4",
    title: "github",
    iconUrl: github,
    url: "https://github.com/shawky-13",
  },
];

export const about = [
  {
    id: "0",
    icon: "🔭",
    text: "I’m currently working on improving my skills in [HTML, CSS, JavaScript(ES6+), Bootstrap5 , TailwindCSS , ReactJS].",
  },
  {
    id: "1",
    icon: "🌱",
    text: "I’m currently learning [Redux , Framer motion & gsap , Typescript , Nodejs + express , Next.js , Unit testing with Vitest ].",
  },
  {
    id: "2",
    icon: "👯",
    text: "I’m looking to collaborate on open-source projects and web applications.",
  },
];

export const skills = [
  {
    id: "0",
    icon: html,
    title: "html5",
  },
  {
    id: "1",
    icon: css,
    title: "css3",
  },
  {
    id: "2",
    icon: js,
    title: "javascript",
  },
  {
    id: "3",
    icon: bootstrap,
    title: "bootstrap",
  },
  {
    id: "4",
    icon: git,
    title: "git",
  },
  {
    id: "5",
    icon: npm,
    title: "npm",
  },
  {
    id: "6",
    icon: tailwindcss,
    title: "tailwindcss",
  },
  {
    id: "7",
    icon: react,
    title: "react",
  },
  {
    id: "8",
    icon: vite,
    title: "vite",
  },
];

export const projects = [
  {
    id: "0",
    image: brainwave,
    title: "Brainwave app",
    skills: [
      {
        id: "0",
        title: "react",
        img: react,
      },
      {
        id: "1",
        title: "vite",
        img: vite,
      },
      {
        id: "2",
        title: "tailwindcss",
        img: tailwindcss,
      },
    ],
    text: "exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    repo: "https://github.com/shawky-13/BrainWave-App",
    url: "https://shawky-13.github.io/BrainWave-App/",
  },
  {
    id: "1",
    title: "hooBank app",
    image: hoobank,
    skills: [
      {
        id: "0",
        title: "react",
        img: react,
      },
      {
        id: "1",
        title: "vite",
        img: vite,
      },
      {
        id: "2",
        title: "tailwindcss",
        img: tailwindcss,
      },
    ],
    text: "exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    repo: "https://github.com/shawky-13/HooBank-App",
    url: "https://shawky-13.github.io/HooBank-App",
  },
  {
    id: "2",
    title: "space toursim website",
    image: space,
    skills: [
      {
        id: "0",
        title: "html",
        img: html,
      },
      {
        id: "1",
        title: "css",
        img: css,
      },
      {
        id: "2",
        title: "javascript",
        img: js,
      },
      {
        id: "3",
        title: "bootstrap",
        img: bootstrap,
      },
    ],
    text: "a modern, responsive website showcasing interstellar destinations. It allows users to explore the space travel options provided by a fictional space tourism company.",
    repo: "https://github.com/shawky-13/Space-Toursim-Website",
    url: "https://shawky-13.github.io/Space-Toursim-Website",
  },
  {
    id: "3",
    title: "car agency landing page",
    image: car,
    skills: [
      {
        id: "0",
        title: "html",
        img: html,
      },
      {
        id: "1",
        title: "css",
        img: css,
      },
      {
        id: "2",
        title: "javascript",
        img: js,
      },
    ],
    text: "The landing page is designed to showcase the services and vehicles offered by the car agency. Users can browse through the available cars, view details, and contact the agency for more information.",
    repo: "https://github.com/shawky-13/Car-Agency-Landing-Page-",
    url: "https://shawky-13.github.io/Car-Agency-Landing-Page-/",
  },
];
