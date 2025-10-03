import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { BackgroundGradient } from "./BackGroundGradient";

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
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChanger = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(formData.message);

      const mailtoLink = `mailto:guilhermebdias55@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        window.open(mailtoLink, "_blank");
        setIsLoading(false);
        setFormData({ name: "", message: "" });
      }, 1000);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

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
          <BackgroundGradient className="w-full h-[50vh]" >
            <motion.form
              className="flex flex-col w-full bg-[#000319] p-4 rounded-2xl h-full overflow-hidden z-30 "
              onClick={(e) => e.stopPropagation()}
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-20  rotate-45 w-full h-[60%] modal-gradient" />
              <div className="flex flex-col w-full h-full z-20 gap-4">
                <div className="flex w-full justify-between  items-start">
                  <div className="flex flex-col w-full pl-2">
                    <h1 className="flex items-center gap-2 text-white h-full text-3xl font-bold">
                      <MdOutlineEmail />
                      Let's Talk
                    </h1>
                    <p className="text-tertiary font-semibold">
                      Drop me a message and let's start building your idea.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer text-white text-2xl font-semibold hover:scale-110 transition-[scale] "
                  >
                    x
                  </button>
                </div>
                <div className="flex flex-col gap-2 w-full h-full items-center">
                  <div className="flex flex-col w-full ">
                    <label className="pl-2" htmlFor="name">
                      {" "}
                      Name:{" "}
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChanger}
                      placeholder="Guilherme"
                      type="text"
                      className="border-2 border-[#272A3C] bg-[#04071D] p-2 rounded-md w-full text-white outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full h-[50%] pb-2 ">
                    <label className="pl-2" htmlFor="message">
                      Message:
                    </label>
                    <textarea
                      placeholder="Your message..."
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChanger}
                      className="border-2 border-[#272A3C] bg-[#04071D] p-2 rounded-md w-full h-full resize-none outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`group flex justify-center items-center gap-1 p-2 w-full md:w-[50%] color-gradient border-2 border-[#272A3C] cursor-pointer rounded-xl hover:scale-102 transition-[scale] ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? "Sending..." : "Send"}
                    <GoArrowUpRight
                      size={18}
                      className="group-hover:rotate-90 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </motion.form>
          </BackgroundGradient>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
