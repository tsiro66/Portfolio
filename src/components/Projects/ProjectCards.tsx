import Card from "./Card";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMui } from "react-icons/si";
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
