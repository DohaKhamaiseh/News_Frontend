import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-gray-900 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 w-20 h-20 flex items-center justify-center rounded-full">
            <span className="text-white font-bold text-lg">Logo</span>
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="text-white text-center">
          <Link href="./aboutus"><p className="mb-2">About Us</p></Link>
          <Link href="./ourteam"><p>Our Team</p></Link>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-4">
        <p className="mb-2">Contact Us</p>
          <div className="flex items-center space-x-2">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-white" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-white" />
            </a>
          </div>
          <div className=" ">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
