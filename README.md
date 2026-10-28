# WebTemplates — catálogo de plantillas

Catálogo React + Vite que muestra dos proyectos React independientes: una constructora y una empresa de servicios eléctricos.

## Requisitos
- Node.js LTS
- npm

## Instalar
```bash
npm install
```

## Ejecutar en desarrollo
```bash
npm run dev
```
El comando `predev` compila primero los dos sitios originales en `public/templates/`, y después inicia el catálogo.

## Compilar para publicar
```bash
npm run build
npm run preview
```

## Rutas del catálogo
- `/plantillas`
- `/plantillas/constructora`
- `/plantillas/electrica`

## Agregar otra plantilla
1. Copia el proyecto React dentro de `template-projects/nombre`.
2. Añade su nombre al arreglo `templates` de `scripts/build-templates.mjs`.
3. Añade sus metadatos y `previewPath` en `src/data/templates.js`.
4. Ejecuta `npm run dev` o `npm run build` nuevamente.

## Arquitectura
El catálogo usa React Router para la navegación interna. Cada proyecto original se compila por separado y se muestra dentro de la página de detalle con un `iframe`. Así conserva sus propios estilos, componentes y navegación sin mezclar las clases CSS de los dos sitios.

Los formularios de contacto de los prototipos originales son demostraciones: no envían datos a un servidor, tal como indican sus propios componentes.
