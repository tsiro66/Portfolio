import { Link } from "react-router-dom";
import PageTransition from "../PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div
        className="flex flex-col gap-8 items-center min-h-screen pt-20 md:pt-24 px-4 md:px-6 lg:px-8
          bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4 md:mt-6">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          <div
            className="flex flex-col h-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 md:p-6 lg:p-8 
            border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-sm font-bold text-gray-400 dark:text-gray-300 tracking-wider mb-2">
              LEARN MORE
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              About Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
              I am a recent graduate with a degree in Computer Science. I have a
              passion for web development and enjoy creating user-friendly
              applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              I am proficient in JavaScript, Typescript, React, and CSS
              libraries, and I am always eager to learn new technologies and
              improve my skills. I am excited to take on new challenges.
            </p>
          </div>

          <div
            className="flex flex-col h-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 md:p-6 lg:p-8 
            border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-sm font-bold text-gray-400 dark:text-gray-300 tracking-wider mb-2">
              MY STUDIES
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              Education
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:text-base leading-relaxed">
              I earned my Bachelor's degree in Computer Science, from the{" "}
              <a
                href="https://www.uop.gr/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                University of Peloponnese
              </a>{" "}
              studying from September 2017 to February 2025.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:text-base leading-relaxed">
              I have gained a solid foundation in programming, algorithms, and
              software development principles. I am also actively working on
              personal projects to enhance my skills.
            </p>
          </div>
        </div>

        <div className="flex my-4 mb-16">
          <Link
            to="/projects"
            className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full 
              font-medium text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Check out my projects
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
