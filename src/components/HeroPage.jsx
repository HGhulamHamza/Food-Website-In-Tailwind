import React from 'react';
import HeroImage from '../assets/hero.jpg';

const HeroPage = () => {
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
  };

  return (
    <div className="flex justify-center items-center h-[65vh] w-full bg-cover bg-center" style={heroStyle}>
      <div className="flex w-full max-w-[700px] p-5">
        <input
          type="text"
          placeholder="Search for Food"
          className="w-full p-1.5 border-none rounded-l-md focus:outline-none"
        />
        <button className="w-[120px] p-1.5 ml-2 bg-red-600 text-white rounded-r-md hover:bg-red-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
