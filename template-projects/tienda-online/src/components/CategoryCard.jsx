import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CategoryCard({ category, count }) {
  const Icon = category.icon
  const to = category.special ? '/productos?oferta=1' : `/productos?categoria=${category.id}`
  return (
    <Link to={to} className={`catcard catcard--${category.tone}`}>
      <span className="catcard__blob" aria-hidden="true" />
      <span className="catcard__icon"><Icon size={28} strokeWidth={1.6} aria-hidden="true" /></span>
      <span className="catcard__text">
        <strong>{category.name}</strong>
        <small>{category.description}</small>
        {count != null && <small className="catcard__count">{count} {count === 1 ? 'producto' : 'productos'}</small>}
      </span>
      <ArrowUpRight className="catcard__arrow" size={20} aria-hidden="true" />
    </Link>
  )
}
