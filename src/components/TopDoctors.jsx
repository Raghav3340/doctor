import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const navigate = useNavigate();
    const { doctors } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center py-10 px-6 md:px-12">
      <h1 className="text-3xl font-bold mb-3 text-center">Top Doctors to Book</h1>
      <p className="text-lg font-light text-gray-600 mb-6 text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={() => navigate(`/appintment/${item._id}`)} key={index} className="border border-blue-200 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer relative">
            <img src={item.image} alt={item.name} className=" bg-blue-50" />
            
            {/* Available Badge */}
            <div className="absolute top-3 left-3 flex items-center bg-white shadow rounded-full p-1">
              <p className="text-green-500 text-xs font-semibold rounded-full bg-green-500 w-2 h-2 mr-1"></p>
              <p className="text-green-600 text-xs font-semibold">Available</p>
            </div>

            <div className="p-4">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => {navigate('/doctors')}} className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
        More
      </button>
    </div>
  );
};

export default TopDoctors;
