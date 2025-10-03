import { useState } from "react";
import { GridBackground } from "../components/GridBackGround";
import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/animations";
import FootBar from "../components/FootBar";
import { BorderAnimation } from "../components/BorderAnimation";
import { RiMailSendLine } from "react-icons/ri";

function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="section-class relative flex-col lg:px-10">
      <GridBackground
        GradientClassName="bg-radial w-[60%] left-[50%] -translate-x-[50%] from-transparent via-[#000319]/60 to-[#000319]"
        SquareClassName="w-[60%] left-[50%] -translate-x-[50%]"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col relative justify-center items-center gap-4 w-full h-[50vh] md:px-40 "
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl md:w-[50%] text-center font-bold"
        >
          Have a project in <span className="text-gradient">mind</span>? Let’s
          connect.
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl text-center text-tertiary"
        >
          From idea to execution, I'll help turn your project into reality.
        </motion.h2>
        <motion.div variants={itemVariants} className="w-full relative rounded-2xl md:w-[20%] hover:scale-102 transition-[scale] duration-300">
          <BorderAnimation size={50} duration={6} />
          <BorderAnimation size={50} duration={6} delay={3} />
          <button
            onClick={() => setModalOpen(true)}
            type="button"
            className="w-full group flex justify-center items-center gap-2 h-[60px] border-1 border-[#272A3C] color-gradient rounded-xl text-lg md:text-xl cursor-pointer"
          >
            Get in Touch
            <RiMailSendLine className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <FootBar />

    </section>
  );
}

export default Contact;
