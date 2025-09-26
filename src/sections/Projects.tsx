import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { ProjectsData } from "../constants";

function Projects() {
  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="projects"
      className="section-class flex-col relative mb-10"
    >
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="text-2xl md:text-5xl py-10 font-bold"
      >
        Recent works I'm <span className="text-gradient">proud to share</span>
      </motion.p>
      <BentoGrid className="grid-cols-2 lg:grid-cols-2 gap-14 ">
        {ProjectsData.map((project) => (
          <BentoGridItem
            className="col-span-2 lg:col-span-1 row-span-6 md:row-span-9"
          >
            <Card title={project.title} description={project.description} image={project.image} techs={project.techs} />
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
}

export default Projects;
