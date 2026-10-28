import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <ScrollToTop />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/politicas/:tipo" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toast />
    </>
  )
}
