import HeaderSection from "@/app/elemants/HeaderSection";
import ProjectCard from "@/app/elemants/ProjectCard";
import { ProjectList } from ".";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="my-8">
      <HeaderSection title="Projects" />
      <div className="flex flex-wrap justify-around my-5 gap-5">
        {ProjectList.map((project, index) => (
          <ProjectCard key={index} image={project.image} teches={project.Teches} title={project.title} link={project?.link} gitHubLink={project.gitHubLink} />
        ))}
      </div>
      <div>
        <div className="text-gray-600 sm:text-sm text-xs  flex justify-center gap-1 items-center">
          <p>Check out my latest projects on</p>
          <Link href='' aria-label='git-repo'   target="_blank"  className="bg-black text-white flex items-center p-1 text-xs transition-all hover:bg-gray-700">
          <FaGithub className="mr-1"/>
          my git hub
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
