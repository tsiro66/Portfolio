import { Link } from "react-router-dom";
import PageTransition from "../PageTransition";
import { FaArrowRight, FaCode, FaRocket, FaPalette } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const Home = () => {
  return (
    <PageTransition>
      <div
        className="flex flex-col gap-8 md:gap-12 items-center min-h-screen pt-20 md:pt-28 px-4 md:px-6 lg:px-8
          bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out"
      >
        {/* Hero Section */}
        <div className="w-full max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            I Build Websites That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
              {" "}
              Grow Your Business
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Professional web development with a personal touch. Get a custom
            website that looks amazing and converts visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demos"
              className="bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-700 hover:to-fuchsia-600
                text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl 
                transition duration-300 hover:scale-105 flex items-center justify-center"
            >
              View My Work
              <FaArrowRight className="ml-2" size={14} />
            </Link>
            <Link
              to="/contact"
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 
                hover:border-purple-500 dark:hover:border-purple-400 text-gray-700 dark:text-gray-300 
                px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg 
                transition-all duration-300 hover:scale-105 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 
            border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400
            shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex gap-4 items-center">
              <div
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
              group-hover:from-purple-600 group-hover:to-purple-700 rounded-lg flex items-center 
              justify-center mb-4 transition duration-300 ease-in-out"
              >
                <FaCode className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition  duration-300 ease-in-out" />
              </div>
              <h3 className="text-lg font-bold mb-2">Custom Development</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              No templates. Every website is built from scratch to match your
              unique needs and brand identity.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 
            border-2 border-transparent hover:border-yellow-500 dark:hover:border-yellow-400
            shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex gap-4 items-center">
              <div
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
              group-hover:from-yellow-400 group-hover:to-yellow-500 rounded-lg flex items-center 
              justify-center mb-4 transition duration-300 ease-in-out"
              >
                <FaRocket className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition duration-300 ease-in-out" />
              </div>
              <h3 className="text-lg font-bold mb-2">Fast & Optimized</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Lightning-fast loading speeds and SEO optimization to help you
              rank higher in search results.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 
            border-2 border-transparent hover:border-fuchsia-500 dark:hover:border-fuchsia-400
            shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex gap-4 items-center">
              <div
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
              group-hover:from-fuchsia-600 group-hover:to-fuchsia-500 rounded-lg flex items-center 
              justify-center mb-4 transition duration-300 ease-in-out"
              >
                <FaPalette className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition duration-300 ease-in-out" />
              </div>
              <h3 className="text-lg font-bold mb-2">Beautiful Design</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Modern, responsive designs that look perfect on every device and
              captivate your audience.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Simple Process, Amazing Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connection line for desktop */}
            <div
              className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 to-fuchsia-400
             dark:from-purple-700 dark:to-fuchsia-600"
            ></div>

            {/* Step 1 */}
            <div className="relative text-center">
              <div
                className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center
               mx-auto mb-3 relative z-10"
              >
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-1 text-sm">We Talk</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 px-10">
                Discuss your goals and vision for the project
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div
                className="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-full flex items-center justify-center
              mx-auto mb-3 relative z-10"
              >
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-1 text-sm">I Design</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 px-10">
                Create a custom design that matches your brand
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div
                className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-full flex items-center justify-center 
              mx-auto mb-3 relative z-10"
              >
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-1 text-sm">You Review</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 px-10">
                Provide feedback and request any changes
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center">
              <div
                className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded-full flex items-center justify-center 
              mx-auto mb-3 relative z-10"
              >
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-1 text-sm">We Launch</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 px-10">
                Your website goes live and starts working for you
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IoMdCheckmark
                  className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <div>
                  <span className="font-semibold text-sm">
                    Direct Communication
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    Work directly with me, not through account managers
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <IoMdCheckmark
                  className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <div>
                  <span className="font-semibold text-sm">Fixed Pricing</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    No hourly rates or surprise costs
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <IoMdCheckmark
                  className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <div>
                  <span className="font-semibold text-sm">
                    Quick Turnaround
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    Most projects completed in 2-4 weeks
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <IoMdCheckmark
                  className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  size={20}
                />
                <div>
                  <span className="font-semibold text-sm">Ongoing Support</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    I'm here to help even after launch
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-sm mb-6 opacity-90">
              Let's create something amazing together. Whether you need a simple
              website or a complex web application, I'm here to bring your
              vision to life.
            </p>
            <div className="space-y-3">
              <Link
                to="/pricing"
                className="block w-full bg-white text-purple-700 px-4 py-2.5 rounded-full 
                  font-semibold text-center hover:bg-gray-100 transition-all duration-300"
              >
                View Pricing
              </Link>
              <Link
                to="/contact"
                className="block w-full bg-transparent border-2 border-white text-white px-4 py-2.5 
                  rounded-full font-semibold text-center hover:bg-white hover:text-purple-700 
                  transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="mb-16"></div>
      </div>
    </PageTransition>
  );
};

export default Home;
