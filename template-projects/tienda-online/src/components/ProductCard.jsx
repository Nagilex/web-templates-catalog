import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Eye } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { discountPercent, isOnSale } from '../data/products'
import { formatCLP } from '../utils/format'
import ProductImage from './ProductImage'
import Rating from './Rating'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const location = useLocation()
  const sale = isOnSale(product)
  // Guardamos de dónde venimos para poder volver al catálogo con los filtros intactos.
  const linkState = { from: `${location.pathname}${location.search}` }
  const detailPath = `/producto/${product.id}`

  return (
    <article className="card">
      <Link to={detailPath} state={linkState} className="card__media" aria-label={`Ver detalles de ${product.name}`}>
        <ProductImage product={product} />
        <div className="card__badges">
          {sale && <span className="badge badge--sale">-{discountPercent(product)}%</span>}
          {product.badge && <span className="badge badge--new">{product.badge}</span>}
        </div>
      </Link>
      <div className="card__body">
        <h3 className="card__title">
          <Link to={detailPath} state={linkState}>{product.name}</Link>
        </h3>
        <Rating value={product.rating} reviews={product.reviews} />
        <div className="price">
          <span className="price__now">{formatCLP(product.price)}</span>
          {sale && <s className="price__old">{formatCLP(product.oldPrice)}</s>}
        </div>
        <div className="card__actions">
          <button type="button" className="btn btn--primary btn--sm" onClick={() => addItem(product.id)}>
            <ShoppingCart size={16} aria-hidden="true" /> Agregar al carrito
          </button>
          <Link to={detailPath} state={linkState} className="btn btn--ghost btn--icon" aria-label={`Ver detalles de ${product.name}`} title="Ver detalles">
            <Eye size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
