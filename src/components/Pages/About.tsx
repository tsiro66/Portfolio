import { Link } from "react-router-dom";
import PageTransition from "../PageTransition";

// Make it into a grid layout with 2 colums, about me and education
const About = () => {
  return (
    <PageTransition>
      <div
        className="flex flex-col gap-8 items-center min-h-screen pt-20 md:pt-24
    bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl lg:m-10">
          {/* About Me Section */}
          <div className="flex flex-col items-center mt-5 lg:mt-0 bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
            <h1 className="text-lg font-bold text-gray-400 dark:text-gray-300 text-center m-2">
              LEARN MORE
            </h1>
            <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
            <p className="text-center text-gray-500 dark:text-gray-400 sm:text-lg mb-4 max-w-xl px-4">
              I am a recent graduate with a degree in Computer Science. I have a
              passion for web development and enjoy creating user-friendly
              applications.
            </p>
            <p className="text-center text-gray-500 dark:text-gray-400 sm:text-lg max-w-xl px-4">
              I am proficient in JavaScript, Typescript, React, and Tailwind
              CSS, and I am always eager to learn new technologies and improve
              my skills. I am excited to take on new challenges.
            </p>
          </div>

          {/* Education Section */}
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
            <h1 className="text-lg font-bold text-gray-400 dark:text-gray-300 text-center m-2">
              MY STUDIES
            </h1>
            <h1 className="text-4xl font-bold text-center mb-4">Education</h1>
            <p className="text-center text-gray-500 dark:text-gray-400 sm:text-lg mb-4 max-w-xl px-6">
              I earned my Bachelor's degree in Computer Science, from the{" "}
              <a
                href="https://www.uop.gr/en/"
                target="_blank"
                className="text-blue-800 hover:underline"
              >
                University of Peloponnese
              </a>{" "}
              studying from September 2017 to February 2025.
            </p>
            <p className="text-center text-gray-500 dark:text-gray-400 sm:text-lg mb-4 max-w-xl px-6">
              I have gained a solid foundation in programming, algorithms, and
              software development principles. I am also actively working on
              personal projects to enhance my skills.
            </p>
          </div>
        </div>
        <div className="flex">
          <Link
            to="/skills"
            className="bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300 hover:scale-105"
          >
            Check out my projects
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
