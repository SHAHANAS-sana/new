import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleDropdown = name => {
    setIsDropdownOpen(isDropdownOpen === name ? '' : name);
  };

  const mainMenuItems = [
    {
      name: 'Alarms',
      path: '/alarms',
      submenu: [
        { name: 'All Alarms', path: '/alarms' },
        { name: 'Create New', path: '/alarms/new' },
        { name: 'Categories', path: '/alarms/categories' },
        { name: 'Settings', path: '/alarms/settings' },
      ],
    },
    {
      name: 'Timers',
      path: '/timers',
      submenu: [
        { name: 'Quick Timer', path: '/timers/quick' },
        { name: 'Custom Timer', path: '/timers/custom' },
        { name: 'Presets', path: '/timers/presets' },
      ],
    },
    {
      name: 'Features',
      path: '/features',
      submenu: [
        { name: 'Smart Wake', path: '/features/smart-wake' },
        { name: 'Sleep Analysis', path: '/features/sleep-analysis' },
        { name: 'Multiple Zones', path: '/features/zones' },
      ],
    },
    {
      name: 'Support',
      path: '/support',
      submenu: [
        { name: 'Help Center', path: '/support/help' },
        { name: 'Contact Us', path: '/support/contact' },
        { name: 'FAQs', path: '/support/faqs' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isHomePage ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                className={`text-2xl font-bold ${
                  isHomePage ? 'text-white' : 'text-gray-800'
                }`}
              >
                Smart
                <span
                  className={isHomePage ? 'text-purple-300' : 'text-primary'}
                >
                  Alarms
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {mainMenuItems.map(item => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`px-4 py-2 ${
                    isHomePage
                      ? 'text-white hover:text-purple-200'
                      : 'text-gray-600 hover:text-primary'
                  } focus:outline-none flex items-center space-x-1`}
                >
                  <span>{item.name}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen === item.name && (
                  <div
                    className={`absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg py-2 ${
                      isHomePage ? 'bg-white/90 backdrop-blur-lg' : 'bg-white'
                    }`}
                  >
                    {item.submenu.map(subItem => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`${
                isHomePage
                  ? 'text-white hover:text-purple-200'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <svg
                className="w-6 h-6"
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
            <div className="h-6 w-px bg-gray-200"></div>
            <Link
              to="/profile"
              className={`${
                isHomePage
                  ? 'text-white hover:text-purple-200'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isHomePage
                  ? 'text-white hover:text-purple-200'
                  : 'text-gray-600 hover:text-primary'
              } focus:outline-none p-2`}
            >
              <svg
                className="h-6 w-6"
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainMenuItems.map(item => (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full px-3 py-2 text-gray-600 hover:text-primary flex justify-between items-center"
                >
                  <span>{item.name}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen === item.name && (
                  <div className="pl-4">
                    {item.submenu.map(subItem => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
