import React from 'react';

const About = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img 
          src="/images/about-banner.jpg" 
          alt="About Us Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          ABOUT US
        </h1>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Welcome to Smart Alarms - your trusted companion in time management. We have eternally been dedicated 
            to making your daily routines more efficient and organized through our innovative alarm solutions.
          </p>
          <p>
            As a company, Smart Alarms upholds the quality and reliability of its services at the highest pedestal. 
            This has resulted in Smart Alarms being a trusted name in personal time management solutions. Our platform 
            combines both functionality and user-friendly design to enhance your daily scheduling experience.
          </p>
          <p>
            With a strong network of users spread across different platforms, we aim to bring quality and 
            reliable alarm services to users worldwide. With a host of features aimed at enhancing the lives 
            of our users, Smart Alarms has adapted to changing technological trends and reinvented itself 
            time and again.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Customizable Alarms</h3>
              <p className="text-gray-600">Create personalized alarms with custom sounds and schedules</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Wake-up</h3>
              <p className="text-gray-600">Intelligent wake-up system that adapts to your sleep patterns</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Multiple Timezones</h3>
              <p className="text-gray-600">Set alarms across different time zones effortlessly</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <span className="text-3xl mr-4">📞</span>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h4>
              <p className="text-gray-600">1800 1219 115</p>
              <p className="text-gray-500 text-sm">Available 7 days a week, 10:00 AM to 7:00 PM</p>
            </div>
          </div>
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <span className="text-3xl mr-4">✉️</span>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h4>
              <p className="text-gray-600">support@smartalarms.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;