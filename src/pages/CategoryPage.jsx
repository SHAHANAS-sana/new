import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CategoryPage = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    category: [],
    color: [],
    material: [],
  });

  const categoryTitle = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Modern L-Shape Sofa',
      price: 45999,
      originalPrice: 65999,
      discount: 30,
      image: '/assets/living room-13.jpeg',
      rating: 4.5,
      reviews: 156,
      badge: 'Bestseller',
    },
    {
      id: 2,
      name: 'Velvet Accent Chair',
      price: 12999,
      originalPrice: 18999,
      discount: 31,
      image: '/assets/living room-9.jpeg',
      rating: 4.3,
      reviews: 89,
    },
    {
      id: 3,
      name: 'Wooden Coffee Table',
      price: 8999,
      originalPrice: 12999,
      discount: 31,
      image: '/assets/living room-7.jpeg',
      rating: 4.6,
      reviews: 234,
      badge: 'New',
    },
    {
      id: 4,
      name: 'Premium Sofa Set',
      price: 58999,
      originalPrice: 85999,
      discount: 31,
      image: '/assets/living room-10.jpeg',
      rating: 4.7,
      reviews: 178,
    },
    {
      id: 5,
      name: 'Designer Armchair',
      price: 15999,
      originalPrice: 22999,
      discount: 30,
      image: '/assets/living room-11.jpeg',
      rating: 4.4,
      reviews: 92,
    },
    {
      id: 6,
      name: 'Luxury Sectional',
      price: 72999,
      originalPrice: 99999,
      discount: 27,
      image: '/assets/living room-12.jpeg',
      rating: 4.8,
      reviews: 201,
      badge: 'Bestseller',
    },
    {
      id: 7,
      name: 'Compact 2-Seater Sofa',
      price: 28999,
      originalPrice: 39999,
      discount: 28,
      image: '/assets/living room-6.jpeg',
      rating: 4.2,
      reviews: 145,
    },
    {
      id: 8,
      name: 'Modern Recliner',
      price: 32999,
      originalPrice: 45999,
      discount: 28,
      image: '/assets/living room-5.jpeg',
      rating: 4.5,
      reviews: 167,
    },
    {
      id: 9,
      name: 'Classic Sofa Set',
      price: 38999,
      originalPrice: 52999,
      discount: 26,
      image: '/assets/living room-4.jpeg',
      rating: 4.4,
      reviews: 112,
    },
    {
      id: 10,
      name: 'Contemporary TV Unit',
      price: 19999,
      originalPrice: 28999,
      discount: 31,
      image: '/assets/living room-3.jpeg',
      rating: 4.6,
      reviews: 198,
      badge: 'New',
    },
    {
      id: 11,
      name: 'Elegant Carpet',
      price: 6999,
      originalPrice: 9999,
      discount: 30,
      image: '/assets/living room-2.jpeg',
      rating: 4.3,
      reviews: 156,
    },
    {
      id: 12,
      name: 'Designer Curtains Set',
      price: 4999,
      originalPrice: 7999,
      discount: 38,
      image: '/assets/living room-1.jpeg',
      rating: 4.5,
      reviews: 223,
      badge: 'Bestseller',
    },
  ];

  const filters = {
    price: [
      'Under ₹10,000',
      '₹10,000 - ₹25,000',
      '₹25,000 - ₹50,000',
      'Above ₹50,000',
    ],
    category: ['Sofas', 'Chairs', 'Tables', 'Cabinets', 'Recliners'],
    color: ['Beige', 'Gray', 'Brown', 'Blue', 'Green'],
    material: ['Fabric', 'Leather', 'Wood', 'Metal', 'Velvet'],
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-[#81634b]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{categoryTitle}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {categoryTitle}
          </h1>
          <p className="text-gray-600">
            Discover our premium collection of {categoryTitle.toLowerCase()}{' '}
            furniture
          </p>
        </div>

        {/* Filters & Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
            </button>
            <span className="text-sm text-gray-600">
              {products.length} Products
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#81634b]"
            >
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="discount">Discount</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          {showFilters && (
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <button
                    className="text-sm text-[#81634b] hover:underline"
                    onClick={() =>
                      setSelectedFilters({
                        price: [],
                        category: [],
                        color: [],
                        material: [],
                      })
                    }
                  >
                    Clear All
                  </button>
                </div>

                {Object.entries(filters).map(([filterKey, options]) => (
                  <div
                    key={filterKey}
                    className="mb-6 pb-6 border-b border-gray-200 last:border-b-0"
                  >
                    <h4 className="font-medium text-gray-900 mb-3 capitalize">
                      {filterKey}
                    </h4>
                    <div className="space-y-2">
                      {options.map(option => (
                        <label
                          key={option}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#81634b] border-gray-300 rounded focus:ring-[#81634b]"
                            checked={selectedFilters[filterKey].includes(
                              option
                            )}
                            onChange={e => {
                              if (e.target.checked) {
                                setSelectedFilters({
                                  ...selectedFilters,
                                  [filterKey]: [
                                    ...selectedFilters[filterKey],
                                    option,
                                  ],
                                });
                              } else {
                                setSelectedFilters({
                                  ...selectedFilters,
                                  [filterKey]: selectedFilters[
                                    filterKey
                                  ].filter(item => item !== option),
                                });
                              }
                            }}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#81634b] text-white px-3 py-1 text-xs font-semibold rounded">
                        {product.badge}
                      </div>
                    )}
                    {product.discount && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                        {product.discount}% OFF
                      </div>
                    )}
                    <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 fill-current'
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart({ ...product, quantity: 1 })}
                      className="w-full py-2 bg-[#81634b] text-white rounded-md hover:bg-[#6b5340] transition-colors font-medium text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
