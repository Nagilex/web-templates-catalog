import { ArrowUpRight, Eye, LayoutTemplate } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TemplateCard({ template }) {
  return (
    <article className="template-card">
      <Link
        to={`/plantillas/${template.id}`}
        className="template-art"
        style={{ '--template-accent': template.accent }}
        aria-label={`Ver vista previa de ${template.name}`}
      >
        <div className="art-browser">
          <div className="browser-bar">
            <span /><span /><span />
            <small>VISTA PREVIA</small>
          </div>
          <div className={`art-content art-${template.id}`}>
            <div className="art-label">{template.category}</div>
            <div className="art-title">{template.id === 'constructora' ? 'Construimos ideas.' : 'Energía para avanzar.'}</div>
            <div className="art-lines"><i /><i /><i /></div>
            <div className="art-button" />
            <div className="art-shape"><LayoutTemplate size={35} strokeWidth={1.2} /></div>
          </div>
        </div>
        <span className="preview-chip"><Eye size={14} /> Vista previa</span>
      </Link>
      <div className="card-body">
        <div className="card-meta">
          <span className="category-pill" style={{ '--template-accent': template.accent }}>{template.category}</span>
          <span className="template-number">{template.id === 'constructora' ? '01' : '02'}</span>
        </div>
        <h2>{template.name}</h2>
        <p>{template.description}</p>
        <div className="tag-list">
          {template.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <Link className="card-link" to={`/plantillas/${template.id}`}>
          Explorar plantilla <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  )
}
