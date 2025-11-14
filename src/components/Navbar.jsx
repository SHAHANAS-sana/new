import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { getCartCount } = useCart();

  const categories = {
    'Room Type': ['Living Room', 'Bed Room', 'Dining Room', 'Study Room'],
    Material: ['Solid Wood', 'Engineered Wood'],
    Collections: ['Luxury Furniture'],
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-colors duration-300 rounded-b-lg 
        backdrop-blur-[7px] bg-[#81634b]/60 shadow-lg
        before:absolute before:inset-0 before:z-[-1] before:rounded-b-lg
        before:bg-gradient-to-b before:from-white/10 before:to-transparent
        before:backdrop-filter before:backdrop-blur-[7px]`}
      style={{
        WebkitBackdropFilter: 'blur(7px)',
        backdropFilter: 'blur(7px)',
        top: '40px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo - Now leftmost */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center py-2">
              <img
                src="/assets/logo.png"
                alt="Alrams Furniture & Interiors"
                className="h-12 md:h-14 w-auto object-contain bg-white px-2 py-1 rounded"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 rounded-md transition-colors flex items-center text-white hover:bg-white/10"
              >
                Categories
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-50 w-64 mt-2 bg-white rounded-md shadow-lg">
                  {Object.entries(categories).map(([category, items]) => (
                    <div key={category} className="py-2">
                      <div className="px-4 py-2 text-sm font-semibold text-gray-800 border-b border-gray-200">
                        {category}
                      </div>
                      {items.map(item => (
                        <Link
                          key={item}
                          to={`/category/${item
                            .toLowerCase()
                            .replace(' ', '-')}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 cursor-pointer transition-colors duration-150"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative flex items-center">
              <div
                className={`flex items-center transition-all duration-300 ease-in-out ${
                  isSearchOpen ? 'w-64' : 'w-10'
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full pl-10 pr-4 py-2 text-gray-800 bg-gray-100 rounded-full focus:outline-none transition-all duration-300 ${
                    isSearchOpen ? 'opacity-100' : 'opacity-0 w-0 p-0'
                  }`}
                  style={{
                    position: isSearchOpen ? 'relative' : 'absolute',
                    pointerEvents: isSearchOpen ? 'auto' : 'none',
                  }}
                />
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`absolute left-2 p-2 hover:bg-gray-200 rounded-full transition-colors ${
                    isHomePage
                      ? 'text-white hover:text-gray-800'
                      : 'text-gray-600'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <Link
              to="/cart"
              className="relative px-4 py-2 rounded-md transition-colors text-white hover:bg-white/10 flex items-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h12l1 14H5L6 6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6V5a3 3 0 0 1 6 0v1"
                />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <Link
              to="/about"
              className="px-4 py-2 rounded-md transition-colors text-white hover:bg-white/10"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 rounded-md transition-colors text-white hover:bg-white/10"
            >
              Contact Us
            </Link>

            <Link
              to="/login"
              className="px-4 py-2 rounded-md transition-colors text-white hover:bg-white/10"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 ${isHomePage ? 'text-white' : 'text-gray-600'}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isHomePage ? 'text-white' : 'text-gray-600'}`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Update with glassmorphism */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-[7px] bg-[#81634b]/60 shadow-lg">
          <div className="px-4 py-3">
            {/* Categories in mobile menu */}
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="mb-4">
                <div className="px-4 py-2 text-sm font-semibold text-white border-b border-white/10">
                  {category}
                </div>
                {items.map(item => (
                  <Link
                    key={item}
                    to={`/category/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
            {isSearchOpen && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  autoFocus
                />
              </div>
            )}
            <Link
              to="/cart"
              className="px-4 py-2 text-white hover:bg-white/10 rounded-md flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h12l1 14H5L6 6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6V5a3 3 0 0 1 6 0v1"
                />
              </svg>
              Cart ({getCartCount()})
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
