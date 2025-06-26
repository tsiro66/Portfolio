import { Link } from "react-router-dom";
import PageTransition from "../PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div
        className="flex flex-col gap-4 md:gap-6 items-center min-h-screen pt-16 md:pt-28 px-4 md:px-6 lg:px-8
          bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
          {/* About Me Card */}
          <div
            className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 
            border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <div
                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
               group-hover:from-purple-600 group-hover:to-purple-700 rounded-lg flex items-center 
               justify-center mr-3 transition-all duration-300"
              >
                <div
                  className="w-2 h-2 bg-gray-400 dark:bg-gray-500 group-hover:bg-white
                 rounded-full transition-colors duration-300"
                ></div>
              </div>

              <div>
                <h2 className="text-xs font-bold text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 tracking-wider transition-colors duration-300">
                  WHY CHOOSE ME
                </h2>
                <h3 className="text-lg md:text-xl font-bold">
                  Your Website Partner
                </h3>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-4 leading-relaxed">
              Unlike large agencies where you're just another project number,
              you'll work directly with me throughout the entire process. I'll
              listen to your needs, understand your goals, and deliver a website
              that truly represents your business.
            </p>

            {/* Skills badges */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 group-hover:text-purple-700 dark:group-hover:text-purple-300 text-xs rounded-full transition-all duration-300">
                Responsive Design
              </span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 group-hover:text-purple-700 dark:group-hover:text-purple-300 text-xs rounded-full transition-all duration-300">
                SEO Optimized
              </span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 group-hover:text-purple-700 dark:group-hover:text-purple-300 text-xs rounded-full transition-all duration-300">
                Fast Loading
              </span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 group-hover:text-purple-700 dark:group-hover:text-purple-300 text-xs rounded-full transition-all duration-300">
                Modern Tech
              </span>
            </div>
          </div>

          {/* Education Card */}
          <div
            className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 
            border-2 border-transparent hover:border-yellow-500 dark:hover:border-yellow-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <div
                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
               group-hover:from-yellow-400 group-hover:to-yellow-500 rounded-lg flex items-center 
               justify-center mr-3 transition-all duration-300"
              >
                <div
                  className="w-2 h-2 bg-gray-400 dark:bg-gray-500 group-hover:bg-white
                 rounded-full transition-colors duration-300"
                ></div>
              </div>
              <div>
                <h2 className="text-xs font-bold group-hover:text-yellow-600 dark:group-hover:text-yellow-400 tracking-wider">
                  MY EXPERTISE
                </h2>
                <h3 className="text-lg md:text-xl font-bold">
                  Technical Foundation
                </h3>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-4 leading-relaxed">
              I stay current with the latest web technologies and best
              practices, ensuring your website isn't just beautiful today, but
              remains fast, secure, and maintainable for years to come. My
              approach combines solid engineering principles with creative
              problem-solving to deliver exceptional results.
            </p>

            {/* Timeline element */}
            <div className="mt-auto border-l-2 border-gray-300 dark:border-gray-600 group-hover:border-yellow-500 pl-3 transition-colors duration-300">
              <div className="relative">
                <div className="absolute -left-5 w-2.5 h-2.5 bg-gray-400 dark:bg-gray-600 group-hover:bg-yellow-500 rounded-full transition-colors duration-300"></div>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Specialized in Modern Web Development
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Constantly learning and improving
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What I Offer Section */}
        <div className="w-full max-w-5xl mx-auto mt-4 md:mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xs font-bold">01</span>
              </div>
              <h3 className="font-semibold mb-1 text-sm">
                Clear Communication
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                No technical jargon. I explain everything in plain language and
                keep you updated throughout the project
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xs font-bold">02</span>
              </div>
              <h3 className="font-semibold mb-1 text-sm">Fixed Pricing</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                No surprises or hidden fees. You'll know exactly what your
                website costs before we start
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xs font-bold">03</span>
              </div>
              <h3 className="font-semibold mb-1 text-sm">Ongoing Support</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                I don't disappear after launch. I'm here to help with updates
                and answer questions
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <Link
            to="/mywork"
            className="bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-700 hover:to-fuchsia-600 text-white px-6 py-2.5 rounded-full 
              font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
          >
            See websites I've built
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
