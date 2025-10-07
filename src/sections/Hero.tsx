import { GridBackground } from "../components/GridBackGround";
import { Animated } from "../utils/AnimatedText";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import { containerVariants, itemVariants } from "../constants/animations";
import React from "react";
import { BackgroundGradient } from "../components/BackGroundGradient";
import { BorderAnimation } from "../components/BorderAnimation";
import { LigthBackGround } from "../components/LigthBackGround";
import GeneratePdfButton from "../utils/GeneratePdf";

function Hero() {
  return (
    <>
      <LigthBackGround>
        <GridBackground />
        <section
          id="home"
          className="hero-class overflow-hidden z-10"
        >
          <div className="flex flex-col text-center w-full h-full justify-center items-center pt-16 md:pt-20 gap-4">
            <Animated
              as="h1"
              delay={0.3}
              className="text-lg md:text-2xl text-secondary font-medium tracking-wider pb-2"
            >
              Turning Ideas into Interactive Realities
            </Animated>
            <div className="w-[80%] md:w-[80%]">
              <Animated
                as="p"
                delay={0.5}
                className="flex flex-col gap-2 text-4xl md:text-[56px] font-bold w-full"
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
                  className="group mt-4 flex relative overflow-hidden w-full md:w-[260px] items-center justify-center gap-2 color-gradient border-1 border-[#272A3C] text-white py-6 md:py-8 px-8 rounded-2xl text-sm md:text-xl font-medium md:hover:scale-105 transition-[scale] z-10"
                >
                  <BorderAnimation size={50} duration={6} className="hidden md:flex" />
                  <BorderAnimation size={40} duration={6} className="flex md:hidden" />
                  <BorderAnimation size={50} duration={6} delay={3} className="hidden md:flex" />
                  <BorderAnimation size={40} duration={6} delay={3} className="flex md:hidden"/>
                  <GeneratePdfButton />
                  
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
