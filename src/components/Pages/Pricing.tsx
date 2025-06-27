import { Link } from "react-router-dom";
import PageTransition from "../PageTransition";

const Pricing = () => {
  return (
    <PageTransition>
      <div
        className="flex flex-col gap-4 items-center min-h-screen pt-24 md:pt-28 px-4 md:px-6 lg:px-8
          bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-2 md:mt-4">
          Simple, Transparent Pricing
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-4">
          No hidden fees, no surprises. Choose the package that fits your needs
          and budget.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
          {/* Starter Package */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300
                      flex flex-col"
          >
            {" "}
            {/* ADDED: flex flex-col */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold mb-1">Starter</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Perfect for personal sites & portfolios
              </p>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl font-bold">€999</span>
                <span className="text-gray-500 ml-1 text-sm">one-time</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6 text-xs flex-grow">
              {" "}
              {/* ADDED: flex-grow */}
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Up to 5 pages
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Mobile responsive design
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Basic SEO optimization
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Contact form
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  2 weeks delivery
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  1 month free support
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-r hover:from-purple-600 
              hover:to-purple-700 text-gray-700 dark:text-gray-300 hover:text-white px-4 py-2 rounded-full font-semibold text-sm 
              transition duration-300 mt-auto"
            >
              {" "}
              {/* ADDED: mt-auto */}
              Get Started
            </Link>
          </div>

          {/* Professional Package - Most Popular */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-yellow-500 dark:border-yellow-400 shadow-xl hover:shadow-2xl transition-all duration-300 relative
                      flex flex-col"
          >
            {" "}
            {/* ADDED: flex flex-col */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs px-3 py-0.5 rounded-full font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-4 mt-1">
              <h3 className="text-lg font-bold mb-1">Professional</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Ideal for small businesses
              </p>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl font-bold">€1499</span>
                <span className="text-gray-500 ml-1 text-sm">one-time</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6 text-xs flex-grow">
              {" "}
              {/* ADDED: flex-grow */}
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Up to 10 pages
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Mobile responsive design
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Advanced SEO optimization
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Google Maps integration
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Social media integration
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Basic analytics setup
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  3 weeks delivery
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  3 months free support
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600
               hover:to-yellow-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition duration-300 shadow-md
                      mt-auto"
            >
              {" "}
              {/* ADDED: mt-auto */}
              Get Started
            </Link>
          </div>

          {/* E-commerce Package */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300
                      flex flex-col"
          >
            {" "}
            {/* ADDED: flex flex-col */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold mb-1">E-commerce</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                For online stores & shops
              </p>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl font-bold">€1999</span>
                <span className="text-gray-500 ml-1 text-sm">one-time</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6 text-xs flex-grow">
              {" "}
              {/* ADDED: flex-grow */}
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Up to 50 products
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Shopping cart & checkout
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Payment gateway integration
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Inventory management
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Customer accounts
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Order tracking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  4-5 weeks delivery
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  6 months free support
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-purple-600
               hover:to-purple-700 text-gray-700 dark:text-gray-300 hover:text-white px-4 py-2 rounded-full 
               font-semibold text-sm transition duration-300 mt-auto"
            >
              {" "}
              Get Started
            </Link>
          </div>
        </div>

        {/* Additional Services */}
        <div className="w-full max-w-5xl mx-auto mt-6 mb-4">
          <h2 className="text-xl font-bold text-center mb-4">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-2 text-sm">
                Maintenance & Updates
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Keep your website fresh and secure with regular updates
              </p>
              <div className="flex items-baseline">
                <span className="font-bold text-sm">€49</span>
                <span className="text-gray-500 ml-1 text-xs">/month</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-2 text-sm">Custom Features</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Need something special? Let's discuss your requirements
              </p>
              <div className="flex items-baseline">
                <span className="font-bold text-sm">Custom quote</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-1 text-sm">
                What's included in the price?
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Everything listed in the package, plus domain setup assistance
                and basic training on how to update your content.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-1 text-sm">
                Do I need to pay for hosting?
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Hosting is not included, but I'll help you choose the best
                hosting solution for your needs (typically €5-15/month).
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-1 text-sm">
                Can I upgrade my package later?
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Absolutely! You can always add more pages or features as your
                business grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Pricing;
