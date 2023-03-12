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
        <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full">
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
            <h3 className="text-white font-bold text-[24px]">
              {name}
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </h3>

            <div className="mt-5 flex flex-row gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
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
        className="flex-col text-center max-w-7xl justify-evenly mx-auto py-20"
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </motion.div>

      <div className="flex flex-col justify-center items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          blanditiis.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-7 justify-start">
          {projects.map((project, index) => (
            <ProjectCard key={"project-${index}"} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
