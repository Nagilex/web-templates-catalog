import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, PackageSearch } from 'lucide-react'
import { CATEGORIES } from '../config'
import { products, isOnSale } from '../data/products'
import SearchBar from '../components/SearchBar'
import ProductGrid from '../components/ProductGrid'

const SORTS = [
  { id: 'relevancia', label: 'Destacados' },
  { id: 'precio-asc', label: 'Precio: menor a mayor' },
  { id: 'precio-desc', label: 'Precio: mayor a menor' },
  { id: 'nombre-asc', label: 'Nombre: A a Z' },
  { id: 'nombre-desc', label: 'Nombre: Z a A' },
]

const normalize = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export default function Products() {
  // Los filtros viven en la URL: así se conservan al abrir un producto y volver atrás.
  const [params, setParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)

  const q = params.get('q') || ''
  const category = params.get('categoria') || ''
  const onlySale = params.get('oferta') === '1'
  const sort = params.get('orden') || 'relevancia'
  const min = params.get('min') || ''
  const max = params.get('max') || ''

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (value === '' || value === false || value == null) next.delete(key)
    else next.set(key, value === true ? '1' : value)
    setParams(next, { replace: true })
  }

  const clearFilters = () => setParams({}, { replace: true })

  const hasFilters = Boolean(q || category || onlySale || min || max || sort !== 'relevancia')

  const results = useMemo(() => {
    const minN = min === '' ? null : Number(min)
    const maxN = max === '' ? null : Number(max)
    const term = normalize(q.trim())
    const list = products.filter((p) => {
      if (term && !normalize(p.name).includes(term)) return false
      if (category && p.category !== category) return false
      if (onlySale && !isOnSale(p)) return false
      if (minN != null && !Number.isNaN(minN) && p.price < minN) return false
      if (maxN != null && !Number.isNaN(maxN) && p.price > maxN) return false
      return true
    })
    const sorted = [...list]
    if (sort === 'precio-asc') sorted.sort((a, b) => a.price - b.price)
    else if (sort === 'precio-desc') sorted.sort((a, b) => b.price - a.price)
    else if (sort === 'nombre-asc') sorted.sort((a, b) => a.name.localeCompare(b.name, 'es'))
    else if (sort === 'nombre-desc') sorted.sort((a, b) => b.name.localeCompare(a.name, 'es'))
    return sorted
  }, [q, category, onlySale, sort, min, max])

  const realCategories = CATEGORIES.filter((c) => !c.special)
  const title = onlySale ? 'Ofertas' : 'Todos los productos'

  return (
    <div className="container page">
      <header className="pagehead">
        <h1>{title}</h1>
        <p>{results.length} {results.length === 1 ? 'producto' : 'productos'} encontrados</p>
      </header>

      <div className="catalog">
        <aside className={`filters ${filtersOpen ? 'is-open' : ''}`} aria-label="Filtros">
          <div className="filters__head">
            <h2>Filtros</h2>
            <button type="button" className="iconbtn filters__close" onClick={() => setFiltersOpen(false)} aria-label="Cerrar filtros">
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="filters__group">
            <label htmlFor="f-search">Buscar por nombre</label>
            <SearchBar id="f-search" value={q} onChange={(v) => setParam('q', v)} placeholder="Ej: audífonos" />
          </div>

          <div className="filters__group">
            <label htmlFor="f-cat">Categoría</label>
            <select id="f-cat" value={category} onChange={(e) => setParam('categoria', e.target.value)}>
              <option value="">Todas</option>
              {realCategories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <fieldset className="filters__group">
            <legend>Rango de precio (CLP)</legend>
            <div className="range">
              <div>
                <label htmlFor="f-min" className="sr-only">Precio mínimo</label>
                <input id="f-min" type="number" inputMode="numeric" min="0" step="1000" placeholder="Mín." value={min} onChange={(e) => setParam('min', e.target.value)} />
              </div>
              <span aria-hidden="true">–</span>
              <div>
                <label htmlFor="f-max" className="sr-only">Precio máximo</label>
                <input id="f-max" type="number" inputMode="numeric" min="0" step="1000" placeholder="Máx." value={max} onChange={(e) => setParam('max', e.target.value)} />
              </div>
            </div>
          </fieldset>

          <div className="filters__group">
            <label htmlFor="f-sort">Ordenar por</label>
            <select id="f-sort" value={sort} onChange={(e) => setParam('orden', e.target.value === 'relevancia' ? '' : e.target.value)}>
              {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          </div>

          <label className="check">
            <input type="checkbox" checked={onlySale} onChange={(e) => setParam('oferta', e.target.checked)} />
            <span>Mostrar solo ofertas</span>
          </label>

          <button type="button" className="btn btn--outline btn--block" onClick={clearFilters} disabled={!hasFilters}>
            Limpiar filtros
          </button>
        </aside>
        {filtersOpen && <div className="backdrop" onClick={() => setFiltersOpen(false)} aria-hidden="true" />}

        <section aria-label="Resultados">
          <div className="toolbar">
            <button type="button" className="btn btn--outline btn--sm filters__toggle" onClick={() => setFiltersOpen(true)}>
              <SlidersHorizontal size={16} aria-hidden="true" /> Filtros
            </button>
            <p className="toolbar__count" aria-live="polite">{results.length} resultados</p>
          </div>

          {results.length > 0 ? (
            <ProductGrid products={results} />
          ) : (
            <div className="empty">
              <PackageSearch size={48} strokeWidth={1.4} aria-hidden="true" />
              <h2>No encontramos productos</h2>
              <p>Prueba con otra búsqueda o ajusta los filtros.</p>
              <button type="button" className="btn btn--primary" onClick={clearFilters}>Limpiar filtros</button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
