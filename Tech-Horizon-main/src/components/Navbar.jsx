import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa"; // Importing the dropdown icon from React Icons

import { navLinks } from "../constants";
import hack from "./hack.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        onClose();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, onClose]);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-4 rounded shadow-lg relative w-[90%] md:w-[70%] max-w-4xl overflow-hidden">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    navLinks.forEach((nav) => {
      const element = document.getElementById(nav.id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setModalOpen(true);
    }, 500); // Adjust delay as needed to match scroll duration
  };

  return (
    <nav
      className={`px-6 w-full flex items-center z-50 py-5 fixed top-0 transition-all duration-300 ${
        scrolled ? "bg-primary bg-opacity-80" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault(); // Prevent default behavior
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={hack} alt="logo" className="w-25 h-20 object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks
            .filter((nav) =>
              ["Home", "About", "Highlights", "Prizes", "Sponsors"].includes(
                nav.title
              )
            )
            .map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer px-4 py-2`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`} className="block">
                  {nav.title}
                </a>
              </li>
            ))}
          <li className="relative text-secondary pt-1 hover:text-white text-[18px] font-medium cursor-pointer group">
            <a href="#more" className="flex items-center">
              More <FaChevronDown className="ml-2" />{" "}
              {/* Using the React Icons dropdown icon */}
            </a>
            <ul className="absolute hidden group-hover:flex flex-col bg-[#141B2A] text-white mt-2 py-4 shadow-lg rounded min-w-[180px]">
              {navLinks
                .filter((nav) =>
                  [
                    "Timeline",
                    "FAQ",
                    "Guidelines",
                    "Support",
                    "Contact",
                  ].includes(nav.title)
                )
                .map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "text-secondary"
                    } hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white text-[16px] font-medium cursor-pointer px-4 py-2`}
                    onClick={() => setActive(nav.id)}
                  >
                    <a href={`#${nav.id}`} className="block">
                      {nav.title}
                    </a>
                  </li>
                ))}
            </ul>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <button
              onClick={handleRegisterClick}
              className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-purple-500 rounded-lg bg-transparent border-2 border-purple-500 transition duration-300 ease-in-out transform shadow-lg hover:bg-purple-500 hover:text-white"
            >
              Register Now
            </button>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="p-2 bg-gray-800 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition duration-200 ease-in-out"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } fixed inset-0 flex items-center justify-center z-50`}
          >
            <div className="bg-black bg-opacity-90 text-white rounded-xl p-8 shadow-lg w-[90%] max-w-lg">
              <button
                onClick={() => setToggle(!toggle)}
                className="absolute top-5 right-5 p-2 bg-gray-800 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition duration-200 ease-in-out"
              >
                <img
                  src={close}
                  alt="close"
                  className="w-[28px] h-[28px] object-contain"
                />
              </button>
              <ul className="list-none flex justify-center items-center flex-1 flex-col gap-4 mt-8">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[24px] w-full text-center ${
                      active === nav.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "text-secondary"
                    } hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white px-4 py-2 rounded`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.id);
                    }}
                  >
                    <a href={`#${nav.id}`} className="block">
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li className="text-secondary hover:text-white text-[24px] font-medium cursor-pointer w-full text-center">
                  <button
                    onClick={handleRegisterClick}
                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-purple-500 rounded-lg bg-transparent border-2 border-purple-500 transition duration-300 ease-in-out transform shadow-lg hover:bg-purple-500 hover:text-white"
                  >
                    Register Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      

     

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <iframe
          src="https://near.tl/sm/By8hFExpc"
          title="Registration Form"
          className="w-full  h-[700px] border-0"
          style={{ overflow: "hidden", display: "block" }}
        ></iframe>
      </Modal>
    </nav>
  );
};

export default Navbar;
