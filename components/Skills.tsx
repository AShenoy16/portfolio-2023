import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "../styles/styles";
import { technologies } from "@/assets";
import { StaticImageData } from "next/image";

interface SkillCardProps {
  name: string;
  icon: StaticImageData;
  index: number;
}

const SkillCard = ({ icon, name, index }: SkillCardProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        <div className="bg-tertiary rounded-full h-36 w-36">
          <img
            src={icon.src}
            alt="web-development"
            className="rounded-full h-36 w-36 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white h-36 w-36 rounded-full z-0">
            <p className="text-3xl font-bold text-black">100%</p>
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
        variants={textVariant()}
        className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills.
        </h2>
      </motion.div>

      <motion.div className="flex flex-row flex-wrap max-w-5xl justify-center items-center gap-2">
        {technologies.map((technology, index) => (
          <SkillCard key={technology.name} {...technology} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;