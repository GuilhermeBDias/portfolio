import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import type { ModalProjectsProps } from "../utils/Types";
import { RiCloseCircleLine } from "react-icons/ri";

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-20 flex justify-center items-center px-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col justify-center items-center relative bg-[#13162D] rounded-2xl p-8 max-w-lg w-[90%] min-h-[40%] text-white shadow-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer" onClick={onClose}>
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

            <p className="text-sm md:text-base text-gray-300 mb-6 whitespace-pre-line">
              {project.completeDescription}
            </p>

            {project.techs && project.techs.length > 0 && (
              <div className="flex gap-2 flex-wrap mb-6">
                {project.techs.map((tech) => (
                  <div
                    key={tech.id}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0C0E23] border border-[#363749]"
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
