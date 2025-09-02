import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      // wait for navigation to finish before scrolling
      setTimeout(() => {
        scroller.scrollTo("about", {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    } else {
      scroller.scrollTo("about", {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "About Us", action: handleAboutClick },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-4 md:px-20 py-4 bg-white shadow  z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src="/logo.webp"
            alt="RKP"
            className="h-[60px] w-[120px] object-cover rounded-full"
          />
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex justify-between items-center gap-8 text-sm font-semibold text-blue-900">
        {navLinks.map(({ name, path, action }) =>
          action ? (
            <button
              key={name}
              onClick={action}
              className="md:text-lg cursor-pointer px-4 py-2 border-b-4 transition duration-500 text-blue-600 font-bold border-transparent hover:border-blue-600 bg-transparent"
            >
              {name}
            </button>
          ) : (
            <NavLink
              to={path}
              key={name}
              className={({ isActive }) =>
                `md:text-lg cursor-pointer px-4 py-2 border-b-4 transition duration-500 ${
                  isActive
                    ? "text-blue-600 font-bold border-blue-600"
                    : "text-blue-600 font-bold border-transparent hover:border-blue-600"
                }`
              }
            >
              {name}
            </NavLink>
          )
        )}
      </ul>

      {/* Call Button (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-blue-900 text-white px-7 font-bold py-4 flex gap-2 justify-center items-center rounded-lg">
          <IoCall size={20} className="text-white" /> 9944455127
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 text-lg font-semibold text-blue-900 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden z-40`}
      >
        {navLinks.map(({ name, path, action }) =>
          action ? (
            <button
              key={name}
              onClick={() => {
                action();
                setIsOpen(false);
              }}
              className="hover:text-blue-600"
            >
              {name}
            </button>
          ) : (
            <NavLink
              to={path}
              key={name}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              {name}
            </NavLink>
          )
        )}
        <button className="bg-blue-900 text-white px-6 py-3 rounded-full flex items-center gap-2">
          <IoCall size={20} className="text-white" />
          9941201227
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
