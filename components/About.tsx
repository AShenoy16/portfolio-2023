import React from "react";
import { motion } from "framer-motion";
import { services } from "../assets";
import { backend, creator, mobile, web } from "../assets/index";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: typeof backend | typeof creator | typeof mobile | typeof web;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return <p>{title}</p>;
};

type Props = {};

function About({}: Props) {
  return (
    <>
      <motion.div>
        <h2>
          Here's a <span>little</span> about me
        </h2>
      </motion.div>
      <motion.p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default About;
