// src/components/Navbar.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/service",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between px-4 md:px-20 py-4 bg-white shadow sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src="/logo.png" alt="Global" className="h-16" />
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex justify-between items-center gap-8 text-sm font-semibold text-blue-900">
        {navLinks.map(({ name, path }) => (
          <NavLink
            to={path}
            key={name}
            //className="hover:text-blue-600 md:text-lg cursor-pointer"
            className={({ isActive }) =>
              `md:text-lg cursor-pointer px-4 py-2 border-b-4 transition duration-500 ${
                isActive
                  ? "text-blue-600 font-bold  border-b-4 border-blue-600"
                  : "text-blue-600 font-bold border-transparent  hover:border-blue-600 "
              } `
            }>
            {name}
          </NavLink>
        ))}
      </ul>

      <div className="hidden md:block ">
        <button className="bg-blue-900  text-white px-7 font-bold py-4 flex gap-2 justify-center items-center rounded-lg">
          <IoCall size={20} className="text-white" /> 9941201227
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 md:hidden">
          <ul className="flex flex-col items-center gap-4 text-sm font-semibold text-blue-900">
            {navLinks.map(({ name, path }) => (
              <Link
                to={path}
                key={name}
                className="hover:text-blue-600 cursor-pointer">
                {name}
              </Link>
            ))}
            <li>
              <button className="bg-blue-900 text-white px-4 py-2 rounded-full">
                <IoCall size={20} className="text-white" />
                9941201227
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
