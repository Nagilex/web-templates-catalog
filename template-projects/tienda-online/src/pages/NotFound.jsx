import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container page">
      <div className="empty empty--hero">
        <span className="empty__badge"><Compass size={44} strokeWidth={1.4} aria-hidden="true" /></span>
        <h1>Página no encontrada</h1>
        <p>La dirección que buscas no existe o fue movida.</p>
        <Link to="/" className="btn btn--primary btn--lg">Volver al inicio</Link>
      </div>
    </div>
  )
}
