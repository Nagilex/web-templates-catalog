import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBag, Trash2, ArrowLeft, ArrowRight, Truck } from 'lucide-react'
import { STORE } from '../config'
import { useCart } from '../context/CartContext'
import { formatCLP } from '../utils/format'
import CartItem from '../components/CartItem'

export default function Cart() {
  const { items, totalItems, subtotal, clearCart } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="container page">
        <div className="empty empty--hero">
          <span className="empty__badge"><ShoppingBag size={44} strokeWidth={1.4} aria-hidden="true" /></span>
          <h1>Tu carrito está vacío</h1>
          <p>Aún no has agregado productos. Explora el catálogo y encuentra algo que te guste.</p>
          <Link to="/productos" className="btn btn--primary btn--lg">Volver a comprar <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    )
  }

  const remaining = Math.max(0, STORE.freeShippingFrom - subtotal)
  const progress = Math.min(100, Math.round((subtotal / STORE.freeShippingFrom) * 100))

  const onClear = () => {
    if (window.confirm('¿Quieres vaciar el carrito?')) clearCart()
  }

  return (
    <div className="container page">
      <header className="pagehead">
        <h1>Carrito de compras</h1>
        <p>{totalItems} {totalItems === 1 ? 'unidad' : 'unidades'} en tu carrito</p>
      </header>

      <div className="cartlayout">
        <section aria-label="Productos en el carrito">
          <ul className="cartlist">
            {items.map((item) => <CartItem key={item.id} item={item} />)}
          </ul>
          <div className="cartactions">
            <Link to="/productos" className="btn btn--outline"><ArrowLeft size={16} aria-hidden="true" /> Continuar comprando</Link>
            <button type="button" className="btn btn--danger-outline" onClick={onClear}>
              <Trash2 size={16} aria-hidden="true" /> Vaciar carrito
            </button>
          </div>
        </section>

        <aside className="summary" aria-label="Resumen del pedido">
          <h2>Resumen</h2>
          <dl>
            <div><dt>Subtotal</dt><dd>{formatCLP(subtotal)}</dd></div>
            <div><dt>Despacho</dt><dd>Se calcula al finalizar</dd></div>
          </dl>
          <div className="summary__total">
            <span>Total</span>
            <strong>{formatCLP(subtotal)}</strong>
          </div>
          <div className="shipbar">
            <Truck size={16} aria-hidden="true" />
            <div>
              <p>
                {remaining > 0
                  ? <>Te faltan <strong>{formatCLP(remaining)}</strong> para despacho estándar gratis (regla de ejemplo).</>
                  : <>Tu pedido califica para despacho estándar gratis (regla de ejemplo).</>}
              </p>
              <div className="shipbar__track"><span style={{ width: `${progress}%` }} /></div>
            </div>
          </div>
          <button type="button" className="btn btn--primary btn--lg btn--block" onClick={() => navigate('/checkout')}>
            Finalizar compra
          </button>
          <p className="muted small">Compra simulada: no se realiza ningún cobro.</p>
        </aside>
      </div>
    </div>
  )
}
