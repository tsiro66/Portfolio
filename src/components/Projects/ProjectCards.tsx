import Card from "./Card";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiSpring, SiPrisma, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
      <Card
        title="Healthcare App"
        description="Fullstack web application for managing healthcare data."
        techstack={
          <div className="flex space-x-2">
            <RiReactjsLine />
            <SiMui />
            <BiLogoPostgresql />
            <SiSpring />
          </div>
        }
        link="https://github.com/stars/tsiro66/lists/healthcare-app"
        progress="90%"
      />
      <Card
        title="CV AI Improvement Tool"
        description="Fullstack web application for improving your CV with AI."
        techstack={
          <div className="flex space-x-2">
            <RiNextjsFill />
            <RiTailwindCssFill />
            <SiPrisma />
            <SiMongodb />
          </div>
        }
        link="https://github.com/tsiro66/Resume-ai"
        progress="5%"
      />
      <Card
        title="Email Reply Assistant"
        description="Generate professional replies to emails with AI."
        progress="0%"
      />

      <Card
        title="More to come..."
        description="Stay tuned for more projects!"
        techstack={
          <div className="flex space-x-2">
            <RiReactjsLine />
          </div>
        }
        link=""
      />
    </div>
  );
};

export default ProjectCards;
