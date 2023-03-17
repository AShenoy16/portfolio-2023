import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { logo } from "@/assets";
import { styles } from "@/styles/styles";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicLink = dynamic(() => import("next/link"), {
  ssr: false,
});

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-black`}
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
        transition={{
          duration: 1,
        }}
        className=" w-full flex justify-between items-center max-w-5xl mx-auto"
      >
        <div>
          <Link href="#hero">
            <img
              src={logo.src}
              alt="logo"
              className="w-11 h-11 object-contain mx-[-1px] md:mx-[-5px] cursor-pointer hover:scale-150"
            />
          </Link>
        </div>

        <div className="flex justify-start">
          <SocialIcon
            className="hover:scale-110"
            url="https://github.com/AShenoy16"
            fgColor="gray"
            bgColor=" transparent"
          />

          <SocialIcon
            className="hover:scale-110"
            url="https://www.linkedin.com/in/aditya-shenoy-692b5a247/"
            fgColor="gray"
            bgColor=" transparent"
          />

          <DynamicLink href="#contact">
            <SocialIcon
              className="cursor-pointer hover:scale-110"
              network="email"
              fgColor="gray"
              bgColor=" transparent"
            />
          </DynamicLink>
        </div>
        {/* Motion.div makes the div animated */}
      </motion.div>
    </header>
  );
}
