import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange, onSubmit, placeholder = 'Buscar productos…', id = 'search', autoFocus = false }) {
  return (
    <form
      className="searchbar"
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.(value)
      }}
    >
      <label htmlFor={id} className="sr-only">Buscar productos por nombre</label>
      <Search size={18} className="searchbar__icon" aria-hidden="true" />
      <input
        id={id}
        type="search"
        value={value}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
      {value && (
        <button type="button" className="searchbar__clear" onClick={() => onChange('')} aria-label="Borrar búsqueda">
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </form>
  )
}
