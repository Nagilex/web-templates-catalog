# Nido Market · Prototipo de tienda online (React + Vite)

Prototipo frontend de demostración. No tiene backend, no procesa pagos reales y no envía datos a ningún servidor.

## Ejecutar

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

Para generar la versión de producción: `npm run build` y `npm run preview`.

## Cómo personalizarla para una empresa real

| Qué cambiar | Dónde |
|---|---|
| Nombre, eslogan, contacto, WhatsApp, redes sociales, envío gratis desde X | `src/config.js` |
| Categorías (agregar o editar) | `src/config.js` → `CATEGORIES` (usa su `id` en los productos) |
| Textos de beneficios, métodos de despacho, regiones | `src/config.js` |
| Colores de la marca | `src/index.css` → variables en `:root` |
| Logotipo | `src/components/Logo.jsx` |
| Productos, precios y descuentos (`oldPrice`) | `src/data/products.js` |
| Fotos reales de producto | agrega `image: '/img/archivo.jpg'` al producto y guarda la foto en `public/img/` |
| Textos de políticas | `src/pages/Policy.jsx` |

Los productos sin foto muestran una ilustración generada con icono y color. Si una foto falla al cargar, se usa esa misma ilustración.

## Para convertirla en tienda real

- Reemplazar `src/data/products.js` por una API o base de datos.
- Integrar un medio de pago real y un backend para pedidos en `Checkout.jsx`.
- Conectar los formularios de contacto y newsletter a un servicio de correo.
- Reemplazar valoraciones, stock y textos legales de ejemplo por datos reales.
