import type { CardProps } from "../utils/Types";

export const Card = ({ title, description} : CardProps) => {
  return (
    <div className="flex flex-col w-full h-full bg-[#04071D] p-4">
      <div className="flex relative justify-center items-center overflow-hidden w-full h-[60%] bg-[#13162D] rounded-2xl">
        <div className="absolute left-30 -top-20 w-[30%] h-[100%] rotate-45 rounded-full bg-radial-[at_40%_85%] from-cyan-600/80 via-gray-600/50 to-violet-800/90 blur-3xl" />
        {/* imagem aqui */}
      </div>
      <h1 className="w-full p-2 md:p-4 text-xl md:text-3xl font-bold">{title}</h1>
      <p className="w-full px-2 md:px-4 text-base md:text-xl text-[#BEC1DD]">{description}</p>
      <div>

      </div>
    </div>
  );
};

export default Card;
