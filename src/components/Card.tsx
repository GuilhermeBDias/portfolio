import type { CardProps } from "../utils/Types";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/animations";
import { GoArrowUpRight } from "react-icons/go";

export const Card = ({
  title,
  description,
  techs = [],
  image,
  imageSize,
  onOpenModal
}: CardProps) => {

  return (
    <motion.div
      className="flex flex-col w-full h-full bg-[#04071D] p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex relative justify-center items-center overflow-hidden w-full h-full bg-[#13162D] rounded-2xl">
        <div className="absolute left-20 md:left-40 -top-10 md:-top-20 w-[30%] h-full rotate-45 rounded-full bg-radial-[at_40%_85%] from-cyan-500/90 via-gray-500/60 to-violet-700 blur-3xl animate-gradientMove" />
        <motion.img
          variants={itemVariants}
          src={image}
          alt=""
          className={`absolute ${imageSize} top-8 rotate-12 z-10 rounded-2xl`}
        />
      </div>
      <motion.div
        className="flex flex-col w-full items-center h-[60%] md:h-[70%]"
        variants={itemVariants}
      >
        <h1 className="w-full p-2 md:p-4 text-xl md:text-xl font-bold text-slate-200">
          {title}
        </h1>
        <p className="w-full px-2 md:px-4 text-sm md:text-base font-semibold text-[#BEC1DD]">
          {description}
        </p>
      </motion.div>
      <motion.div
        className="flex w-full justify-center items-center pt-4 px-2 md:px-4 pb-4 "
        variants={containerVariants}
      >
        {techs.map((tech) => (
          <motion.div
            variants={itemVariants}
            whileHover={{ borderColor: "#642075" }}
            animate={{
              transition: {
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            transition={{ duration: 0.3 }}
            key={tech.id}
            className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] justify-center items-center flex rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-2 border-[#363749] -mr-2 hover:scale-105 transition-[scale] duration-300"
          >
            <img
              src={`../../${tech.image}`}
              alt=""
              className="object-cover p-2 md:p-3"
            />
          </motion.div>
        ))}
        <div className="flex w-full justify-end items-center font-bold  pl-6 ">
          <button className="cursor-pointer border-2 rounded-xl border-[#363749] text-xs md:text-sm p-0 md:p-2 flex gap-1 justify-center items-center hover:scale-105 transition-[scale]"
            onClick={onOpenModal}
          >
            details <GoArrowUpRight size={20} color="#ffffff" />
          </button>
        </div>
      </motion.div>

      
    </motion.div>
  )   
};
