import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    {
      title: 'PRODUCT',
      links: [
        { name: 'Pricing', path: '/pricing' },
        { name: 'Features', path: '/features' },
        { name: 'Customers', path: '/customers' },
        { name: 'One-Click Apps', path: '/one-click-apps' },
        { name: 'API', path: '/api' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
      ],
    },
    {
      title: 'HELP',
      links: [
        { name: 'Getting Started', path: '/getting-started' },
        { name: 'Feedback', path: '/feedback' },
        { name: 'Referral Program', path: '/referral' },
        { name: 'Contact', path: '/contact' },
        { name: 'Network Status', path: '/status' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', path: 'https://instagram.com', icon: <FaInstagram /> },
    { name: 'Facebook', path: 'https://facebook.com', icon: <FaFacebookF /> },
    { name: 'LinkedIn', path: 'https://linkedin.com', icon: <FaLinkedinIn /> },
    { name: 'Google', path: 'https://google.com', icon: <FaGoogle /> },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-400">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
          {/* Logo and Copyright */}
          <div>
            <div className="text-white text-2xl font-light mb-4">AlRams</div>
            <div className="text-sm mb-2">Copyright © 2025</div>
            <div className="text-sm">AlRams Corp.</div>
            <div className="text-sm mt-4">Created by KK UI Store</div>
          </div>

          {/* Footer Sections */}
          {footerLinks.map(section => (
            <div key={section.title}>
              <h3 className="text-sm font-medium text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Section */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">SOCIAL</h3>
            <ul className="space-y-2">
              {socialLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
