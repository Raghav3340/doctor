import React from 'react';
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  const handleScrollUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="py-10 px-6 md:px-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3">Find by Speciality</h1>
        <p className="text-lg font-light text-gray-600">
          Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {specialityData.map((item, index) => (
          <Link key={index} to={`/doctors/${item.speciality}`} onClick={handleScrollUp} className="group flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg">
            <img src={item.image} alt={item.speciality} className="w-20 h-20 object-cover mb-4 rounded-full" />
            <p className="text-base font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
