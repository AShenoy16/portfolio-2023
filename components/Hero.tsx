import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

https: type Props = {};

{
  /* This gets all the words and loops through them with a duration of 2 seconds */
}
export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<Hi I'm Adi/>",
      "Programmer",
      "Food lover.py",
      "Innovator.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-evenly md:flex-row max-w-5xl mx-auto md:justify-between overflow-hidden">
      <div>
        <h1 className="max-w-5xl text-3xl md:text-4xl lg:text-6xl font-mono px-10 mb:py-178 text-center md:text-left pt-11">
          <span>{text}</span>
          <Cursor cursorColor="#ED2939" />
        </h1>

        <div className="pt-10 md:max-w-5xl md:p-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>

      <div>
        <motion.img
          initial={{
            opacity: 0,
            x: 1000,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.95,
          }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ExNZIUHWBR_yH3e_7Ano1gHaI8%26pid%3DApi&f=1&ipt=a931befd3360d9e75c964438916ec0a8dfd1e071900fdd2d06e89df5df50fa7b&ipo=images"
          className="mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full justify-center object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[250px] xl:h-[350px] md:px-5  z-0 md:static md:z-auto"
        />
      </div>
    </div>
  );
}
