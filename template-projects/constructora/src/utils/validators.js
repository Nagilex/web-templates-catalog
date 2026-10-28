// Validación básica del formulario de contacto.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const FIELD_ORDER = ["name", "phone", "email", "service", "location", "message"];

export function validateContact(values) {
  const errors = {};

  const name = values.name.trim();
  if (!name) errors.name = "Escribe tu nombre completo.";
  else if (name.length < 3 || !/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(name))
    errors.name = "Ingresa un nombre válido.";

  const phone = values.phone.trim();
  const digits = phone.replace(/\D/g, "");
  if (!phone) errors.phone = "Escribe un teléfono de contacto.";
  else if (!/^[+\d][\d\s().-]*$/.test(phone) || digits.length < 8 || digits.length > 12)
    errors.phone = "Ingresa un teléfono válido, por ejemplo +56 9 1234 5678.";

  const email = values.email.trim();
  if (!email) errors.email = "Escribe tu correo electrónico.";
  else if (!EMAIL_RE.test(email))
    errors.email = "El correo debe tener el formato nombre@dominio.cl.";

  if (!values.service) errors.service = "Elige el tipo de obra.";

  const location = values.location.trim();
  if (!location) errors.location = "Indica la comuna o ciudad de la obra.";
  else if (location.length < 3) errors.location = "Escribe el nombre completo de la comuna o ciudad.";

  const message = values.message.trim();
  if (!message) errors.message = "Cuéntanos qué necesitas construir.";
  else if (message.length < 10)
    errors.message = "Agrega un poco más de detalle (mínimo 10 caracteres).";

  return errors;
}

export function whatsappUrl(number, message) {
  const clean = String(number).replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
