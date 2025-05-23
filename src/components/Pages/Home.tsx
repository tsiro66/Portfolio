import { Link } from "react-router-dom";
import "../../App.css";
import PageTransition from "../PageTransition";

function Home() {
  return (
    <PageTransition>
      <div className='flex flex-col min-h-screen'>
        <div className='flex flex-col flex-grow items-center justify-center bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out p-4 sm:p-6 md:p-8 lg:p-10'>
          <div className='w-full max-w-4xl mx-auto'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 md:mb-4'>
              Hello! I'm Thodoris,
            </h1>

            <p className='text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg mb-4 md:mb-6 lg:mb-8 mx-auto w-full max-w-xs sm:max-w-lg md:max-w-2xl px-2'>
              a full-stack web developer from Patras, Greece. This website is
              built with{" "}
              <span className='text-black dark:text-white transition-all duration-300 ease-in-out'>
                React
              </span>{" "}
              and{" "}
              <span className='text-black dark:text-white transition-all duration-300 ease-in-out'>
                Tailwind CSS
              </span>
              . Click{" "}
              <a
                href='https://github.com/tsiro66/Portfolio'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition duration-300 ease-in-out'
              >
                here
              </a>{" "}
              to see the code. I enjoy building interactive, user-friendly
              applications and exploring new technologies. Feel free to browse
              my projects or get in touch if you'd like to hire me!
            </p>

            <div className='flex justify-center mb-6 md:mb-8 lg:mb-10'>
              <Link
                to='/contact'
                className='bg-blue-800 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300 hover:scale-105 text-sm sm:text-sm md:text-base'
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;
