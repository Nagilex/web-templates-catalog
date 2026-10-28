import { Zap } from "lucide-react";
import { site } from "../config/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <Zap size={20} strokeWidth={2.4} />
          </span>
          <div>
            <strong>{site.name}</strong>
            <p>
              {site.tagline} · {site.city}
            </p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-nosotros">Sobre nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
      <div className="container footer-note">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Prototipo con contenido de ejemplo.</span>
      </div>
    </footer>
  );
}
