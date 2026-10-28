import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Logo from './Logo'
import SearchBar from './SearchBar'

export default function Navbar() {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const onSaleView = location.pathname === '/productos' && new URLSearchParams(location.search).get('oferta') === '1'

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const submitSearch = (value) => {
    const q = value.trim()
    navigate(q ? `/productos?q=${encodeURIComponent(q)}` : '/productos')
    setSearchOpen(false)
    setQuery('')
  }

  const linkClass = ({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
          <NavLink to="/" end className={linkClass}>Inicio</NavLink>
          <NavLink to="/productos" className={({ isActive }) => `nav__link ${isActive && !onSaleView ? 'is-active' : ''}`}>Productos</NavLink>
          <Link to="/productos?oferta=1" className={`nav__link ${onSaleView ? 'is-active' : ''}`}>Ofertas</Link>
          <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="iconbtn"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Buscar productos"
            aria-expanded={searchOpen}
          >
            <Search size={20} aria-hidden="true" />
          </button>
          <Link to="/carrito" className="iconbtn iconbtn--cart" aria-label={`Carrito, ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`}>
            <ShoppingCart size={20} aria-hidden="true" />
            {totalItems > 0 && <span className="cartcount">{totalItems}</span>}
          </Link>
          <button
            type="button"
            className="iconbtn navbar__burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="navbar__search">
          <div className="container">
            <SearchBar id="nav-search" value={query} onChange={setQuery} onSubmit={submitSearch} autoFocus />
          </div>
        </div>
      )}
    </header>
  )
}
