import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { experience } from "../constants";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/animations";

function Experience() {

  return (
    <section
      id="experience"
      className="section-class flex-col lg:px-10 relative mb-10"
    >
      <h2 className="text-4xl md:text-5xl py-10 font-bold gap-2 flex">
        My Work
        <span className="text-gradient">Experience</span>
      </h2>
      <BentoGrid className="grid-cols-2 lg:grid-cols-2 gap-14 ">
        {experience.map((exp) => (
          <BentoGridItem className="col-span-2 lg:col-span-1 row-span-4 shadow-lg bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
            <div className="absolute h-2 w-full bg-[#161935]" />
            <div className="flex w-full h-full justify-center items-center">
              <motion.div
                className="flex flex-col md:flex-row w-full h-full md:gap-4 px-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="flex items-end md:items-center md:justify-center h-[80%] md:h-full w-[30%]">
                  <motion.img
                    variants={itemVariants}
                    src={exp.image}
                    alt="Imagem aleatoria"
                    className=" w-[80%] md:w-full "
                  />
                </div>
                <div className="flex flex-col justify-center items-center h-full w-full gap-2 md:gap-4">
                  <motion.p className="w-full text-xl md:text-2xl font-bold " variants={itemVariants}>
                    {exp.title}
                  </motion.p>
                  <motion.p className="w-full text-tertiary font-semibold" variants={itemVariants}>
                    {exp.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
}

export default Experience;
