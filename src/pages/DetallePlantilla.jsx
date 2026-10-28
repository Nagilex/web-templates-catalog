import { ExternalLink, Maximize2, Monitor, Smartphone } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CatalogNavbar from '../components/CatalogNavbar.jsx'
import { templates } from '../data/templates.js'

export default function DetallePlantilla() {
  const { id } = useParams()
  const template = templates.find((item) => item.id === id)

  if (!template) {
    return (
      <main className="not-found">
        <h1>Plantilla no encontrada</h1>
        <p>La plantilla solicitada no está registrada en el catálogo.</p>
        <Link to="/plantillas">Volver al catálogo</Link>
      </main>
    )
  }

  return (
    <div className="detail-page">
      <CatalogNavbar back />
      <main className="detail-main">
        <div className="detail-heading">
          <div>
            <div className="detail-breadcrumb"><Link to="/plantillas">Catálogo</Link><span>/</span><span>{template.category}</span></div>
            <span className="section-kicker">VISTA PREVIA DE PLANTILLA</span>
            <h1>{template.name}</h1>
            <p>{template.description}</p>
          </div>
          <a className="open-full-button" href={template.previewPath} target="_blank" rel="noreferrer">
            Abrir sitio completo <ExternalLink size={16} />
          </a>
        </div>
        <div className="preview-shell">
          <div className="preview-shell-bar">
            <div className="window-controls"><i /><i /><i /></div>
            <div className="preview-address"><Monitor size={14} /> Vista previa local · {template.id}</div>
            <span className="device-hint"><Smartphone size={14} /> Diseño adaptable</span>
          </div>
          <iframe
            key={template.id}
            className="template-iframe"
            src={template.previewPath}
            title={`Vista previa de ${template.name}`}
            loading="eager"
          />
        </div>
        <div className="preview-note">
          <Maximize2 size={16} />
          <span>Esta vista muestra el proyecto original dentro del catálogo. Los enlaces y formularios del sitio se ejecutan en su propia vista previa.</span>
        </div>
        <div className="detail-bottom">
          <Link to="/plantillas">← Volver a todas las plantillas</Link>
        </div>
      </main>
    </div>
  )
}
