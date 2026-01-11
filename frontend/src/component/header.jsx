import React, { useState } from "react";
import { DiProlog } from "react-icons/di";
import { GiHighFive } from "react-icons/gi";
import { RiMenuLine } from "react-icons/ri";
import { TbArrowsCross } from "react-icons/tb";
import { NavLink } from "react-router-dom";

// menu.js (or Header.jsx এর উপরে)
export const menuItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScrollNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl border-b border-pink-50 shadow-md">
      {/* ===== Header Bar ===== */}
      <div className="flex h-16 items-center justify-between px-4 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold bg-linear-to-l from-pink-200 via-blue-500 to-red-500 py-3 bg-clip-text text-transparent">
          <DiProlog className="text-2xl text-slate-500" />
          Arabindu
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg ">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to="/"
              onClick={(e) => handleScrollNav(e, item.id)}
              className="relative inline-block transition duration-300 text-slate-500 hover:text-pink-400
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-full after:bg-pink-400
              after:origin-left after:scale-x-0
              after:transition-transform after:duration-300
              hover:after:scale-x-100"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:flex ">
          <button className="flex items-center gap-1 bg-pink-100 px-3 py-1 rounded-xl border-2 border-pink-200 text-pink-300 font-bold hover:bg-pink-400 hover:text-black duration-300 hover:scale-105 hover:border-0 cursor-pointer">
            Say Hello <GiHighFive className="text-slate-500 text-2xl" />
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-3xl cursor-pointer z-50">
          {mobileMenu ? (
            <TbArrowsCross
              className="text-xl"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <RiMenuLine
              className="text-xl"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      <div
        className={`md:hidden bg-white px-4 flex flex-col gap-6
        overflow-hidden transition-all duration-500 ease-in-out
        ${
          mobileMenu ? "max-height:500px py-4 opacity-100" : "max-h-0 opacity-0"
        }
        `}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to="/"
            onClick={(e) => {
              handleScrollNav(e, item.id);
              setMobileMenu(false);
            }}
            className="text-slate-600 hover:text-pink-400"
          >
            {item.label}
          </NavLink>
        ))}

        <button className="flex items-center justify-center gap-2 bg-pink-100 px-3 py-1 rounded-xl border-2 border-pink-200 text-pink-300 font-bold hover:bg-pink-400 hover:text-black duration-300 hover:scale-105 hover:border-0 cursor-pointer">
          Say Hello <GiHighFive className="text-slate-500 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
