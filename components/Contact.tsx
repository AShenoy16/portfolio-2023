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
    <div className="xl:mt-12 xl:flex-row  \flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>

        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your name</span>
            <input
              {...register("name")}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none"
              type="text"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input
              {...register("email")}
              placeholder="What is your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none"
              type="email"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Subject</span>
            <input
              {...register("subject")}
              placeholder="What is the subject?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none"
              type="text"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              {...register("message")}
              rows={7}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg border-none"
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl shadow-primary"
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
