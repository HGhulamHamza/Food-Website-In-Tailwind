import React from 'react';
import Pizza from '../assets/pizza.jpg';
import Burger from '../assets/burger.jpg';
import Momos from '../assets/momos.jpg';

const ExploreFoods = () => {
  return (
    <div className="text-center p-5">
      <h2 className="text-2xl font-bold mb-5">Explore Foods</h2>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="relative w-[300px] h-[450px] rounded-lg overflow-hidden shadow-lg">
          <img src={Pizza} alt="Pizza" className="w-full h-full object-cover" />
          <p className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white text-base font-bold p-2">
            Pizza
          </p>
        </div>
        <div className="relative w-[300px] h-[450px] rounded-lg overflow-hidden shadow-lg">
          <img src={Burger} alt="Burger" className="w-full h-full object-cover" />
          <p className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white text-base font-bold p-2">
            Burger
          </p>
        </div>
        <div className="relative w-[300px] h-[450px] rounded-lg overflow-hidden shadow-lg">
          <img src={Momos} alt="Momo" className="w-full h-full object-cover" />
          <p className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white text-base font-bold p-2">
            Momo
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreFoods;
