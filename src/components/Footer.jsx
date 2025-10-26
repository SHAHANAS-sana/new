import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Features',
      links: [
        { name: 'Smart Wake', path: '/features/smart-wake' },
        { name: 'Sleep Analysis', path: '/features/sleep-analysis' },
        { name: 'Multiple Timezones', path: '/features/timezones' },
        { name: 'Custom Sounds', path: '/features/sounds' },
        { name: 'Premium Features', path: '/features/premium' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/support/help' },
        { name: 'FAQs', path: '/support/faqs' },
        { name: 'Contact Us', path: '/support/contact' },
        { name: 'Feedback', path: '/support/feedback' },
        { name: 'Download App', path: '/download' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Stay Updated with Smart Alarms</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for sleep insights, productivity tips, and exclusive offers.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xl font-bold text-gray-800">Smart<span className="text-primary">Alarms</span></span>
            </div>
            <p className="text-gray-600 mb-6">
              Your trusted companion for smart wake-up solutions and sleep management. Making mornings better, one alarm at a time.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/smartalarms`}
                  className="text-gray-400 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-900 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SmartAlarms. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <img src="/images/app-store-badge.png" alt="Download on App Store" className="h-10" />
              <img src="/images/google-play-badge.png" alt="Get it on Google Play" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;