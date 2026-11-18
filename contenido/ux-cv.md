# CV web de Gio · Especificación UX (v2)

> 18/11/2026. Define estructura, comportamiento y contenido de cada parte de la página.
> El diseño visual (colores, tipografías, estilo) se decide después, en un documento aparte.
> Leyenda: ✅ lo pediste tú · 💡 sugerencia mía (aceptar o descartar) · ❓ decisión pendiente

---

## 0. Decisiones base

| Tema | Decisión |
|---|---|
| **Tipo de sitio** | Una sola página principal (scroll) + una página de detalle por proyecto. |
| **Tecnología** | HTML, CSS y JavaScript sin frameworks ni paso de build. Se publica en GitHub Pages desde `main`. Así se puede editar desde github.com aunque no tengas Claude Code. |
| **Contenido** | Todo el texto (ES y EN), las experiencias, los proyectos y las habilidades viven en **un solo archivo de datos** (`data/cv.json`). Para cambiar un texto o un porcentaje se edita solo ese archivo, sin tocar el diseño. |
| **Idiomas** | Español (por defecto) e inglés. La traducción al inglés la hago yo y tú la revisas. |
| **Orden cronológico** | Inverso: lo más reciente arriba. Es el estándar que esperan los reclutadores. |
| **URL** ✅ | Renombrar el repo `CV_02` → `gio-belmar.github.io`. La dirección queda **https://gio-belmar.github.io**. |
| **Estadísticas** ✅ | Contador de visitas (ver punto 9.10). |

---

## 1. Estructura general

**Escritorio (≥ 1024 px)**
```
┌──────────────────────────────────────────────────────────────┐
│ NAV:  Gio   Trayectoria · Proyectos · CV · Contacto    [文A]  │
├───────────────┬──────────────────────────────────────────────┤
│ PANEL LATERAL │  PORTADA (foto + nombre)                     │
│ (habilidades) │  TRAYECTORIA (línea de tiempo)               │
│  fijo al      │  PROYECTOS                                   │
│  hacer scroll │  CV EN PDF                                   │
│               │  CONTACTO                                    │
├───────────────┴──────────────────────────────────────────────┤
│ PIE DE PÁGINA                                                │
└──────────────────────────────────────────────────────────────┘
```

**Celular (< 1024 px)**
- La barra de navegación se compacta: nombre a la izquierda, botón de idioma y botón de menú (☰) a la derecha.
- El panel lateral no cabe al costado: se abre como **panel que sube desde abajo** (bottom sheet) con un botón flotante fijo abajo a la derecha que dice **"Habilidades"**. 💡
- Todo lo demás va en una columna.

---

## 2. Barra de navegación ✅

- **Fija arriba** al hacer scroll.
- Izquierda: **"Gio"** (al tocarlo vuelve arriba).
- Enlaces: **Trayectoria · Proyectos · CV · Contacto**. El enlace de la sección visible se marca como activo.
- Derecha: **botón de modo claro/oscuro** (◐ / ☀) y **botón de idioma**, un solo ícono de traducción (文A). Al tocarlo se despliega:
  - Español
  - English
- El idioma elegido se recuerda en el navegador. La primera vez se usa el idioma del navegador del visitante (si no es español, sale en inglés).
- Al cambiar el idioma, la página no se recarga ni pierde la posición.

---

## 3. Portada ✅

Orden de arriba hacia abajo (en escritorio: foto a la izquierda, texto a la derecha):

1. **Foto rectangular vertical**, proporción **4:5** (ej. 1200 × 1500 px). ✅
2. **Gio**, grande.
3. **Pronunciación:** *"Yío"* · `/ˈʝi.o/` ✅
4. **Giorgio Belmar Velásquez**, más chico, debajo.
5. 💡 **Titular profesional** en una línea:
   *Visualista · Técnico audiovisual · Estudiante de Ingeniería Civil Acústica*
