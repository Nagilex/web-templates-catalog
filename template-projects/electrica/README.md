# Prototipo web: empresa de servicios eléctricos (Chile)

Prototipo hecho con React, Vite, JavaScript, JSX y CSS. No tiene backend ni base de datos.
Todo el texto, los datos de contacto y el número de WhatsApp son **contenido de ejemplo**.

## Cómo ejecutarlo

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Se abre en http://localhost:5173. Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Qué editar

Todo el contenido está en **`src/config/site.js`**:

- Nombre de la empresa, teléfono, correo, dirección y horario.
- Número de WhatsApp y mensaje inicial (`whatsapp.number`, solo dígitos: `56` + `9` + 8 dígitos).
- Servicios, ventajas, misión, visión, valores y puntos de seguridad.
- Espacio de certificaciones (`about.credentialsNote`): agrega solo datos reales y comprobables.

Para usar fotos reales, copia los archivos en `public/images/` y escribe la ruta en `site.js`:

```js
heroImage: "/images/hero.jpg",
projects: [{ title: "Instalación en local comercial", image: "/images/proyecto-1.jpg" }, ...]
```

Los colores están al inicio de `src/index.css` (variables `--navy-*` y `--yellow`).

## Estructura

```
src/
  config/site.js          Contenido editable
  utils/validators.js     Validación del formulario y enlace de WhatsApp
  components/             Navbar, Footer, ServiceCard, SectionHead, Reveal, HeroIllustration
  sections/               Home, About, Contact
  App.jsx  main.jsx  index.css
```

## Formulario

Valida nombre, teléfono, correo, tipo de servicio y mensaje. Al enviarlo correctamente muestra una
confirmación que aclara que es una demostración: los datos **no se envían a ningún servidor**.
Para una versión real, reemplaza el comentario `DEMOSTRACIÓN` en `src/sections/Contact.jsx` por el envío
a tu servicio de correo o API.
