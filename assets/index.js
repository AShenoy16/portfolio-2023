import logo from "./logo-white.png";
import backend2 from "./backend2.png";
import creator from "./creator3.png";
import mobile2 from "./mobile2.png";
import web from "./web.png";
import github from "./github.png";
import adi from "./adi.png"
import web2 from "./web2.png";
import trouble from "./trouble2.png";


import css from "./tech/css.png";
import matlab from "./tech/matlab.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import python from "./tech/python.png";
import java from "./tech/java.png";
import reactjs from "./tech/reactjs.png";
import nodejs from "./tech/nodejs.png";
import tailwind from "./tech/tailwind.png";
import typescript from "./tech/typescript.png";
import c from "./tech/C.png";

import gb from "./company/gb.png";
import sensational from "./company/sensational.png";
import lynfield from "./company/lynfield.png";
import uoa from "./company/uoa.png";

import quickDrawImage from "./quickDrawImage.png";
import ResearchTrust from "./ResearchTrust.png";
import portfolioImage from "./portfolioImage.png";

export {
  logo,
  backend2,
  creator,
  mobile2,
  web,
  web2,
  trouble,
  github,
  css,
  matlab,
  git,
  html,
  javascript,
  python,
  java,
  reactjs,
  nodejs,
  tailwind,
  typescript,
  c,
  gb,
  sensational,
  lynfield,
  quickDrawImage,
  ResearchTrust,
  adi,
  portfolioImage,
  uoa,
};

const services = [
  {
    title: "Software Engineer",
    icon: trouble,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
  {
    title: "Trouble Shooter",
    icon: web2,
  },
  {
    title: "Aspiring Entrepreneur",
    icon: mobile2,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    progress: 45
  },
  {
    name: "CSS 3",
    icon: css,
    progress: 50
  },
  {
    name: "JavaScript",
    icon: javascript,
    progress: 63
  },
  {
    name: "TypeScript",
    icon: typescript,
    progress: 60
  },
  {
    name: "React JS",
    icon: reactjs,
    progress: 65
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    progress: 70
  },
  {
    name: "Node JS",
    icon: nodejs,
    progress: 45
  },
  {
    name: "Java",
    icon: java,
    progress: 80
  },
  {
    name: "Python",
    icon: python,
    progress: 85
  },
  {
    name: "C",
    icon: c,
    progress: 70
  },
  {
    name: "git",
    icon: git,
    progress: 75
  },
  {
    name: "Matlab",
    icon: matlab,
    progress: 65

  },
];

const experiences = [
  {
    title: "House Leader",
    company_name: "Lynfield College",
    icon: lynfield,
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
    icon: gb,
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
    icon: uoa,
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
    icon: sensational,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Mar 2023",
    points: [
      "Developed strong time-management and multitasking skills by efficiently handling multiple tasks such as taking orders, preparing food, and maintaining cleanliness in a fast-paced environment.",
      "Demonstrated exceptional communication and customer service skills by effectively handling customer complaints, providing menu recommendations, and ensuring customer satisfaction.",
      "Collaborated effectively with a diverse team of coworkers, demonstrating adaptability and teamwork skills in a dynamic work environment.",
    ],
  },
];



const projects = [
  {
    name: "Quick Draw!",
    description:
      "JavaFx game aimed at teens/young adults encouraging them to explore their artistic abilites and put them to the test against others! ",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFx",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: quickDrawImage,
    source_code_link: "https://github.com/",
  },
  {
    name: "Research Assistant",
    description:
      "Studied developer conversations on stack overflow regarding trust. Exploring how we can push this topic to the mainstream.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "BigQuery",
        color: "pink-text-gradient",
      },
    ],
    image: ResearchTrust,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
      "Current portfolio showcasing my projects, skills and technical abilites to potential clients and/or employeers.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioImage,
    source_code_link: "https://github.com/AShenoy16/portfolio-2023",
  },
];

export { services, technologies, experiences, projects };
