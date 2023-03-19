import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { technologies } from "@/assets";
import { StaticImageData } from "next/image";

interface SkillCardProps {
  name: string;
  icon: StaticImageData;
  index: number;
  progress: number;
}

const SkillCard = ({ icon, name, index, progress }: SkillCardProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.75,
        }}
      >
        <div className="bg-tertiary rounded-full  h-20 w-20 md:h-28 md:w-28 lg:w-32 lg:h-32">
          <img
            src={icon.src}
            alt="web-development"
            className="rounded-full h-20 w-20 md:h-28 md:w-28 lg:w-32 lg:h-32 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-28 md:w-28 lg:w-32 lg:h-32 rounded-full z-0">
            <p className="md:text-3xl font-bold text-black font-mono">
              {progress}%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.75,
        }}
        className="flex relative flex-col justify-evenly items-center"
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-mono">
          <span className="text-[#7b40fa]">Skills</span>
        </h2>
      </motion.div>

      <motion.div className="grid grid-cols-4 gap-5 lg:grid-cols-6 md:grid-cols-6">
        {technologies.map((technology, index) => (
          <SkillCard key={technology.name} {...technology} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
