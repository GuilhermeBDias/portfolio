import { useState } from "react";
import { GridBackground } from "../components/GridBackGround";
import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/animations";
import { BorderAnimation } from "../components/BorderAnimation";
import { RiMailSendLine } from "react-icons/ri";
import { FootBar } from "../components/FootBar";
import { TextAnimation } from "../components/TextAnimation";

function Contact() {
  const prhase = [
    "Your ideas deserve to be built — let's make them real.",
    "From idea to execution, I'll help turn your project into reality.",
    "Transforming your vision into reality, step by step."
  ];

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
        <TextAnimation
          startOnView
          typeSpeed={75}
          cursorStyle="underscore"
          className="text-3xl md:text-4xl md:w-[50%] text-center font-bold"
        >
          Have a project in mind? Let’s connect.
        </TextAnimation>
        <TextAnimation
          typeSpeed={50}
          delay={3000}
          pauseDelay={4000}
          duration={50}
          cursorStyle="underscore"
          blinkCursor={true}
          showCursor={true}
          className="text-lg md:text-xl text-center text-tertiary font-mono w-full md:w-[60%] h-[50px]"
          words={prhase}
          loop={true}
        ></TextAnimation>
        <motion.div
          variants={itemVariants}
          className="flex w-full justify-center relative rounded-2xl md:w-[40%] hover:scale-102 transition-[scale] duration-300"
        >
          <button
            onClick={() => setModalOpen(true)}
            type="button"
            className="w-[60%] md:w-full group flex relative justify-center items-center gap-2 h-[60px] border-1 border-[#272A3C] color-gradient rounded-xl text-lg md:text-xl cursor-pointer"
          >
            <BorderAnimation size={50} duration={6} />
            <BorderAnimation size={50} duration={6} delay={3} />
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
