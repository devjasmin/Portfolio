import wetterApp from "../assets/Project-Section-Bilder/wetterApp.jpg";
import pizzeria from "../assets/Project-Section-Bilder/pizzeria.jpg";
import witzeApp from "../assets/Project-Section-Bilder/witzeApp.jpg";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    picture: wetterApp,
    altText: "Bildausschnitt der Wetter-App",
    title: "Moderne Wetter App",
    projectLink: "https://devjasmin.github.io/wetter-app/",
    codeLink: "https://github.com/devjasmin/wetter-app",
    subtext: "Beschreibung der Wetter-App",
    technologies: ["HTML", "JavaScript", "Vite", "SCSS"],
  },
  {
    id: 2,
    picture: pizzeria,
    altText: "Bildausschnitt der Pizzeria-App Mamma Mia",
    title: "Pizzeria Mamma Mia",
    projectLink: "https://devjasmin.github.io/pizzeria-app/",
    codeLink: "https://github.com/devjasmin/pizzeria-app",
    subtext: "Beschreibung der Pizzeria-App",
    technologies: ["HTML", "CSS", "Responsive Design"],
  },
  {
    id: 3,
    picture: witzeApp,
    altText: "Bildausschnitt der Witze-App",
    title: "Lustige Witze App",
    projectLink: "https://devjasmin.github.io/witze-app/",
    codeLink: "https://github.com/devjasmin/witze-app",
    subtext: "Beschreibung der Witze-App",
    technologies: ["HTML", "JavaScript", "Vite", "AJAX"],
  },
  {
    id: 4,
    picture: pizzeria,
    altText: "Bildausschnitt der Pizzeria-App Mamma Mia",
    title: "Pizzeria Mamma Mia",
    projectLink: "https://devjasmin.github.io/pizzeria-app/",
    codeLink: "https://github.com/devjasmin/pizzeria-app",
    subtext: "Beschreibung der Pizzeria-App",
    technologies: ["HTML", "CSS", "Responsive Design"],
  },
];

function Projects() {
  return (
    <>
      <section className="bg-slate-950 py-6">
        <div className="container mx-auto text-left px-5 mt-10 lg:px-6">
          <div className="text-center">
            <h2 className="text-white font-bold text-3xl mb-10 lg:text-5xl">
              Meine Projekte
            </h2>
            <p className="text-slate-300 lg:text-xl">
              Hier sind einige Auszüge aus meinen besten Arbeiten, damit Sie
              sich ein Bild meiner Fähigkeiten und Erfahrungen machen können.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 mt-20 gap-20 text-center  ">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                picture={project.picture}
                altText={project.altText}
                title={project.title}
                projectLink={project.projectLink}
                codeLink={project.codeLink}
                subtext={project.subtext}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
