import Card from "./Card";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiSpring, SiPrisma, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

const ProjectCards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4'>
      <Card
        title='Healthcare App'
        description='Fullstack web application for managing healthcare data.'
        techstack={
          <div className='flex space-x-2'>
            <RiReactjsLine />
            <SiMui />
            <BiLogoPostgresql />
            <SiSpring />
          </div>
        }
        link='https://github.com/stars/tsiro66/lists/healthcare-app'
        progress='100%'
      />
      <Card
        title='Library Management App'
        description='Fullstack library management system.'
        progress='100%'
        link='https://github.com/tsiro66/Library-Management'
        techstack={
          <div className='flex space-x-2'>
            <div className='text-sm'>.NET</div>
            <TbBrandCSharp />
            <FaBootstrap />
            <DiMsqlServer />
          </div>
        }
      />
      <Card
        title='CV AI Improvement Tool'
        description='Fullstack web application for improving your CV with AI.'
        techstack={
          <div className='flex space-x-2'>
            <RiNextjsFill />
            <RiTailwindCssFill />
            <SiPrisma />
            <SiMongodb />
          </div>
        }
        link='https://github.com/tsiro66/Resume-ai'
        progress='65%'
      />

      <Card
        title='More to come...'
        description='Stay tuned for more projects!'
        link='https://github.com/tsiro66/'
        techstack={<IoLogoGithub />}
      />
    </div>
  );
};

export default ProjectCards;
