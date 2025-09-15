import React from "react";

export const Card = () => {
  return (
    <div className="flex justify-center w-[40%] bg-[#04071D] border-1 rounded-3xl border-[#272A3C]">
      <div className="flex flex-col w-full h-full p-8">
        <div className="flex w-full h-full justify-center items-center p-8 rounded-2xl overflow-hidden bg-[#13162D]">
          <img src="../../Grid_01.jpg" alt="" className=" w-100 h-80 rotate-4" />
        </div>
        <div>
          <p>teste</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
