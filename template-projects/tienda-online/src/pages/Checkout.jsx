import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Info, CheckCircle2, ShoppingBag } from 'lucide-react'
import { REGIONS, SHIPPING_METHODS, STORE } from '../config'
import { useCart } from '../context/CartContext'
import { formatCLP, isValidEmail, isValidPhone } from '../utils/format'
import ProductImage from '../components/ProductImage'

const EMPTY_FORM = { name: '', email: '', phone: '', address: '', commune: '', region: '' }

function generateOrderNumber() {
  const date = new Date()
  const stamp = `${String(date.getFullYear()).slice(2)}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `DEMO-${stamp}-${rand}`
}

function validate(form) {
  const errors = {}
  if (form.name.trim().split(/\s+/).filter(Boolean).length < 2) errors.name = 'Ingresa tu nombre y apellido.'
  if (!isValidEmail(form.email)) errors.email = 'Ingresa un correo electrónico válido.'
  if (!isValidPhone(form.phone)) errors.phone = 'Ingresa un teléfono válido (8 a 12 dígitos).'
  if (form.address.trim().length < 5) errors.address = 'Ingresa tu dirección (calle y número).'
  if (form.commune.trim().length < 2) errors.commune = 'Ingresa tu comuna.'
  if (!form.region) errors.region = 'Selecciona tu región.'
  return errors
}

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [form, setForm] = useState(EMPTY_FORM)
  const [shippingId, setShippingId] = useState(SHIPPING_METHODS[0].id)
  const [errors, setErrors] = useState({})
  const [order, setOrder] = useState(null)

  const method = SHIPPING_METHODS.find((m) => m.id === shippingId)
  const freeStandard = method.id === 'standard' && subtotal >= STORE.freeShippingFrom
  const shippingCost = freeStandard ? 0 : method.price
  const total = subtotal + shippingCost

  if (order) {
    return (
      <div className="container page">
        <div className="confirm">
          <span className="confirm__icon"><CheckCircle2 size={56} strokeWidth={1.5} aria-hidden="true" /></span>
          <h1>¡Pedido de demostración confirmado!</h1>
          <p className="alert alert--info">
            <Info size={18} aria-hidden="true" />
            Esto es una simulación: no se realizó ninguna compra real, ningún cobro ni envío de datos.
          </p>
          <p className="confirm__number">Número de pedido ficticio<strong>{order.number}</strong></p>
          <div className="confirm__box">
            <h2>Resumen</h2>
            <ul>
              {order.items.map((i) => (
                <li key={i.id}><span>{i.quantity} × {i.product.name}</span><span>{formatCLP(i.product.price * i.quantity)}</span></li>
              ))}
            </ul>
            <div className="confirm__row"><span>Despacho ({order.method.label})</span><span>{order.shipping === 0 ? 'Gratis' : formatCLP(order.shipping)}</span></div>
            <div className="confirm__row confirm__row--total"><span>Total</span><strong>{formatCLP(order.total)}</strong></div>
            <p className="muted small">Datos de ejemplo ingresados para {order.name} · {order.commune}, {order.region}</p>
          </div>
          <Link to="/productos" className="btn btn--primary btn--lg">Seguir explorando</Link>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container page">
        <div className="empty empty--hero">
          <span className="empty__badge"><ShoppingBag size={44} strokeWidth={1.4} aria-hidden="true" /></span>
          <h1>No hay productos para comprar</h1>
          <p>Agrega productos a tu carrito antes de finalizar la compra.</p>
          <Link to="/productos" className="btn btn--primary btn--lg">Ir al catálogo</Link>
        </div>
      </div>
    )
  }

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    const firstKey = Object.keys(found)[0]
    if (firstKey) {
      document.getElementById(`co-${firstKey}`)?.focus()
      return
    }
    setOrder({
      number: generateOrderNumber(),
      items,
      method,
      shipping: shippingCost,
      total,
      name: form.name.trim(),
      commune: form.commune.trim(),
      region: form.region,
    })
    clearCart()
    window.scrollTo(0, 0)
  }

  const field = (id, label, props = {}) => (
    <div className={`field ${errors[id] ? 'field--error' : ''}`}>
      <label htmlFor={`co-${id}`}>{label}</label>
      <input
        id={`co-${id}`}
        value={form[id]}
        onChange={update(id)}
        aria-invalid={Boolean(errors[id])}
        aria-describedby={errors[id] ? `co-${id}-err` : undefined}
        {...props}
      />
      {errors[id] && <span id={`co-${id}-err`} className="field__error">{errors[id]}</span>}
    </div>
  )

  return (
    <div className="container page">
      <header className="pagehead">
        <h1>Finalizar compra</h1>
        <p>Completa tus datos para generar un pedido de demostración.</p>
      </header>

      <p className="alert alert--info">
        <Info size={18} aria-hidden="true" />
        <span><strong>Compra simulada.</strong> No se realiza ningún pago real ni se solicitan datos de tarjetas. No ingreses información sensible.</span>
      </p>

      <form className="cartlayout" onSubmit={onSubmit} noValidate>
        <div className="formcard">
          <h2>Datos de contacto y despacho</h2>
          <div className="formgrid">
            <div className="formgrid__full">{field('name', 'Nombre completo', { type: 'text', autoComplete: 'name' })}</div>
            {field('email', 'Correo electrónico', { type: 'email', autoComplete: 'email' })}
            {field('phone', 'Teléfono', { type: 'tel', autoComplete: 'tel', placeholder: '+56 9 1234 5678' })}
            <div className="formgrid__full">{field('address', 'Dirección', { type: 'text', autoComplete: 'street-address' })}</div>
            {field('commune', 'Comuna', { type: 'text' })}
            <div className={`field ${errors.region ? 'field--error' : ''}`}>
              <label htmlFor="co-region">Región</label>
              <select
                id="co-region"
                value={form.region}
                onChange={update('region')}
                aria-invalid={Boolean(errors.region)}
                aria-describedby={errors.region ? 'co-region-err' : undefined}
              >
                <option value="">Selecciona una región</option>
                {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              {errors.region && <span id="co-region-err" className="field__error">{errors.region}</span>}
            </div>
          </div>

          <fieldset className="shipping">
            <legend>Método de despacho (ejemplo)</legend>
            {SHIPPING_METHODS.map((m) => {
              const price = m.id === 'standard' && subtotal >= STORE.freeShippingFrom ? 0 : m.price
              return (
                <label key={m.id} className={`shipping__opt ${shippingId === m.id ? 'is-selected' : ''}`}>
                  <input type="radio" name="shipping" value={m.id} checked={shippingId === m.id} onChange={() => setShippingId(m.id)} />
                  <span className="shipping__txt"><strong>{m.label}</strong><small>{m.detail}</small></span>
                  <span className="shipping__price">{price === 0 ? 'Gratis' : formatCLP(price)}</span>
                </label>
              )
            })}
          </fieldset>
        </div>

        <aside className="summary" aria-label="Resumen del pedido">
          <h2>Tu pedido</h2>
          <ul className="minilist">
            {items.map((i) => (
              <li key={i.id}>
                <span className="minilist__img"><ProductImage product={i.product} /></span>
                <span className="minilist__name">{i.product.name}<small>Cantidad: {i.quantity}</small></span>
                <span>{formatCLP(i.product.price * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <dl>
            <div><dt>Subtotal</dt><dd>{formatCLP(subtotal)}</dd></div>
            <div><dt>Despacho</dt><dd>{shippingCost === 0 ? 'Gratis' : formatCLP(shippingCost)}</dd></div>
          </dl>
          <div className="summary__total"><span>Total</span><strong>{formatCLP(total)}</strong></div>
          <button type="submit" className="btn btn--primary btn--lg btn--block">Confirmar pedido</button>
          <Link to="/carrito" className="btn btn--ghost btn--block">Volver al carrito</Link>
        </aside>
      </form>
    </div>
  )
}
