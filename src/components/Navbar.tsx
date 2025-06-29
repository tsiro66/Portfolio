import { Link, useLocation } from "react-router-dom";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaInfo, FaPhone } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Determine which demo is active based on the URL
  const getDemoType = () => {
    const path = location.pathname;
    // Check if we're on the main demos page (defaults to doctor/medical)
    if (path === "/demos" || path === "/demos/") return "medical";
    if (path.includes("/demos/doctor")) return "medical";
    if (path.includes("/demos/tech")) return "tech";
    if (path.includes("/demos/corporate")) return "corporate";
    if (path.includes("/demos/creative")) return "creative";
    if (path.includes("/demos/ecommerce")) return "ecommerce";
    if (path.includes("/demos/education")) return "education";
    return "default";
  };

  const demoType = getDemoType();

  // Get styling based on demo type
  const getNavbarStyles = () => {
    switch (demoType) {
      case "medical":
        return {
          bg: "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md",
          text: "text-gray-700 dark:text-gray-300",
          hoverText: "hover:text-blue-600 dark:hover:text-blue-400",
          buttonBg:
            "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
          brandAccent: "text-blue-600 dark:text-blue-400",
          border: "border-blue-100 dark:border-gray-800",
          mobileHover: "hover:bg-blue-50 dark:hover:bg-gray-800",
        };
      case "tech":
        return {
          bg: "bg-black/90 backdrop-blur-lg",
          text: "text-gray-300",
          hoverText: "hover:text-purple-400",
          buttonBg:
            "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700",
          brandAccent:
            "text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text",
          border: "border-gray-800",
          mobileHover: "hover:bg-gray-900",
        };
      case "corporate":
        return {
          bg: "bg-slate-50 dark:bg-slate-900",
          text: "text-slate-700 dark:text-slate-300",
          hoverText: "hover:text-blue-700 dark:hover:text-blue-400",
          buttonBg:
            "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
          brandAccent: "text-blue-700 dark:text-blue-400",
          border: "border-slate-200 dark:border-slate-800",
          mobileHover: "hover:bg-slate-100 dark:hover:bg-slate-800",
        };
      case "creative":
        return {
          bg: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20",
          text: "text-gray-800 dark:text-gray-200",
          hoverText: "hover:text-pink-600 dark:hover:text-pink-400",
          buttonBg:
            "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
          brandAccent:
            "text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text",
          border: "border-pink-100 dark:border-purple-800",
          mobileHover: "hover:bg-pink-100 dark:hover:bg-purple-900/30",
        };
      case "ecommerce":
        return {
          bg: "bg-white dark:bg-gray-900",
          text: "text-gray-700 dark:text-gray-300",
          hoverText: "hover:text-orange-600 dark:hover:text-orange-400",
          buttonBg:
            "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700",
          brandAccent: "text-orange-600 dark:text-orange-400",
          border: "border-gray-200 dark:border-gray-800",
          mobileHover: "hover:bg-orange-50 dark:hover:bg-gray-800",
        };
      case "education":
        return {
          bg: "bg-blue-50 dark:bg-slate-900",
          text: "text-slate-700 dark:text-slate-300",
          hoverText: "hover:text-blue-800 dark:hover:text-blue-400",
          buttonBg:
            "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
          brandAccent: "text-blue-800 dark:text-blue-400",
          border: "border-blue-100 dark:border-slate-800",
          mobileHover: "hover:bg-blue-100 dark:hover:bg-slate-800",
        };
      default:
        return {
          bg: "bg-white dark:bg-gray-900",
          text: "text-gray-700 dark:text-gray-300",
          hoverText: "hover:text-purple-600 dark:hover:text-purple-400",
          buttonBg:
            "bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-700 hover:to-fuchsia-600",
          brandAccent: "text-purple-600 dark:text-purple-400",
          border: "border-gray-100 dark:border-gray-800",
          mobileHover: "hover:bg-gray-100 dark:hover:bg-gray-800",
        };
    }
  };

  const styles = getNavbarStyles();

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

  // Add emergency button for medical demo
  const showEmergencyButton = demoType === "medical";

  return (
    <div className="w-full">
      <nav
        className={`${styles.bg} p-2 shadow-lg transition-all duration-300 ease-in-out fixed top-0
        left-0 w-full z-20 border-b ${styles.border}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="group font-[Special Gothic Expanded One]">
            <Link
              to="/"
              className={`font-bold text-lg md:text-xl px-2 md:px-3 py-1 md:py-2 rounded-md
              ${
                demoType === "default"
                  ? "text-gray-800 dark:text-white"
                  : styles.text
              } 
              ${styles.hoverText} transition-colors duration-300`}
            >
              <span
                className={`${styles.brandAccent} group-hover:text-amber-400 transition-colors duration-300 ease-in-out`}
              >
                .
              </span>
              thodoris_tsironis
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="space-x-2 md:space-x-4 hidden lg:flex">
            <Link
              to="/about"
              className={`font-semibold text-sm md:text-base px-2 md:px-3 py-1 md:py-2 rounded-md
                ${styles.text} ${styles.hoverText} hover:scale-105 transition duration-300 ease-in-out`}
            >
              About me
            </Link>
            <Link
              to="/services"
              className={`font-semibold text-sm md:text-base px-2 md:px-3 py-1 md:py-2 rounded-md
                ${styles.text} ${styles.hoverText} hover:scale-105 transition duration-300 ease-in-out`}
            >
              Services
            </Link>
            <Link
              to="/demos"
              className={`font-semibold text-sm md:text-base px-2 md:px-3 py-1 md:py-2 rounded-md
                ${styles.text} ${styles.hoverText} hover:scale-105 transition duration-300 ease-in-out`}
            >
              Demos
            </Link>
          </div>
          <div className="flex items-center">
            {/* Emergency button for medical demo only */}
            {showEmergencyButton && (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-medium mr-3 transition-all hover:scale-105"
              >
                <FaPhone size={14} />
                Emergency
              </a>
            )}

            <Link
              to="/contact"
              className={`hidden sm:flex ${styles.buttonBg} text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer 
              transition duration-300 hover:scale-105 text-sm md:text-base shadow-md mr-2 md:mr-3`}
            >
              <AiFillMessage className="mr-1 md:mr-2 mt-1" size={16} />
              Contact me
            </Link>
            <div className="px-2 md:px-3 py-1 md:py-2 rounded-md">
              {isDarkMode ? (
                <MdDarkMode
                  className={
                    demoType === "tech"
                      ? "text-yellow-400"
                      : "text-yellow-500 dark:text-yellow-400"
                  }
                  size={20}
                />
              ) : (
                <MdOutlineDarkMode className={styles.text} size={20} />
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

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden ml-2 p-2 rounded-md ${styles.text} ${styles.mobileHover} transition-colors duration-200`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full ${
            styles.bg
          } shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="container mx-auto py-4 px-4 space-y-2">
            <Link
              to="/about"
              onClick={closeMenu}
              className={`block font-semibold ${styles.text} px-4 py-3 rounded-md
                ${styles.mobileHover} ${styles.hoverText} transition-colors duration-300`}
            >
              <FaInfo className="inline mr-3" size={16} />
              About me
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className={`block font-semibold ${styles.text} px-4 py-3 rounded-md
                ${styles.mobileHover} ${styles.hoverText} transition-colors duration-300`}
            >
              <FaLaptopCode className="inline mr-3" size={16} />
              Services
            </Link>
            <Link
              to="/demos"
              onClick={closeMenu}
              className={`block font-semibold ${styles.text} px-4 py-3 rounded-md
                ${styles.mobileHover} ${styles.hoverText} transition-colors duration-300`}
            >
              <FaLaptopCode className="inline mr-3" size={16} />
              Demos
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className={`block font-semibold ${styles.text} px-4 py-3 rounded-md
                ${styles.mobileHover} ${styles.hoverText} transition-colors duration-300`}
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
