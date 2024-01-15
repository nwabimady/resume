"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-400 via-slate-400 to-orange-400">
              Hi, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Nwabisa",
                1000,
                "Web Developer",
                1000,
                "BIM Specialist",
                1000,
                "Architect",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
            impedit.
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-br from-sky-400 via-slate-400 to-orange-400 hover:bg-slate-200 hover:text-white">
              Contact Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 text-slate-500 bg-gradient-to-br from-sky-400 via-slate-400 to-orange-400 mt-3 hover:text-white ">
              <span className="block bg-white hover-slate-200 rounded-full px-5 py-2 hover:bg-gradient-to-br from-sky-300 via-slate-300 to-orange-300">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-slate-200 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/1680351017536.png"
              alt="Nwabisa's Headshot"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
