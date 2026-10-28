import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, PackageX } from 'lucide-react'
import { CATEGORIES } from '../config'
import { getProductById, products, isOnSale, discountPercent } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatCLP } from '../utils/format'
import ProductImage from '../components/ProductImage'
import ProductGrid from '../components/ProductGrid'
import Rating from '../components/Rating'

export default function ProductDetail() {
  const { id } = useParams()
  const location = useLocation()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="container page">
        <div className="empty">
          <PackageX size={48} strokeWidth={1.4} aria-hidden="true" />
          <h1>Producto no encontrado</h1>
          <p>Es posible que ya no esté disponible.</p>
          <Link to="/productos" className="btn btn--primary">Volver al catálogo</Link>
        </div>
      </div>
    )
  }

  // key={id} reinicia la cantidad al cambiar de producto
  return <Detail key={product.id} product={product} backTo={location.state?.from || '/productos'} />
}

function Detail({ product, backTo }) {
  const { addItem, MAX_QTY } = useCart()
  const [qty, setQty] = useState(1)
  const sale = isOnSale(product)
  const category = CATEGORIES.find((c) => c.id === product.category)
  const maxQty = Math.min(MAX_QTY, product.stock)
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const changeQty = (value) => {
    const n = Math.floor(Number(value))
    if (Number.isNaN(n)) return
    setQty(Math.min(maxQty, Math.max(1, n)))
  }

  return (
    <div className="container page">
      <nav aria-label="Migas de pan" className="crumbs">
        <Link to={backTo} className="link-arrow link-arrow--back"><ArrowLeft size={16} aria-hidden="true" /> Volver al catálogo</Link>
      </nav>

      <div className="detail">
        <div className="detail__media">
          <ProductImage product={product} />
          <div className="card__badges">
            {sale && <span className="badge badge--sale">-{discountPercent(product)}%</span>}
            {product.badge && <span className="badge badge--new">{product.badge}</span>}
          </div>
        </div>

        <div className="detail__info">
          {category && <span className="eyebrow">{category.name}</span>}
          <h1>{product.name}</h1>
          <Rating value={product.rating} reviews={product.reviews} />

          <div className="price price--lg">
            <span className="price__now">{formatCLP(product.price)}</span>
            {sale && <s className="price__old">{formatCLP(product.oldPrice)}</s>}
            {sale && <span className="badge badge--sale">Ahorras {formatCLP(product.oldPrice - product.price)}</span>}
          </div>

          <p className="detail__desc">{product.description}</p>

          <ul className="detail__features">
            {product.features.map((f) => (
              <li key={f}><Check size={16} aria-hidden="true" /> {f}</li>
            ))}
          </ul>

          <p className="stock"><span className="stock__dot" aria-hidden="true" /> Disponible (ejemplo): {product.stock} unidades</p>

          <div className="detail__buy">
            <div className="qty qty--lg" role="group" aria-label="Cantidad">
              <button type="button" onClick={() => changeQty(qty - 1)} disabled={qty <= 1} aria-label="Disminuir cantidad">
                <Minus size={16} aria-hidden="true" />
              </button>
              <input
                type="number"
                min="1"
                max={maxQty}
                value={qty}
                onChange={(e) => changeQty(e.target.value)}
                aria-label="Cantidad a agregar"
              />
              <button type="button" onClick={() => changeQty(qty + 1)} disabled={qty >= maxQty} aria-label="Aumentar cantidad">
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>
            <button type="button" className="btn btn--primary btn--lg" onClick={() => addItem(product.id, qty)}>
              <ShoppingCart size={18} aria-hidden="true" /> Agregar al carrito
            </button>
          </div>
          <p className="muted">Subtotal: <strong>{formatCLP(product.price * qty)}</strong></p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section" aria-labelledby="rel-title">
          <div className="section__head"><h2 id="rel-title">Productos relacionados</h2></div>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  )
}
