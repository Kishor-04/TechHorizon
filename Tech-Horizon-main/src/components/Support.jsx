// src/components/Support.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaUserAlt, FaMapMarkerAlt } from "react-icons/fa";
import { styles } from "../styles";

const contactDetails = [
  {
    title: "Technical Queries",
    contacts: [
      { name: "Rushikesh Parkhe", phone: "+91 8010272181" },
      { name: "Vaibhav Shinde", phone: "+91 9665366257" }
    ],
    icon: <FaUserAlt className="text-purple-400 text-4xl mb-4" />
  },
  {
    title: "Other Queries",
    contacts: [
      { name: "Krishna Patel", phone: "+91 7757089755" },
      { name: "Ishwari Sangle", phone: "+91 7498841949" }
    ],
    icon: <FaUserAlt className="text-purple-400 text-4xl mb-4" />
  }
];

const Support = () => {
  return (
    <div id="support" className="bg-[#050816] text-white py-10 px-5">
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-5xl font-bold gradient-text-purple mb-4">Support</h1>
        <p className={styles.sectionSubText}>We're just a message away, reach out for any help</p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-around gap-10">
        {contactDetails.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-tertiary p-5 rounded-lg border-2 border-transparent transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:border-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:to-yellow-500 hover:to-blue-500"
            style={{ width: '90%', maxWidth: '400px' }}
          >
            {section.icon}
            <h2 className="relative font-bold text-white text-2xl md:text-3xl tracking-wide mb-4">
              {section.title}
            </h2>
            <div className="flex flex-col items-center">
              {section.contacts.map((contact, i) => (
                <div key={i} className="mb-2 flex items-center">
                  <FaPhoneAlt className="text-gray-300 mr-2" />
                  <p>{contact.name}: {contact.phone}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div
          className="flex flex-col items-center justify-center text-center bg-tertiary p-5 rounded-lg border-2 border-transparent transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:border-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:to-yellow-500 hover:to-blue-500"
          style={{ width: '90%', maxWidth: '400px' }}
        >
          <FaMapMarkerAlt className="text-purple-400 text-4xl mb-4" />
          <h2 className="relative font-bold text-white text-2xl md:text-3xl tracking-wide mb-4">
            Address Information
          </h2>
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center">
              <p>K.K Wagh Institute of Engineering, Nashik, Maharashtra-422003</p>
            </div>
            <div className="mb-2 flex items-center">
              <FaPhoneAlt className="text-gray-300 mr-2" />
              <p>0250-0000</p>
            </div>
            <div className="mb-2 flex items-center">
              <FaGlobe className="text-gray-300 mr-2" />
              <p>Website: <a href="http://techhorizon.in" className="text-gray-300 hover:underline">techhorizon.in</a></p>
            </div>
            <div className="mb-2 flex items-center">
              <FaEnvelope className="text-gray-300 mr-2" />
              <p>Email: <a href="mailto:techoriozon2k25@gmail.com" className="text-gray-300 hover:underline">techoriozon2k25@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
