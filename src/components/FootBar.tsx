import React from "react";
import { socialLinks } from "../constants";



const FootBar = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-2 justify-center md:justify-between items-center pb-10">
      <div className="flex justify-center md:justify-start w-full">
        <p>© 2025  Guilherme Dias. All rights reserved.</p>
      </div>
      <div className="w-full ">
        <ul className="flex w-full justify-center gap-8 md:justify-end">
          {socialLinks.map((social, index) => (
            <li key={index} className="flex gap-4 border-1 border-[#272A3C] rounded-lg  bg-[#05041F]">
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full border-1 border-[#272A3C] rounded-lg  bg-[#05041F] p-2 hover:scale-105 transition-[scale]"
                
              >
                {React.createElement(social.icon, {size: 24})}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FootBar;


