import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { site } from "../config/site.js";
import { whatsappUrl } from "../utils/validators.js";
import HeroIllustration from "../components/HeroIllustration.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  const stripItems = site.services.map((s) => s.title);

  return (
    <>
      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Construcción en Chile</span>
            <h1>
              Construimos obras <span className="mark">firmes</span> y bien terminadas
            </h1>
            <p className="lead">
              Obra gruesa, ampliaciones, remodelaciones y terminaciones, con un equipo que cuida la
              seguridad, el orden y la comunicación en cada etapa.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#contacto">
                Solicitar presupuesto <ArrowRight size={20} aria-hidden="true" />
              </a>
              <a className="btn btn-line btn-lg" href="#servicios">
                Ver servicios
              </a>
            </div>
            <ul className="hero-points">
              {["Casas y departamentos", "Locales y bodegas", "Antes, durante y después de la obra"].map((t) => (
                <li key={t}>
                  <CheckCircle2 size={18} aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            {site.heroImage ? (
              <img className="hero-photo" src={site.heroImage} alt={`Obra de ${site.name}`} />
            ) : (
              <HeroIllustration />
            )}
          </div>
        </div>
      </section>

      {/* CINTA DE SERVICIOS */}
      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[...stripItems, ...stripItems, ...stripItems, ...stripItems].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="container">
          <SectionHead
            eyebrow="Servicios"
            title="Qué construimos"
            text="Desde la estructura hasta el último detalle de terminación. Estos servicios son de ejemplo."
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

      {/* PROCESO */}
      <section id="proceso" className="section section-paper">
        <div className="container">
          <SectionHead
            eyebrow="Cómo trabajamos"
            title="Una obra, cinco etapas"
            text="Así avanza cada proyecto, de la primera visita a la entrega."
          />
          <ol className="steps">
            {site.process.map((p, i) => (
              <Reveal as="li" key={p.title} className="step" delay={i * 80}>
                <span className="step-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* VENTAJAS */}
      <section id="ventajas" className="section section-dark">
        <div className="container">
          <SectionHead
            light
            eyebrow="Por qué elegirnos"
            title="Lo que no negociamos"
            text="Cuatro compromisos que acompañan cada obra, grande o pequeña."
          />
          <div className="advantages">
            {site.advantages.map((a, i) => (
              <Reveal key={a.title} className="advantage" delay={i * 80}>
                <a.icon size={34} strokeWidth={1.7} aria-hidden="true" />
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
            <h2 id="cta-title">¿Tienes una obra en mente?</h2>
            <p>Cuéntanos qué quieres construir y te respondemos a la brevedad.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-dark btn-lg" href="#contacto">
              Solicitar presupuesto
            </a>
            <a
              className="btn btn-line-dark btn-lg"
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
