import { Link } from "react-router-dom";
import "../../App.css";

function Home() {
  return (
    <>
      <div className="flex flex-col h-[calc(100vh-72px)]">
        <div className="flex flex-col flex-grow items-center justify-center bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
          <h1 className="text-lg font-bold mb-4  text-blue-800">
            MOBILE VERSION IS NOT READY YET!
          </h1>
          <h1 className="text-4xl font-bold mb-2">
            Hello! My name is Thodoris Tsironis,{" "}
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-400 sm:text-lg mb-4 max-w-2xl">
            and I'm a full-stack web developer looking for opportunities in
            Patras, Greece. I graduated from the University of Peloponnese with
            a degree in Software Engineering. I am extremely passionate about
            this profession, and this passion also fuels my lifelong commitment
            to continuously enhance my web and mobile application development
            skills.
          </p>

          <div className="flex justify-center mb-10">
            <Link
              to="/contact"
              className="bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300  hover:scale-105"
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
