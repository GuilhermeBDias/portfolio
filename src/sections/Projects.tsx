import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { techs_1, techs_2, techs_3, techs_4 } from "../constants";


function Projects() {

  const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

  return (
    <section id="projects" className="section-class flex-col lg:px-20 relative mb-10">
      <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className="text-2xl md:text-5xl py-10 font-bold">
        Recent works I'm <span className="text-gradient">proud to share</span>
      </motion.p>
      <BentoGrid className="grid-cols-2 lg:grid-cols-2 gap-14 ">
        <BentoGridItem className="col-span-2 lg:col-span-1 row-span-7 md:row-span-10 ">
          <Card title="CarHub for car enthusiasts - Website" description="A platform to share and discover car-related content." techs={techs_1} />
        </BentoGridItem>
        <BentoGridItem className="col-span-2 lg:col-span-1 row-span-7 md:row-span-10 ">
          <Card title="Another Project Title" description="A brief description of another project." techs={techs_2} />
        </BentoGridItem>
        <BentoGridItem className="col-span-2 lg:col-span-1 row-span-7 md:row-span-10 ">
          <Card title="Yet Another Project Title" description="A brief description of yet another project." techs={techs_3} />
        </BentoGridItem>
        <BentoGridItem className="col-span-2 lg:col-span-1 row-span-7 md:row-span-10 ">
          <Card title="Final Project Title" description="A brief description of the final project." techs={techs_4} />
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
}

export default Projects;
