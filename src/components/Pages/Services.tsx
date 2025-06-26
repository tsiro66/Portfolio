import { Link } from "react-router-dom";
import PageTransition from "../PageTransition";
import {
  FaCode,
  FaShoppingCart,
  FaSearch,
  FaRocket,
  FaPaintBrush,
  FaTools,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  return (
    <PageTransition>
      <div
        className="flex flex-col gap-8 items-center min-h-screen pt-16 md:pt-20 px-4 md:px-6 lg:px-8
          bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out"
      >
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Services I Offer
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8">
            From simple landing pages to complex web applications, I provide
            comprehensive web development services tailored to your specific
            needs.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
          {/* Web Development */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 
            border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start mb-4">
              <div
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
                group-hover:from-purple-600 group-hover:to-purple-700 rounded-lg flex items-center 
                justify-center mr-4 flex-shrink-0 transition-all duration-300"
              >
                <FaCode className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">
                  Custom Web Development
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold">
                  Most Popular
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Build modern, responsive websites from scratch using the latest
              technologies. Perfect for businesses that want a unique online
              presence.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Custom design & development
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Mobile-first responsive design
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Fast loading & optimized performance
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                SEO-friendly structure
              </li>
            </ul>
          </div>

          {/* E-commerce Solutions */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 
            border-2 border-transparent hover:border-fuchsia-500 dark:hover:border-fuchsia-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start mb-4">
              <div
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
                group-hover:from-fuchsia-500 group-hover:to-fuchsia-600 rounded-lg flex items-center 
                justify-center mr-4 flex-shrink-0 transition-all duration-300"
              >
                <FaShoppingCart className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">E-commerce Solutions</h3>
                <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 font-semibold">
                  Growing Fast
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Launch your online store with a complete e-commerce solution that
              converts visitors into customers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Shopping cart & checkout
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Payment gateway integration
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Inventory management
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Order tracking system
              </li>
            </ul>
          </div>

          {/* UI/UX Design */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 
            border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start mb-4">
              <div
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
                group-hover:from-purple-600 group-hover:to-fuchsia-500 rounded-lg flex items-center 
                justify-center mr-4 flex-shrink-0 transition-all duration-300"
              >
                <FaPaintBrush className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">UI/UX Design</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                  Beautiful & Functional
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Create stunning, user-friendly interfaces that not only look great
              but also provide an exceptional user experience.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Modern, clean designs
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                User experience optimization
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Interactive prototypes
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Brand consistency
              </li>
            </ul>
          </div>

          {/* Website Maintenance */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 
            border-2 border-transparent hover:border-fuchsia-500 dark:hover:border-fuchsia-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start mb-4">
              <div
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
                group-hover:from-fuchsia-500 group-hover:to-fuchsia-600 rounded-lg flex items-center 
                justify-center mr-4 flex-shrink-0 transition-all duration-300"
              >
                <FaTools className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Website Maintenance</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                  Keep It Running
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Keep your website running smoothly with regular updates, security
              patches, and performance optimization.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Regular updates & backups
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Security monitoring
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Performance optimization
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                Content updates
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="w-full max-w-5xl mx-auto mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* SEO */}
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaSearch className="text-white text-lg" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">SEO Optimization</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Improve your search rankings and drive organic traffic
              </p>
            </div>

            {/* Performance */}
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="text-white text-lg" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">
                Performance Optimization
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lightning-fast loading speeds for better user experience
              </p>
            </div>

            {/* Analytics */}
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-white text-lg" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">Analytics Setup</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Track visitor behavior and measure your success
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="w-full max-w-5xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
            How I Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                  1
                </span>
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                We discuss your goals, target audience, and project requirements
                to create a clear roadmap
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-900/30 dark:to-fuchsia-800/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                  2
                </span>
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                I build your website with regular updates and feedback sessions
                to ensure perfection
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 dark:from-fuchsia-900/30 dark:to-fuchsia-800/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-fuchsia-700 dark:text-fuchsia-400">
                  3
                </span>
              </div>
              <h3 className="font-semibold mb-2">Launch & Support</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Your website goes live with ongoing support to ensure everything
                runs smoothly
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center mt-8 mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm md:text-base mb-6 max-w-lg">
            Let's discuss your project and find the perfect solution for your
            business
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 
                text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl 
                transition duration-300 hover:scale-105 text-center"
            >
              View Pricing
            </Link>
            <Link
              to="/contact"
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 
                hover:border-purple-500 dark:hover:border-purple-400 text-gray-700 dark:text-gray-300 
                px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg 
                transition-all duration-300 hover:scale-105 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
