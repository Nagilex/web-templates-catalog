// ============================================================
// PRODUCTOS DE EJEMPLO
// Campos:
//  id, name, category (id de CATEGORIES en src/config.js), price (CLP),
//  oldPrice (opcional, activa el descuento), badge ('Nuevo' | undefined),
//  rating (valor demostrativo), reviews (cantidad demostrativa), stock,
//  description, features (lista), icon (icono de lucide-react) y tone (color del fondo).
//
//  image (opcional): URL o ruta de una foto real, por ejemplo '/img/audifonos.jpg'
//  (archivo dentro de /public/img). Si no existe o falla al cargar,
//  se muestra una ilustración generada con el icono y el color.
// ============================================================
import {
  Headphones, Watch, Speaker, BatteryCharging, Keyboard, Camera, Lamp, Coffee,
  Archive, Flower2, BedDouble, ShoppingBag, Wallet, Glasses, GlassWater, Briefcase,
} from 'lucide-react'

export const products = [
  {
    id: 1, name: 'Audífonos Bluetooth Aura', category: 'tecnologia', price: 39990, oldPrice: 54990,
    rating: 4.6, reviews: 128, stock: 24, icon: Headphones, tone: 'teal',
    description: 'Audífonos inalámbricos con cancelación de ruido, diseño plegable y estuche de transporte.',
    features: ['Bluetooth 5.3', 'Hasta 30 horas de batería (referencial)', 'Micrófono integrado'],
  },
  {
    id: 2, name: 'Smartwatch Pulse S2', category: 'tecnologia', price: 69990, badge: 'Nuevo',
    rating: 4.4, reviews: 56, stock: 15, icon: Watch, tone: 'violet',
    description: 'Reloj inteligente con pantalla AMOLED, seguimiento de actividad y notificaciones del teléfono.',
    features: ['Pantalla AMOLED 1.4"', 'Resistente al agua', 'Correa intercambiable'],
  },
  {
    id: 3, name: 'Parlante Portátil Orbit', category: 'tecnologia', price: 34990, oldPrice: 44990,
    rating: 4.5, reviews: 94, stock: 31, icon: Speaker, tone: 'rose',
    description: 'Parlante compacto con sonido de 360° y correa para colgar. Ideal para el hogar o el aire libre.',
    features: ['Sonido 360°', 'Resistente a salpicaduras', 'Carga USB-C'],
  },
  {
    id: 4, name: 'Cargador Inalámbrico Rápido', category: 'tecnologia', price: 17990,
    rating: 4.2, reviews: 41, stock: 60, icon: BatteryCharging, tone: 'amber',
    description: 'Base de carga inalámbrica de 15 W compatible con la mayoría de los teléfonos modernos.',
    features: ['Carga de hasta 15 W', 'Base antideslizante', 'Indicador LED'],
  },
  {
    id: 5, name: 'Teclado Mecánico Compacto', category: 'tecnologia', price: 59990, oldPrice: 74990,
    rating: 4.7, reviews: 203, stock: 12, icon: Keyboard, tone: 'teal',
    description: 'Teclado mecánico 75% con retroiluminación y conexión por cable o Bluetooth.',
    features: ['Switches intercambiables', 'Retroiluminación', 'Cable USB-C desmontable'],
  },
  {
    id: 6, name: 'Cámara de Seguridad Wi-Fi', category: 'tecnologia', price: 29990, badge: 'Nuevo',
    rating: 4.3, reviews: 37, stock: 18, icon: Camera, tone: 'violet',
    description: 'Cámara interior con video Full HD, visión nocturna y detección de movimiento.',
    features: ['Video Full HD', 'Visión nocturna', 'Audio bidireccional'],
  },
  {
    id: 7, name: 'Lámpara de Escritorio LED', category: 'hogar', price: 24990,
    rating: 4.5, reviews: 76, stock: 40, icon: Lamp, tone: 'amber',
    description: 'Lámpara regulable con tres temperaturas de luz y brazo articulado. Cuida tu vista al trabajar.',
    features: ['3 temperaturas de color', 'Intensidad regulable', 'Brazo flexible'],
  },
  {
    id: 8, name: 'Cafetera Prensa Francesa', category: 'hogar', price: 19990, oldPrice: 26990,
    rating: 4.8, reviews: 152, stock: 28, icon: Coffee, tone: 'rose',
    description: 'Cafetera de vidrio borosilicato y acero inoxidable de 1 litro. Café intenso en pocos minutos.',
    features: ['Capacidad 1 litro', 'Filtro de acero inoxidable', 'Fácil de limpiar'],
  },
  {
    id: 9, name: 'Set de Organizadores Modulares', category: 'hogar', price: 14990,
    rating: 4.1, reviews: 63, stock: 52, icon: Archive, tone: 'teal',
    description: 'Cinco cajas organizadoras apilables para closet, cocina o escritorio.',
    features: ['5 piezas', 'Apilables', 'Material resistente'],
  },
  {
    id: 10, name: 'Difusor de Aromas Ultrasónico', category: 'hogar', price: 21990, oldPrice: 28990,
    rating: 4.4, reviews: 88, stock: 22, icon: Flower2, tone: 'violet',
    description: 'Difusor silencioso con luz ambiental y apagado automático. Perfecto para crear un ambiente relajante.',
    features: ['Capacidad 300 ml', 'Luz ambiental', 'Apagado automático'],
  },
  {
    id: 11, name: 'Manta de Algodón Suave', category: 'hogar', price: 27990, badge: 'Nuevo',
    rating: 4.6, reviews: 29, stock: 17, icon: BedDouble, tone: 'amber',
    description: 'Manta tejida de algodón, liviana y cálida, para el sofá o la cama.',
    features: ['Algodón tejido', 'Lavable a máquina', '150 x 200 cm'],
  },
  {
    id: 12, name: 'Mochila Urbana Antirrobo', category: 'accesorios', price: 44990, oldPrice: 59990,
    rating: 4.7, reviews: 174, stock: 20, icon: ShoppingBag, tone: 'rose',
    description: 'Mochila con compartimento para laptop de 15", puerto de carga USB y cierres ocultos.',
    features: ['Para laptop de hasta 15"', 'Puerto USB externo', 'Tela repelente al agua'],
  },
  {
    id: 13, name: 'Billetera de Cuero Slim', category: 'accesorios', price: 18990,
    rating: 4.3, reviews: 49, stock: 45, icon: Wallet, tone: 'teal',
    description: 'Billetera delgada con ranuras para tarjetas y bolsillo para billetes. Diseño minimalista.',
    features: ['Cuero sintético', 'Ranuras para 6 tarjetas', 'Diseño delgado'],
  },
  {
    id: 14, name: 'Lentes de Sol Polarizados', category: 'accesorios', price: 22990, oldPrice: 29990,
    rating: 4.2, reviews: 67, stock: 33, icon: Glasses, tone: 'amber',
    description: 'Lentes con filtro UV400 y marco liviano. Incluyen estuche rígido.',
    features: ['Filtro UV400', 'Lentes polarizados', 'Estuche incluido'],
  },
  {
    id: 15, name: 'Botella Térmica 750 ml', category: 'accesorios', price: 15990, badge: 'Nuevo',
    rating: 4.5, reviews: 58, stock: 70, icon: GlassWater, tone: 'violet',
    description: 'Botella de acero inoxidable con doble pared que mantiene la temperatura de tus bebidas.',
    features: ['Acero inoxidable', 'Doble pared aislante', 'Tapa hermética'],
  },
  {
    id: 16, name: 'Funda Acolchada para Laptop', category: 'accesorios', price: 16990,
    rating: 4.0, reviews: 35, stock: 38, icon: Briefcase, tone: 'rose',
    description: 'Funda protectora con interior suave y bolsillo frontal para cables o documentos.',
    features: ['Para laptops de 13" a 15"', 'Interior acolchado', 'Cierre resistente'],
  },
]

export const getProductById = (id) => products.find((p) => p.id === Number(id))
export const isOnSale = (p) => typeof p.oldPrice === 'number' && p.oldPrice > p.price
export const discountPercent = (p) => (isOnSale(p) ? Math.round((1 - p.price / p.oldPrice) * 100) : 0)
