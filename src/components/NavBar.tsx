import { useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [active, setActive] = useState<string | null>("About");
  const links = ["About", "Projects", "Experience", "Contact"];

  const handleClick = (link: string) => {
    setActive(link);
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.8 }}
      className="flex absolute w-[94%] top-0 mt-10 max-w-[600px] h-[8%] justify-center items-center navbar-class border-1 border-[#272A3C] "
    >
      <ul className="flex gap-8 font-semibold">
        {links.map((link) => (
          <li
            key={link}
            className={`text-[#c1c2d3] text-sm md:text-xl cursor-pointer border-b-1 ${
              active === link ? "border-white text-white" : "border-transparent"
            }`}
            onClick={() => handleClick(link)}
          >
            {link}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default NavBar;
