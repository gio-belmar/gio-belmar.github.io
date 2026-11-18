# gio.cv · CV web de Gio (Giorgio Belmar Velásquez)

Sitio estático publicado con GitHub Pages: **https://gio-belmar.github.io**

## Cómo actualizar el contenido (sin programar)

Todo el contenido está en **`data/cv.json`**. Para editarlo desde github.com: abre el archivo → ícono del lápiz → cambia el texto → **Commit changes**. La web se actualiza en 1–2 minutos.

| Quiero cambiar… | Dónde, en `data/cv.json` |
|---|---|
| Correo, teléfono, Instagram, LinkedIn, SoundCloud | `meta` |
| Nombre, titular, perfil, datos rápidos, foto | `profile` |
| Un trabajo o estudio | `timeline` (cada uno tiene `es` y `en`) |
| Nivel de un software | `skills` → `level` (10 a 100, de 10 en 10) |
| Palabras con que se encuentra una habilidad | `skills` → `tags` |
| Un proyecto | `projects` |
| Versiones del CV en PDF | `cvVersions` |

Reglas:
- Cada texto va en los dos idiomas: `{ "es": "...", "en": "..." }`.
- Respeta las comillas y las comas. Si algo queda mal, la web muestra un aviso y no carga el contenido. Para revisar, puedes pegar el archivo en https://jsonlint.com
- Fechas como `"2024-12"` (año-mes). `"to": null` significa "presente".

## Fotos e imágenes

- Sube las fotos a `assets/img/` (en GitHub: **Add file → Upload files**).
- Foto de perfil: vertical 4:5 (ej. 1200 × 1500 px), JPG o WebP de menos de 500 KB. Luego en `profile.photo` escribe `"assets/img/nombre.jpg"`.
- Imágenes de un proyecto: en `projects[...].images` agrega `"assets/img/archivo.jpg"`. La primera puedes usarla también como `cover`.
- Videos: súbelos a YouTube o Vimeo y pon el link en `links.video` (GitHub no acepta archivos de más de 100 MB).

## CV en PDF

Los 12 PDF de `pdf/` (6 versiones × español/inglés) y la imagen para compartir (`assets/og.png`) **se generan solos**: cada vez que cambias `data/cv.json` o una imagen en `assets/img/`, la acción **"Generar PDFs del CV"** (pestaña Actions) los vuelve a crear en unos minutos. También se puede lanzar a mano desde Actions → Run workflow.

## Estructura

```
index.html        página principal
proyecto.html     página de cada proyecto (?p=id)
data/cv.json      todo el contenido (ES/EN)
css/style.css     diseño (modo claro y oscuro)
js/app.js         lógica: idioma, tema, buscador, carrusel, ventanitas
print.html        plantilla de los PDF
og.html           plantilla de la imagen para compartir
scripts/build-pdfs.mjs   genera PDFs y og.png (usa Playwright)
contenido/        borradores de contenido y especificación UX
```
