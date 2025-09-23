import { AnimatePresence, motion } from "motion/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -30 },
};

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-10 flex justify-center items-center"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.form
            className="flex flex-col w-[90%] md:w-[25%] relative bg-[#13162D] p-4 rounded-xl h-[50vh] border-2 border-white overflow-hidden "
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
          <div className="absolute w-full h-full" />
            <div className="flex w-full justify-between items-center">
              <h1 className="text-black">Let's Talk</h1>
              <button
                onClick={onClose}
                type="button"
                className=" text-black text-2xl cursor-pointer"
              >
                x
              </button>
            </div>
            <div className="flex flex-col gap-4 w-full h-full">
              <input
                type="email"
                className="border border-gray-300 bg-slate-300 p-2 rounded-md w-full"
              />
              <textarea
                name=""
                id=""
                className="border border-gray-300 p-2 rounded-md w-full h-[40%] resize-none"
              ></textarea>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
