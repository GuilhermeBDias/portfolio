import { GridBackground } from "../components/GridBackGround";
import LigthBackGround from "../components/LigthBackGround";
import { Animated } from "../utils/AnimatedText";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import { containerVariants, itemVariants } from "../constants/animations";
import React from "react";
import { BackgroundGradient } from "../components/BackGroundGradient";
import { BorderAnimation } from "../components/BorderAnimation";

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
              className="text-lg md:text-2xl text-secondary font-medium tracking-wider pb-4"
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

              <div className="flex flex-col gap-6">
                <Animated
                  as="a"
                  delay={1.1}
                  href="../../Curriculo.pdf"
                  className="group mt-4 flex relative w-full md:w-[260px] items-center justify-center gap-2 color-gradient border-1 border-[#272A3C] text-white py-4 px-8 rounded-2xl text-sm md:text-xl font-medium md:hover:scale-105 transition-[scale] z-10"
                >
                  <BorderAnimation size={50} duration={8}/>
                  <BorderAnimation size={50} duration={8} delay={4}/>
                  <p>Download my CV</p>
                  <GoArrowUpRight
                    size={26}
                    className="group-hover:rotate-90 transition-transform duration-300"
                  />
                </Animated>
                <Animated as="div" className="w-full">
                  <motion.ul
                    custom={1.3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                    className="flex w-full justify-center gap-4"
                  >
                    {socialLinks.map((social, index) => (
                      <motion.div
                        variants={itemVariants}
                        className="hover:scale-105 transition-[scale] z-10"
                      >
                        <BackgroundGradient
                          shadowClass="rounded-lg blur-xs"
                          borderClass="rounded-lg"
                        >
                          <motion.li
                            variants={itemVariants}
                            key={index}
                            className="flex gap-4 rounded-lg bg-[#05041F]"
                          >
                            <a
                              href={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full h-full rounded-lg bg-gradient-to-r from-[#05041F] to-[#0C0E23] p-2"
                            >
                              {React.createElement(social.icon, { size: 30 })}
                            </a>
                          </motion.li>
                        </BackgroundGradient>
                      </motion.div>
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
