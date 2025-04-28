import { Link } from "react-router-dom";
import "../../App.css";

function Home() {
  return (
    <>
      <div className="flex flex-col h-[calc(100vh-72px)]">
        <div className="flex flex-col flex-grow items-center justify-center bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
          <h1 className="text-5xl font-bold mb-4">Welcome to my website!</h1>
          <p className="text-center text-gray-500 dark:text-gray-400 sm:text-xl mb-4 max-w-xl">
            I'm a software developer with a passion for creating beautiful and
            functional web applications. I love to learn new technologies and
            improve my skills.
          </p>
          <p className="text-center text-gray-500 dark:text-gray-400 sm:text-xl mb-8 max-w-xl">
            I am currently looking for new opportunities to work on exciting
            projects. If you are interested in working with me, please feel free
            to contact me.
          </p>
          <div className="flex justify-center mb-10">
            <Link
              to="/contact"
              className="bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
