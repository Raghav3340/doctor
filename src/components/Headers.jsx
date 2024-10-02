import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Headers = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 py-10 md:py-16 items-center gap-8 md:gap-20">
      
      {/* Left Side Content */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex flex-col gap-3">
          <img src={assets.group_profiles} alt="group profiles" className="w-40" />
          <p className="text-lg font-light leading-relaxed">
            Simply browse through our extensive list of trusted doctors, 
            schedule your appointment hassle-free.
          </p>
        </div>

        <a href="#" className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">
          Book Appointment 
          <img src={assets.arrow_icon} alt="arrow icon" className="ml-3" />
        </a>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={assets.header_img} alt="header illustration" className="w-full h-auto max-w-md" />
      </div>
      
    </div>
  );
};

export default Headers;
