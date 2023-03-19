import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-primary text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>AS Porfolio</title>
      </Head>

      <div>
        <Header />

        {/* Hero */}
        {/* sections allow you to scroll back to that place*/}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* About */}

        <section id="about" className="snap-start">
          <About />
        </section>

        <section id="experience" className="snap-start">
          <Experience />
        </section>
        {/* Experience */}

        {/* Skills */}

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        {/* Projects */}

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        {/* Contact */}

        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </div>
  );
}
