import { Link } from 'react-router-dom'
import { House } from 'lucide-react'
import { STORE } from '../config'

// Logotipo: icono + nombre. Cambia el icono o el nombre en src/config.js / aquí.
export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label={`${STORE.name}, ir al inicio`}>
      <span className="logo__mark"><House size={20} strokeWidth={2.2} aria-hidden="true" /></span>
      <span className="logo__name">{STORE.name}</span>
    </Link>
  )
}
