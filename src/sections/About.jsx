export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-heading">
        <span className="eyebrow">Un poco sobre mí</span>
        <h2 className="section-title">
          Luis Alberto.
          <br />
          <span className="gradient-text">Desarrollador Full Stack.</span>
        </h2>
      </div>
      <div className="about-copy">
        <p>
          Soy desarrollador Full Stack. Trabajo con React y JavaScript para el
          frontend, y con Python y FastAPI para el backend. Utilizo PostgreSQL
          y MongoDB según el proyecto.
        </p>
        <p>
          En este portafolio reúno proyectos de monitoreo, consulta de datos y
          reportes ciudadanos. Puedes explorar sus funcionalidades y revisar el
          código en GitHub.
        </p>
        <a
          className="btn secondary"
          href="https://www.linkedin.com/in/luis-alberto-milla-agila-757688243/"
          target="_blank"
          rel="noreferrer"
        >
          Mi perfil en LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
