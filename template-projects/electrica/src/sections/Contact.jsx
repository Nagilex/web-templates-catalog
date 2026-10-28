import { useMemo, useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { OTHER_SERVICE, site } from "../config/site.js";
import { validateContact, whatsappUrl } from "../utils/validators.js";
import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";

const EMPTY = { name: "", phone: "", email: "", service: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [attempted, setAttempted] = useState(false);
  const [sentName, setSentName] = useState(null);

  const errors = useMemo(() => validateContact(values), [values]);
  const serviceOptions = [...site.services.map((s) => s.title), OTHER_SERVICE];

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));
  const err = (f) => ((touched[f] || attempted) && errors[f]) || "";

  const onSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (Object.keys(errors).length > 0) {
      // Lleva el foco al primer campo con error
      const first = ["name", "phone", "email", "service", "message"].find((f) => errors[f]);
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    // DEMOSTRACIÓN: aquí no se envía nada a ningún servidor.
    setSentName(values.name.trim());
    setValues(EMPTY);
    setTouched({});
    setAttempted(false);
  };

  const field = (name, label, control) => (
    <div className={`field ${err(name) ? "has-error" : ""}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {control}
      {err(name) && (
        <span className="field-error" id={`e-${name}`} role="alert">
          {err(name)}
        </span>
      )}
    </div>
  );

  const common = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    "aria-invalid": err(name) ? "true" : "false",
    "aria-describedby": err(name) ? `e-${name}` : undefined,
    required: true,
  });

  return (
    <section id="contacto" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Contacto"
          title="Solicita tu presupuesto"
          text="Completa el formulario y cuéntanos qué necesitas. También puedes escribirnos por WhatsApp."
        />

        <div className="contact-grid">
          <Reveal className="form-card">
            {sentName ? (
              <div className="success" role="status" aria-live="polite">
                <CheckCircle2 size={44} aria-hidden="true" />
                <h3>Solicitud recibida, {sentName.split(" ")[0]}</h3>
                <p className="demo-note">
                  <strong>Esto es una demostración.</strong> Tus datos todavía no se envían a ningún
                  servidor: en la versión real, aquí se confirmaría el envío de tu solicitud.
                </p>
                <button type="button" className="btn btn-primary" onClick={() => setSentName(null)}>
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                {field(
                  "name",
                  "Nombre completo",
                  <input type="text" autoComplete="name" placeholder="Ej: María González" {...common("name")} />
                )}
                <div className="form-row">
                  {field(
                    "phone",
                    "Teléfono",
                    <input type="tel" autoComplete="tel" placeholder="+56 9 1234 5678" {...common("phone")} />
                  )}
                  {field(
                    "email",
                    "Correo electrónico",
                    <input type="email" autoComplete="email" placeholder="nombre@correo.cl" {...common("email")} />
                  )}
                </div>
                {field(
                  "service",
                  "Tipo de servicio solicitado",
                  <select {...common("service")}>
                    <option value="">Selecciona una opción</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                )}
                {field(
                  "message",
                  "Mensaje",
                  <textarea rows={5} placeholder="Cuéntanos qué necesitas, dónde y para cuándo." {...common("message")} />
                )}
                <button type="submit" className="btn btn-primary btn-lg">
                  Enviar solicitud <Send size={18} aria-hidden="true" />
                </button>
                <p className="form-hint">Todos los campos son obligatorios.</p>
              </form>
            )}
          </Reveal>

          <Reveal className="info-card" delay={120}>
            <h3>Datos de contacto</h3>
            <p className="demo-line">Datos de ejemplo: reemplázalos en src/config/site.js</p>
            <ul>
              <li>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <small>Teléfono</small>
                  <span>{site.phone}</span>
                </div>
              </li>
              <li>
                <Mail size={20} aria-hidden="true" />
                <div>
                  <small>Correo</small>
                  <span>{site.email}</span>
                </div>
              </li>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <small>Dirección</small>
                  <span>{site.address}</span>
                </div>
              </li>
              <li>
                <Clock size={20} aria-hidden="true" />
                <div>
                  <small>Horario</small>
                  <span>{site.schedule}</span>
                </div>
              </li>
            </ul>
            <a
              className="btn btn-whatsapp btn-lg"
              href={whatsappUrl(site.whatsapp.number, site.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" /> Contactar por WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
