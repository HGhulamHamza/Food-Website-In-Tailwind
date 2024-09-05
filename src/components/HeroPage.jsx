import React from 'react';
import HeroImage from '../assets/hero.jpg';

const HeroPage = () => {
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
  };

  return (
    <div className="flex justify-center items-center h-[65vh] w-full bg-cover bg-center" style={heroStyle}>
      <div className="flex flex-col w-full max-w-[600px] p-5 md:flex-row">
        <input
          type="text"
          placeholder="Search for Food"
          className="w-full p-2 mb-1 border-none rounded-t-md md:w-[500px] md:rounded-l-md md:rounded-t-none focus:outline-none"
        />
        <button className="w-16 p-2 bg-crimson text-white rounded-b-md md:w-auto md:ml-1 md:rounded-r-md hover:bg-[#ff4c4c]">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
