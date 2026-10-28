import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        <Icon size={26} strokeWidth={1.9} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="service-link" href="#contacto">
        Consultar <ArrowRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}
