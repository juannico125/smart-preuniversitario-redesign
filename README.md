# Smart Preuniversitario — propuesta de rediseño (demo)

Página estática de una sola vista. **Demostración de diseño, no oficial** — no
está afiliada ni aprobada por Smart Preuniversitario. Nada está conectado: no
hay backend, no hay envío de formularios, no hay analítica, no se carga ningún
servicio externo salvo las fuentes de Google Fonts.

## Qué es esto

Un rediseño de la interfaz de `smartpreuniversitario.edu.co` (hoy un sitio
Joomla de 2016). Toma el registro visual de una referencia de bootcamp moderno
—papel crema, verde menta como color señal, botones píldora negros, tarjetas de
radio generoso— pero **la estructura es propia**: la espina de la página es la
ruta de admisión, no un embudo de venta copiado.

## Regla que se respetó

**No se inventaron cifras.** El sitio original no publica precios, duraciones,
cronogramas, tasas de admisión ni testimonios. Donde falta un dato aparece un
bloque `— por confirmar` etiquetado, no un número fabricado.

Los únicos datos duros de la página son verificables en el sitio original:

| Dato | Fuente |
| --- | --- |
| Fundación 25 jul 2011 | pie del sitio original |
| Resolución N.° 20161700086834, 10 ago 2016 | pie del sitio original |
| Calle 5 # 3-18, Centro, Popayán | página de contacto |
| 838 7383 · 313 657 3011 · 321 247 0001 | página de contacto |
| Pre Saber 11 · Preuniversitario UdeA | menú del sitio original |
| Pagos por Davivienda PSE y Zona Pagos | enlaces del sitio original |

## Copy que la institución debe validar antes de publicar

- Los cinco pasos de **La ruta** (diagnóstico → fundamentación → entrenamiento
  → simulacros → presentación) son una estructura razonable para un
  preuniversitario, pero no están tomados textualmente del sitio original.
- La fila **«Dirigido a»** de la tabla de programas es una inferencia.
- La sección **«Por qué presencial»** es argumentación escrita para la demo.
- Todos los campos `— por confirmar`.

## Estructura

```
index.html
css/tokens.css   design tokens — todo color y fuente sale de aquí
css/site.css     la hoja de la página
js/site.js       menú móvil + barra inferior. Nada más.
```

## Cómo verla

Abrir `index.html` en el navegador. No hay build, no hay dependencias, no hay
`npm install`.

## Sistema de diseño

- **Género** modern-minimal · **Macroestructura** Narrative Workflow
- **Tema** custom (tuned) — papel `oklch(95.6% 0.006 85)`, acento menta
  `oklch(89.5% 0.095 150)`
- **Tipografía** Bricolage Grotesque (display) · Public Sans (texto) ·
  JetBrains Mono (etiquetas y cifras)
- **Nav** N1b tres secciones flotante · **Footer** Ft1 mast-headed
- **Movimiento** tres primitivas: menú, barra inferior, acordeón. Con
  `prefers-reduced-motion`.

Construido con [Hallmark](https://www.usehallmark.com).
