import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import StackStrip from "./components/StackStrip";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#projects">
        Saltar a los proyectos
      </a>
      <Navbar />
      <main>
        <Hero />
        <StackStrip />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
