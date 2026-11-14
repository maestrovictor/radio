# RecREdA 🎙️

**Estudio de radio escolar en el navegador**. Proyecto original e independiente orientado a la comunidad educativa y la Red de Radios Escolares de Andalucía (REdA).

## Versión 0.2

- **Banco A — efectos**: 8 pads (teclas A–H).
- **Banco B — música**: 8 pads (teclas 1–8), cada uno se puede volver a pulsar para detener la reproducción.
- Efectos y sintonías de demostración sintetizados en el navegador; cada pad puede cargar un archivo de audio personal (MP3, WAV u otros formatos compatibles con el navegador).
- Captura de **un micrófono**, con controles de volumen, nivel de entrada y silencio/activación rápida (tecla M).
- Grabación de la mezcla local del micrófono y la botonera con MediaRecorder, reproducción y descarga en WebM/Opus o M4A según compatibilidad.
- **Registro de sesión** con inicio, fin, sonidos reproducidos, micrófono silenciado y marcadores (botón o tecla T), exportable a TXT.
- Guion radiofónico editable, guardado automáticamente en localStorage y exportable a TXT.
- Diseño adaptable a ordenador y tableta.

## Cómo ejecutar

No utiliza dependencias externas. Servir el archivo con un servidor local o un alojamiento **HTTPS**:

```sh
python3 -m http.server 8000
# Abrir http://localhost:8000/RecREdA/
```

Para usar GitHub Pages, consultar [PUBLICACION.md](./PUBLICACION.md).

## Limitaciones de esta primera versión

- Hay un único micrófono. Las interfaces de audio USB con varias voces mezcladas por hardware (como una mesa de mezclas con salida USB) pueden utilizarse si el sistema las reconoce como un dispositivo de entrada.
- No existe edición multipista ni exportación MP3 integrada.
- Los archivos cargados en los bancos no persisten tras cerrar o recargar la página; el guion sí se conserva localmente en el mismo navegador.
- Las melodías de demostración son **breves composiciones sintetizadas**; no son una biblioteca de música libre de terceros.
- Si cierras la página sin descargar la grabación, puede perderse. Hay una advertencia de salida durante la grabación, pero los navegadores móviles no siempre la muestran.
- Se ha pasado una validación de sintaxis y una **prueba automatizada con APIs simuladas** (16 pads, micrófono, inicio/fin, marcadores y descarga). Todavía falta validar dispositivos y audio real en Chrome/Edge/Firefox/Safari.

## Privacidad y uso educativo

La grabación y reproducción se procesan localmente. Esta versión no sube los audios a ningún servidor ni solicita iniciar sesión. El alojamiento web puede registrar datos de acceso habituales; evita publicar archivos de audio del alumnado sin autorización y verifica los derechos de músicas externas.

Proyecto de desarrollo no oficial: su incorporación a REdA requerirá revisión y validación.

## Próximas versiones

1. Selección de dispositivo de entrada, prueba de nivel y mejores avisos de fallo de micrófono.
2. Fondo musical en bucle, auto-ducking de voz y control de ganancia.
3. Banco de efectos persistente mediante IndexedDB.
4. Grabaciones multipista, edición y exportación WAV/MP3.
5. Plantillas de programas, proyectos compartidos y accesibilidad avanzada.
