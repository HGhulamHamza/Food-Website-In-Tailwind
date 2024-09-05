import React from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3 md:px-16 bg-white">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-15 h-14 mr-3" />
        <span className="font-semibold text-base">wowFood</span>
      </div>
      <ul className="flex space-x-5 ml-12">
        <li><a href="#home" className="text-crimson font-semibold text-sm">Home</a></li>
        <li><a href="#about" className="text-crimson font-semibold text-sm">About</a></li>
        <li><a href="#foods" className="text-crimson font-semibold text-sm">Foods</a></li>
        <li><a href="#contact" className="text-crimson font-semibold text-sm">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
