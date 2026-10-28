import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2, Info } from 'lucide-react'
import { STORE } from '../config'
import { isValidEmail } from '../utils/format'

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const { contact } = STORE
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = {}
    if (form.name.trim().length < 2) found.name = 'Ingresa tu nombre.'
    if (!isValidEmail(form.email)) found.email = 'Ingresa un correo electrónico válido.'
    if (form.subject.trim().length < 3) found.subject = 'Ingresa un asunto.'
    if (form.message.trim().length < 10) found.message = 'El mensaje debe tener al menos 10 caracteres.'
    setErrors(found)
    const firstKey = Object.keys(found)[0]
    if (firstKey) {
      document.getElementById(`ct-${firstKey}`)?.focus()
      return
    }
    setDone(true)
    setForm(EMPTY)
  }

  const field = (id, label, { as = 'input', ...props } = {}) => {
    const Tag = as
    return (
      <div className={`field ${errors[id] ? 'field--error' : ''}`}>
        <label htmlFor={`ct-${id}`}>{label}</label>
        <Tag
          id={`ct-${id}`}
          value={form[id]}
          onChange={update(id)}
          aria-invalid={Boolean(errors[id])}
          aria-describedby={errors[id] ? `ct-${id}-err` : undefined}
          {...props}
        />
        {errors[id] && <span id={`ct-${id}-err`} className="field__error">{errors[id]}</span>}
      </div>
    )
  }

  return (
    <div className="container page">
      <header className="pagehead">
        <h1>Contacto</h1>
        <p>Escríbenos tu consulta. Los datos de esta página son de ejemplo.</p>
      </header>

      <div className="contactlayout">
        <div className="formcard">
          <h2>Envíanos un mensaje</h2>
          <p className="alert alert--info">
            <Info size={18} aria-hidden="true" />
            Formulario de demostración: el mensaje no se envía a ningún servidor.
          </p>

          {done && (
            <p className="alert alert--success" role="status">
              <CheckCircle2 size={20} aria-hidden="true" />
              Demostración completada: el formulario es válido, pero tu mensaje no fue enviado.
            </p>
          )}

          <form onSubmit={onSubmit} noValidate>
            <div className="formgrid">
              {field('name', 'Nombre', { type: 'text', autoComplete: 'name' })}
              {field('email', 'Correo electrónico', { type: 'email', autoComplete: 'email' })}
              <div className="formgrid__full">{field('subject', 'Asunto', { type: 'text' })}</div>
              <div className="formgrid__full">{field('message', 'Mensaje', { as: 'textarea', rows: 6 })}</div>
            </div>
            <button type="submit" className="btn btn--primary btn--lg">Enviar mensaje</button>
          </form>
        </div>

        <aside className="infocard">
          <h2>Datos de contacto</h2>
          <ul>
            <li><Mail size={18} aria-hidden="true" /><span><strong>Correo</strong>{contact.email}</span></li>
            <li><Phone size={18} aria-hidden="true" /><span><strong>Teléfono</strong>{contact.phone}</span></li>
            <li><MapPin size={18} aria-hidden="true" /><span><strong>Dirección</strong>{contact.address}</span></li>
            <li><Clock size={18} aria-hidden="true" /><span><strong>Horario</strong>{contact.hours}</span></li>
          </ul>
          <a className="btn btn--whatsapp btn--block" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} aria-hidden="true" /> Escribir por WhatsApp
          </a>
          <p className="muted small">El número de WhatsApp es un ejemplo configurable en src/config.js.</p>
        </aside>
      </div>
    </div>
  )
}
