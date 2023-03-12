import React from "react";
import { motion } from "framer-motion";
import { services } from "../assets";
import { backend, creator, mobile, web } from "../assets/index";
import Tilt from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";

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
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-gradient-to-br from-red-600 to-purple-900 rounded-[20px] py-5 px-12 min-h-[230px] flex justify-evenly items-center flex-col"
        >
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
    <>
      <motion.div variants={textVariant()}>
        <p>Introduction</p>
        <h2>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 gap-10 flex flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default About;
