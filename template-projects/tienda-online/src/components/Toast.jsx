import { Link } from 'react-router-dom'
import { CheckCircle2, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Toast() {
  const { toast, dismissToast } = useCart()
  if (!toast) return null
  return (
    <div className="toast" role="status" aria-live="polite">
      <CheckCircle2 size={20} aria-hidden="true" />
      <span>{toast}</span>
      <Link to="/carrito" className="toast__link">Ver carrito</Link>
      <button type="button" onClick={dismissToast} aria-label="Cerrar aviso"><X size={16} aria-hidden="true" /></button>
    </div>
  )
}
