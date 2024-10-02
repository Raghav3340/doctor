import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { useState } from "react";

const Navbar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // For mobile menu if needed in future
  const [token, setToken] = useState(true);

  const handleLogout = () => {
    setToken(false); // Log out the user
    setShowMenu(false); // Close dropdown if open
  };

  return (
    <div className="flex justify-between items-center text-sm py-4 mb-6 border-b border-gray-200">
      {/* Logo */}
      <img onClick={() => navigate('/')} src={assets.logo} alt="navbar-logo" className="w-28 cursor-pointer" />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li>
          <NavLink to="/" className="relative">
            Home
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto absolute bottom-[-5px] left-0 right-0 hidden active:block" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className="relative">
            ALL DOCTORS
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto absolute bottom-[-5px] left-0 right-0 hidden active:block" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="relative">
            ABOUT
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto absolute bottom-[-5px] left-0 right-0 hidden active:block" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="relative">
            CONTACT
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto absolute bottom-[-5px] left-0 right-0 hidden active:block" />
          </NavLink>
        </li>
      </ul>

      {/* Create Account Button or Profile Menu */}
      <div className="flex items-center gap-4">
        {
          token ? 
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img src={assets.dropdown_icon} alt="" />
            
            {/* Dropdown menu with transition */}
            <div className="absolute top-full right-0 mt-2 w-48 text-base font-medium text-gray-900 z-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out bg-white shadow-lg rounded-lg">
              <div className="p-4">
                <p onClick={() => navigate('my-profile')} className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">My Profile</p>
                <p onClick={() => navigate('my-appointment')} className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">My Appointment</p>
                <p onClick={handleLogout} className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
          : <button onClick={() => navigate('/login')} className="bg-blue-500 text-white cursor-pointer py-2 px-4 rounded-full hover:bg-blue-600">
              Create Account
            </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
