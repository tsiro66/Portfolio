import { Link } from "react-router-dom";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoMdMail, IoMdPricetag } from "react-icons/io";
import { FaInfo } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className="w-full">
      <nav
        className="bg-white p-2 dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out fixed top-0
      left-0 w-full z-20 border-b border-gray-100 dark:border-gray-800"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="group font-[Special Gothic Expanded One]">
            <Link
              to="/"
              className=" font-bold text-lg md:text-xl text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded-md dark:text-white
              hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <span className="text-purple-600 dark:text-purple-400 group-hover:text-amber-400 transition-colors duration-300 ease-in-out">
                .
              </span>
              thodoris_tsironis
            </Link>
          </div>

          {/* Desktop Navigation - hidden on md and smaller, appears on lg and up */}
          <div className="space-x-2 md:space-x-4 hidden lg:flex">
            <Link
              to="/about"
              className="font-semibold text-sm md:text-base text-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-md
                dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 transition duration-300 ease-in-out"
            >
              About me
            </Link>
            <Link
              to="/services"
              className="font-semibold text-sm md:text-base text-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-md
                dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 transition duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/mywork"
              className="font-semibold text-sm md:text-base text-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-md
                dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 transition duration-300 ease-in-out"
            >
              My work
            </Link>
            <Link
              to="/contact"
              className="font-semibold text-sm md:text-base text-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-md
                dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 transition duration-300 ease-in-out"
            >
              Contact me
            </Link>
          </div>
          <div className="flex items-center">
            {/* Pricing button - hidden on small screens, appears on sm and up for top nav */}
            <Link
              to="/pricing"
              className="hidden sm:flex bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-700
               hover:to-fuchsia-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer 
              transition duration-300 hover:scale-105 text-sm md:text-base shadow-md mr-2 md:mr-3"
            >
              <IoMdPricetag className="mr-1 md:mr-2 mt-0.5" size={16} />
              Pricing
            </Link>
            <div className="px-2 md:px-3 py-1 md:py-2 rounded-md">
              {isDarkMode ? (
                <MdDarkMode
                  className="text-yellow-500 dark:text-yellow-400"
                  size={20}
                />
              ) : (
                <MdOutlineDarkMode
                  className="text-gray-700 dark:text-gray-300"
                  size={20}
                />
              )}
            </div>
            <button
              className="cursor-pointer"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <div
                className={`w-10 md:w-12 h-5 md:h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                  isDarkMode
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                <div
                  className={`bg-white w-3 md:w-4 h-3 md:h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                    isDarkMode
                      ? "translate-x-5 md:translate-x-6"
                      : "translate-x-0"
                  }`}
                ></div>
              </div>
            </button>

            {/* Hamburger Menu Button - visible on mobile, hidden on lg and up */}
            <button
              onClick={toggleMenu}
              className="lg:hidden ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="container mx-auto py-4 px-4 space-y-2">
            <Link
              to="/about"
              onClick={closeMenu}
              className="block font-semibold text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md
                hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 
                transition-colors duration-300"
            >
              <FaInfo className="inline mr-3" size={16} />
              About me
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="block font-semibold text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md
                hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 
                transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/mywork"
              onClick={closeMenu}
              className="block font-semibold text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md
                hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 
                transition-colors duration-300"
            >
              <FaLaptopCode className="inline mr-3" size={16} />
              My work
            </Link>
            <Link
              to="/pricing"
              onClick={closeMenu}
              className="block font-semibold text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md
                hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 
                transition-colors duration-300 sm:hidden"
            >
              <IoMdPricetag className="inline mr-3" size={16} />
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block font-semibold text-gray-700 dark:text-gray-300 px-4 py-3 rounded-md
                hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 
                transition-colors duration-300"
            >
              <IoMdMail className="inline mr-3" size={16} />
              Contact me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
