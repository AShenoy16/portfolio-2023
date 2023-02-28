import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z- 20
    xl:items-center"
    >
      {/* Above makes it stick to the top and automatically splits the icons in between */}
      {/* Also layers it above everything else and keeps max width between them */}
      {/* Takes in object class, of inital and animate states */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition = {{
          duration: 1
        }}
      >
        {/* Motion.div makes the div animated */}
        <SocialIcon
          url="https://github.com/AShenoy16"
          fgColor="gray"
          bgColor=" transparent"
        />

        <SocialIcon
          url="https://github.com/AShenoy16"
          fgColor="gray"
          bgColor=" transparent"
        />

        <SocialIcon
          url="https://github.com/AShenoy16"
          fgColor="gray"
          bgColor=" transparent"
        />
      </motion.div>

      {/* Centres the text with the icons and makes a pointer over the entire div icon and text*/}
      <motion.div 
      
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition = {{
        duration: 1
      }}
      
      className=" flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="telegram"
          fgColor="gray"
          bgColor=" transparent"
        />

        {/* This makes the text only come on medium screen */}
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
