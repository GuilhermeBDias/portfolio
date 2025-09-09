export const LigthBackGround = () => {
  return (
      <div className="md:flex hidden justify-center absolute w-full h-full inset-0 overflow-hidden">
        <div className="relative justify-between items-center flex w-full h-full">
          {/* Right Light */}
          <div className="flex relative top-[-10%] w-[50%] left-[-10%]  h-full space-x-40 justify-center  ">
            <div className="w-[20px] h-[90%] bg-gradient-to-b from-white/50 via-white/20 to-transparent rotate-[-40deg] blur-xl " />
            <div className="w-[20px] h-[70%] bg-gradient-to-b from-white/50 via-white/40 to-transparent rotate-[-40deg] blur-xl " />
            <div className="w-[20px] h-[50%] bg-gradient-to-b from-white/50 via-white/20 to-transparent rotate-[-40deg] blur-xl " />
          </div>

          {/* Left Light */}
          <div className="flex relative top-[-10%] w-[50%] right-[-10%] h-full space-x-40 justify-center ">
            <div className=" w-[20px] h-[50%] bg-gradient-to-b from-white/50 via-white/20 to-transparent rotate-[40deg] blur-xl " />
            <div className=" w-[20px] h-[70%] bg-gradient-to-b from-white/50 via-white/40 to-transparent rotate-[40deg] blur-xl " />
            <div className=" w-[20px] h-[90%] bg-gradient-to-b from-white/50 via-white/20 to-transparent rotate-[40deg] blur-xl " />
          </div>
        </div>
      </div>
  );
};

export default LigthBackGround;
