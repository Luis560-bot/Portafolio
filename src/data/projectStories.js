// Descripciones verificadas en los repositorios públicos. No atribuyen autoría individual.
export const projectStories = {
  city: {
    problem:
      "Un reporte ambiental necesita algo más que un formulario: debe llegar a quien lo atiende y permitir al ciudadano consultar su estado.",
    solution:
      "Limpio Perú conecta el registro de incidencias con un flujo de atención para ciudadanos, operadores y administradores.",
    flow: [
      "El ciudadano registra el problema",
      "El operador actualiza su estado",
      "El ciudadano consulta el seguimiento",
    ],
    decisions: [
      {
        title: "Permisos en la API",
        text: "El backend comprueba el rol antes de crear reportes o cambiar estados. Los ciudadanos consultan únicamente sus propios reportes.",
      },
      {
        title: "Datos validados",
        text: "FastAPI valida categorías, estados y longitudes de los campos antes de guardar la información.",
      },
      {
        title: "Frontend y backend separados",
        text: "React consume una API con autenticación JWT; SQLAlchemy gestiona la persistencia en PostgreSQL.",
      },
    ],
    source:
      "https://github.com/Luis560-bot/Informa-peru/blob/HEAD/Backend/App/Routers/reports.py",
    sourceLabel: "Ver permisos y validaciones en el código",
    architecture: ["React", "API FastAPI · JWT", "PostgreSQL"],
  },
  cloud: {
    problem:
      "Comprobar servicios uno por uno dificulta tener una visión conjunta de su disponibilidad y detectar cambios de estado.",
    solution:
      "Cloud Alert Hub reúne monitores de endpoints HTTP y feeds RSS en un dashboard con actualizaciones en vivo.",
    flow: [
      "Registrar un servicio",
      "Comprobar su disponibilidad",
      "Recibir cambios en el dashboard",
    ],
    decisions: [
      {
        title: "Actualizaciones con SignalR",
        text: "La documentación describe el envío de cambios al dashboard sin recargar la página.",
      },
      {
        title: "Separación de responsabilidades",
        text: "El backend se organiza en Domain, Application, Infrastructure y API, separando reglas de negocio y acceso a datos.",
      },
      {
        title: "Entorno de desarrollo flexible",
        text: "El proyecto documenta PostgreSQL y una alternativa con SQLite para iniciar el entorno local.",
      },
    ],
    source: "https://github.com/miguelitoelreal/Cloud-Alert-Hub#readme",
    sourceLabel: "Consultar arquitectura e instalación",
    architecture: [
      "React · TypeScript",
      ".NET · SignalR",
      "PostgreSQL / SQLite",
    ],
  },
  air: {
    problem:
      "Una cifra de partículas en el aire necesita contexto para poder interpretarse: una escala, una ubicación y una explicación de lo que representa.",
    solution:
      "Airware presenta una lectura de PM2.5 para Lima junto con una escala visual, un catálogo de contaminantes y un glosario.",
    flow: [
      "Consultar la lectura de PM2.5",
      "Explorar la escala visual",
      "Entender los conceptos en el glosario",
    ],
    decisions: [
      {
        title: "Valor y contexto juntos",
        text: "La interfaz muestra la lectura numérica junto a una categoría y una posición en la escala.",
      },
      {
        title: "Reglas compartidas",
        text: "Las bandas y la selección de categoría se definen en un módulo separado de la interfaz.",
      },
      {
        title: "Navegación por contenido",
        text: "Las páginas de inicio, contaminantes y glosario separan la consulta rápida de la explicación de conceptos.",
      },
    ],
    source:
      "https://github.com/Luis560-bot/Airware/blob/HEAD/src/Pages/Inicio.jsx",
    sourceLabel: "Explorar la implementación de la lectura",
    architecture: ["Datos de Open-Meteo", "React", "Lectura y glosario"],
  },
};
