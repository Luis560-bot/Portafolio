import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#hero" className="logo">
          <span className="logo-mark">
            LA<span>.</span>
          </span>
          <span className="logo-caption">Luis Alberto</span>
        </a>
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div
          id="navigation"
          className={`nav-links ${menuOpen ? "visible" : ""}`}
        >
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Habilidades
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
