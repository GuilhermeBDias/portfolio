import { GoArrowUpRight } from "react-icons/go";
import type { CardProps } from "../utils/Types";

export const Card = ({ title, description, techs = [] }: CardProps) => {
  return (
    <div className="flex flex-col w-full h-full bg-[#04071D] p-4">
      <div className="flex relative justify-center items-center overflow-hidden w-full h-[100%] bg-[#13162D] rounded-2xl">
        <div className="absolute left-40 -top-20 w-[30%] h-full rotate-45 rounded-full bg-radial-[at_40%_85%] from-cyan-600/90 via-gray-600/70 to-violet-600/90 blur-3xl" />
        {/* imagem aqui */}
      </div>
      <div className="flex flex-col w-full items-center h-[60%]">
        <h1 className="w-full p-2 md:p-4 text-xl md:text-3xl font-bold">
          {title}
        </h1>
        <p className="w-full px-2 md:px-4 text-base md:text-xl text-[#BEC1DD]">
          {description}
        </p>
      </div>
      <div className="flex w-full justify-between items-center px-2 md:px-4 pb-4">
        {techs.map((tech) => (
          <div
            key={tech.id}
            className="group w-[40px] h-[40px] md:w-[60px] md:h-[60px] justify-center items-center flex rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-2 border-[#363749] -mr-2"
          >
            <img src={`../../${tech.image}`} alt="" className="object-cover p-2" />
          </div>
        ))}
        <div className="flex w-full justify-end items-center text-gradient font-bold ">
          <a className="flex w-full justify-end items-center" href="">
            Check the site{" "}
            <GoArrowUpRight size={20} className="text-purple-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