6. ✅ **Datos rápidos** (fila de chips chicos, siempre visible):
   `Valdivia, Chile` · `Disponible para viajar y trabajo remoto` · `Español nativo · Inglés intermedio` · `Licencia clase B`
   Es donde un reclutador busca estos datos primero. Además se encuentran en el buscador del panel.
7. 💡 **Perfil breve** (2–3 líneas) del resumen.
8. 💡 **Herramientas fuertes:** fila de chips con las de 90–100 %:
   Ableton Live · OBS Studio · AutoCAD · SketchUp · DaVinci Resolve · Blender · Affinity · Photoshop · Claude Code
   Al tocar un chip, el panel lateral muestra esa habilidad.
9. **Botones de acción:**
   - **Contactar** (baja a Contacto)
   - **CV en PDF** (baja a la sección CV, punto 6b)

---

## 4. Trayectoria (académica y laboral) ✅

**Formato:** línea de tiempo vertical, de lo más reciente a lo más antiguo.

**Filtro arriba** 💡: `Todo · Laboral · Académico`

**Cada entrada muestra:**

| Campo | Ejemplo |
|---|---|
| **Rol** (título, lo más destacado) | Técnico audiovisual · Encargado de visuales |
| **Empresa / institución** | Obando Sonido SpA |
| **Ubicación** | Valdivia y alrededores, Los Ríos |
| **Fechas** | dic 2024 – jul 2026 (o "– presente") |
| **Tipo** (ícono) | Laboral / Académico / Proyecto colectivo |
| **Descripción** | 3–5 puntos cortos |
| **Etiquetas de habilidades** 💡 | Resolume · OBS · Novastar · Layher… (al tocarlas se abren en el panel lateral) |
| **Lugares / eventos** (desplegable) | Festival de los Paraguas (Valdivia) · Festival de la Leche (Máfil) · Aniversario de Castro… |

**Reglas:**
- Si una persona tuvo **dos roles en la misma empresa**, cada rol es una entrada aparte.
- Los trabajos que se **superponen en el tiempo** (Asprintec 2020–presente con todo lo demás) se muestran igual, ordenados por fecha de inicio. La etiqueta "presente" deja claro que siguen vigentes.
- La descripción larga va **plegada**: se ven 2 puntos y un botón "ver más". 💡 Así la línea de tiempo se puede leer de un vistazo.

**Entradas actuales (orden propuesto):**
1. LOOK AT FLOWERS · Co-organizador, director de arte, técnico de video · Valdivia · 2026
2. Obando Sonido SpA · Técnico audiovisual / encargado de visuales / montajista · Valdivia y alrededores · dic 2024 – jul 2026
3. Universidad Austral de Chile · Ingeniería Civil Acústica · Valdivia · 2022 – 2027 (en curso)
4. Asprintec Ltda · Dibujante técnico de arquitectura · Puerto Montt · 2020 – presente

Sin enseñanza media ✅. Pendiente: agregar trabajos de KLANG hechos a través de Obando (Gio revisa la información).

---

## 5. Panel lateral: habilidades ✅

### 5.1 Encabezado
- Título: **Mi experiencia y habilidades**
- Subtítulo: *softwares, equipos, roles*
- Botón para **plegar/expandir** el panel (en escritorio queda una franja angosta con un ícono; en celular se cierra el panel).

### 5.2 Buscador fijo
- Siempre visible arriba del panel, aunque se haga scroll dentro.
- Texto de ejemplo: **"¿Qué habilidades buscas?"**
- **Al tocarlo**, se despliegan **chips de áreas** debajo:
  `Audio en vivo · Producción musical · Acústica · VJing y visuales · Pantallas LED · Broadcast y streaming · Edición y post · 3D · Diseño gráfico · CAD y arquitectura · IA · Desarrollo web · Montaje y producción técnica · Gestión y producción de eventos · Redes sociales · Ofimática · Idiomas`
