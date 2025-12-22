"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navMenus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu=()=>{
 setOpen(!open)
  }

  return (
    <header className="relative bg-blue-200 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        
     
        <Link href="/" className="text-2xl font-bold">
          DR. Jamil
        </Link>

        
        <nav className="hidden md:flex">
          {navMenus.map((menu, index) => (
            <Link
              key={index}
              href={menu.path}
              className="px-5 font-semibold hover:text-blue-700"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

      
     <button
            className='md:hidden text-gray-700 focus:outline-none z-20'
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className='w-6 h-6 flex flex-col justify-center items-center space-y-1'>
              <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>

      </div>

    
      {open && (
        <nav className="absolute top-full left-0 w-full bg-blue-100 px-6 py-4 space-y-3 shadow-lg">
          {navMenus.map((menu, index) => (
            <Link
              key={index}
              href={menu.path}
              className="block font-semibold hover:text-blue-700"
              onClick={() => setOpen(false)}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
