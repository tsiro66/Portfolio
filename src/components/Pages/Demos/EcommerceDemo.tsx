import React, { useState, useEffect } from "react";

import {
  FaShoppingCart,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaUndo,
  FaStar,
  FaHeart,
  FaArrowRight,
  FaGift,
  FaHeadset,
  FaFire,
} from "react-icons/fa";

const EcommerceDemo = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const [countdown, setCountdown] = useState({
    hours: 2,

    minutes: 45,

    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        const { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: "Electronics", icon: "📱", count: 1250 },

    { name: "Fashion", icon: "👗", count: 3420 },

    { name: "Home & Living", icon: "🏠", count: 890 },

    { name: "Sports", icon: "⚽", count: 567 },
  ];

  const featuredProducts = [
    {
      id: 1,

      name: "Wireless Pro Headphones",

      price: 299.99,

      originalPrice: 399.99,

      rating: 4.8,

      reviews: 2341,

      badge: "Best Seller",

      image: "🎧",

      discount: 25,
    },

    {
      id: 2,

      name: "Smart Watch Ultra",

      price: 449.99,

      originalPrice: 599.99,

      rating: 4.9,

      reviews: 1876,

      badge: "New Arrival",

      image: "⌚",

      discount: 25,
    },

    {
      id: 3,

      name: "4K Action Camera",

      price: 199.99,

      originalPrice: 299.99,

      rating: 4.7,

      reviews: 983,

      badge: "Limited Stock",

      image: "📷",

      discount: 33,
    },

    {
      id: 4,

      name: "Gaming Laptop Pro",

      price: 1299.99,

      originalPrice: 1599.99,

      rating: 4.9,

      reviews: 421,

      badge: "Hot Deal",

      image: "💻",

      discount: 19,
    },
  ];

  const features = [
    {
      icon: <FaTruck />,

      title: "Free Shipping",

      description: "On orders over $50",
    },

    {
      icon: <FaUndo />,

      title: "Easy Returns",

      description: "30-day return policy",
    },

    {
      icon: <FaShieldAlt />,

      title: "Secure Payment",

      description: "100% secure transactions",
    },

    {
      icon: <FaHeadset />,

      title: "24/7 Support",

      description: "Dedicated customer service",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <style>{`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.ecommerce-demo { font-family: 'Outfit', sans-serif; }

.slide-in { animation: slideIn 0.6s ease-out; }

@keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

.bounce { animation: bounce 2s ease-in-out infinite; }

@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

.gradient-orange { background: linear-gradient(135deg, #ff6b35, #f7931e); }

.text-gradient-orange { background: linear-gradient(135deg, #ff6b35, #f7931e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

html, body { overflow-x: hidden; }

`}</style>

      <div className="ecommerce-demo">
        {/* Hero Section with Flash Sale */}

        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 pt-10">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-32 py-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center ">
              <div className="slide-in">
                {/* Flash Sale Badge */}

                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6">
                  <FaFire className="animate-pulse" />

                  <span className="font-semibold">
                    Flash Sale - Limited Time!
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Mega Sale Event
                  <span className="block text-gradient-orange">
                    Up to 70% OFF
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Shop the latest trends with unbeatable prices. From
                  electronics to fashion, find everything you need at incredible
                  discounts.
                </p>

                {/* Countdown Timer */}

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8 inline-block">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 text-center">
                    Sale ends in:
                  </p>

                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                        {String(countdown.hours).padStart(2, "0")}
                      </div>

                      <p className="text-xs text-gray-500">Hours</p>
                    </div>

                    <div className="text-3xl font-bold text-gray-400">:</div>

                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                        {String(countdown.minutes).padStart(2, "0")}
                      </div>

                      <p className="text-xs text-gray-500">Minutes</p>
                    </div>

                    <div className="text-3xl font-bold text-gray-400">:</div>

                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                        {String(countdown.seconds).padStart(2, "0")}
                      </div>

                      <p className="text-xs text-gray-500">Seconds</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 gradient-orange text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                    Shop Now
                    <FaArrowRight className="inline ml-2" />
                  </button>

                  <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 dark:text-orange-400 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all">
                    View All Deals
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {featuredProducts.slice(0, 4).map((product, index) => (
                    <div
                      key={product.id}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all bounce"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-6xl mb-4 text-center">
                        {product.image}
                      </div>

                      <div className="text-center">
                        <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                          -{product.discount}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}

        <section className="bg-orange-600 dark:bg-gray-800 py-6">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 text-white"
                >
                  <div className="text-2xl">{feature.icon}</div>

                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>

                    <p className="text-sm text-orange-100 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Shop by Category
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400">
                Find exactly what you're looking for
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl border-2 cursor-pointer transition-all ${
                    activeCategory === index
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-orange-300"
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  <div className="text-5xl mb-4 text-center">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>

                  <p className="text-center text-gray-600 dark:text-gray-400">
                    {category.count} products
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}

        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Featured Products
                </h2>

                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Handpicked just for you
                </p>
              </div>

              <button className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
                View All <FaArrowRight className="inline ml-1" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                          product.badge === "Best Seller"
                            ? "bg-green-500"
                            : product.badge === "New Arrival"
                            ? "bg-blue-500"
                            : product.badge === "Limited Stock"
                            ? "bg-red-500"
                            : "bg-orange-500"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <button className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                        <FaHeart className="text-gray-400 hover:text-red-500 transition-colors" />
                      </button>
                    </div>

                    <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-t-2xl flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${product.price}
                        </span>

                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      </div>

                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        Save $
                        {(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2">
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}

        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <FaGift className="text-6xl mx-auto mb-6 bounce" />

            <h2 className="text-4xl font-bold mb-4">
              Special Offer for New Customers!
            </h2>

            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get an extra 15% OFF on your first order. Use code:{" "}
              <span className="font-bold">WELCOME15</span>
            </p>

            <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
              Claim Your Discount
            </button>
          </div>
        </section>

        {/* Trust Badges */}

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  2M+
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  50K+
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  Products Available
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  4.9★
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  Average Rating
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  24/7
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  Customer Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}

        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Exclusive Deals!
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Subscribe to our newsletter and never miss a sale
            </p>
            {/* Move the Subscribe button and email field to 2 rows and center them in mobile view */}
            <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500"
              />

              <button className="px-8 py-3 gradient-orange text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}

        <footer className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaShoppingCart className="text-2xl text-orange-400" />

                  <span className="text-xl font-bold">ShopMart</span>
                </div>

                <p className="text-gray-400">
                  Your one-stop shop for everything you need, delivered right to
                  your door.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>

                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      New Arrivals
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Best Sellers
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Sale Items
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Customer Service</h4>

                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Track Order
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Returns
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      Shipping Info
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Payment Methods</h4>

                <div className="flex gap-2 mb-4">
                  <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <FaCreditCard />
                  </div>

                  <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <FaCreditCard />
                  </div>

                  <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <FaCreditCard />
                  </div>
                </div>

                <p className="text-sm text-gray-400">
                  Secure payment processing with SSL encryption
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 ShopMart. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EcommerceDemo;
