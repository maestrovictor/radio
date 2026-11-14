# RecREdA 🎙️

**Estudio de radio escolar gratuito en el navegador**, inspirado en la idea general de una mesa de producción para pódcast, desarrollado de forma independiente para la comunidad educativa y REdA.

## Versión 0.1 (prototipo)

- Micrófono con permisos del navegador, control de volumen e indicador de nivel.
- Ocho pads de sintonías y efectos originales generados por Web Audio API.
- Sustitución de cada pad por un archivo de audio local.
- Mezcla de micrófono + sonidos y grabación mediante MediaRecorder.
- Reproducción y descarga de la grabación en WebM/Opus o M4A según el navegador.
- Guion editable con guardado local y exportación TXT.
- Teclas numéricas 1–8 para efectos.

## Ejecutar

Abrir `index.html` desde un servidor local o alojamiento HTTPS. Por ejemplo, desde esta carpeta ejecutar `python3 -m http.server 8000` y visitar `http://localhost:8000`.

**Importante:** El micrófono requiere contexto seguro (HTTPS o localhost). Los archivos de pads se mantienen en memoria y no persisten al recargar. Descargar la grabación antes de cerrar la pestaña. La grabación no se envía a ningún servicio. El archivo generado depende del formato admitido por MediaRecorder en cada navegador.

## Próximos pasos

- Bancos de sonido guardados mediante IndexedDB.
- Pistas múltiples, pausa, edición y exportación WAV.
- Modo docente/alumnado y accesibilidad ampliada.
- Publicación opcional con autorización de derechos de imagen/voz.
- Pruebas de compatibilidad (Chromium, Firefox, Safari y dispositivos escolares).

**REdA** — Proyecto no oficial, preparado para revisión y evolución colaborativa.
