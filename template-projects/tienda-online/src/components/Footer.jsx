import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { STORE } from '../config'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>{STORE.tagline}. Sitio de demostración: las compras, formularios y suscripciones son simulados.</p>
          <ul className="footer__social" aria-label="Redes sociales">
            {STORE.social.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h4>Tienda</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/productos?oferta=1">Ofertas</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        <nav aria-label="Políticas">
          <h4>Políticas (demo)</h4>
          <ul>
            <li><Link to="/politicas/privacidad">Política de privacidad</Link></li>
            <li><Link to="/politicas/despacho">Política de despacho</Link></li>
            <li><Link to="/politicas/devoluciones">Cambios y devoluciones</Link></li>
          </ul>
        </nav>

        <div>
          <h4>Contacto (ejemplo)</h4>
          <ul className="footer__contact">
            <li><Mail size={16} aria-hidden="true" /> {STORE.contact.email}</li>
            <li><Phone size={16} aria-hidden="true" /> {STORE.contact.phone}</li>
            <li><MapPin size={16} aria-hidden="true" /> {STORE.contact.address}</li>
            <li><Clock size={16} aria-hidden="true" /> {STORE.contact.hours}</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} {STORE.name}. Todos los derechos reservados.</span>
          <span>Prototipo de demostración · Precios en CLP</span>
        </div>
      </div>
    </footer>
  )
}
