import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Mail, CheckCircle2 } from 'lucide-react'
import { CATEGORIES, BENEFITS, STORE } from '../config'
import { products, isOnSale } from '../data/products'
import { isValidEmail } from '../utils/format'
import CategoryCard from '../components/CategoryCard'
import ProductGrid from '../components/ProductGrid'
import ProductImage from '../components/ProductImage'

const FEATURED_IDS = [1, 2, 8, 12, 5, 7, 3, 15]

export default function Home() {
  const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean)
  const offers = products.filter(isOnSale).slice(0, 4)
  const heroTiles = [products[0], products[1], products[7], products[11]]

  const countFor = (cat) =>
    cat.special ? products.filter(isOnSale).length : products.filter((p) => p.category === cat.id).length

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="eyebrow"><Sparkles size={14} aria-hidden="true" /> Colección de temporada</span>
            <h1>Elige mejor. <span>Vive mejor</span> cada día.</h1>
            <p>
              Tecnología, hogar y accesorios seleccionados para tu rutina. Explora el catálogo,
              arma tu carrito y prueba el proceso de compra completo.
            </p>
            <div className="hero__cta">
              <Link to="/productos" className="btn btn--primary btn--lg">
                Comprar ahora <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/productos?oferta=1" className="btn btn--outline btn--lg">Ver ofertas</Link>
            </div>
            <ul className="hero__notes">
              <li>Precios en CLP</li>
              <li>Carrito que se guarda</li>
              <li>Compra 100% simulada</li>
            </ul>
          </div>
          <div className="hero__visual" aria-hidden="true">
            {heroTiles.map((p, i) => (
              <Link key={p.id} to={`/producto/${p.id}`} tabIndex={-1} className={`hero__tile hero__tile--${i + 1}`}>
                <ProductImage product={p} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="cat-title">
        <div className="section__head">
          <div>
            <h2 id="cat-title">Compra por categoría</h2>
            <p>Encuentra rápido lo que buscas.</p>
          </div>
        </div>
        <div className="catgrid">
          {CATEGORIES.map((c) => <CategoryCard key={c.id} category={c} count={countFor(c)} />)}
        </div>
      </section>

      <section className="section container" aria-labelledby="feat-title">
        <div className="section__head">
          <div>
            <h2 id="feat-title">Productos destacados</h2>
            <p>Una selección de lo más buscado.</p>
          </div>
          <Link to="/productos" className="link-arrow">Ver todo el catálogo <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="benefits" aria-labelledby="ben-title">
        <div className="container">
          <h2 id="ben-title" className="sr-only">Beneficios</h2>
          <div className="benefits__grid">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="benefit">
                <span className="benefit__icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="off-title" id="ofertas">
        <div className="dealband">
          <div className="dealband__head">
            <span className="eyebrow eyebrow--light">Ofertas especiales</span>
            <h2 id="off-title">Precios rebajados por tiempo limitado</h2>
            <p>Productos con descuento seleccionados para ti.</p>
            <Link to="/productos?oferta=1" className="btn btn--light">
              Explorar todas las ofertas <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="dealband__products">
          <ProductGrid products={offers} />
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Ingresa un correo electrónico válido.')
      return
    }
    setError('')
    setDone(true)
    setEmail('')
  }

  return (
    <section className="section container" aria-labelledby="news-title">
      <div className="newsletter">
        <div>
          <h2 id="news-title">Recibe novedades y ofertas</h2>
          <p>Suscríbete con tu correo. {STORE.name} es un sitio de demostración: <strong>no se envían datos a ningún servidor</strong>.</p>
        </div>
        {done ? (
          <p className="alert alert--success" role="status">
            <CheckCircle2 size={20} aria-hidden="true" /> Suscripción simulada con éxito. No se guardó ni envió tu correo.
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="newsletter__form">
            <div className="field">
              <label htmlFor="news-email" className="sr-only">Correo electrónico</label>
              <div className="inputicon">
                <Mail size={18} aria-hidden="true" />
                <input
                  id="news-email"
                  type="email"
                  placeholder="tu@correo.cl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'news-error' : undefined}
                />
              </div>
              {error && <span id="news-error" className="field__error">{error}</span>}
            </div>
            <button type="submit" className="btn btn--primary">Suscribirme</button>
          </form>
        )}
      </div>
    </section>
  )
}
