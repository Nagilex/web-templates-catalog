import { Link, useParams } from 'react-router-dom'
import { Info } from 'lucide-react'
import { STORE } from '../config'

const POLICIES = {
  privacidad: {
    title: 'Política de privacidad',
    sections: [
      ['Datos que se recopilan', 'En esta versión de demostración no se recopilan ni se envían datos a ningún servidor. El carrito se guarda únicamente en el navegador (localStorage).'],
      ['Uso de la información', 'Reemplaza este texto por la política real de la empresa: qué datos se piden, para qué se usan y por cuánto tiempo se conservan.'],
      ['Derechos de los usuarios', 'Indica cómo los usuarios pueden consultar, corregir o eliminar sus datos, conforme a la normativa vigente aplicable.'],
    ],
  },
  despacho: {
    title: 'Política de despacho',
    sections: [
      ['Cobertura y plazos', 'Texto de ejemplo. Define aquí las zonas de despacho y los plazos estimados reales.'],
      ['Costos', 'Los costos que aparecen en el checkout son valores de demostración y deben configurarse según el operador logístico.'],
      ['Seguimiento', 'Describe cómo se informará el estado del envío cuando exista una integración real.'],
    ],
  },
  devoluciones: {
    title: 'Cambios y devoluciones',
    sections: [
      ['Plazos', 'Texto de ejemplo. Indica los plazos y condiciones reales para cambios y devoluciones.'],
      ['Condiciones del producto', 'Define el estado en que deben devolverse los productos y qué casos están excluidos.'],
      ['Reembolsos', 'Explica cómo y cuándo se realizan los reembolsos una vez integrado un medio de pago real.'],
    ],
  },
}

export default function Policy() {
  const { tipo } = useParams()
  const policy = POLICIES[tipo]

  if (!policy) {
    return (
      <div className="container page">
        <div className="empty">
          <h1>Página no encontrada</h1>
          <Link to="/" className="btn btn--primary">Volver al inicio</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container page prose">
      <header className="pagehead">
        <h1>{policy.title}</h1>
        <p>{STORE.name} · Página de demostración</p>
      </header>
      <p className="alert alert--info">
        <Info size={18} aria-hidden="true" /> Contenido de ejemplo: debe ser reemplazado por los textos legales reales de la empresa.
      </p>
      {policy.sections.map(([heading, text]) => (
        <section key={heading}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </section>
      ))}
    </div>
  )
}
