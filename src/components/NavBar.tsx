import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState<string | null>("About");
  const links = ["About", "Projects", "Experience", "Contact"];

  return (
    <div 
      className="flex absolute justify-center top-0 h-[10%] mt-10 p-1 border-color rounded-2xl "
    >
      <nav className="flex w-full h-full justify-center items-center navbar-class px-8  ">
        <ul className="flex gap-8 font-semibold">
          {links.map((link) => (
            <li
              key={link}
              className={`text-[#c1c2d3] text-sm md:text-xl cursor-pointer border-b-1 ${
                active === link
                  ? "border-white text-white"
                  : "border-transparent"
              }`}
              onClick={() => setActive(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
