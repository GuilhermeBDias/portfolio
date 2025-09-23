import { useState } from "react";
import { GridBackground } from "../components/GridBackGround";
import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/AnimatedText";

function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
      <section id="contact" className="section-class relative">
      <GridBackground GradientClassName="bg-radial from-transparent to-[#000319]" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col relative justify-center items-center gap-4 w-[80%] h-[50vh] md:px-40 "
      >
        <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl md:w-[50%] text-center font-bold">
          Have a project in <span className="text-gradient">mind</span>? Let’s
          connect.
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-lg md:text-xl text-center text-tertiary">
          From idea to execution, I’ll help turn your project into reality.
        </motion.h2>
        <motion.div variants={itemVariants} className="w-full md:w-[20%]">
          <button
            onClick={() => setModalOpen(true)}
            type="button"
            className="w-full h-[60px] border-1 border-[#272A3C] color-gradient rounded-xl text-lg md:text-xl hover:scale-105 transition-[scale]"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

export default Contact;
