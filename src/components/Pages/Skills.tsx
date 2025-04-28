import SkillsDemoCards from "../Demos/SkillsDemoCards";

const Skills = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-72px)] bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
      <SkillsDemoCards />
    </div>
  );
};

export default Skills;
