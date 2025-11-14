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
      {/* Sliding Announcement Banner */}
      <div className="bg-[#81634b] text-white py-2.5 overflow-hidden fixed top-0 left-0 right-0 z-50">
        <div className="animate-scroll whitespace-nowrap inline-block">
          <span className="inline-block">
            {[...Array(8)].map((_, index) => (
              <span key={index} className="inline-block mx-8 text-sm font-medium">
                ⭐ Get ₹500 OFF with voucher code 'GIFT500' on a minimum purchase of ₹5000. Enjoy free shipping on orders over ₹999
              </span>
            ))}
          </span>
          <span className="inline-block" aria-hidden="true">
            {[...Array(8)].map((_, index) => (
              <span key={index} className="inline-block mx-8 text-sm font-medium">
                ⭐ Get ₹500 OFF with voucher code 'GIFT500' on a minimum purchase of ₹5000. Enjoy free shipping on orders over ₹999
              </span>
            ))}
          </span>
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
