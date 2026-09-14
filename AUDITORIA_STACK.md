# Revisión del stack de Luis560-bot

Fecha: 13 de septiembre de 2026.

## Alcance

Se enumeraron los seis repositorios públicos de la cuenta mediante la API de GitHub. Se revisaron sus lenguajes, los árboles completos de la rama `main` y 23 archivos seleccionados de dependencias, implementación y despliegue. Ningún repositorio está marcado como fork. `smart-booking-technical-test` está vacío: tamaño cero, sin lenguajes y respuesta 409 al consultar su árbol.

No incluye repositorios privados, otras cuentas, ramas alternativas ni todo el historial de commits. La presencia de código acredita uso en el proyecto, no un nivel de dominio ni autoría individual de cada componente. No se ejecutaron los backends, tests o despliegues de los repositorios revisados.

## Inventario y evidencia

| Repositorio | Evidencia encontrada | Uso en el portafolio |
| --- | --- | --- |
| [Informa-peru](https://github.com/Luis560-bot/Informa-peru) | React y CSS propio; FastAPI, Pydantic, SQLAlchemy, asyncpg; JWT y control por roles. | React, Python, FastAPI, PostgreSQL, SQLAlchemy, JWT. |
| [sistema-de-gestion-de-tareas](https://github.com/Luis560-bot/sistema-de-gestion-de-tareas) | React, React Router, Tailwind y Axios; rutas CRUD en FastAPI; acceso asíncrono a MongoDB con Motor. | Python, FastAPI, MongoDB, Motor, React Router y Tailwind. |
| [Airware](https://github.com/Luis560-bot/Airware) | React, React Router, Tailwind integrado en Vite; consumo de Open-Meteo; Dockerfile con compilación Node y servidor Nginx. | Frontend, integración de datos y herramientas de construcción. |
| [aprendiendo-react-pasos](https://github.com/Luis560-bot/aprendiendo-react-pasos) | Ejercicios de componentes, props, estado, efectos, formularios y consumo de API con fetch. | Evidencia de práctica de React; no se presenta como producto de producción. |
| [Portafolio](https://github.com/Luis560-bot/Portafolio) | React, JavaScript, CSS, Vite, Docker y Nginx. La versión pública aún declara framer-motion. | Herramientas frontend. La versión local ya no utiliza framer-motion. |
| [smart-booking-technical-test](https://github.com/Luis560-bot/smart-booking-technical-test) | Repositorio vacío. | No aporta evidencia tecnológica. |

## Correcciones realizadas

- El backend principal pasa de **Node.js / Express** a **Python / FastAPI**. No se encontraron servidores Express ni esa dependencia en los manifiestos revisados. Node aparece como entorno de compilación y herramientas frontend, no como evidencia de una API propia en Node.
- Se añade **MongoDB** con Motor, respaldado por el gestor de tareas.
- **PostgreSQL** se describe mediante SQLAlchemy/asyncpg. No se atribuye experiencia avanzada en SQL manual a partir del uso del ORM.
- Se confirma **Tailwind CSS** en Airware y el gestor de tareas. Se retira de las etiquetas de Limpio Perú: el frontend actual no declara Tailwind y utiliza CSS propio.
- **React Router** aparece como dependencia y en código de navegación. **Axios** aparece en el cliente del gestor de tareas; se evita llenar la sección con todas las dependencias auxiliares.
- **Docker y Nginx** se describen como configuraciones presentes en Airware y Portafolio. No se afirma que se hayan desplegado o probado durante esta revisión.
- No se añade **TypeScript** al stack principal por encontrar `@types/react`: estos paquetes no convierten los archivos JavaScript en código TypeScript.
- **.NET, TypeScript y SignalR** se conservan como tecnologías de Cloud Alert Hub, cuyo repositorio pertenece a `miguelitoelreal`. Su documentación se revisó anteriormente; la contribución individual de Luis sigue pendiente de confirmación y no se utiliza para justificar su stack principal.

## Archivos que respaldan las afirmaciones

- [Limpio Perú: dependencias del frontend](https://github.com/Luis560-bot/Informa-peru/blob/main/Frontend/package.json).
- [Limpio Perú: dependencias del backend](https://github.com/Luis560-bot/Informa-peru/blob/main/Backend/requirements.txt).
- [Limpio Perú: sesión de base de datos](https://github.com/Luis560-bot/Informa-peru/blob/main/Backend/App/database/database.py).
- [Limpio Perú: JWT y contraseñas](https://github.com/Luis560-bot/Informa-peru/blob/main/Backend/App/Core/security.py).
- [Gestor de tareas: MongoDB y operaciones CRUD](https://github.com/Luis560-bot/sistema-de-gestion-de-tareas/blob/main/Backend/database.py).
- [Gestor de tareas: rutas FastAPI](https://github.com/Luis560-bot/sistema-de-gestion-de-tareas/blob/main/Backend/Routes/task.py).
- [Gestor de tareas: formularios, navegación y Axios](https://github.com/Luis560-bot/sistema-de-gestion-de-tareas/blob/main/Client/src/assets/Pages/Taskform.jsx).
- [Airware: rutas, hooks y Open-Meteo](https://github.com/Luis560-bot/Airware/blob/main/src/App.jsx).
- [Airware: integración de Tailwind](https://github.com/Luis560-bot/Airware/blob/main/vite.config.js).
- [Airware: Docker y Nginx](https://github.com/Luis560-bot/Airware/blob/main/Dockerfile).
- [Prácticas de React](https://github.com/Luis560-bot/aprendiendo-react-pasos/blob/main/src/App.jsx).

## Organización del contenido

`src/data/skills.js` centraliza las tarjetas, las fuentes, las herramientas y la franja de tecnologías principales. `Skills.jsx` y `StackStrip.jsx` consumen esos datos. También se actualizaron la presentación personal, la portada y las etiquetas de proyectos para que no contradigan el stack verificado.
