import React from 'react';
import Instagram from '../assets/insta.jpg';
import Facebook from '../assets/fb.png';
import Twitter from '../assets/twitter.png';

const Icons = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-5 p-5">
        <img src={Facebook} className="w-7 h-7 rounded-md" alt="Facebook" />
        <img src={Instagram} className="w-7 h-7 rounded-md" alt="Instagram" />
        <img src={Twitter} className="w-7 h-7 rounded-md" alt="Twitter" />
      </div>
      <p className="flex justify-center items-center">
        All rights reserved. Designed by <span className="text-crimson ml-1">Ghulam Hamza</span>
      </p>
    </div>
  );
};

export default Icons;