- Se puede **escribir** o **tocar un área** (o ambas). Las áreas se pueden combinar.
- La búsqueda:
  - no distingue mayúsculas ni tildes ("musica" encuentra "Música");
  - busca en el nombre, las etiquetas y los sinónimos de cada habilidad, en los dos idiomas ("mixer" encuentra la X32);
  - muestra resultados mientras se escribe.
- **Cada resultado muestra:**
  - nombre y nivel (barra + etiqueta, ver 5.4);
  - **"Dónde lo usé"** en una ventanita emergente (ver 5.7).
- Si no hay resultados: *"No encontré eso. Prueba con otra palabra o escríbeme"* + enlace a Contacto.
- Botón **✕** para limpiar la búsqueda y volver al carrusel.

### 5.3 Carrusel rotativo vertical ✅
Debajo del buscador, cuando no hay búsqueda activa.

**Propuesta:**
- Muestra **un área a la vez** como tarjeta: título del área + sus 3–6 habilidades con barra de nivel.
- **Cambia cada 4 segundos** con un deslizamiento vertical suave, en bucle.
- **Orden de las áreas:** primero las que más venden para tu perfil:
  1. VJing y visuales
  2. Broadcast y streaming
  3. Audio en vivo
  4. Producción musical
  5. Edición, post y 3D
  6. Acústica
  7. CAD y arquitectura
  8. Diseño gráfico
  9. IA
  10. Desarrollo web
  11. Roles
  12. Redes y ofimática
- **Controles:**
  - Se **pausa** al pasar el mouse, al tocarlo o al enfocarlo con teclado.
  - Indicador de posición (puntos o "3 / 12") y flechas ↑ ↓ para avanzar a mano.
  - Al tocar una habilidad del carrusel se abre su detalle ("dónde lo usé").
- **Accesibilidad:** si el visitante tiene activado "reducir movimiento", no rota: se muestran todas las áreas como lista estática.

### 5.4 Cómo se muestra el nivel ✅
**Barra de 10 segmentos + etiqueta. Sin número.** El porcentaje solo se usa internamente para dibujar la barra y ordenar.

| % interno | Etiqueta ES | Etiqueta EN |
|---|---|---|
| 70–100 | Avanzado | Advanced |
| 40–60 | Intermedio | Intermediate |
| 10–30 | Principiante | Beginner |

### 5.5 Roles (no software)
Los roles no se miden en %. 💡 Propongo mostrarlos con **años de experiencia** y **dónde**:
- Visualista / VJ
- Técnico de pantallas LED
- Operador de streaming y dirección de cámaras
- Técnico de sonido
- Montajista (estructuras Layher)
- Director de arte / identidad visual
- Productor de eventos / organización
- Gestión de patrocinios
- Dibujante técnico CAD
- Desarrollador web (con IA)

### 5.6 Sistema de etiquetas internas
Cada habilidad tiene, en `data/cv.json`:
- `area`: una o más áreas (ej. OBS → Broadcast y streaming, VJing);
- `tags` ES/EN: términos que buscaría un empleador;
- `usedIn`: experiencias y proyectos donde se usó.

**Ejemplos:**

