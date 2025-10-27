import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/hero-modern.jpg"
            alt="Modern Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              The Art of Smart<br />Alarm Living
            </h1>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="border-t border-b border-gray-200 bg-black text-white">
        <div className="container mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Smart Scheduling</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Reliable Alarms</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Sync Across Devices</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative aspect-square overflow-hidden bg-gray-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-light">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-[#1A1A1A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video">
              <img
                src="/images/featured-alarm.jpg"
                alt="Smart Alarms"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light">Smart Living: Innovative Alarm Solutions</h2>
              <p className="text-gray-400">
                Experience the future of wake-up calls with our intelligent alarm system that adapts to your lifestyle and helps you maintain a healthy sleep schedule.
              </p>
              <Link
                to="/alarms"
                className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-light">Popular Features</h2>
          <Link to="/features" className="text-gray-600 hover:text-black transition-colors duration-300">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="group">
              <div className="aspect-square bg-gray-100 mb-4 relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-light text-lg mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  { 
    name: 'Quick Alarms', 
    path: '/quick-alarms', 
    count: '5 presets', 
    image: '/images/categories/quick-alarm.jpg'
  },
  { 
    name: 'Sleep Analysis', 
    path: '/sleep-analysis', 
    count: 'Pro feature', 
    image: '/images/categories/sleep-analysis.jpg'
  },
  { 
    name: 'Custom Sounds', 
    path: '/sounds', 
    count: '20+ sounds', 
    image: '/images/categories/sounds.jpg'
  },
  { 
    name: 'Smart Wake', 
    path: '/smart-wake', 
    count: 'AI-powered', 
    image: '/images/categories/smart-wake.jpg'
  },
];

const features = [
  { 
    id: 1, 
    name: 'Gradual Wake Up', 
    description: 'Gentle increasing volume', 
    image: '/images/features/gradual-wake.jpg'
  },
  { 
    id: 2, 
    name: 'Sleep Tracking', 
    description: 'Monitor your patterns', 
    image: '/images/features/sleep-tracking.jpg'
  },
  { 
    id: 3, 
    name: 'Multiple Profiles', 
    description: 'Family sharing', 
    image: '/images/features/profiles.jpg'
  },
  { 
    id: 4, 
    name: 'Smart Snooze', 
    description: 'AI-based intervals', 
    image: '/images/features/smart-snooze.jpg'
  },
];

export default Home;