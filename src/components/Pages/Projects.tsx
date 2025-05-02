import ProjectCards from "../Projects/ProjectCards";

const Projects = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-72px)] bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
      <h1 className="text-4xl font-bold text-center p-4 pt-12 text-gray-800 dark:text-white">
        Projects
      </h1>
      {/* <p className="text-center text-gray-500 dark:text-gray-400 sm:text-xl mb-6 max-w-xl">
        These are my projects! <br />
      </p> */}
      <ProjectCards />
    </div>
  );
};

export default Projects;
