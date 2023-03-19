import React from "react";
import { motion } from "framer-motion";
import { services } from "../assets";
import { trouble, creator, web2, mobile2 } from "../assets/index";
import Tilt from 'react-parallax-tilt';
import { styles } from "../styles/styles";

import type { StaticImageData } from "next/image";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: StaticImageData;
  options?: Record<string, any>;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt className="mb:w-[250px] w-48">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 1,
        }}
        transition={{
          duration: 0.75,
        }}
        className="w-full green-pink-gradient p-[3px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[230px] flex justify-evenly items-center flex-col">
          <img
            src={icon.src}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center font-mono">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 1,
        }}
        transition={{
          duration: 0.75,
        }}
        className="flex flex-col max-w-5xl justify-evenly mx-auto py-20 md:px-6 lg:px-0 items-center"
      >
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mx-7 md:mx-0 lg:mx-0 font-mono">
          <span className="text-[#7b40fa]">About </span>Me
        </h2>
        <p className="text-[17px] text-white lg:mx-10 lg:ml-auto mt-10 mx-7 md:mx-0 md:ml-auto font-mono">
          Welcome to my portfolio! As an aspiring full-stack developer, I bring
          a solid foundation in software engineering principles and a passion
          for innovation. My proficiency in front-end technologies, combined
          with my strong fundamentals in software engineering, equip me with the
          necessary skills to succeed in the field. I am eager to gain practical
          experience through an internship and contribute to your team's
          success. With excellent collaboration skills and a dedication to
          delivering exceptional results, I am confident that I can make
          valuable contributions to your organisation. Let's work together to
          build the future of software development!
        </p>
      </motion.div>

      <div className="mt-20 gap-10 flex flex-wrap justify-center mx-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default About;
