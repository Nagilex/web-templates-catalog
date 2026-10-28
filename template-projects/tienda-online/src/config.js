// ============================================================
// CONFIGURACIÓN DE LA TIENDA
// Edita este archivo para personalizar nombre, contacto,
// redes sociales, categorías y textos de beneficios.
// Los colores están en src/index.css (variables :root).
// ============================================================
import { Laptop, Sofa, Watch, BadgePercent, ShieldCheck, Headset, Truck, RefreshCcw } from 'lucide-react'

export const STORE = {
  name: 'Market',
  tagline: 'Tecnología y hogar con estilo',
  // El logotipo usa un icono + el nombre. Cambia el icono importando otro de lucide-react.
  contact: {
    email: 'contacto@nidomarket.example',
    phone: '+56 2 2345 6789',
    address: 'Av. Ejemplo 1234, Santiago, Chile',
    hours: 'Lun a Vie, 9:00 a 18:00',
    // Número de WhatsApp en formato internacional, sin "+" ni espacios.
    whatsapp: '56912345678',
    whatsappMessage: 'Hola, quisiera consultar por un producto de la tienda.',
  },
  social: [
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'Facebook', url: 'https://facebook.com/' },
    { label: 'X', url: 'https://x.com/' },
  ],
  // Envío gratis desde este monto (CLP). Es solo una regla de demostración.
  freeShippingFrom: 50000,
}

// Métodos de despacho de ejemplo (checkout)
export const SHIPPING_METHODS = [
  { id: 'standard', label: 'Despacho estándar', detail: '3 a 5 días hábiles', price: 3990 },
  { id: 'express', label: 'Despacho express', detail: '24 a 48 horas', price: 6990 },
  { id: 'pickup', label: 'Retiro en tienda', detail: 'Disponible al día siguiente', price: 0 },
]

export const REGIONS = [
  'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 'Valparaíso',
  'Metropolitana de Santiago', "Libertador General Bernardo O'Higgins", 'Maule', 'Ñuble',
  'Biobío', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes y de la Antártica Chilena',
]

// Categorías: para agregar una nueva, añade un objeto aquí y usa su "id" en products.js.
// "Ofertas" es una categoría especial que filtra por descuento (id: 'ofertas').
export const CATEGORIES = [
  { id: 'tecnologia', name: 'Tecnología', description: 'Audio, wearables y gadgets', icon: Laptop, tone: 'teal' },
  { id: 'hogar', name: 'Hogar', description: 'Cocina, decoración y orden', icon: Sofa, tone: 'amber' },
  { id: 'accesorios', name: 'Accesorios', description: 'Para llevar a todas partes', icon: Watch, tone: 'violet' },
  { id: 'ofertas', name: 'Ofertas', description: 'Productos con descuento', icon: BadgePercent, tone: 'rose', special: true },
]

// Textos de ejemplo. No prometen servicios reales: edítalos según la empresa.
export const BENEFITS = [
  { icon: ShieldCheck, title: 'Compra segura', text: 'Texto de ejemplo: aquí irá la información de medios de pago seguros.' },
  { icon: Headset, title: 'Atención al cliente', text: 'Texto de ejemplo: canales y horarios de atención de la empresa.' },
  { icon: Truck, title: 'Opciones de despacho', text: 'Texto de ejemplo: cobertura y plazos de despacho a definir.' },
  { icon: RefreshCcw, title: 'Cambios y devoluciones', text: 'Texto de ejemplo: política de cambios y devoluciones a definir.' },
]
