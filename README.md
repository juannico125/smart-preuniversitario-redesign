# Smart Preuniversitario — propuesta de rediseño (demo)

Página estática de una sola vista. **Demostración de diseño, no oficial** — no
está afiliada ni aprobada por Smart Preuniversitario. Nada está conectado: no
hay backend, no hay envío de formularios, no hay analítica, no se carga ningún
servicio externo salvo las fuentes de Google Fonts.

## Qué es esto

Un rediseño de la interfaz de `smartpreuniversitario.edu.co` (hoy un sitio
Joomla). **Conserva toda la información del sitio original** y usa la paleta de
marca real de la institución —verde bosque, verde hoja y amarillo, leídos del
logo y del sitio en vivo—. El registro de composición (radios generosos, botones
píldora, filas de chips) viene de una referencia moderna; la estructura no.

## Regla que se respetó

**No se inventaron cifras.** El sitio original no publica precios, duraciones,
cronogramas, tasas de admisión ni testimonios. Donde falta un dato aparece un
bloque `— por confirmar` etiquetado, no un número fabricado.

Datos verificables en el sitio original que sí se usaron:

| Dato | Fuente |
| --- | --- |
| Fundación 25 jul 2011 | pie del sitio original |
| Resolución N.° 20161700086834, 10 ago 2016 | pie del sitio original |
| Calle 5 # 3-18, Centro, Popayán (Cauca) | pie y contacto |
| Tel 838 7383 · Cel 313 657 3011 · 321 247 0001 | pie del sitio original |
| Preicfes Saber 11 · Preuniversitario UdeA | menú del sitio |
| Curso Preicfes Saber 11 **en aula virtual, clases en vivo por videoconferencia** | banner de portada |
| Estudiantes · Trabaje con nosotros · P.Q.R.S.F · Pagos en línea · Nuestros puntajes | botones de portada |
| Universidad del Cauca · UdeA · U. de Cartagena · UNAL · ICFES · PSE | fila de entidades |
| «Lo más visto» | módulo de portada |
| Institucional: Nosotros / Sistema de Enseñanza / Valores Institucionales | submenú |
| Pagos por Davivienda PSE y Zona Pagos | enlaces del sitio |

## Espacios reservados para media

La página deja **8 slots etiquetados** con proporción y tamaño recomendado. No
hay fotos de archivo ni imágenes inventadas.

| Sección | Slot | Proporción | Mínimo |
| --- | --- | --- | --- |
| Hero | Video de presentación | 16:9 | 1920×1080 |
| Aula virtual | Captura de una clase en vivo | 16:10 | 1600×1000 |
| Institucional | Fachada o salones de la sede | 21:9 | 2100×900 |
| Admitidos | 3 fotos de admitidos | 4:3 | 1200×900 |
| Sedes | Mapa o foto de la ubicación | 4:3 | 1200×900 |

Los logotipos de las universidades y del ICFES **no se reproducen** — son marcas
registradas de sus titulares. La sección de entidades es tipográfica.

## Copy que la institución debe validar antes de publicar

- Los cinco pasos de **La ruta** (diagnóstico → fundamentación → entrenamiento
  → simulacros → presentación) son una propuesta de redacción, no el texto del
  sitio original.
- **Nosotros**, **Sistema de Enseñanza** y **Valores Institucionales** están como
  slots: el contenido oficial de esas tres páginas no se copió.
- La fila **«Dirigido a»** de la tabla de programas es una inferencia.
- Todos los campos `— por confirmar` (unos 20).
- Las fotos de admitidos necesitan **autorización escrita de uso de imagen**, y
  del acudiente si el estudiante es menor de edad.

## Estructura

```
index.html
css/tokens.css   design tokens — todo color y fuente sale de aquí
css/site.css     la hoja de la página
js/site.js       menú móvil, submenú, barra inferior. Nada más.
```

## Cómo verla

Abrir `index.html` en el navegador. No hay build, no hay dependencias.

## Sistema de diseño

- **Género** modern-minimal · **Macroestructura** Narrative Workflow
- **Tema** custom (tuned) sobre la marca real — papel `oklch(96.5% 0.007 95)`,
  verde profundo `oklch(36% 0.090 148)`, verde hoja `oklch(58% 0.150 145)`,
  amarillo `oklch(84% 0.155 92)`
- **Tipografía** Bricolage Grotesque (display) · Public Sans (texto) ·
  JetBrains Mono (etiquetas y cifras)
- **Nav** N1b tres secciones + franja superior · **Footer** Ft1 mast-headed
- **Movimiento** cuatro primitivas: menú, submenú, barra inferior, acordeón.
  Con `prefers-reduced-motion`.
- **Slop test** 57/58. El gate 23 (acento ≤ 5 % del viewport) se anula a
  propósito: el verde aquí es identidad de marca, no decoración. Contraste AA
  verificado en todas las superficies verdes.

Construido con [Hallmark](https://www.usehallmark.com).
