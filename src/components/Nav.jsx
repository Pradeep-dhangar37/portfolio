import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import '../App.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="w-full h-14 flex items-center justify-between px-6 md:px-12">
        <div className="logo">
          <h1 className="font-bold text-2xl">Pradeep <span>Dhangar</span></h1>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleNav}>
            <FiAlignJustify className="text-2xl"/>
          </button>
        </div>
        <div className={`navigation ${isOpen ? 'block' : 'hidden right-0'} md:block absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 p-4 md:p-0">
            <li className="hover:text-indigo-600 py-2 md:py-0"><a href="#home">Home</a></li>
            <li className="hover:text-indigo-600 py-2 md:py-0"><a href="#project">Project</a></li>
            <li className="hover:text-indigo-600 py-2 md:py-0"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
