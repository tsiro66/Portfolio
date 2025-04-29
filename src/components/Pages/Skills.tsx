import SkillsDemoCards from "../Demos/SkillsDemoCards";

const Skills = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-72px)] bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
      <h1 className="text-4xl font-bold text-center p-4 pt-12 text-gray-800 dark:text-white">
        Demos
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 sm:text-xl mb-6 max-w-xl">
        Click on the cards below to see my skills in action! <br />
      </p>
      <SkillsDemoCards />
    </div>
  );
};

export default Skills;
