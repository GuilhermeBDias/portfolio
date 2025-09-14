export const MiniCard = () => {
  return (
    <div className="flex w-full h-full z-20 justify-end items-end pr-4">
      <div className="absolute flex flex-col w-[60%] md:w-[50%] h-[100px] rounded-t-xl border-1 border-[#313447] bg-white/5">
        <div className="flex flex-col gap-3 w-full h-full p-2 ">
          <div className="flex w-full gap-2 items-center h-[20%] animate-pulse">
            <div className="w-5 h-5 bg-white/20 rounded-full"></div>
            <div className="h-2 w-10 bg-white/20 rounded"></div>
            <div className="h-2 w-6 bg-white/20 rounded"></div>
          </div>
          <div className="flex flex-col w-full gap-1 animate-pulse">
            <div className="h-2 w-[90%] bg-white/20 rounded" />
            <div className="h-2 w-[40%] bg-white/20 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};
