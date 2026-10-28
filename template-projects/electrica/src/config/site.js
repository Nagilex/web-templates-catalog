/*
 * ARCHIVO DE CONTENIDO EDITABLE
 * ---------------------------------------------------------------
 * Todo lo que aparece aquí es CONTENIDO DE EJEMPLO. Reemplázalo por los
 * datos reales de la empresa. No hace falta tocar los componentes.
 */
import {
  Home,
  Building2,
  Wrench,
  Lightbulb,
  PanelTop,
  ShieldCheck,
  HardHat,
  Award,
  Handshake,
  Target,
  Eye,
  Heart,
} from "lucide-react";

export const site = {
  // --- Datos generales (EJEMPLO) ---
  name: "Servicio Electricos",
  tagline: "Servicios eléctricos",
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
    message: "Hola, quisiera solicitar un presupuesto de servicios eléctricos.",
  },

  // --- Imagen del hero ---
  // Deja vacío para usar la ilustración incluida. Para usar una foto real,
  // copia el archivo en /public/images y escribe, por ejemplo: "/images/hero.jpg"
  heroImage: "",

  // --- Servicios (EJEMPLO) ---
  services: [
    {
      icon: Home,
      title: "Instalaciones residenciales",
      description:
        "Instalación eléctrica nueva, ampliaciones y remodelaciones para casas y departamentos.",
    },
    {
      icon: Building2,
      title: "Comercial e industrial",
      description:
        "Soluciones eléctricas para locales, oficinas, bodegas y pequeñas plantas.",
    },
    {
      icon: Wrench,
      title: "Mantención y reparaciones",
      description:
        "Revisión de instalaciones y reparación de fallas, cortes y puntos defectuosos.",
    },
    {
      icon: Lightbulb,
      title: "Iluminación",
      description:
        "Diseño y montaje de iluminación interior y exterior, incluida tecnología LED.",
    },
    {
      icon: PanelTop,
      title: "Tableros eléctricos",
      description:
        "Armado, ordenamiento y actualización de tableros y protecciones.",
    },
    {
      icon: ShieldCheck,
      title: "Puesta a tierra y protecciones",
      description:
        "Sistemas de protección para cuidar a las personas y a los equipos.",
    },
  ],

  // --- Ventajas competitivas (EJEMPLO) ---
  advantages: [
    {
      icon: HardHat,
      title: "Profesionalismo",
      text: "Trabajo ordenado, comunicación clara y cumplimiento de lo acordado.",
    },
    {
      icon: ShieldCheck,
      title: "Seguridad",
      text: "Procedimientos de trabajo pensados para cuidar a las personas y a la instalación.",
    },
    {
      icon: Award,
      title: "Calidad",
      text: "Materiales adecuados y revisión del trabajo antes de la entrega.",
    },
    {
      icon: Handshake,
      title: "Compromiso",
      text: "Seguimiento al cliente antes, durante y después de cada servicio.",
    },
  ],

  // --- Sobre nosotros (EJEMPLO) ---
  about: {
    intro: [
      "Somos una empresa de servicios eléctricos que trabaja con hogares, comercios y empresas. Este texto es un ejemplo: reemplázalo por la historia real de la empresa, quiénes la forman y qué la distingue.",
      "Nuestro enfoque es entregar instalaciones seguras y bien terminadas, explicando cada paso al cliente con lenguaje simple.",
    ],
    mission:
      "brindar soluciones eléctricas seguras y confiables que den tranquilidad a nuestros clientes.",
    vision:
      "ser una empresa reconocida por la calidad de su trabajo y la confianza que genera.",
    values: [
      { icon: ShieldCheck, title: "Seguridad", text: "Primero las personas, siempre." },
      { icon: Award, title: "Calidad", text: "Terminaciones prolijas y duraderas." },
      { icon: Handshake, title: "Honestidad", text: "Presupuestos claros y sin sorpresas." },
      { icon: Heart, title: "Compromiso", text: "Cumplimos lo que prometemos." },
    ],
    safetyPoints: [
      "Planificación del trabajo antes de intervenir una instalación.",
      "Uso de materiales y equipos adecuados a cada servicio.",
      "Revisión y pruebas del trabajo antes de la entrega.",
      "Explicación al cliente de lo realizado y de las recomendaciones de uso.",
    ],
    // Espacio para acreditaciones reales. No se muestran datos inventados.
    credentialsNote:
      "Agrega aquí las certificaciones, registros o acreditaciones oficiales de la empresa, cuando corresponda.",
  },

  // --- Fotografías de proyectos ---
  // Para usar fotos reales, copia las imágenes en /public/images y escribe la ruta
  // en "image", por ejemplo: "/images/proyecto-1.jpg"
  projects: [
    { title: "Proyecto 1", image: "" },
    { title: "Proyecto 2", image: "" },
    { title: "Proyecto 3", image: "" },
    { title: "Proyecto 4", image: "" },
    { title: "Proyecto 5", image: "" },
    { title: "Proyecto 6", image: "" },
  ],

  // Iconos usados en las tarjetas de misión y visión
  missionIcon: Target,
  visionIcon: Eye,
};

// Opción adicional del selector de servicios del formulario
export const OTHER_SERVICE = "Otro / no estoy seguro";
