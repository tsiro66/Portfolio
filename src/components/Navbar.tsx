import { Link } from "react-router-dom";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";

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
      <nav className="bg-gray-50 p-4 dark:bg-gray-900 shadow-2xl shadow-black transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link
              to="/"
              className={`font-bold text-xl text-gray-800 px-3 py-2 rounded-md dark:text-white`}
            >
              <span className="text-blue-600">.</span>thodoris_tsironis
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              to="/about"
              className={`font-bold text-gray-800 px-3 py-2 rounded-md dark:text-white`}
            >
              About
            </Link>

            <Link
              to="/projects"
              className={`font-bold text-gray-800 px-3 py-2 rounded-md dark:text-white`}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className={`font-bold text-gray-800 px-3 py-2 rounded-md dark:text-white`}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <a
              href="/files/Theodoros_Tsironis_CV.pdf"
              download="Theodoros_Tsironis_CV.pdf"
              className="flex bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300  hover:scale-105"
            >
              <IoMdDownload className="mr-2 mt-0.5" size={20} />
              CV
            </a>
            <div className="px-3 py-2 rounded-md">
              {isDarkMode ? (
                <MdDarkMode
                  className="text-gray-800 dark:text-white"
                  size={24}
                />
              ) : (
                <MdOutlineDarkMode
                  className="text-gray-800 dark:text-white"
                  size={24}
                />
              )}
            </div>
            <button
              className="cursor-pointer"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <div
                className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                  isDarkMode
                    ? "bg-blue-800 hover:bg-blue-700"
                    : "bg-blue-800 hover:bg-blue-700"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                    isDarkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
