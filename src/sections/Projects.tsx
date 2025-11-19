import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "../components/Card";
import { ModalProjects } from "../components/ModalProjects";
import { ProjectsData } from "../constants/ProjectsData";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [invisibleProjects, setInvisibleProjects] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const totalProjects = ProjectsData.length;

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleAddProject = () => {
    if (window.innerWidth < 768) {
      if (visibleProjects < totalProjects) {
        setVisibleProjects(visibleProjects + 1);
        setTimeout(() => {
          window.scrollBy({ top: 450, behavior: "smooth" });
        }, 100);
      }
    }
  };

  const resetProjects = () => {
    setVisibleProjects(2);

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth"})
    })
  }
 
  const nextProject = () => {
    if (visibleProjects < totalProjects) {
      setInvisibleProjects(invisibleProjects + 1);
      setVisibleProjects(visibleProjects + 1);
    }
  };

  const prevProject = () => {
    if (invisibleProjects > 0) {
      setInvisibleProjects(invisibleProjects - 1);
      setVisibleProjects(visibleProjects - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleProjects(2);
      } else {
        setVisibleProjects(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-class flex-col relative mb-10 ">
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="text-2xl md:text-5xl py-10 font-bold"
      >
        Recent works I'm <span className="text-gradient">proud to share</span>
      </motion.p>
      <BentoGrid className="grid-cols-2 lg:grid-cols-3 gap-12 ">
        {ProjectsData.slice(invisibleProjects, visibleProjects).map(
          (project) => (
            <motion.div
              key={project.id}
              className="col-span-2 lg:col-span-1 row-span-7 md:row-span-10 "
            >
              <BentoGridItem className="flex w-full h-full">
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  imageSize={project.imageSize}
                  techs={project.techs}
                  onOpenModal={() => handleOpenModal(project)}
                />
              </BentoGridItem>
            </motion.div>
          )
        )}
      </BentoGrid>

      {visibleProjects >= 2 && (
        <>
          <motion.button
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className={`${visibleProjects === totalProjects ? "hidden" : "flex"} md:hidden mt-4 color-gradient border-2 border-[#161935] rounded-full p-1 cursor-pointer hover:scale-105 transition-[scale] text-purple-600`}
            onClick={handleAddProject}
          >
            <FaPlus size={30} />
          </motion.button>
          {visibleProjects === totalProjects && (
            <button className="flex md:hidden mt-4 color-gradient border-2 border-[#161935] rounded-full p-2 text-purple-600 cursor-pointer" onClick={resetProjects}> <FaArrowRotateLeft size={22} /></button>
          )}

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="hidden items-center w-50 h-10 mt-4 justify-between"
          >
            <button
              className="color-gradient border-2 border-[#161935] rounded-full p-1 cursor-pointer hover:scale-105 transition-[scale]"
              onClick={prevProject}
            >
              <IoMdArrowRoundBack size={34} className="text-purple-600" />
            </button>
            <button
              className="rotate-180 color-gradient border-2 border-[#161935] rounded-full p-1 cursor-pointer hover:scale-105 transition-[scale]"
              onClick={nextProject}
            >
              <IoMdArrowRoundBack size={34} className="text-purple-600" />
            </button>
          </motion.div>
        </>
      )}

      <ModalProjects
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
