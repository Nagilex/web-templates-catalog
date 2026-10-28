import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getProductById } from '../data/products'

const STORAGE_KEY = 'nido-market-cart-v1'
const MAX_QTY = 99

const CartContext = createContext(null)

// El carrito guarda solo { id, quantity }; los datos del producto se leen desde products.js,
// así los precios siempre están actualizados.
function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((i) => i && getProductById(i.id) && Number(i.quantity) > 0)
      .map((i) => ({ id: Number(i.id), quantity: Math.min(MAX_QTY, Math.floor(Number(i.quantity))) }))
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* localStorage no disponible: el carrito sigue funcionando en memoria */
    }
  }, [items])

  useEffect(() => {
    if (!toast) return undefined
    const t = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(t)
  }, [toast])

  const addItem = useCallback((productId, quantity = 1) => {
    const product = getProductById(productId)
    if (!product) return
    const qty = Math.max(1, Math.floor(Number(quantity) || 1))
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: Math.min(MAX_QTY, i.quantity + qty) } : i,
        )
      }
      return [...prev, { id: product.id, quantity: Math.min(MAX_QTY, qty) }]
    })
    setToast(`"${product.name}" se agregó al carrito`)
  }, [])

  // Si la cantidad resultante es 0 o menor, no se baja de 1: para quitar se usa removeItem.
  const setQuantity = useCallback((productId, quantity) => {
    const qty = Math.min(MAX_QTY, Math.max(1, Math.floor(Number(quantity) || 1)))
    setItems((prev) => prev.map((i) => (i.id === productId ? { ...i, quantity: qty } : i)))
  }, [])

  const removeItem = useCallback((productId) => {
    setItems((prev) => prev.filter((i) => i.id !== productId))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const detailedItems = useMemo(
    () =>
      items
        .map((i) => ({ ...i, product: getProductById(i.id) }))
        .filter((i) => i.product),
    [items],
  )

  const totalItems = useMemo(() => detailedItems.reduce((s, i) => s + i.quantity, 0), [detailedItems])
  const subtotal = useMemo(
    () => detailedItems.reduce((s, i) => s + i.product.price * i.quantity, 0),
    [detailedItems],
  )

  const value = useMemo(
    () => ({
      items: detailedItems, totalItems, subtotal, addItem, setQuantity, removeItem, clearCart,
      toast, dismissToast: () => setToast(null), MAX_QTY,
    }),
    [detailedItems, totalItems, subtotal, addItem, setQuantity, removeItem, clearCart, toast],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
