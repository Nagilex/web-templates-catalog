/*
 * ARCHIVO DE CONTENIDO EDITABLE
 * ---------------------------------------------------------------
 * Todo lo que aparece aquí es CONTENIDO DE EJEMPLO. Reemplázalo por los
 * datos reales de la empresa. No hace falta tocar los componentes.
 */
import {
  Layers,
  Ruler,
  Hammer,
  PaintBucket,
  Warehouse,
  ClipboardList,
  HardHat,
  ShieldCheck,
  Award,
  Clock,
  Handshake,
  Target,
  Eye,
} from "lucide-react";

export const site = {
  // --- Datos generales (EJEMPLO) ---
  name: "Constructora Rocamar",
  tagline: "Construcción y remodelaciones",
  city: "Santiago, Chile",

  // --- Datos de contacto (EJEMPLO) ---
  phone: "+56 9 1234 5678",
  email: "contacto@ejemplo.cl",
  address: "Av. Ejemplo 1234, Santiago, Chile",
  schedule: "Lunes a viernes, 09:00 a 18:00",

  // --- WhatsApp (EJEMPLO) ---
  // Número en formato internacional, solo dígitos: 56 (Chile) + 9 + 8 dígitos.
  whatsapp: {
    number: "56912345678",
    message: "Hola, quisiera solicitar un presupuesto para una obra.",
  },

  // --- Imagen del hero ---
  // Deja vacío para usar la ilustración incluida. Para usar una foto real,
  // copia el archivo en /public/images y escribe, por ejemplo: "/images/hero.jpg"
  heroImage: "",

  // --- Servicios (EJEMPLO) ---
  services: [
    {
      icon: Layers,
      title: "Obra gruesa",
      description:
        "Fundaciones, estructura, albañilería y losas para viviendas y edificaciones pequeñas.",
    },
    {
      icon: Ruler,
      title: "Ampliaciones",
      description:
        "Segundos pisos, nuevas habitaciones y quinchos que se integran a la construcción existente.",
    },
    {
      icon: Hammer,
      title: "Remodelaciones",
      description:
        "Cambios de distribución, cocinas, baños y renovación completa de espacios.",
    },
    {
      icon: PaintBucket,
      title: "Terminaciones",
      description:
        "Pavimentos, revestimientos, pintura y los detalles que definen el acabado final.",
    },
    {
      icon: Warehouse,
      title: "Obras comerciales",
      description:
        "Habilitación y construcción de locales, oficinas y bodegas adaptadas al negocio.",
    },
    {
      icon: ClipboardList,
      title: "Planificación de obra",
      description:
        "Programación de etapas, control de avance y apoyo en los trámites de la obra.",
    },
  ],

  // --- Proceso de trabajo (EJEMPLO). Es una secuencia real, por eso va numerado ---
  process: [
    { title: "Visita y conversación", text: "Conocemos el lugar y lo que necesitas construir." },
    { title: "Presupuesto", text: "Detallamos alcances, materiales y costos de la obra." },
    { title: "Planificación", text: "Definimos etapas, equipo y calendario de trabajo." },
    { title: "Ejecución", text: "Construimos con control de avance y comunicación constante." },
    { title: "Entrega", text: "Revisamos juntos los detalles antes de cerrar la obra." },
  ],

  // --- Ventajas competitivas (EJEMPLO) ---
  advantages: [
    {
      icon: ShieldCheck,
      title: "Seguridad",
      text: "Una obra ordenada y señalizada, pensada para cuidar a quienes trabajan y a quienes la visitan.",
    },
    {
      icon: Award,
      title: "Calidad",
      text: "Materiales adecuados y terminaciones revisadas en cada etapa.",
    },
    {
      icon: Clock,
      title: "Cumplimiento",
      text: "Calendario acordado y avisos oportunos si algo cambia.",
    },
    {
      icon: Handshake,
      title: "Transparencia",
      text: "Presupuestos claros y explicaciones en lenguaje simple.",
    },
  ],

  // --- Sobre nosotros (EJEMPLO) ---
  about: {
    intro: [
      "Somos una constructora que trabaja con familias, comercios y pequeñas empresas. Este texto es un ejemplo: reemplázalo por la historia real de la empresa, quiénes la forman y qué la distingue.",
      "Creemos que una buena obra se nota en la estructura que no se ve y en los detalles que sí se ven. Por eso explicamos cada etapa y cuidamos el orden del trabajo.",
    ],
    mission:
      "construir espacios seguros y bien terminados, cumpliendo lo acordado con cada cliente.",
    vision:
      "ser una constructora reconocida por la calidad de sus obras y la confianza que genera.",
    values: [
      { title: "Seguridad", text: "Primero las personas, siempre." },
      { title: "Calidad", text: "Obras firmes y bien terminadas." },
      { title: "Responsabilidad", text: "Cumplimos lo que acordamos." },
      { title: "Transparencia", text: "Costos y avances a la vista." },
    ],
    safetyPoints: [
      "Orden, limpieza y señalización en el lugar de trabajo.",
      "Uso de elementos de protección personal por parte del equipo.",
      "Control de acceso y resguardo de la obra.",
      "Revisión del avance junto al cliente en cada etapa.",
    ],
    // Espacio para acreditaciones reales. No se muestran datos inventados.
    credentialsNote:
      "Agrega aquí los registros, certificaciones o acreditaciones oficiales de la empresa, cuando corresponda.",
  },

  // --- Fotografías de proyectos ---
  // Para usar fotos reales, copia las imágenes en /public/images y escribe la ruta
  // en "image", por ejemplo: "/images/proyecto-1.jpg"
  projects: [
    { title: "Vivienda unifamiliar", tag: "Obra gruesa", image: "" },
    { title: "Segundo piso", tag: "Ampliación", image: "" },
    { title: "Local comercial", tag: "Habilitación", image: "" },
    { title: "Cocina y baños", tag: "Remodelación", image: "" },
    { title: "Bodega", tag: "Obra comercial", image: "" },
    { title: "Quincho y terraza", tag: "Terminaciones", image: "" },
  ],

  // Iconos usados en las tarjetas de misión y visión
  missionIcon: Target,
  visionIcon: Eye,
  brandIcon: HardHat,
};

// Opción adicional del selector de obras del formulario
export const OTHER_SERVICE = "Otro / no estoy seguro";
