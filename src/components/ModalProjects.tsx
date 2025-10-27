import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import type { ModalProjectsProps } from "../utils/Types";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -30 },
};

export const ModalProjects = ({ isOpen, onClose, project }: ModalProjectsProps) => {

  if(!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/70 z-20 flex justify-center items-center px-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>

            <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#13162D] rounded-2xl p-8 max-w-lg w-[90%] text-white shadow-lg flex flex-col justify-center items-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{duration: 0.5}}
          >
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={`rounded-xl mb-4 ${project.imageSize}`}
              />
            )}

            <p className="text-sm text-gray-300 mb-6 whitespace-pre-line">{project.completeDescription}</p>

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

            <button
              className="mt-4 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg text-white font-semibold"
              onClick={onClose}
            >
              Fechar
            </button>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
