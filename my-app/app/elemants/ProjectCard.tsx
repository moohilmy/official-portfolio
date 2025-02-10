import Image from "next/image";
import Link from "next/link";
import { CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  link,
  gitHubLink,
  teches,
}: {
  title: string;
  image: string;
  link?: string;
  gitHubLink: string;
  teches: { name: string; style: string }[];
}) => {
  return (
    <div className="w-full sm:w-[320px] overflow-hidden  p-4  backdrop-blur-md backdrop-saturate-200 bg-white/40 rounded-xl border border-gray-300/30">
      <div className=" relative w-full h-[250px] overflow-hidden rounded-xl">
        <Image
          src={image}
          fill
          className="object-cover hover:scale-110 transition-all"
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="my-4">
        <h1 className="font-black text-2xl mb-4">{title}</h1>
        <ul className="flex space-x-3">
          {teches.map(({ name, style }) => (
            <li
              key={name}
              className={`text-xs uppercase font-extralight p-1 rounded ${style}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <Link href={link ? (link as string) : gitHubLink} aria-label='watch project live'   target="_blank"  className="flex items-center p-1 text-xs live-now text-white" >
          <CgMediaLive className="mr-1" />
          live
        </Link>
        <Link href={gitHubLink} aria-label='git-repo'   target="_blank"  className="bg-black text-white flex items-center p-1 text-xs transition-all hover:bg-gray-700">
          <FaGithub className="mr-1"/>
          repo
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
