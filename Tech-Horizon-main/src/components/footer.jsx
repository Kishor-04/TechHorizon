import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import techHorizonLogo from "./hack.png"; // Update the path to the actual logo image

const Footer = () => {
  return (
    <footer className="bg-[#050816] text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Follow Us On Section */}
        <div className="text-center md:text-center">
          {/* <div className="mb-4 flex justify-center">
            <img src={techHorizonLogo} alt="Tech Horizon Logo" className="w-32" />
          </div> */}
          <h2 className="relative font-bold text-[40px] tracking-wide mb-8">
            Follow Us <span className="gradient-text-purple">On</span>
          </h2>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition-all duration-300">
              <FaFacebook size={28} className="text-gray-300 hover:text-[#4267B2]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition-all duration-300">
              <FaInstagram size={28} className="text-gray-300 hover:text-[#E4405F]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition-all duration-300">
              <FaLinkedin size={28} className="text-gray-300 hover:text-[#0077B5]" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-center">
          <h2 className="relative font-bold text-[40px] tracking-wide mb-8">
            Quick <span className="gradient-text-purple">Links</span>
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
            </li>
            <li>
              <a href="#features" className="text-gray-300 hover:text-white">Domains</a>
            </li>
            <li>
              <a href="#guidelines" className="text-gray-300 hover:text-white">Rules & Registration</a>
            </li>
            <li>
              <a href="#work" className="text-gray-300 hover:text-white">Event Schedule</a>
            </li>
            <li>
              <a href="#faq" className="text-gray-300 hover:text-white">Questions</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Google Map Section */}
        <div className="text-center md:text-center">
          <h2 className="relative font-bold text-[40px] tracking-wide mb-8">
           Google Map<span className="gradient-text-purple">Location</span>
          </h2>
          
          <div className="container mx-auto mt-10">
            <iframe 
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.878906004786!2d73.8196864749515!3d20.013596421870805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebab15555555%3A0xdb01367e9d5cf969!2sK.K%20Wagh%20Institute%20Of%20Engineering%20Education%20and%20Research!5e0!3m2!1sen!2sin!4v1737207029501!5m2!1sen!2sin" 
              width="100%" 
              height="250" 
              frameBorder="0" 
              allowFullScreen="" 
              aria-hidden="false" 
              tabIndex="0" 
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 text-sm">
        <p>&copy; 2025 All rights reserved by K.K. WAGH College Of Engineering & Technology.</p>
      </div>
    </footer>
  );
};

export default Footer;
