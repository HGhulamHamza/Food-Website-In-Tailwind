import React from 'react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s5 from '../assets/s5.jpg';

const FoodItems = () => {
  return (
    <div className="text-center py-5 bg-gray-200 mt-5">
      <h2 className="text-2xl mb-5 text-crimson font-bold">Food Menu</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white border border-gray-300 rounded-lg flex w-1/2 max-w-md h-40 text-left p-2 mr-4">
          <img src={s1} alt="Food Title" className="w-1/4 h-32 rounded-lg my-auto" />
          <div className="pl-4 flex flex-col justify-center">
            <h3 className="font-bold text-lg">Food Title</h3>
            <p className="font-semibold text-black mt-1">$2.3</p>
            <p className="text-sm text-gray-600 mt-1">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 self-start">Order Now</button>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg flex w-1/2 max-w-md h-40 text-left p-2 mr-4">
          <img src={s2} alt="Smoky Burger" className="w-1/4 h-32 rounded-lg my-auto" />
          <div className="pl-4 flex flex-col justify-center">
            <h3 className="font-bold text-lg">Smoky Burger</h3>
            <p className="font-semibold text-black mt-1">$2.3</p>
            <p className="text-sm text-gray-600 mt-1">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 self-start">Order Now</button>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg flex w-1/2 max-w-md h-40 text-left p-2 mr-4">
          <img src={s3} alt="Nice Burger" className="w-1/4 h-32 rounded-lg my-auto" />
          <div className="pl-4 flex flex-col justify-center">
            <h3 className="font-bold text-lg">Nice Burger</h3>
            <p className="font-semibold text-black mt-1">$2.3</p>
            <p className="text-sm text-gray-600 mt-1">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 self-start">Order Now</button>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg flex w-1/2 max-w-md h-40 text-left p-2">
          <img src={s5} alt="Chicken Steam Momo" className="w-1/4 h-32 rounded-lg my-auto" />
          <div className="pl-4 flex flex-col justify-center">
            <h3 className="font-bold text-lg">Chicken Steam Momo</h3>
            <p className="font-semibold text-black mt-1">$2.3</p>
            <p className="text-sm text-gray-600 mt-1">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 self-start">Order Now</button>
          </div>
        </div>
      </div>
      <a href="#" className="block mt-5 text-red-500 hover:underline">See All Foods</a>
    </div>
  );
};

export default FoodItems;
