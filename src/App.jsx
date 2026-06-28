import { useState } from 'react'
import ParticleBackground from './ParticleBackground.jsx'
import './App.css'

const projects = [
  {
    title: 'Proyecto Uno',
    desc: 'Aplicación web moderna con React y Node.js',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Proyecto Dos',
    desc: 'Dashboard interactivo con visualización de datos',
    tags: ['TypeScript', 'D3.js', 'Python'],
    link: '#',
  },
  {
    title: 'Proyecto Tres',
    desc: 'E-commerce platform con pagos integrados',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Proyecto Cuatro',
    desc: 'API RESTful para gestión de contenido',
    tags: ['Go', 'PostgreSQL', 'Docker'],
    link: '#',
  },
]

const skills = [
  { name: 'React', level: 45 },
  { name: 'JavaScript', level: 25 },
  { name: 'TypeScript', level: 2 },
  { name: 'Node.js', level: 10 },
  { name: 'CSS/Sass', level: 5 },
  { name: 'Python', level: 20 },
  { name: 'Git', level: 50 },
  { name: 'SQL', level: 45 },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <ParticleBackground />
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#hero" className="logo">LA</a>
          <button
            className={`menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? 'visible' : ''}`}>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Habilidades</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <span className="badge">Desarrollador Web</span>
          <h1>
            Hola, soy <span className="gradient-text">Luis Alberto</span>
          </h1>
          <p>
            Creo experiencias digitales modernas y funcionales.
            Especializado en React, Node.js y el ecosistema JavaScript.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">Ver Proyectos</a>
            <a href="#contact" className="btn secondary">Contactar</a>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-inner">
          <h2 className="section-title">Proyectos</h2>
          <p className="section-desc">
            Algunos de los trabajos que he realizado recientemente.
          </p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <a key={i} href={p.link} className="project-card" target="_blank" rel="noreferrer">
                <div className="project-img">
                  <div className="project-placeholder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.tags.map((t, j) => (
                      <span key={j} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-inner">
          <h2 className="section-title">Habilidades</h2>
          <p className="section-desc">
            Tecnologías con las que trabajo día a día.
          </p>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div key={i} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-inner">
          <h2 className="section-title">Contacto</h2>
          <p className="section-desc">
            ¿Tienes un proyecto en mente? Hablemos.
          </p>
          <div className="contact-links">
            <a href="mailto:luis_albertomilla14@hotmail.com" className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>luis_albertomilla14@hotmail.com</span>
            </a>
            <a href="https://github.com/Luis560-bot" target="_blank" rel="noreferrer" className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>github.com/Luis560-bot</span>
            </a>
            <a href="https://www.linkedin.com/in/luis-alberto-milla-agila-757688243/" target="_blank" rel="noreferrer" className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>linkedin.com/in/luis-alberto-milla-agila/</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Luis Alberto. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
