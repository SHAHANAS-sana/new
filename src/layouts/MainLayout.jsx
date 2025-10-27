import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div
      className={`min-h-screen flex flex-col ${isHomePage ? '' : 'bg-gray-50'}`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Quick Actions */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
          <span className="sr-only">WhatsApp Support</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </button>
        <button className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark">
          <span className="sr-only">Quick Add Alarm</span>
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      {/* Cookie Consent */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4"
        id="cookie-consent"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark text-sm">
              Accept All
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-sm">
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
