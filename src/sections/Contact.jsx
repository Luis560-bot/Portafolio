import Icon from "../components/ui/Icon";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <h2 className="section-title">¿Hablamos?</h2>
        <p className="section-desc">
          Puedes escribirme para conversar sobre un proyecto o una oportunidad
          como desarrollador.
        </p>
        <div className="contact-links">
          <a
            href="mailto:luis_albertomilla14@hotmail.com"
            className="contact-card"
          >
            <Icon name="email" size={24} />
            <span>luis_albertomilla14@hotmail.com</span>
          </a>
          <a
            href="https://github.com/Luis560-bot"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Icon name="github" size={24} />
            <span>github.com/Luis560-bot</span>
          </a>
          <a
            href="https://www.linkedin.com/in/luis-alberto-milla-agila-757688243/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Icon name="linkedin" size={24} />
            <span>linkedin.com/in/luis-alberto-milla-agila/</span>
          </a>
        </div>
      </div>
    </section>
  );
}
