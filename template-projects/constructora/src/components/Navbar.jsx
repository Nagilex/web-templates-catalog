import { useEffect, useState } from "react";
import { HardHat, Menu, X } from "lucide-react";
import { site } from "../config/site.js";

const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-nosotros", label: "Sobre nosotros" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  // Marca como activa la sección visible
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Cierra el menú móvil con Escape o al pasar a pantalla ancha
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <HardHat size={22} strokeWidth={2.4} />
          </span>
          <span className="brand-text">
            <strong>{site.name}</strong>
            <small>{site.tagline}</small>
          </span>
        </a>

        <nav
          id="menu-principal"
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Principal"
        >
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              aria-current={active === l.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta" href="#contacto" onClick={() => setOpen(false)}>
            Solicitar presupuesto
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
