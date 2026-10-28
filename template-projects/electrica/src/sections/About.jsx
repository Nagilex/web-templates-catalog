import { CheckCircle2, Camera, FileCheck2 } from "lucide-react";
import { site } from "../config/site.js";
import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  const { about, projects } = site;
  const MissionIcon = site.missionIcon;
  const VisionIcon = site.visionIcon;

  return (
    <section id="sobre-nosotros" className="section section-soft">
      <div className="container">
        <SectionHead eyebrow="Sobre nosotros" title={`Conoce a ${site.name}`} />

        {/* Presentación */}
        <div className="about-grid">
          <Reveal className="about-text">
            {about.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="credentials" delay={100}>
            <FileCheck2 size={28} aria-hidden="true" />
            <h3>Certificaciones y acreditaciones</h3>
            <p>{about.credentialsNote}</p>
            <span className="placeholder-tag">Contenido editable</span>
          </Reveal>
        </div>

        {/* Misión y visión */}
        <div className="mv-grid">
          <Reveal className="mv-card">
            <span className="mv-icon" aria-hidden="true">
              <MissionIcon size={24} />
            </span>
            <h3>Misión</h3>
            <p>{about.mission}</p>
          </Reveal>
          <Reveal className="mv-card" delay={100}>
            <span className="mv-icon" aria-hidden="true">
              <VisionIcon size={24} />
            </span>
            <h3>Visión</h3>
            <p>{about.vision}</p>
          </Reveal>
        </div>

        {/* Valores */}
        <h3 className="block-title">Nuestros valores</h3>
        <div className="values">
          {about.values.map((v, i) => (
            <Reveal key={v.title} className="value" delay={i * 70}>
              <v.icon size={24} aria-hidden="true" />
              <div>
                <strong>{v.title}</strong>
                <p>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Seguridad y calidad */}
        <Reveal className="safety">
          <div>
            <span className="eyebrow eyebrow-yellow">Seguridad y calidad</span>
            <h3>Cada trabajo se hace con método</h3>
            <p>
              La seguridad y la calidad no son un añadido: guían cómo planificamos, ejecutamos y
              entregamos cada servicio.
            </p>
          </div>
          <ul>
            {about.safetyPoints.map((t) => (
              <li key={t}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Proyectos */}
        <h3 className="block-title">Proyectos realizados</h3>
        <div className="gallery">
          {projects.map((p, i) => (
            <Reveal key={p.title} className="photo" delay={i * 60}>
              {p.image ? (
                <img src={p.image} alt={p.title} loading="lazy" />
              ) : (
                <div className="photo-empty">
                  <Camera size={30} aria-hidden="true" />
                  <strong>{p.title}</strong>
                  <span>Espacio para una fotografía</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
