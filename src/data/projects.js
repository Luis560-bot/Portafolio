import cloudImage from "../image/cloud-alert.svg";
import airImage from "../image/airware.svg";
import cityImage from "../image/limpio-peru.svg";
import { projectStories } from "./projectStories";

export const projects = [
  {
    title: "Limpio Perú",
    category: "Participación ciudadana",
    theme: "city",
    desc: "Registro y seguimiento de reportes ambientales con permisos para ciudadanos, operadores y administradores.",
    tags: ["React", "CSS", "Python", "FastAPI", "PostgreSQL"],
    demo: "https://limpio-peru.onrender.com/",
    github: "https://github.com/Luis560-bot/Informa-peru",
    image: cityImage,
    story: projectStories.city,
  },
  {
    title: "Cloud Alert Hub",
    category: "Monitoreo en la nube",
    theme: "cloud",
    desc: "Monitoreo de servicios HTTP y RSS con un dashboard que recibe actualizaciones mediante SignalR.",
    tags: ["React", "TypeScript", ".NET", "SignalR", "PostgreSQL"],
    demo: null,
    github: "https://github.com/miguelitoelreal/Cloud-Alert-Hub.git",
    image: cloudImage,
    story: projectStories.cloud,
  },
  {
    title: "Airware",
    category: "Monitoreo ambiental",
    theme: "air",
    desc: "Lecturas de PM2.5 para Lima, una escala visual y un glosario para comprender los datos del aire.",
    tags: ["React", "JavaScript", "Tailwind CSS", "React Router"],
    demo: "https://airware-4iyb.onrender.com/",
    github: "https://github.com/Luis560-bot/Airware.git",
    image: airImage,
    story: projectStories.air,
  },
];
