import { GridBackground } from "../components/GridBackGround";
import LigthBackGround from "../components/LigthBackGround";
import { Animated } from "../utils/AnimatedText";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import { containerVariants, itemVariants } from "../constants/animations";
import React from "react";

function Hero() {
  return (
    <>
      <LigthBackGround>
        <GridBackground />
        <section
          id="home"
          className="hero-class overflow-hidden mb-6 md:mb-0 z-10"
        >
          <div className="flex flex-col text-center w-full h-full justify-center items-center pt-16 md:pt-20 gap-4">
            <Animated
              as="h1"
              delay={0.3}
              className="text-lg md:text-xl text-secondary font-medium tracking-wider pb-4"
            >
              Turning Ideas into Interactive Realities
            </Animated>
            <div className="w-[80%] sm:w-[70%] ">
              <Animated
                as="p"
                delay={0.5}
                className="text-5xl/13 md:text-[92px]/25 font-bold"
              >
                Bridging the gap between design and
                <Animated as="span" delay={0.7} className="text-gradient">
                  {" "}
                  functionality.
                </Animated>
              </Animated>
            </div>
            <div className="w-full flex flex-col items-center gap-4">
              <Animated
                as="p"
                delay={0.9}
                className="pt-4 text-secondary text-lg md:text-xl"
              >
                I'm Guilherme Dias — crafting modern web apps from Brazil.
              </Animated>

              <div className="flex flex-col gap-6 ">
                <Animated
                  as="a"
                  delay={1.1}
                  href="https://github.com/GuilhermeBDias"
                  className="mt-4 flex w-full md:w-[260px] items-center justify-center gap-2 color-gradient border-2 border-[#272A3C] text-white py-4 px-8 rounded-lg text-sm md:text-xl font-medium md:hover:scale-105 transition-[scale]"
                >
                  <div className="flex w-full justify-center items-center gap-2 ">
                    <p>Download my CV</p>
                    <GoArrowUpRight size={26} />
                  </div>
                </Animated>
                <Animated as="div" className="w-full " >
                  <motion.ul
                  custom={1.3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                    className="flex w-full justify-center gap-4  "
                  >
                    {socialLinks.map((social, index) => (
                      <motion.li
                        variants={itemVariants}
                        
                        key={index}
                        className="flex gap-4 border-1 border-[#272A3C] rounded-lg  bg-[#05041F] hover:scale-105 transition-[scale]"
                      >
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full border-1 border-[#272A3C] rounded-lg bg-gradient-to-r from-[#05041F] to-[#0C0E23] p-2 "
                        >
                          {React.createElement(social.icon, { size: 30 })}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </Animated>
              </div>
            </div>
          </div>
        </section>
      </LigthBackGround>
    </>
  );
}

export default Hero;
