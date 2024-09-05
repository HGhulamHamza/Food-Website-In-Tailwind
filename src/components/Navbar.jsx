import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for menu and close button

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-3 md:px-16 bg-white">
      <div className="flex items-center w-full md:w-auto">
        <img src={Logo} alt="Logo" className="w-15 h-14 mr-3" />
        <span className="font-semibold text-base">wowFood</span>
      </div>

      {/* Mobile menu toggle button */}
      <button 
        className="md:hidden flex items-center ml-auto" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX className="text-crimson text-2xl" /> : <FiMenu className="text-crimson text-2xl" />}
      </button>

      <ul 
        className={`md:flex md:space-x-5 mt-2 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:block`}
      >
        <li><a href="#home" className="text-crimson font-semibold text-sm">Home</a></li>
        <li><a href="#about" className="text-crimson font-semibold text-sm">About</a></li>
        <li><a href="#foods" className="text-crimson font-semibold text-sm">Foods</a></li>
        <li><a href="#contact" className="text-crimson font-semibold text-sm">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
