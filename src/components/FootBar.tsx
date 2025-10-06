import React from "react";
import { socialLinks } from "../constants";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/animations";
import { BackgroundGradient } from "./BackGroundGradient";

export const FootBar = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-2 justify-center md:justify-between items-center pb-10">
      <div className="flex justify-center md:justify-start w-full">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          © 2025 Guilherme Dias. All rights reserved.
        </motion.h1>
      </div>
      <div className="w-full ">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex w-full justify-center gap-8 md:justify-end"
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
                  className="flex gap-4 border-1 border-[#272A3C] rounded-lg bg-[#05041F]"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full border-1 border-[#272A3C] rounded-lg bg-gradient-to-r from-[#05041F] to-[#0C0E23] p-2 "
                  >
                    {React.createElement(social.icon, { size: 24 })}
                  </a>
                </motion.li>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

