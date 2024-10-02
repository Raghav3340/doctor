import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-primary p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      <div className="text-center md:text-left md:w-1/2">
        <p className="text-5xl font-bold text-white leading-tight">Book Appointment</p>
        <p className="text-4xl font-bold text-white leading-tight mt-2">With 100+ Trusted Doctors</p>
        <button className="mt-6 bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
          Create account
        </button>
      </div>

      <div className="mt-6 md:mt-0 md:w-1/2">
        <img src={assets.appointment_img} alt="Appointment" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Banner;
