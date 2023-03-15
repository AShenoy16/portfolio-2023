import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { slideIn } from "@/utils/motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dantebhag0510@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="mt-20 pt-20 md:flex-row overflow-hidden flex flex-col items-center md:justify-center md:mt-20 md:pt-20">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-[340px]"
      >
        <p className={styles.sectionSubText}>Lets <span className="text-[#915eff]">create</span> something together!</p>

        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <input
              {...register("name")}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none"
              type="text"
            />
          </label>

          <label className="flex flex-col">
            <input
              {...register("email")}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none"
              type="email"
            />
          </label>

          <label className="flex flex-col">
            <input
              {...register("subject")}
              placeholder="Subject"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none"
              type="text"
            />
          </label>

          <label className="flex flex-col">
            <textarea
              {...register("message")}
              rows={7}
              placeholder="Message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none"
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 outline-none w-full md:w-fit text-white font-bold shadow-md rounded-xl shadow-primary hover:opacity-80 hover:bg-green-500 hover:scale-110"
            type="submit"
          >
            {" "}
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
