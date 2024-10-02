import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-20">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Logo and App Description */}
        <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center text-center md:text-left">
          <img src={assets.logo} alt="Logo" className="w-20 h-20 mb-4" /> {/* Enlarged logo */}
          <p className="text-gray-600 text-lg"> {/* Increased font size */}
            Prescripto is your trusted partner for managing prescriptions effortlessly. Our platform simplifies healthcare, making it easy to store, track, and share prescriptions with your healthcare providers securely.
          </p>
        </div>
        
        {/* Middle Section - Company Links */}
        <div className="md:w-1/3 mb-6 md:mb-0 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4"> {/* Increased font size */}
            Company
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-gray-800 text-lg">Home</a></li> {/* Increased font size */}
            <li><a href="#" className="hover:text-gray-800 text-lg">About Us</a></li> {/* Increased font size */}
            <li><a href="#" className="hover:text-gray-800 text-lg">Our Services</a></li> {/* Increased font size */}
            <li><a href="#" className="hover:text-gray-800 text-lg">Privacy Policy</a></li> {/* Increased font size */}
          </ul>
        </div>
        
        {/* Right Section - Contact Info */}
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4"> {/* Increased font size */}
            Get In Touch
          </h3>
          <p className="text-gray-600 text-lg mb-2"> {/* Increased font size */}
            Phone: +0-000-000-000
          </p>
          <p className="text-gray-600 text-lg"> {/* Increased font size */}
            Email: support@prescripto.com
          </p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center">
        <p className="text-gray-600 text-lg"> {/* Increased font size */}
          Copyright © 2024 Prescripto - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
