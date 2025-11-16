import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicContent from '../components/DynamicContent';
import { useCart } from '../contexts/CartContext';
import { toast } from 'react-toastify';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Living Room');
  const { addToCart } = useCart();
  // Add a placeholder image constant
  const placeholderImage = 'https://via.placeholder.com/400x300';

  // Local assets to populate product images across sections
  const assetImages = [
    '/assets/img1.jpg',
    '/assets/img2.jpg',
    '/assets/bgimg.jpg',
    '/assets/w23-03-sofatypes-1.webp',
    '/assets/w23-04-sofatypes-2.webp',
    '/assets/w23-05-sofatypes-3.webp',
    '/assets/w23-06-size-3-seater.webp',
    '/assets/w23-07-size-2-seater.webp',
    '/assets/w23-08-size-1-seater.webp',
    '/assets/w23-04-materials-solidwood-rv.webp',
    '/assets/w23-06-materials-metal-rv.webp',
    '/assets/w23-02-sofatypes.webp',
    '/assets/50bce133-677a-4aa5-b89d-e4b880412217.webp',
    '/assets/4c44a41a-409c-4471-b806-fcc32794aadb.webp',
    '/assets/4015dcfa-a65f-4ea6-8754-be07c8927c3c.webp',
  ];

  const assetAt = i => assetImages[i % assetImages.length];

  const categories = [
    'Living Room',
    'Bed Room',
    'Dining Room',
    'Study Room',
    'Sofa',
    'Office Room',
    'Luxury Furniture',
  ];

  // Category products with images
  const categoryProducts = {
    'Living Room': [
      // Updated Living Room images (12)
      {
        name: 'Sofas',
        image: '/assets/living room-13.jpeg',
        link: '/category/sofas',
      },
      {
        name: 'Centre Tables',
        image: '/assets/living room-9.jpeg',
        link: '/category/centre-tables',
      },
      {
        name: 'Sofa Chairs',
        image: '/assets/living room-7.jpeg',
        link: '/category/sofa-chairs',
      },
      {
        name: 'Cabinets and Sideboards',
        image: '/assets/living room-10.jpeg',
        link: '/category/cabinets-sideboards',
      },
      {
        name: 'Wall Art and Paintings',
        image: '/assets/living room-11.jpeg',
        link: '/category/wall-art-paintings',
      },
      {
        name: 'Hanging Lights',
        image: '/assets/living room-12.jpeg',
        link: '/category/hanging-lights',
      },
      {
        name: 'Mandirs',
        image: '/assets/living room-6.jpeg',
        link: '/category/mandirs',
      },
      {
        name: 'Chairs',
        image: '/assets/living room-5.jpeg',
        link: '/category/chairs',
      },
      {
        name: 'Recliners',
        image: '/assets/living room-4.jpeg',
        link: '/category/recliners',
      },
      {
        name: 'TV & Media Units',
        image: '/assets/living room-3.jpeg',
        link: '/category/tv-media-units',
      },
      {
        name: 'Carpets',
        image: '/assets/living room-2.jpeg',
        link: '/category/carpets',
      },
      {
        name: 'Curtains',
        image: '/assets/living room-1.jpeg',
        link: '/category/curtains',
      },
    ],
    'Bed Room': [
      // Beds (2 images)
      {
        name: 'Beds',
        image: '/assets/fff07b90-346e-4729-b36a-04e207ca3d25.webp',
        link: '/category/beds',
      },
      {
        name: 'Beds',
        image: '/assets/fbb3fd53-08af-46b3-8081-bc938329ea33.webp',
        link: '/category/beds',
      },
      // Wardrobes (2 images)
      {
        name: 'Wardrobes',
        image: '/assets/db72241d-5c2a-470d-8286-2129571c4f57.webp',
        link: '/category/wardrobes',
      },
      {
        name: 'Wardrobes',
        image: '/assets/c0f15e36-196d-48e0-ba80-8df0d7edfe20.webp',
        link: '/category/wardrobes',
      },
      // Nightstands (2 images)
      {
        name: 'Nightstands',
        image: '/assets/b0be476d-023f-4cd8-a4a8-331dc770cbbc.webp',
        link: '/category/nightstands',
      },
      {
        name: 'Nightstands',
        image: '/assets/624b701d-af35-4f54-986d-b5742b7e9279.webp',
        link: '/category/nightstands',
      },
      // Dressing Tables (2 images)
      {
        name: 'Dressing Tables',
        image: '/assets/144eb8f8-4856-4c18-a6b3-4e9a6b2eea96.webp',
        link: '/category/dressing-tables',
      },
      {
        name: 'Dressing Tables',
        image: '/assets/60dce995-2d0c-4b5c-b702-976c399b7db3.webp',
        link: '/category/dressing-tables',
      },
      // Mattresses (2 images)
      {
        name: 'Mattresses',
        image: '/assets/624b701d-af35-4f54-986d-b5742b7e9279.webp',
        link: '/category/mattresses',
      },
      {
        name: 'Mattresses',
        image: '/assets/144eb8f8-4856-4c18-a6b3-4e9a6b2eea96.webp',
        link: '/category/mattresses',
      },
      // Bedside Lamps (2 images)
      {
        name: 'Bedside Lamps',
        image: '/assets/50bce133-677a-4aa5-b89d-e4b880412217.webp',
        link: '/category/bedside-lamps',
      },
      {
        name: 'Bedside Lamps',
        image: '/assets/6a2a16cb-bdc1-4bb9-a6a9-92cbf27dfd00.webp',
        link: '/category/bedside-lamps',
      },
    ],
    'Dining Room': [
      // Dining Tables (2)
      {
        name: 'Dining Tables',
        image: '/assets/dinig table-11.jpeg',
        link: '/category/dining-tables',
      },
      {
        name: 'Dining Tables',
        image: '/assets/dining table-1.jpeg',
        link: '/category/dining-tables',
      },
      // Dining Chairs (2) using provided and related asset
      {
        name: 'Dining Chairs',
        image: '/assets/8eaa5bc1-f088-4ae6-ac16-3cfcbee88e1b.webp',
        link: '/category/dining-chairs',
      },
      {
        name: 'Dining Chairs',
        image: '/assets/dining table-4.jpeg',
        link: '/category/dining-chairs',
      },
      // Dining Sets (2)
      {
        name: 'Dining Sets',
        image: '/assets/dining table-4.jpeg',
        link: '/category/dining-sets',
      },
      {
        name: 'Dining Sets',
        image: '/assets/dining table-15.jpeg',
        link: '/category/dining-sets',
      },
      // Buffets & Sideboards (2) - fallback to remaining dining images
      {
        name: 'Buffets & Sideboards',
        image: '/assets/dining table-12.jpeg',
        link: '/category/buffets',
      },
      {
        name: 'Buffets & Sideboards',
        image: '/assets/dining table-13.jpeg',
        link: '/category/buffets',
      },
      // Bar Cabinets (2)
      {
        name: 'Bar Cabinets',
        image: '/assets/dining table-14.jpeg',
        link: '/category/bar-cabinets',
      },
      {
        name: 'Bar Cabinets',
        image: '/assets/dining table-10.jpeg',
        link: '/category/bar-cabinets',
      },
      // Crockery Units (2)
      {
        name: 'Crockery Units',
        image: '/assets/Dining Table-2.jpeg',
        link: '/category/crockery-units',
      },
      {
        name: 'Crockery Units',
        image: '/assets/Dining Table-3.jpeg',
        link: '/category/crockery-units',
      },
    ],
    'Study Room': [
      // Study Tables (2)
      {
        name: 'Study Tables',
        image: '/assets/study room-1.jpeg',
        link: '/category/study-tables',
      },
      {
        name: 'Study Tables',
        image: '/assets/study room-2.jpeg',
        link: '/category/study-tables',
      },
      // Office Chairs (2)
      {
        name: 'Office Chairs',
        image: '/assets/study room-3.jpeg',
        link: '/category/office-chairs',
      },
      {
        name: 'Office Chairs',
        image: '/assets/study room-7.jpeg',
        link: '/category/office-chairs',
      },
      // Bookshelves (2)
      {
        name: 'Bookshelves',
        image: '/assets/study room-6.jpeg',
        link: '/category/bookshelves',
      },
      {
        name: 'Bookshelves',
        image: '/assets/study room-2.jpeg',
        link: '/category/bookshelves',
      },
      // Study Lamps (2)
      {
        name: 'Study Lamps',
        image: '/assets/study room-5.jpeg',
        link: '/category/study-lamps',
      },
      {
        name: 'Study Lamps',
        image: '/assets/study room-10.jpeg',
        link: '/category/study-lamps',
      },
      // File Cabinets (2)
      {
        name: 'File Cabinets',
        image: '/assets/Study Room-9.jpeg',
        link: '/category/file-cabinets',
      },
      {
        name: 'File Cabinets',
        image: '/assets/study room-8.jpeg',
        link: '/category/file-cabinets',
      },
    ],
    Sofa: [
      // 3-Seater Sofas (2)
      {
        name: '3-Seater Sofas',
        image: '/assets/w23-06-size-3-seater.webp',
        link: '/category/3-seater-sofas',
      },
      {
        name: '3-Seater Sofas',
        image: '/assets/undefined (13).jpeg',
        link: '/category/3-seater-sofas',
      },
      // 2-Seater Sofas (2)
      {
        name: '2-Seater Sofas',
        image: '/assets/w23-07-size-2-seater.webp',
        link: '/category/2-seater-sofas',
      },
      {
        name: '2-Seater Sofas',
        image: '/assets/w23-02-sofatypes.webp',
        link: '/category/2-seater-sofas',
      },
      // 1-Seater Sofas (2)
      {
        name: '1-Seater Sofas',
        image: '/assets/w23-08-size-1-seater.webp',
        link: '/category/1-seater-sofas',
      },
      {
        name: '1-Seater Sofas',
        image: '/assets/w23-03-sofatypes-1.webp',
        link: '/category/1-seater-sofas',
      },
      // L-Shaped Sofas (2)
      {
        name: 'L-Shaped Sofas',
        image: '/assets/w23-05-sofatypes-3.webp',
        link: '/category/l-shaped-sofas',
      },
      {
        name: 'L-Shaped Sofas',
        image: '/assets/w23-04-sofatypes-2.webp',
        link: '/category/l-shaped-sofas',
      },
      // Modern Sofas (2)
      {
        name: 'Modern Sofas',
        image: '/assets/w23-03-sofatypes-1.webp',
        link: '/category/modern-sofas',
      },
      {
        name: 'Modern Sofas',
        image: '/assets/undefined (7).jpeg',
        link: '/category/modern-sofas',
      },
      // Designer Sofas (2)
      {
        name: 'Designer Sofas',
        image: '/assets/sofa veludo moderno - Pesquisa Google.jpeg',
        link: '/category/designer-sofas',
      },
      {
        name: 'Designer Sofas',
        image: '/assets/img1.jpg',
        link: '/category/designer-sofas',
      },
      // Luxury Sofas (2)
      {
        name: 'Luxury Sofas',
        image: '/assets/Everything You Need to Know About Benjamin Moore….jpeg',
        link: '/category/luxury-sofas',
      },
      {
        name: 'Luxury Sofas',
        image:
          '/assets/41 Living Room Wall Colors To Elevate Your Home… (1).jpeg',
        link: '/category/luxury-sofas',
      },
    ],
    'Office Room': [
      // Executive Chairs (2)
      {
        name: 'Executive Chairs',
        image: '/assets/8246b57c-175a-428f-9206-577466453eda.webp',
        link: '/category/executive-chairs',
      },
      {
        name: 'Executive Chairs',
        image: '/assets/Armchair with four star aluminum swivel central….jpeg',
        link: '/category/executive-chairs',
      },
      // Manager Chairs (2)
      {
        name: 'Manager Chairs',
        image: '/assets/HUIQC Boss Chair Managerial Executive….jpeg',
        link: '/category/manager-chairs',
      },
      {
        name: 'Manager Chairs',
        image: '/assets/Qué incluye Estilo_ moderno Tipo de producto….jpeg',
        link: '/category/manager-chairs',
      },
      // Office Desks (2)
      {
        name: 'Office Desks',
        image: '/assets/undefined (8).jpeg',
        link: '/category/office-desks',
      },
      {
        name: 'Office Desks',
        image: '/assets/undefined (9).jpeg',
        link: '/category/office-desks',
      },
      // Ergonomic Chairs (2)
      {
        name: 'Ergonomic Chairs',
        image: '/assets/Upgrade your workspace with the best ergonomic….jpeg',
        link: '/category/ergonomic-chairs',
      },
      {
        name: 'Ergonomic Chairs',
        image: '/assets/With ergonomic design and premium materials, it….jpeg',
        link: '/category/ergonomic-chairs',
      },
    ],
    'Luxury Furniture': [
      // Luxury Sofas (2)
      {
        name: 'Luxury Sofas',
        image: '/assets/luxury chaoir-8.jpeg',
        link: '/category/luxury-sofas',
      },
      {
        name: 'Luxury Sofas',
        image: '/assets/Beatiful chair 😍.jpeg',
        link: '/category/luxury-sofas',
      },
      // Luxury Beds (2)
      {
        name: 'Luxury Beds',
        image: '/assets/luxury-1.jpeg',
        link: '/category/luxury-beds',
      },
      {
        name: 'Luxury Beds',
        image: '/assets/luxury-2.jpeg',
        link: '/category/luxury-beds',
      },
      // Luxury Dining Sets (2)
      {
        name: 'Luxury Dining Sets',
        image: '/assets/luxury-3.jpeg',
        link: '/category/luxury-dining',
      },
      {
        name: 'Luxury Dining Sets',
        image: '/assets/luxury-4.jpeg',
        link: '/category/luxury-dining',
      },
      // Designer Chairs (2)
      {
        name: 'Designer Chairs',
        image: '/assets/luxury-5.jpeg',
        link: '/category/designer-chairs',
      },
      {
        name: 'Designer Chairs',
        image: '/assets/luxury-6.jpeg',
        link: '/category/designer-chairs',
      },
      // Premium Lighting (2)
      {
        name: 'Premium Lighting',
        image: '/assets/luxury-7.jpeg',
        link: '/category/premium-lighting',
      },
      {
        name: 'Premium Lighting',
        image: '/assets/luxury-9.jpeg',
        link: '/category/premium-lighting',
      },
      // Luxury Decor (2)
      {
        name: 'Luxury Decor',
        image: '/assets/luxury-10.jpeg',
        link: '/category/luxury-decor',
      },
      {
        name: 'Luxury Decor',
        image: '/assets/luxury-11.jpeg',
        link: '/category/luxury-decor',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
        {/* Background Image Container */}
        <div className="absolute inset-0 mt-20">
          <div
            className="w-full h-full rounded-[40px] mx-auto max-w-[95%] overflow-hidden"
            style={{
              backgroundImage: "url('/assets/background image.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Bringing Simplicity
                <br />
                In The Furnishing Market
              </h1>
              <Link
                to="/collections"
                className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium shadow-lg"
              >
                Start Your Furnishing Journey
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-6 md:py-8">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Fast & Free Shipping */}
            <div className="flex flex-col items-center text-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105 cursor-pointer">
              <div className="mb-2">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 24H36V40H8V24Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36 28H44L52 36V40H36V28Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="16"
                    cy="44"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="44"
                    cy="44"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 24V20H4V44H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 44H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M48 44H52V36"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 20L32 16L36 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 16V24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">
                Fast & Free Shipping
              </h3>
              <p className="text-sm text-gray-600">Doorstep Delivery</p>
            </div>

            {/* Customer Support */}
            <div className="flex flex-col items-center text-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105 cursor-pointer">
              <div className="mb-2">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 28C20 28 24 24 32 24C40 24 44 28 44 28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 36C20 36 24 40 32 40C40 40 44 36 44 36"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="32" cy="32" r="3" fill="currentColor" />
                  <path
                    d="M16 20C16 20 14 18 14 14C14 10 16 8 16 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M48 20C48 20 50 18 50 14C50 10 48 8 48 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Customer Support</h3>
              <p className="text-sm text-gray-600">Multi-Language Support</p>
            </div>

            {/* Hassle-Free Returns */}
            <div className="flex flex-col items-center text-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105 cursor-pointer">
              <div className="mb-2">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 24H40V40H16V24Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 28H48L52 32V40H40V28Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="24"
                    cy="44"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="44"
                    cy="44"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 24V20H8V44H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 44H40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M48 44H52V32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 16L28 20L32 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 20H36"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">
                Hassle-Free Returns
              </h3>
              <p className="text-sm text-gray-600">7 Days Return Period</p>
            </div>

            {/* Secure Transaction */}
            <div className="flex flex-col items-center text-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105 cursor-pointer">
              <div className="mb-2">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 8L12 16V28C12 40 20 50 32 56C44 50 52 40 52 28V16L32 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 20V32L38 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text
                    x="32"
                    y="48"
                    textAnchor="middle"
                    fontSize="8"
                    fill="currentColor"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    Razorpay
                  </text>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Secure Transaction</h3>
              <p className="text-sm text-gray-600">Powered by Razorpay</p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Best Seller Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#81634b] mb-8 md:mb-12">
            Explore Best Seller
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Furniture */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/living room-13.jpeg"
                  alt="Furniture"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-3">Furniture</h3>
                <Link
                  to="/category/furniture"
                  className="inline-block px-6 py-2 bg-[#81634b] hover:bg-[#6b5340] text-white rounded-md transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Mattresses */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/624b701d-af35-4f54-986d-b5742b7e9279.webp"
                  alt="Mattresses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-3">Mattresses</h3>
                <Link
                  to="/category/mattresses"
                  className="inline-block px-6 py-2 bg-[#81634b] hover:bg-[#6b5340] text-white rounded-md transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Home Goods */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/living room-11.jpeg"
                  alt="Home Goods"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-3">Home Goods</h3>
                <Link
                  to="/category/home-goods"
                  className="inline-block px-6 py-2 bg-[#81634b] hover:bg-[#6b5340] text-white rounded-md transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop All Things Home Section */}
      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#81634b] mb-6 text-center">
            Shop All Things Home
          </h2>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full border transition-all duration-200 cursor-pointer 
                    ${
                      isActive
                        ? 'bg-[#81634b] border-[#81634b] text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-[#81634b]/10 hover:border-[#81634b] hover:text-[#81634b]'
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Product Grid with Arrow Navigation */}
          <div className="relative">
            {/* Left Arrow - Shows after scrolling */}
            <button
              onClick={() => {
                const container = document.getElementById(
                  'product-scroll-container'
                );
                if (container) {
                  container.scrollBy({ left: -500, behavior: 'smooth' });
                }
              }}
              id="left-arrow-btn"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/40 border border-white/60 shadow-xl rounded-full p-4 hover:bg-white/60 transition-all duration-300 hidden md:flex items-center justify-center opacity-0 pointer-events-none"
              style={{ transition: 'opacity 0.3s ease' }}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Scrollable Product Container */}
            <div
              id="product-scroll-container"
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={e => {
                const container = e.target;
                const leftBtn = document.getElementById('left-arrow-btn');
                const rightBtn = document.getElementById('right-arrow-btn');

                if (leftBtn && rightBtn) {
                  // Show left arrow if scrolled right
                  if (container.scrollLeft > 50) {
                    leftBtn.style.opacity = '1';
                    leftBtn.style.pointerEvents = 'auto';
                  } else {
                    leftBtn.style.opacity = '0';
                    leftBtn.style.pointerEvents = 'none';
                  }

                  // Hide right arrow if at end
                  const isAtEnd =
                    container.scrollLeft + container.clientWidth >=
                    container.scrollWidth - 50;
                  if (isAtEnd) {
                    rightBtn.style.opacity = '0';
                    rightBtn.style.pointerEvents = 'none';
                  } else {
                    rightBtn.style.opacity = '1';
                    rightBtn.style.pointerEvents = 'auto';
                  }
                }
              }}
            >
              <div
                className="flex gap-8 pb-4 px-8"
                style={{ minWidth: 'min-content' }}
              >
                {categoryProducts[activeCategory]?.map((product, index) => (
                  <Link
                    key={index}
                    to={product.link}
                    className="group flex-shrink-0"
                    style={{ width: '280px' }}
                  >
                    <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={e => {
                            e.target.src = placeholderImage;
                          }}
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#81634b] transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Arrow - Always visible initially */}
            <button
              onClick={() => {
                const container = document.getElementById(
                  'product-scroll-container'
                );
                if (container) {
                  container.scrollBy({ left: 500, behavior: 'smooth' });
                }
              }}
              id="right-arrow-btn"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/40 border border-white/60 shadow-xl rounded-full p-4 hover:bg-white/60 transition-all duration-300 hidden md:flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mega Festive Deals */}
      <div className="container mx-auto px-2 sm:px-4 py-10 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 md:mb-8">
          Mega Festive Deals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              id: 'deal-1',
              name: '10 Pcs Self Adhesive Waterproof Wall Hooks',
              price: 99,
              originalPrice: 299,
              discount: '67%',
              image: placeholderImage,
            },
            {
              id: 'deal-2',
              name: 'Multicolour Marble Puja Chowki for God Idols',
              price: 99,
              originalPrice: 229,
              discount: '57%',
              image: placeholderImage,
            },
            {
              id: 'deal-3',
              name: 'Quick Drying Hair Wrap Towel with 1 Free Scrunchie',
              price: 99,
              originalPrice: 499,
              discount: '80%',
              image: placeholderImage,
            },
            {
              id: 'deal-4',
              name: '72 LED LED Tree',
              price: 499,
              originalPrice: 799,
              discount: '38%',
              image: placeholderImage,
            },
            {
              id: 'deal-5',
              name: 'Set of 6 Coffee Brown (12 x 16) PVC Placemats',
              price: 99,
              originalPrice: 799,
              discount: '88%',
              image: placeholderImage,
            },
          ].map((product, index) => (
            <div
              key={product.name}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={
                  product.image && product.image !== placeholderImage
                    ? product.image
                    : assetAt(index)
                }
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg font-bold">₹{product.price}</span>
                <span className="text-gray-500 line-through text-sm">
                  ₹{product.originalPrice}
                </span>
                <span className="text-green-600 text-sm">
                  {product.discount}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    addToCart(product);
                    toast.success('Added to cart!');
                  }}
                  className="flex-1 py-2 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium text-xs sm:text-sm"
                >
                  ADD TO CART
                </button>
                <button className="flex-1 py-2 bg-[#81634b] text-white rounded-full hover:bg-[#6b5340] transition-colors font-medium text-xs sm:text-sm">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 md:mt-8">
          <Link
            to="/deals"
            className="inline-block px-6 py-3 bg-[#81634b] text-white rounded-lg hover:bg-[#6b5340] transition-colors"
          >
            Explore More Deals
          </Link>
        </div>
      </div>

      {/* Discover What's New */}
      <div className="container mx-auto px-2 sm:px-4 py-10 md:py-16">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Discover what's new at AlRams
          </h2>
          <Link
            to="/new-products"
            className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors font-medium text-sm sm:text-base"
          >
            Discover all the new products
          </Link>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                id: 'new-1',
                name: 'SKOGSSALLAT',
                description: 'Bath robe, S/M',
                price: '2,334',
                rating: 4.5,
                reviews: 21,
                image: placeholderImage,
                badge: 'New',
              },
              {
                id: 'new-2',
                name: 'PELARBJÖRK',
                description: 'Vase, 20 cm (7 ¾ ")',
                price: '1,865',
                rating: 5,
                reviews: 0,
                image: placeholderImage,
                badge: 'New',
              },
              {
                id: 'new-3',
                name: 'GANSJÖN',
                description: '3-piece bathroom set',
                price: '1,290',
                rating: 4,
                reviews: 48,
                image: placeholderImage,
                badge: 'Limited edition',
              },
              {
                id: 'new-4',
                name: 'BLODBJÖRK',
                description: 'Vase, 16 cm (6 ¼ ")',
                price: '467',
                rating: 5,
                reviews: 6,
                image: placeholderImage,
                badge: 'New',
              },
              {
                id: 'new-5',
                name: 'SKALLKNEKT',
                description: '2-piece salad servers set',
                price: '233',
                rating: 5,
                reviews: 12,
                image: placeholderImage,
                badge: 'New',
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={
                      product.image && product.image !== placeholderImage
                        ? product.image
                        : assetAt(index)
                    }
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 text-white text-xs font-semibold rounded bg-[#81634b]`}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-[#81634b] text-sm font-semibold mb-1">
                    {product.badge === 'Limited edition'
                      ? 'New'
                      : product.badge}
                  </p>
                  <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.description}
                  </p>
                  <p className="text-xl font-bold mb-2">Rs.{product.price}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-black fill-current'
                              : 'text-gray-300 fill-current'
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    {product.reviews > 0 && (
                      <span className="text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        addToCart({
                          ...product,
                          price: parseFloat(product.price.replace(',', '')),
                        });
                        toast.success('Added to cart!');
                      }}
                      className="flex-1 py-2 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium text-xs sm:text-sm"
                    >
                      ADD TO CART
                    </button>
                    <button className="flex-1 py-2 bg-[#81634b] text-white rounded-full hover:bg-[#6b5340] transition-colors font-medium text-xs sm:text-sm">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-10">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Newest Arrivals */}
      <div className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 md:mb-8">
            Discover our Trending Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                name: 'Abran High Gloss Collection',
                details: '5+ Options, Starting at 14,999',
              },
              {
                name: 'Odessa Collection',
                details: '10+ Options, Starting at 25,999',
              },
              {
                name: 'Almere Solid Wood Collection',
                details: '5+ Options, Starting at 9,499',
              },
              {
                name: 'Timeless Brass Collection',
                details: 'Crafted In India',
              },
            ].map((collection, index) => (
              <div
                key={collection.name}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={assetAt(index + 5)}
                  alt={collection.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {collection.details}
                  </p>
                  <Link
                    to={`/collection/${collection.name
                      .toLowerCase()
                      .replace(' ', '-')}`}
                    className="inline-block bg-[#81634b] text-white px-6 py-2 rounded-md hover:bg-[#6b5340] transition-colors font-medium"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interior Trends */}
      <div className="container mx-auto px-2 sm:px-4 py-10 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 md:mb-8">
          Follow Home Interior Trends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              name: 'Smart Furniture',
              details: '45+ Options, Starting at 17,999',
            },
            {
              name: 'The Fluted Collection',
              details: '40+ Options, Starting at 8899',
            },
            {
              name: 'Urban Luxe Sofas',
              details: '40+ Sofa Options, Starting at 41,999',
            },
          ].map((trend, index) => (
            <div
              key={trend.name}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={assetAt(index + 10)}
                alt={trend.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{trend.name}</h3>
                <p className="text-sm text-gray-600">{trend.details}</p>
                <Link
                  to={`/trend/${trend.name.toLowerCase().replace(' ', '-')}`}
                  className="mt-4 inline-block bg-[#81634b] text-white px-5 py-2 rounded hover:bg-[#6b5340] transition-colors font-semibold shadow"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
