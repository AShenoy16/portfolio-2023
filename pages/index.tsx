import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(0,0,0)] text-white h-screen">
      <Head>
        <title>AS Porfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      {/* sections allow you to scroll back to that place*/}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
