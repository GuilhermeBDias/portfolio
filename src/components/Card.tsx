import type { CardProps } from "../utils/Types";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/animations";

export const Card = ({ title, description, techs = [], image }: CardProps) => {
  return (
    <motion.div
      className="flex flex-col w-full h-full bg-[#04071D] p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex relative justify-center items-center overflow-hidden w-full h-[100%] bg-[#13162D] rounded-2xl">
        <div className="absolute left-20 md:left-40 -top-10 md:-top-20 w-[30%] h-full rotate-45 rounded-full bg-radial-[at_40%_85%] from-cyan-500/90 via-gray-500/60 to-violet-700 blur-3xl" />
        <motion.img
          variants={itemVariants}
          src={image}
          alt=""
          className="absolute w-[40%] top-10 rotate-12 z-10  "
        />
      </div>
      <motion.div
        className="flex flex-col w-full items-center h-[60%]"
        variants={itemVariants}
      >
        <h1 className="w-full p-2 md:p-4 text-xl md:text-3xl font-bold">
          {title}
        </h1>
        <p className="w-full px-2 md:px-4 text-base md:text-xl text-[#BEC1DD]">
          {description}
        </p>
      </motion.div>
      <motion.div
        className="flex w-full justify-between items-center px-2 md:px-4 pb-4"
        variants={containerVariants}
      >
        {techs.map((tech) => (
          <motion.div
            variants={itemVariants}
            key={tech.id}
            className=" w-[40px] h-[40px] md:w-[60px] md:h-[60px] justify-center items-center flex rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-2 border-[#363749] -mr-2"
          >
            <img
              src={`../../${tech.image}`}
              alt=""
              className="object-cover p-2 md:p-3"
            />
          </motion.div>
        ))}
        <div className="flex w-full justify-end items-center text-gradient font-bold ">
          
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
