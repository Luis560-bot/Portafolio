import Icon from "../ui/Icon";
import Tags from "../ui/Tags";
import ProjectStory from "./ProjectStory";

export default function ProjectCard({ project }) {
  return (
    <article
      id={`project-${project.theme}`}
      className={`project-row project-${project.theme}`}
    >
      <div className="project-image-wrapper">
        <div className="project-image">
          <img
            src={project.image}
            alt={`Ilustración conceptual de ${project.title}`}
            loading="lazy"
            width="800"
            height="600"
          />
        </div>
        <span className="illustration-caption">Ilustración del proyecto</span>
      </div>
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <Tags items={project.tags} />
        <div className="project-links">
          {project.demo && (
            <a
              href={project.demo}
              className="btn primary"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="external" />
              Abrir aplicación
            </a>
          )}
          <a
            href={project.github}
            className="btn secondary"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
            GitHub
          </a>
        </div>
      </div>
      <ProjectStory
        story={project.story}
        title={project.title}
        image={project.image}
      />
    </article>
  );
}