| Habilidad | Etiquetas de búsqueda (ES / EN) |
|---|---|
| Behringer X32 / Midas M32 | consola, mesa de mezcla, mezcla, FOH, monitores, sonido en vivo, audio digital · mixer, mixing desk, live sound, digital console |
| Sistemas PA y microfonía | sonido, amplificación, parlantes, line array, microfonía, montaje de audio · PA system, speakers, mics |
| Ableton Live | DAW, producción musical, música electrónica, beats, sesión en vivo, MIDI · music production, DAW, live set |
| Reaper | DAW, grabación, edición de audio, mezcla · recording, audio editing |
| EASE / REW | acústica, simulación, medición, respuesta de sala, ecualización de sistema, calibración · acoustics, room measurement, simulation, tuning |
| Resolume Arena | VJ, visuales, VJing, mapping, proyección, show en vivo · visuals, live visuals, projection mapping |
| Novastar VX600 / VX1000 | pantalla LED, procesador de video, mapping de pantalla, escalado · LED wall, video processor |
| TouchDesigner / MadMapper | visuales generativas, interactivo, mapping · generative, interactive, projection mapping |
| OBS Studio | streaming, transmisión, broadcast, en vivo, grabación, escenas · live streaming, broadcast, recording |
| Dirección de cámaras | multicámara, switcher, transmisores inalámbricos, teleprompter · multicam, camera direction |
| DaVinci Resolve / Premiere / After Effects | edición de video, colorización, post, motion graphics, montaje · video editing, color grading, motion graphics |
| Blender | 3D, modelado, render, escenografía, animación · 3D modeling, rendering, stage design |
| Affinity / Photoshop / Illustrator | diseño gráfico, branding, identidad visual, afiches, redes · graphic design, branding |
| AutoCAD / SketchUp / ArchiCAD | CAD, planos, dibujo técnico, arquitectura, levantamiento, 3D arquitectónico · technical drawing, floor plans |
| Claude Code y otras IA | IA, inteligencia artificial, automatización, programación asistida · AI, automation, AI-assisted coding |
| HTML / CSS / React / GitHub | web, sitio, desarrollo, frontend, GitHub Pages · web development |
| LaTeX / Office | informes, documentos, planillas, presentaciones · reports, spreadsheets |
| Instagram / YouTube / TikTok | redes sociales, contenido, comunicación · social media, content |
| Español / Inglés | idiomas · languages |
| Licencia clase B | conducir, vehículo, traslado de equipos · driver's license |

### 5.7 Ventanita "Dónde lo usé" ✅
- **Computador:** aparece al pasar el cursor sobre cualquier habilidad (en el panel, en el carrusel o en los chips de la portada). También con el foco del teclado.
- **Celular** (no existe el cursor): aparece al tocar la habilidad y se cierra al tocar fuera.
- **Contenido:** nombre de la habilidad, su etiqueta de nivel y la lista de experiencias/proyectos donde la usaste, cada uno como enlace.
  Ej.: **OBS Studio** · Avanzado → *Obando Sonido SpA (2024–2026) · LOOK AT FLOWERS (2026)*
- Al tocar un enlace, la página baja a esa experiencia o abre el proyecto.

---

## 6. Proyectos ✅

### 6.1 Organización
Filtro con pestañas arriba de la sección:

- **Colectivos:** hechos en equipo.
  - LOOK AT FLOWERS
  - Sitio web CEEICA ✅
- **Personales**
  - **Herramientas:** software que desarrollas.
    - Herramienta de storyboard
    - Herramienta de broadcast / VJing / mapping
  - **Creativos:** obras y trabajos artísticos. 💡
    - Visuales KLANG Masquerade (31/10/2026, trabajo directo con KLANG)
    - Cortometraje
    - Producción musical (amotnto)

💡 Así la duda de cómo seccionar los personales se resuelve con dos grupos claros: *lo que construyes* (herramientas) y *lo que creas* (obras). Si mañana aparece algo que no calza, agregamos un grupo nuevo en el archivo de datos.

### 6.2 Tarjeta de proyecto (en la grilla)
| Campo | Obligatorio |
|---|---|
| Imagen de portada (16:9) | sí (si no hay, se usa un fondo con el nombre) |
| Nombre del proyecto | sí |
| Categoría + año | sí |
| **Estado:** Terminado / En desarrollo / En curso 💡 | sí |
| Abstract (2–3 líneas) | sí |
| Etiquetas de habilidades | opcional |
| Botón **Ver proyecto** | sí |

### 6.3 Página de detalle del proyecto
- Nombre, categoría, año, estado, tu rol en el proyecto.
- Descripción / abstract completo.
- **Galería de imágenes** de referencia (al tocar una, se abre en grande y se puede pasar a la siguiente).
- Video: enlace a YouTube/Vimeo, o un clip corto en loop dentro de la página (≤ 10 MB).
- **Botones:** `Repositorio` · `Ver sitio` · `Ver video` · `Instagram`. **Solo aparecen los que tienen link.** Un proyecto sin repo todavía no muestra un botón roto.
- Botón para volver a Proyectos.

