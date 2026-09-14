export default function ProjectStory({ story, title, image }) {
  return (
    <details className="project-story">
      <summary>
        Más sobre este proyecto <span aria-hidden="true">+</span>
      </summary>
      <div className="story-content">
        <div className="story-intro">
          <div>
            <h4>El problema</h4>
            <p>{story.problem}</p>
          </div>
          <div>
            <h4>La solución</h4>
            <p>{story.solution}</p>
          </div>
        </div>
        <h4>Recorrido de uso</h4>
        <ol className="story-flow">
          {story.flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <h4>Cómo está construido</h4>
        <ul className="architecture-flow">
          {story.architecture.map((part) => (
            <li key={part}>{part}</li>
          ))}
        </ul>
        <div className="story-decisions">
          {story.decisions.map((decision) => (
            <div key={decision.title}>
              <h5>{decision.title}</h5>
              <p>{decision.text}</p>
            </div>
          ))}
        </div>
        <a
          className="story-source"
          href={story.source}
          target="_blank"
          rel="noreferrer"
        >
          {story.sourceLabel} ↗
        </a>
        <details className="project-capture">
          <summary>Ver ilustración completa de {title}</summary>
          <img
            src={image}
            alt={`Ilustración conceptual completa de ${title}`}
            loading="lazy"
          />
        </details>
      </div>
    </details>
  );
}
