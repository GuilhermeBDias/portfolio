import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState<string | null>(null);

  const links = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className='flex fixed top-0 justify-center items-center w-[400px] md:w-[450px] h-[10%] bg-gray-900 mt-10 rounded-2xl'>
      <ul className='flex gap-8 font-semibold'>
        {links.map(link => (
          <li key={link} className={`text-[#c1c2d3] cursor-pointer border-b-1 ${active === link ? 'border-white text-white' : 'border-transparent'}`} onClick={() => setActive(link)}>{link}</li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar