import { Link } from "react-router-dom";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaInfo, FaProjectDiagram } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className="w-full">
      <nav className="bg-gray-50 p-3 md:p-4 dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="font-bold text-lg md:text-xl text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded-md dark:text-white"
            >
              <span className="text-blue-600">.</span>thodoris_tsironis
            </Link>
          </div>

          <div className="space-x-2 md:space-x-4 hidden md:flex">
            <Link
              to="/about"
              className="font-bold text-sm md:text-base text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded-md dark:text-white"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="font-bold text-sm md:text-base text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded-md dark:text-white"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="font-bold text-sm md:text-base text-gray-800 px-2 md:px-3 py-1 md:py-2 rounded-md dark:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <a
              href="/files/Theodoros_Tsironis_CV.pdf"
              download="Theodoros_Tsironis_CV.pdf"
              className="flex bg-blue-800 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer hover:bg-blue-700 
              transition duration-300 hover:scale-105 text-sm md:text-base"
            >
              <IoMdDownload className="mr-1 md:mr-2 mt-0.5" size={16} />
              CV
            </a>
            <div className="px-2 md:px-3 py-1 md:py-2 rounded-md">
              {isDarkMode ? (
                <MdDarkMode
                  className="text-gray-800 dark:text-white"
                  size={20}
                />
              ) : (
                <MdOutlineDarkMode
                  className="text-gray-800 dark:text-white"
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
                    ? "bg-blue-800 hover:bg-blue-700"
                    : "bg-blue-800 hover:bg-blue-700"
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
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-900  dark:bg-gray-800 py-2 md:hidden flex justify-around items-center transition-all duration-300 ease-in-out shadow-lg z-10 rounded-t-xl">
        <Link
          to="/about"
          className="flex flex-col items-center text-white dark:text-gray-300"
        >
          <FaInfo size={18} />
          <span className=" text-base">About</span>
        </Link>
        <Link
          to="/projects"
          className="flex flex-col items-center text-white dark:text-gray-300"
        >
          <FaProjectDiagram size={18} />
          <span className="text-base">Projects</span>
        </Link>
        <Link
          to="/contact"
          className="flex flex-col items-center text-white dark:text-gray-300"
        >
          <IoMdContact size={18} />
          <span className=" text-base">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
