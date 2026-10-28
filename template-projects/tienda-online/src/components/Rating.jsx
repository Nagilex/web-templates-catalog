import { Star } from 'lucide-react'

// Valoración visual de ejemplo (demostrativa, no proviene de clientes reales).
export default function Rating({ value, reviews }) {
  const full = Math.round(value)
  return (
    <div className="rating" title="Valoración de ejemplo (demostrativa)">
      <span className="rating__stars" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} size={14} className={n <= full ? 'is-on' : ''} fill={n <= full ? 'currentColor' : 'none'} />
        ))}
      </span>
      <span className="rating__text">
        {value.toFixed(1)} {reviews != null && <>({reviews})</>} · <em>demostrativa</em>
      </span>
      <span className="sr-only">Valoración de ejemplo: {value.toFixed(1)} de 5</span>
    </div>
  )
}
