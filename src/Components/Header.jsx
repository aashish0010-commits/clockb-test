import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section>
      <div>
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
          {/* Left Section - Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="./images/logoc.png"
              alt="Logo"
              className="h-20 w-44"
            />
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#brands" className="hover:text-green-700">Brands</a>
            <a href="#offers" className="hover:text-green-700">Offers</a>
            <a href="#guide" className="hover:text-green-700">Buying Guide</a>
            <a href="#gifts" className="hover:text-green-700">Gifts</a>
          </div>

          {/* Right Section - Search and Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search on Kaffe Codes"
                className="px-4 py-2 text-sm border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Icons */}
            <button className="p-2 text-gray-600 hover:text-green-700">
              <i className="bi bi-heart"></i>
            </button>
            <button className="p-2 text-gray-600 hover:text-green-700">
              <i className="bi bi-basket"></i>
            </button>

            {/* Sign-In Button */}
            <button className="hidden md:px-4 md:py-2 md:text-sm md:text-white md:bg-green-600 md:rounded-full md:hover:bg-green-700">
              Sign In
            </button>

            {/* Hamburger Menu */}
            <button
              className="block md:hidden text-gray-600 hover:text-green-700 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </nav>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          ></div>
        )}

        {/* Sliding Side Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-6 space-y-6">
            {/* Close Button */}
            <button
              className="self-end text-gray-600 hover:text-green-700 focus:outline-none"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <i className="bi bi-x-lg text-2xl"></i>
            </button>

            {/* Navigation Links */}
            <a href="#brands" className="text-lg font-medium text-gray-700 hover:text-green-700">Brands</a>
            <a href="#offers" className="text-lg font-medium text-gray-700 hover:text-green-700">Offers</a>
            <a href="#guide" className="text-lg font-medium text-gray-700 hover:text-green-700">Buying Guide</a>
            <a href="#gifts" className="text-lg font-medium text-gray-700 hover:text-green-700">Gifts</a>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search on Kaffe Codes"
              className="px-4 py-2 text-sm border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Icons */}
            <div className="flex space-x-4">
              <button className="p-2 text-gray-600 hover:text-green-700">
                <i className="bi bi-heart"></i>
              </button>
              <button className="p-2 text-gray-600 hover:text-green-700">
                <i className="bi bi-basket"></i>
              </button>
            </div>

            {/* Sign-In Button */}
            <button className="px-4 py-2 text-sm text-white bg-green-600 rounded-full hover:bg-green-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
