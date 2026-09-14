// Respaldado por la revisión de los repositorios públicos de Luis560-bot.
// Node.js se utiliza en la compilación; no se verificó un backend Express.
export const primaryStack = [
  "React", "JavaScript", "Python", "FastAPI", "PostgreSQL", "MongoDB",
];

export const tooling = ["Git", "Vite", "Docker", "Nginx"];

export const skills = [
  {
    title: "Frontend",
    tags: ["React", "JavaScript", "CSS", "Tailwind CSS", "React Router"],
    sources: [
      { label: "Airware", url: "https://github.com/Luis560-bot/Airware/blob/main/src/App.jsx" },
      { label: "Ejercicios de React", url: "https://github.com/Luis560-bot/aprendiendo-react-pasos/blob/main/src/App.jsx" },
    ],
  },
  {
    title: "Backend",
    tags: ["Python", "FastAPI", "Pydantic", "SQLAlchemy"],
    sources: [
      { label: "API de reportes", url: "https://github.com/Luis560-bot/Informa-peru/blob/main/Backend/App/Routers/reports.py" },
      { label: "API de tareas", url: "https://github.com/Luis560-bot/sistema-de-gestion-de-tareas/blob/main/Backend/Routes/task.py" },
    ],
  },
  {
    title: "Bases de datos",
    tags: ["PostgreSQL", "MongoDB"],
    sources: [
      { label: "Limpio Perú", url: "https://github.com/Luis560-bot/Informa-peru/blob/main/Backend/App/database/database.py" },
      { label: "MongoDB", url: "https://github.com/Luis560-bot/sistema-de-gestion-de-tareas/blob/main/Backend/database.py" },
    ],
  },
];
