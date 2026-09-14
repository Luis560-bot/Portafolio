import { skills, tooling } from "../data/skills";
import Tags from "../components/ui/Tags";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <h2 className="section-title">Tecnologías que utilizo</h2>
        <p className="section-desc">
          Tecnologías aplicadas en mis repositorios, con ejemplos que puedes revisar.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="capability-card" key={skill.title}>
              <span className="capability-icon" aria-hidden="true">
                {["</>", "{ }", "[ ≡ ]"][index]}
              </span>
              <h3>{skill.title}</h3>
              <Tags items={skill.tags} />
              <div className="skill-evidence">
                <div className="skill-sources">
                  {skill.sources.map((source) => (
                    <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                      {source.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="tooling-note">
          <h3>Herramientas de desarrollo</h3>
          <Tags items={tooling} />
          <a href="https://github.com/Luis560-bot/Airware/blob/main/Dockerfile" target="_blank" rel="noreferrer">Ver configuración de Docker ↗</a>
        </div>
      </div>
    </section>
  );
}
