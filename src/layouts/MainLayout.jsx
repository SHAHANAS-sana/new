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
      {/* Announcement Banner */}
      <div className="bg-white text-black py-3 fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
        <div className="text-center">
          <a
            href="/collections"
            className="text-sm font-medium hover:text-[#81634b] hover:underline transition-colors duration-300"
          >
            Get ₹500 OFF with voucher code 'GIFT500' on a minimum purchase of
            ₹5000. Enjoy free shipping on orders over ₹999
          </a>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