---

## 6b. CV en PDF ✅

Sección propia en la barra de navegación (**CV**).

- Título: **¿Necesitas mi CV en PDF?**
- Subtítulo: *Elige la versión que más se acerque a lo que buscas.*
- **Tarjetas de versión** (cada una con botón **Español** y **English**):

| Versión | Enfoque | Qué incluye |
|---|---|---|
| **Completo** | Todo | Toda la trayectoria y todas las habilidades. |
| **Audiovisual y visuales** | VJing, pantallas LED, broadcast, edición, 3D | Obando (énfasis en visuales, LED, cámaras), LOOK AT FLOWERS (video y pantallas), KLANG, cortometraje. |
| **Sonido y acústica** | Audio en vivo, producción musical, acústica | Obando (énfasis en audio y montaje), Ingeniería Civil Acústica, EASE/REW, Ableton, Reaper. |
| **Diseño y comunicación** | Identidad visual, diseño gráfico, redes, web | LOOK AT FLOWERS (marca, posts, dossier, web), CEEICA, Affinity, Photoshop. |
| **Dibujo técnico y arquitectura** | CAD y planimetría | Asprintec, AutoCAD, SketchUp. |
| **Producción de eventos** | Organización, montaje, logística | LOOK AT FLOWERS (organización, patrocinios, cotizaciones, diseño del recinto), Obando (montaje, Layher, logística). |

- Los 12 PDF (6 versiones × 2 idiomas) **se generan automáticamente** desde el mismo archivo de datos, filtrando por área. Si cambias algo en la web, los PDF se actualizan solos al publicar.
- Formato del PDF: 1–2 páginas tamaño carta, sobrio, legible por portales de empleo (texto real, no imagen), con foto, contacto y link a la web.
- Debajo de las tarjetas: *¿Buscas otro enfoque? Escríbeme* → Contacto.

---

## 7. Contacto ✅

Sección en la página y también accesible desde la barra de navegación.

| Canal | Cómo se muestra |
|---|---|
| **Correo** | giorgiobelmar@gmail.com, visible, con botón **Copiar** y enlace para escribir. |
| **WhatsApp / teléfono** | Botón **"Mostrar número"**. Al tocarlo aparece +56 9 5287 5646 y un botón **Escribir por WhatsApp**. El número no queda escrito tal cual en el código: se arma al tocar el botón, así los bots que recolectan números no lo pescan. ✅ (mi recomendación) |
| **Instagram** | @tvmsito |
| **LinkedIn** | Giorgio Belmar Velásquez |
| **SoundCloud** | ❓ amotnto o giorgio-belmar-velasquez |

Una línea arriba: **"Disponible para eventos, producciones y proyectos audiovisuales. Base en Valdivia, con disponibilidad para viajar y trabajo remoto."** ✅

---

## 8. Pie de página ✅

En columnas (en celular, una debajo de otra):
1. **Gio** · Giorgio Belmar Velásquez · Valdivia, Chile.
2. **Secciones:** Trayectoria · Proyectos · Habilidades · CV en PDF · Contacto.
3. **Funciones:** Buscar habilidades · Descargar CV en PDF · Cambiar idioma.
4. **Redes:** correo, WhatsApp (mismo botón de mostrar número), Instagram, LinkedIn, SoundCloud.
5. Última línea: *Última actualización: [mes año]* · © 2026 Giorgio Belmar Velásquez.

---

## 9. Cosas que faltaban (no evidentes) 💡

