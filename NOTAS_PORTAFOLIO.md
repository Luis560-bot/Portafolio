# Información pendiente y hallazgos

## Datos personales que debe confirmar Luis

- Participación individual en Cloud Alert Hub, Airware y Limpio Perú.
- Formación y experiencia con fechas reales.
- Puesto u oportunidad que busca.
- Un reto técnico resuelto en cada proyecto y su contribución concreta.
- CV actualizado, si desea incluir una descarga.

No publicar métricas, testimonios, títulos académicos o responsabilidades sin confirmación.

## Airware: defecto confirmado en código y captura

La captura original muestra `UNDEFINED–UNDEFINED` y `NaN+` en las tarjetas de la escala.

En `src/Pages/Inicio.jsx` del repositorio Airware, `rangoLabel` necesita `desde` y `hasta`. Esos campos se añaden a `segmentos`, pero las tarjetas inferiores recorren `BANDAS`, que no los contiene. La corrección debe realizarse en Airware, recorriendo `segmentos` también en esas tarjetas o pasando explícitamente los límites calculados.

Después de corregir, verificar los tres rangos, los valores ausentes y las unidades de la fuente; desplegar y tomar una captura nueva. La captura original se conserva en el repositorio. Por petición del usuario, las imágenes de la web se sustituyeron por ilustraciones SVG conceptuales; eso no corrige el defecto de Airware.

## Verificación de presentación

- Los repositorios públicos pudieron leerse mediante la API de GitHub.
- Las demos no pudieron verificarse con el navegador de este entorno. No se afirma que funcionen.
- Pendiente una revisión visual y de interacción en escritorio y móvil: menú, casos de estudio, ilustraciones completas, navegación con teclado y enlaces externos.
- El hecho de que un repositorio documente pruebas no significa que estas se hayan ejecutado durante la revisión del portafolio.
