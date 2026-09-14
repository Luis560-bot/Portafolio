import creativeSystem from "../image/creative-system.svg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <span className="badge">Desarrollador Full Stack </span>
        <h1>
          Hola, soy
          <br />
          <span className="hero-emphasis">Luis Alberto.</span>
        </h1>
        <p>
          Desarrollo aplicaciones web con React, Python y FastAPI. Aquí
          comparto mis proyectos y las tecnologías con las que trabajo.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            Ver proyectos <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact" className="btn secondary">
            Contactar
          </a>
        </div>
        <a
          className="hero-profile"
          href="https://github.com/Luis560-bot"
          target="_blank"
          rel="noreferrer"
        >
          Conocer mi código en GitHub ↗
        </a>
      </div>
      <div className="hero-art">
        <img
          src={creativeSystem}
          alt=""
          width="620"
          height="650"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
