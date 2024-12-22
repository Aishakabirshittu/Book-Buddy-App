import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Book Buddy</h1>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Links */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:space-x-6 bg-primary sm:bg-transparent w-full sm:w-auto mt-4 sm:mt-0`}
      >
        <li className="text-center sm:text-left">
          <NavLink
            to="/"
            className="block py-2 sm:py-0 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="text-center sm:text-left">
          <NavLink
            to="/about"
            className="block py-2 sm:py-0 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li className="text-center sm:text-left">
          <NavLink
            to="/contact"
            className="block py-2 sm:py-0 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
