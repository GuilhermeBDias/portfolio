import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import type { ModalProjectsProps } from "../utils/Types";
import { RiCloseCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { textSlide } from "../constants/animations";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -30 },
};

export const ModalProjects = ({
  isOpen,
  onClose,
  project,
}: ModalProjectsProps) => {
  if (!project) return null;

  const [contribution, setContribution] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-xs bg-black/70 z-20 flex justify-center items-center px-4 overscroll-none"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col  items-center relative bg-[#13162D] rounded-2xl pt-4 px-8 max-w-lg w-[90%] h-[80%] text-white shadow-lg overscroll-none"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
              onClick={onClose}
            >
              <RiCloseCircleLine size={30} />
            </button>

            {project.image && project.image_2 && (
              <div className="flex gap-3 justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`rounded-xl mb-4 ${project.imageSizeModal}`}
                />
                <img
                  src={project.image_2}
                  alt={project.title}
                  className={`rounded-xl mb-4 ${project.imageSizeModal}`}
                />
              </div>
            )}
            <div className="relative h-[40%] w-full rounded-2xl overflow-hidden border-2 border-[#363749] mb-6">
              <div className="flex w-full font-bold justify-evenly border-b-2 border-[#363749]">
                <button
                  className={`w-full border-r-2 border-[#363749] p-1 ${!contribution ? "bg-[#13162D] text-secondary" : "bg-[#000000]/50 text-zinc-400 cursor-pointer"}`}
                  onClick={() => setContribution(false)}
                >
                  Details
                </button>
                <button
                  className={`w-full border-[#363749] p-1  ${contribution ? "bg-[#13162D] text-secondary" : "bg-[#000000]/50 text-zinc-400 cursor-pointer"}`}
                  onClick={() => setContribution(true)}
                >
                  Contribution
                </button>
              </div>
              <div className="flex flex-col h-full w-full items-center overflow-y-auto overflow-x-hidden p-2 text-sm md:text-base whitespace-pre-line text-justify modal-scroll text-tertiary">
                <div className="absolute modal-gradient w-full h-full pointer-events-none" />

                <AnimatePresence mode="wait">
                  {contribution ? (
                    <motion.div
                      key="contribution"
                      variants={textSlide}
                      initial="enterRight"
                      animate="center"
                      exit="exitRight"
                      className="z-10"
                    >
                      <p className="pt-4 ">{project.myContribution}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      variants={textSlide}
                      initial="enterLeft"
                      animate="center"
                      exit="exitLeft"
                      className="z-10"
                    >
                      <p className="pt-4">{project.completeDescription}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {project.techs && project.techs.length > 0 && (
              <div className="flex gap-2 flex-wrap justify-center mb-6">
                {project.techs.map((tech) => (
                  <div
                    key={tech.id}
                    className="md:w-12 md:h-12 w-10 h-10  flex items-center justify-center rounded-full bg-[#0C0E23] border border-[#363749]"
                  >
                    <img
                      src={`../../${tech.image}`}
                      alt=""
                      className="p-2 object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
