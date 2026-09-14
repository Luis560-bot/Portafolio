import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-title">
          Mis proyectos<span className="title-dot">.</span>
        </h2>
        <p className="section-desc">
          Qué hace cada aplicación, cómo funciona y dónde puedes ver su código.
        </p>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.theme} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
