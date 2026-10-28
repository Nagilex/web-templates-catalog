import { useState } from 'react'
import { ImageOff } from 'lucide-react'

// Muestra la foto del producto si existe (product.image). Si no hay foto o falla la carga,
// muestra una ilustración con el icono y el color del producto, con tamaño consistente.
export default function ProductImage({ product, className = '' }) {
  const [status, setStatus] = useState(product.image ? 'loading' : 'fallback')
  const Icon = product.icon || ImageOff

  if (status === 'fallback') {
    return (
      <div className={`pimg pimg--${product.tone || 'teal'} ${className}`} role="img" aria-label={product.name}>
        <span className="pimg__blob pimg__blob--a" />
        <span className="pimg__blob pimg__blob--b" />
        <Icon className="pimg__icon" strokeWidth={1.4} aria-hidden="true" />
      </div>
    )
  }

  return (
    <div className={`pimg pimg--${product.tone || 'teal'} ${className}`}>
      {status === 'loading' && <span className="pimg__skeleton" aria-hidden="true" />}
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onLoad={() => setStatus('ready')}
        onError={() => setStatus('fallback')}
        className={`pimg__photo ${status === 'ready' ? 'is-ready' : ''}`}
      />
    </div>
  )
}
