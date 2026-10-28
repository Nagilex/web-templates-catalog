import { ArrowDown, ArrowUpRight, Search, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import CatalogNavbar from '../components/CatalogNavbar.jsx'
import TemplateCard from '../components/TemplateCard.jsx'
import { templates } from '../data/templates.js'

export default function Catalogo() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todas')

  const categories = ['Todas', ...new Set(templates.map((template) => template.category))]
  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return templates.filter((template) => {
      const matchesCategory = category === 'Todas' || template.category === category
      const searchable = [template.name, template.description, template.category, ...template.tags]
        .join(' ')
        .toLowerCase()
      return matchesCategory && searchable.includes(normalizedQuery)
    })
  }, [query, category])

  return (
    <div className="catalog-page">
      <CatalogNavbar />
      <main>
        <section className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15} /> COLECCIÓN DE DISEÑOS WEB</div>
              <h1>Ideas que toman forma <span>en la web.</span></h1>
              <p>Un espacio para explorar, comparar y visualizar plantillas web creadas con React. Elige un diseño y descubre su experiencia completa.</p>
              <a className="hero-cta" href="#coleccion">Explorar plantillas <ArrowDown size={17} /></a>
              <div className="hero-footnote"><span className="status-dot" /> {templates.length} proyectos disponibles</div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="floating-window window-back">
                <div className="mini-top"><i /><i /><i /></div>
                <div className="mini-layout"><span /><span /><span /></div>
              </div>
              <div className="floating-window window-front">
                <div className="mini-top"><i /><i /><i /><b>WEB PREVIEW</b></div>
                <div className="mini-hero">
                  <span>DISEÑO · DESARROLLO</span>
                  <strong>Tu próxima<br />gran idea.</strong>
                  <i />
                </div>
                <div className="mini-cards"><i /><i /><i /></div>
              </div>
              <div className="floating-badge"><Sparkles size={16} /> Diseño adaptable</div>
            </div>
          </div>
        </section>

        <section className="collection-section" id="coleccion">
          <div className="collection-heading">
            <div>
              <span className="section-kicker">LA COLECCIÓN</span>
              <h2>Explora las plantillas</h2>
              <p>Selecciona una tarjeta para navegar por la vista previa de cada sitio.</p>
            </div>
            <div className="collection-count"><strong>{filteredTemplates.length.toString().padStart(2, '0')}</strong><span>plantillas</span></div>
          </div>

          <div className="filters">
            <label className="search-box">
              <Search size={18} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nombre o servicio..." />
            </label>
            <div className="category-filters" aria-label="Filtrar por categoría">
              {categories.map((item) => (
                <button key={item} type="button" className={category === item ? 'filter-button active' : 'filter-button'} onClick={() => setCategory(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          {filteredTemplates.length ? (
            <div className="template-grid">
              {filteredTemplates.map((template) => <TemplateCard key={template.id} template={template} />)}
            </div>
          ) : (
            <div className="empty-state">No se encontraron plantillas. Prueba con otra búsqueda o categoría.</div>
          )}
        </section>
      </main>
      <footer className="catalog-footer">
        <div className="footer-brand">web<span>templates</span></div>
        <p>Una colección personal de experiencias web.</p>
        <span>React · Vite · {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}
