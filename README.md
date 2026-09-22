# MenteSerena

Prototipo navegable de la aplicación de monitoreo de bienestar.

## Estructura

- `index.html`: dashboard inicial y punto de entrada.
- `pantallas/`: pantallas exportadas, cada una con `index.html` y `preview.png`.
- `recursos/`: logos, perfiles, ilustraciones y referencias visuales.
- `scripts/navigation.js`: rutas compartidas para los enlaces `data-path`.
- `documentos/`: documentación de diseño.

## Rutas principales

| Ruta | Pantalla |
| --- | --- |
| Inicio | `index.html` |
| PROMs | `pantallas/proms/index.html` |
| Red de apoyo | `pantallas/red-apoyo/index.html` |
| Tratamiento | `pantallas/tratamiento/index.html` |
| Perfil | `pantallas/perfil/index.html` |
| S.O.S. Crisis | `pantallas/crisis-sos/index.html` |
| Espacio de calma | `pantallas/contencion/index.html` |

El prototipo funciona abriendo `index.html` directamente en el navegador. Las tipografías, iconos y algunas imágenes de las exportaciones requieren conexión a Internet.