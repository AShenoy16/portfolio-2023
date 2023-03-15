import logo from "./logo-white.png";
import backend from "./backend.png";
import creator from "./creator.png";
import mobile from "./mobile.png";
import web from "./web.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

import css from "./tech/css.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";
import typescript from "./tech/typescript.png";
import threejs from "./tech/threejs.svg";

import meta from "./company/meta.png";
import shopify from "./company/shopify.png";
import starbucks from "./company/starbucks.png";
import tesla from "./company/tesla.png";

import carrent from "./carrent.png";
import jobit from "./jobit.png";
import tripguide from "./tripguide.png";

export {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  meta,
  shopify,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
};

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Innovator",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    progress: 88
  },
  {
    name: "CSS 3",
    icon: css,
    progress: 88
  },
  {
    name: "JavaScript",
    icon: javascript,
    progress: 88
  },
  {
    name: "TypeScript",
    icon: typescript,
    progress: 88
  },
  {
    name: "React JS",
    icon: reactjs,
    progress: 88
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    progress: 88
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    progress: 88
  },
  {
    name: "Node JS",
    icon: nodejs,
    progress: 88
  },
  {
    name: "MongoDB",
    icon: mongodb,
    progress: 88
  },
  {
    name: "Three JS",
    icon: threejs,
    progress: 88
  },
  {
    name: "git",
    icon: git,
    progress: 88
  },
  {
    name: "figma",
    icon: figma,
    progress: 88

  },
];

const experiences = [
  {
    title: "House Leader",
    company_name: "Lynfield College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2020 - December 2020",
    points: [
      "Played a key role in guiding the house through the challenges of the COVID-19 lockdowns, implementing innovative strategies to maintain morale and engagement among house members.",
      "Fostered a strong sense of community within the house, promoting teamwork and collaboration among members and ensuring that everyone felt valued and supported.",
      "Effectively motivated and guided the house to a second-place finish in overall house competitions, leading by example and encouraging members to perform at their best.",
    ],
  },
  {
    title: "Admin Assistant",
    company_name: "Gallagher Basset",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2020 - Feb 2021",
    points: [
      "Collaborated effectively with accountants and other finance professionals, utilizing strong interpersonal skills to build positive working relationships and ensure accurate and timely completion of tasks.",
      "Communicated complex financial information clearly and concisely to clients and colleagues, demonstrating exceptional verbal and written communication skills.",
      "Maintained a high level of professionalism and attention to detail, ensuring accuracy and completeness in financial reporting and analysis, skills that can be transferred to software development projects.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "University of Auckland",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Conducted research on developer conversations around trust, collected and analyzed data, and presented the findings to my colleagues and superiors.",
      "Gained valuable experience in utilizing various research methodologies and tools, demonstrating adaptability and a willingness to learn new skills.",
      "Demonstrated exceptional organizational skills by managing and maintaining accurate records of research data, as well as coordinating schedules and meeting",
    ],
  },
  {
    title: "Food Service Associate",
    company_name: "Sensational Chicken",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Mar 2023",
    points: [
      "Developed strong time-management and multitasking skills by efficiently handling multiple tasks such as taking orders, preparing food, and maintaining cleanliness in a fast-paced environment.",
      "Demonstrated exceptional communication and customer service skills by effectively handling customer complaints, providing menu recommendations, and ensuring customer satisfaction.",
      "Collaborated effectively with a diverse team of coworkers, demonstrating adaptability and teamwork skills in a dynamic work environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
