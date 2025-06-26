import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link
                to="/"
                className="font-bold text-xl text-gray-800 dark:text-white hover:text-purple-600
                  dark:hover:text-purple-400 transition-colors duration-300 font-[Special Gothic Expanded One]"
              >
                <span className="text-purple-600 dark:text-purple-400">.</span>
                thodoris_tsironis
              </Link>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
              Crafting modern, responsive websites that help businesses grow.
              Let's build something amazing together.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://github.com/tsiro66"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center
                  text-gray-600 dark:text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-fuchsia-500
                  hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/thodoris-tsironis-173b1b24a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center
                  text-gray-600 dark:text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-fuchsia-500
                  hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600
                    dark:hover:text-purple-400 transition-colors duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600
                    dark:hover:text-purple-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600
                    dark:hover:text-purple-400 transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600
                    dark:hover:text-purple-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope
                  className="text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0"
                  size={14}
                />
                <a
                  href="mailto:tsiro.thodoris@gmail.com"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600
                    dark:hover:text-purple-400 transition-colors duration-300"
                >
                  tsiro.thodoris@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhone
                  className="text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0"
                  size={14}
                />
                <a
                  href="tel:+306912345678"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600
                    dark:hover:text-purple-400 transition-colors duration-300"
                >
                  +30 698 782 8639
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt
                  className="text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0"
                  size={14}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Patras, Greece
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action - New Design */}
        {/*
          Moved CTA out of its own 'bar' div and integrated it into the main grid layout,
          or positioned it as a prominent, yet subtle, element.
          Here, we'll place it as a visually distinct but harmonious section.
        */}
        {/* <div className="text-center py-10 mb-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner transition-all duration-300">
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
              Contact me to build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
                something amazing
              </span>
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's turn your ideas into a stunning, high-performing website.
              Reach out today to discuss your vision.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-700 hover:to-fuchsia-600 text-white px-8 py-3 rounded-full
                font-bold text-lg hover:shadow:xl transition duration-300 hover:scale-105 shadow-lg"
            >
              Get Your Project Started
            </Link>
          </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              © {currentYear} Thodoris Tsironis. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-purple-600
                  dark:hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-purple-600
                  dark:hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
