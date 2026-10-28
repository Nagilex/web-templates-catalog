import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { site } from "../config/site.js";
import { whatsappUrl } from "../utils/validators.js";
import HeroIllustration from "../components/HeroIllustration.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-yellow">Servicios eléctricos en Chile</span>
            <h1>
              Energía <span className="hl">segura</span> para tu hogar y tu negocio
            </h1>
            <p className="lead">
              Instalamos, mantenemos y reparamos sistemas eléctricos con trabajo ordenado, materiales
              adecuados y una comunicación clara de principio a fin.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#contacto">
                Solicitar presupuesto <ArrowRight size={20} aria-hidden="true" />
              </a>
              <a className="btn btn-ghost btn-lg" href="#servicios">
                Ver servicios
              </a>
            </div>
            <ul className="hero-points">
              {["Instalación", "Mantención", "Reparación de fallas"].map((t) => (
                <li key={t}>
                  <CheckCircle2 size={18} aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            {site.heroImage ? (
              <img className="hero-photo" src={site.heroImage} alt={`Equipo de ${site.name} trabajando`} />
            ) : (
              <HeroIllustration />
            )}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="container">
          <SectionHead
            eyebrow="Servicios"
            title="Lo que hacemos"
            text="Un equipo para resolver desde un enchufe hasta la instalación completa de un local. Estos servicios son de ejemplo."
          />
          <div className="cards">
            {site.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section id="ventajas" className="section section-dark">
        <div className="container">
          <SectionHead
            light
            eyebrow="Por qué elegirnos"
            title="Trabajo en el que puedes confiar"
            text="Lo que prometemos en cada servicio, grande o pequeño."
          />
          <div className="advantages">
            {site.advantages.map((a, i) => (
              <Reveal key={a.title} className="advantage" delay={i * 80}>
                <span className="advantage-icon" aria-hidden="true">
                  <a.icon size={28} strokeWidth={1.8} />
                </span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN */}
      <section className="cta-band" aria-labelledby="cta-title">
        <div className="container cta-inner">
          <div>
            <h2 id="cta-title">¿Necesitas un presupuesto?</h2>
            <p>Cuéntanos qué necesitas y te respondemos a la brevedad.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-dark btn-lg" href="#contacto">
              Solicitar presupuesto
            </a>
            <a
              className="btn btn-outline-dark btn-lg"
              href={whatsappUrl(site.whatsapp.number, site.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
