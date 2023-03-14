import React from "react";
import { motion } from "framer-motion";
import { services } from "../assets";
import { backend, creator, mobile, web } from "../assets/index";
import Tilt from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
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
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[230px] flex justify-evenly items-center flex-col">
          <img
            src={icon.src}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
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
        variants={textVariant()}
        className="flex flex-col max-w-5xl justify-evenly mx-auto py-20 md:px-6 lg:px-0"
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mx-7 md:mx-0 lg:mx-0">
          A little <span className="text-[#915eff]">about me</span> 
        </h2>
        <p className=" lg:mx-10 lg:ml-auto mt-10 mx-7 md:mx-0 md:ml-auto">
          I'm a skilled software developer with experience in TypeScript and //
          JavaScript, and expertise in frameworks like React, Node.js, and //
          Three.js. I'm a quick learner and collaborate closely with clients to
          // create efficient, scalable, and user-friendly solutions that solve
          // real-world problems. Let's work together to bring your ideas to
          life!
        </p>
      </motion.div>

      <div className="mt-20 gap-10 flex flex-wrap justify-center mx-5 md:mx-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

// function About({}: Props) {
//   return (
//     <div className="flex flex-col justify-center items-center px-8 mt-20">
//       <motion.div variants={textVariant()}>
//         <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
//       </motion.div>

//       <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-center max-w-5xl">
//         I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life!
//       </motion.p>

// <div className="mt-20 gap-10 flex flex-wrap justify-center max-w-5xl">
//   {services.map((service, index) => (
//     <ServiceCard key={service.title} index={index} {...service} />
//   ))}
// </div>
//     </div>
//   );
// }

export default About;