1. **CV en PDF descargable.** Muchos empleadores y portales piden un PDF para adjuntarlo. Propongo generarlo automáticamente desde el mismo contenido (ES y EN), para que no haya que mantener dos versiones.
2. **Vista previa al compartir el link** ✅ (propuesta):
   - **Imagen** 1200 × 630 px: tu foto a la izquierda; a la derecha "Gio", "Yío" en chico, "Giorgio Belmar Velásquez" y "Visualista · Técnico audiovisual · Ing. Civil Acústica (en curso)", con los colores del diseño final.
   - **Título:** Gio · Visualista y técnico audiovisual
   - **Descripción:** Visuales en vivo, pantallas LED, broadcast, sonido y diseño para eventos. Valdivia, Chile.
   - Versión en inglés con los mismos campos traducidos.
   - Cada proyecto tiene su propia vista previa (portada + nombre del proyecto).
3. **Comportamiento en celular** del panel lateral (punto 1). La mayoría va a abrir tu CV desde el teléfono.
4. **Perfil breve en la portada** (punto 3.7). Un empleador decide en ~10 segundos; el párrafo le dice quién eres antes de leer la línea de tiempo.
5. **"Dónde lo usé"** en cada habilidad (punto 5.2). Conecta el porcentaje con evidencia real.
6. **Peso de fotos y videos.** Las fotos de eventos se convierten a WebP y se cargan solo cuando aparecen en pantalla. GitHub no acepta archivos de más de 100 MB, así que los videos largos van en YouTube o Vimeo.
7. **Idiomas, licencia y disponibilidad** ✅: van como "datos rápidos" en la portada (punto 3.6) y también se encuentran en el buscador.
8. **Modo claro / oscuro.** ❓ Se decide con el diseño visual. Para un visualista, un modo oscuro como base puede quedar bien.
9. **Accesibilidad:** todo se puede usar con teclado, buen contraste, textos alternativos en las fotos y el carrusel respeta "reducir movimiento".
10. **Estadísticas de visitas** ✅. Propuesta: **GoatCounter** (gratis, sin cookies, no necesita aviso de cookies y es más simple que Google Analytics). Muestra visitas por día, desde qué país, desde dónde llegaron (LinkedIn, WhatsApp…) y qué PDF descargaron. ❓ O Google Analytics si prefieres el mismo de la web del festival.
11. **Cómo actualizar sin Claude Code.** Te dejo una guía corta en el README: qué archivo editar para cada cosa y cómo subir fotos.

---

## 9b. Diseño visual ✅ (dirección B · Editor)

- **Concepto:** minimalista y limpio, como un editor de código.
  - Números de línea en el margen.
  - Secciones que abren y cierran con `{ }`.
  - Datos en formato `clave: valor` coloreados como sintaxis.
  - Buscador con cursor que parpadea.
- **Tipografías:** IBM Plex Sans (nombre y textos) · IBM Plex Mono (menú, etiquetas, datos).
- **Modo claro / oscuro:**
  - La primera visita sigue la configuración del dispositivo.
  - Un botón ◐ / ☀ junto al de idioma lo cambia, y la elección se recuerda.
- **Paleta clara:** fondo #f7f8fa · paneles #ffffff · tinta #111827 · cobalto #2747d6 · rosado #b4235a · verde #0f7b5c
- **Paleta oscura:** fondo #0f131a · paneles #141922 · texto #e7eaf0 · cobalto #7b93ff · rosado #ff7aa8 · verde #43d3a5
- **Maquetas:** https://claude.ai/artifact/Bf9GJ8zQzHdFsZUi7uP2vv (privada)

## 10. Pendientes para empezar a construir

- [ ] Renombrar el repo a `gio-belmar.github.io` (lo haces tú en GitHub, ver chat)
- [ ] Estadísticas: GoatCounter o Google Analytics
- [ ] Perfil breve de la portada (párrafo de 2–3 líneas bajo el nombre): ¿sirve el propuesto?
- [ ] Trabajos de KLANG a través de Obando
- [ ] Foto de perfil 4:5
- [ ] Fotos, videos y proyecto de KLANG Masquerade
