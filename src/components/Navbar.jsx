import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link className="text-2xl md:text-5xl text-white font-semibold" to="/">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isNavOpen ? (
            <button
              onClick={() => setIsNavOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* we have to define hight and width to Iconst to display */}
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsNavOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* we have to define hight and width to Iconst to display */}
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden  md:block md:w-auto text-white" id="navbar">
          <ul className="flex md:flex-row p-4 md:p-0 mt-0 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} path={link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
