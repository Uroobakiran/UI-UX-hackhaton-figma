import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="bg-[#FBEBB5] px-4 md:px-8 py-4 shadow-md">
      <header className="flex justify-between items-center">
      
        <nav className="flex space-x-6">
          <Link href="#"
            className="text-gray-700 hover:underline">Home
          </Link>
          <Link href="#"
            className="text-gray-700 hover:underline">Shop
          </Link>
          <Link href="#"
             className="text-gray-700 hover:underline">About
          </Link>
          <Link href="#"
            className="text-gray-700 hover:underline">Contact
          </Link>
        </nav>

       
        <div className="flex space-x-4">
          <Link href="#"
             className="text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faSearch} />
            
          </Link>
          <Link href="#"
             className="text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faShoppingCart} />
           
          </Link>
          <Link href="#"
            className="text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faHeart} />
            
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
