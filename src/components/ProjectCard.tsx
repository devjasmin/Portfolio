import { ArrowRightIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  picture: string;
  altText: string;
  title: string;
  projectLink: string;
  codeLink: string;
  subtext: string;
  technologies: string[];
};

function ProjectCard({
  picture,
  altText,
  title,
  projectLink,
  codeLink,
  subtext,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="card-container text-left">
      <img src={picture} alt={altText} className="bg-black mt-10 mb-5" />

      <h3 className="text-white text-3xl py-4 text-center">{title}</h3>

      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 text-xl py-4 text-center lg:text-2xl"
      >
        {projectLink}
      </a>

      <div className="text-white mt-4 mb-6 lg:text-xl lg:mt-5 lg:mb-7">
        {subtext}
      </div>

      <div className="technologien">
        <div className="button-container flex flex-wrap text-left gap-1">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-white bg-slate-500 rounded-xl px-3 m-2 lg:text-xl"
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href={codeLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center w-52 gap-2 bg-blue-500 text-black mt-4 py-4 px-5 rounded-3xl hover:cursor-pointer lg:text-xl lg:mt-8"
        >
          Code ansehen
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
