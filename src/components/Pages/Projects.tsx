import PageTransition from "../PageTransition";
import ProjectCards from "../Projects/ProjectCards";

const Projects = () => {
  return (
    <PageTransition>
      <div
        className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white
     transition-all duration-300 ease-in-out pt-20 md:pt-24"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center p-3 sm:p-4 text-gray-800 dark:text-white">
          Projects
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg mb-4 md:mb-6 lg:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl px-2">
          Here are some of the projects I have worked on. Click on them to see
          more details.
        </p>
        <div className="pb-16 md:pb-0 ">
          <ProjectCards />
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
