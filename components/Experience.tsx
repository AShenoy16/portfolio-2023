import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles/styles";
import { experiences } from "@/assets";
import { StaticImageData } from "next/image";

type Props = {};

interface WorkExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: StaticImageData;
    iconBg: string;
    date: string;
    points: string[];
  };
}

const WorkExperienceCard = ({ experience }: WorkExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      className="font-mono"
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon.src}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold font-mono">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold font-mono"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={"experience-point-${index}"}
            className="text-white-100 text-[14px] pl-1 tracking-wider font-mono"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function Experience({}: Props) {
  return (
    <div>
      <div
        className="flex-col text-center max-w-5xl justify-evenly mx-auto py-20"
      >
        <h2 className="text-white font-black font-mono md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          <span className="text-[#7b40fa]">Experience</span>
        </h2>
      </div>

      <div
        className="mt-[-70px] md:mt-[-20px] flex flex-col mr-7 ml-4 md:mr-3.5 md:ml-0 lg:px-10 lg:mr-11 lg:ml-8"
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <WorkExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
