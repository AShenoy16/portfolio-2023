import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { github } from "@/assets";
import { projects } from "@/assets";
import { fadeIn, textVariant } from "@/utils/motion";
import { StaticImageData } from "next/image";

type Props = {};

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  source_code_link: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <div>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt className="bg-tertiary p-5 rounded-2xl w-[320px]">
          <div className="relative w-full h-[200px]">
            <img
              src={image.src}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github.src}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-[24px] font-mono">
              {name}
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </h3>

            <div className="mt-5 flex flex-row gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] font-mono ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

function Projects({}: Props) {
  return (
    <div>
      <motion.div
        variants={textVariant()}
        className="flex-col max-w-5xl justify-evenly mx-auto py-20"
      >
        <h2 className="text-white font-mono font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-center">
          <span className="text-[#7b40fa]">Projects</span>
        </h2>
      </motion.div>

      <div className="flex flex-col justify-center items-center md:flex-row flex-wrap">
        <div className="flex flex-wrap gap-7 justify-start mx-6 px-6 md:mx-1 md:px-5 lg:mr-[-2px] lg:mx-3">
          {projects.map((project, index) => (
            <ProjectCard key={"project-${index}"} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
