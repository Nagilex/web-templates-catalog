const clp = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
})

export const formatCLP = (value) => clp.format(Number(value) || 0)

export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim())

export const isValidPhone = (value) => {
  const digits = String(value).replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 12
}
