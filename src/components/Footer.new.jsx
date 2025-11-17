import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
  const footerLinks = {
    PRODUCT: [
      { name: 'Pricing', path: '/pricing' },
      { name: 'Features', path: '/features' },
      { name: 'Customers', path: '/customers' },
      { name: 'One-Click Apps', path: '/one-click-apps' },
      { name: 'API', path: '/api' },
    ],
    COMPANY: [
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    HELP: [
      { name: 'Getting Started', path: '/getting-started' },
      { name: 'Feedback', path: '/feedback' },
      { name: 'Referral Program', path: '/referral' },
      { name: 'Network Status', path: '/status' },
      { name: 'FAQ', path: '/faq' },
    ],
    SOCIAL: [
      {
        name: 'Instagram',
        path: 'https://www.instagram.com/alramsfurnitureshowroom?igsh=MTczdDJoYTVuZWhuMg==',
        icon: <FaInstagram />,
      },
      { name: 'Facebook', path: 'https://facebook.com', icon: <FaFacebookF /> },
      {
        name: 'LinkedIn',
        path: 'https://linkedin.com',
        icon: <FaLinkedinIn />,
      },
      { name: 'Google', path: 'https://google.com', icon: <FcGoogle /> },
    ],
  };

  return (
    <footer className="bg-[#1D1D1D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-400 text-sm font-medium mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.name}>
                    {category === 'SOCIAL' ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
