import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12">
        {/* Column 1 - Logo and Contact Info */}
        <div>
          <div className="flex items-center space-x-2">
            <img
              src="./images/logof.png"
              alt="Kaffe Codes Logo"
              className="h-16 w-32"
            />
          </div>
          <p className="mt-4 text-sm">
            Kaffe Codes is the platform to run a successful online business in Nepal.
          </p>
          <p className="mt-2 text-sm">Bishalnagar, Kathmandu</p>
          <p className="mt-1 text-sm">+977 9812345678</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Column 2 - Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3 - Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Bakery</a></li>
            <li><a href="#" className="hover:underline">Coffee</a></li>
            <li><a href="#" className="hover:underline">Tea</a></li>
            <li><a href="#" className="hover:underline">Utensils</a></li>
            <li><a href="#" className="hover:underline">Machineries</a></li>
            <li><a href="#" className="hover:underline">Cakes</a></li>
          </ul>
        </div>

        {/* Column 4 - Working Hours and Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Working Hours</h3>
          <p className="text-sm mb-4">Monday - Friday</p>
          <p className="text-sm mb-4">9:00 AM - 6:00 PM</p>
          <hr className="border-gray-700 mb-4" />
          <h3 className="text-lg font-bold mb-4">Join Our Newsletter</h3>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-auto text-sm text-gray-900 rounded-t-full sm:rounded-l-md sm:rounded-t-none focus:outline-none"
            />
            <button className="px-6 py-2 text-sm bg-green-600 text-white rounded-b-full sm:rounded-r-full sm:rounded-b-none hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 md:px-12">
          <p className="text-sm text-gray-400">
            Copyright © 2024 DigiBox.Guru. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="text-gray-500">·</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
