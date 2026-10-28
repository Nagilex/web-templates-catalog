import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatCLP } from '../utils/format'
import ProductImage from './ProductImage'

export default function CartItem({ item }) {
  const { setQuantity, removeItem, MAX_QTY } = useCart()
  const { product, quantity } = item

  return (
    <li className="cartitem">
      <Link to={`/producto/${product.id}`} className="cartitem__img" aria-label={`Ver ${product.name}`}>
        <ProductImage product={product} />
      </Link>
      <div className="cartitem__info">
        <Link to={`/producto/${product.id}`} className="cartitem__name">{product.name}</Link>
        <span className="cartitem__unit">{formatCLP(product.price)} c/u</span>
        <div className="qty" role="group" aria-label={`Cantidad de ${product.name}`}>
          <button type="button" onClick={() => setQuantity(product.id, quantity - 1)} disabled={quantity <= 1} aria-label="Disminuir cantidad">
            <Minus size={16} aria-hidden="true" />
          </button>
          <span aria-live="polite">{quantity}</span>
          <button type="button" onClick={() => setQuantity(product.id, quantity + 1)} disabled={quantity >= MAX_QTY} aria-label="Aumentar cantidad">
            <Plus size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="cartitem__side">
        <strong className="cartitem__subtotal">{formatCLP(product.price * quantity)}</strong>
        <button type="button" className="link-btn link-btn--danger" onClick={() => removeItem(product.id)}>
          <Trash2 size={15} aria-hidden="true" /> Eliminar
        </button>
      </div>
    </li>
  )
}
