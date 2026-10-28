import { Layers3, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CatalogNavbar({ back = false }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/plantillas" aria-label="WebTemplates, ir al catálogo">
          <span className="brand-icon"><Layers3 size={21} /></span>
          <span>web<span className="brand-accent">templates</span></span>
        </Link>
        {back ? (
          <Link className="header-link" to="/plantillas">
            <ArrowLeft size={16} /> Volver al catálogo
          </Link>
        ) : (
          <a className="header-link" href="#coleccion">Explorar colección</a>
        )}
      </div>
    </header>
  )
}
