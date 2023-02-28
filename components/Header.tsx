import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z- 20
    xl:items-center">
      {/* Above makes it stick to the top and automatically splits the icons in between */}
      {/* Also layers it above everything else and keeps max width between them */}
      <motion.div>
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
      <div className=" flex flex-row items-center text-gray-300 cursor-pointer">
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
      </div>
    </header>
  );
}
