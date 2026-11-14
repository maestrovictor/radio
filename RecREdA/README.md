# RecREdA 🎙️

**Estudio de radio escolar en el navegador**. Proyecto original e independiente orientado a la comunidad educativa y a la Red de Radios Escolares de Andalucía (REdA).

## Versión 0.4 (en pruebas)

- **Nueva interfaz** de cabina, con indicador de grabación, pads diferenciados por color y controles accesibles en ordenador y móvil.
- **Descarga MP3 en local o guardado privado en Google Drive**: siempre es una elección del usuario. La descarga MP3 funciona sin cuenta; Drive exige habilitar OAuth de Google Cloud (ver [GOOGLE_DRIVE.md](./GOOGLE_DRIVE.md)).
- **Descarga WAV (PCM 16 bits)** generada localmente en el navegador desde la grabación. Ideal para editar en Audacity u otros programas. **Importante:** ocupa bastante más espacio que WebM/M4A.
- Descarga alternativa del archivo original (generalmente WebM/Opus en Firefox/Chrome o M4A en Safari, dependiendo del navegador).
- Banco A: 8 efectos (teclas A–H); Banco B: 8 sintonías sintetizadas (teclas 1–8), reemplazables por archivos locales.
- Micrófono con control de ganancia, medidor y botón para silenciar/restaurar la voz (M).
- Grabación local de la mezcla de micrófono y sonidos.
- Marcadores de sesión (T), registro descargable y guion editable que se conserva localmente.

## Cómo probarla

Abrir `index.html` mediante un servidor local o alojamiento HTTPS.

```sh
python3 -m http.server 8000
# http://localhost:8000/RecREdA/
```

Para comprobar la lógica básica sin navegador:

```sh
node RecREdA/tests/smoke.test.js
```

Consultar [PRUEBAS.md](./PRUEBAS.md) para las pruebas de audio con micrófono real.

## Privacidad

No hay servicio de almacenamiento ni autenticación. Los audios se procesan localmente. El navegador solicita permiso para el micrófono. El guion se guarda en localStorage del propio navegador.

## Formatos

| Formato | Uso | Características |
| --- | --- | --- |
| MP3 128 kbps | Compartir o guardar en Google Drive | Generado por lamejs localmente, **sin enviar la voz a servidores** |
| WAV 16 bits | Edición y archivos maestros | Compatible con editores, **grande** |
| WebM/Opus | Versión comprimida en Chrome/Firefox | Ligera, no todos los reproductores antiguos lo abren |
| M4A | Versión comprimida en algunos navegadores | Depende de MediaRecorder |

**MP3 está disponible** mediante el codificador LGPL-3.0 [lamejs](https://github.com/zhuker/lamejs), incluido en este repositorio, ejecutado en un Web Worker. La subida a Drive está preparada pero requiere configurar un Client ID público de Google Cloud.

La conversión WAV usa `AudioContext.decodeAudioData`. Si un navegador no puede decodificar su propia grabación, se mostrará un aviso y se podrá descargar el archivo original. Para grabaciones muy largas, WAV puede consumir mucha memoria y espacio.

## Limitaciones

- Una sola entrada de micrófono reconocida por el sistema (puede ser una mesa con varias voces premezcladas por USB).
- Aún no se incluyen pistas independientes, edición, auto-ducking ni publicación.
- Los archivos cargados en pads no persisten entre sesiones; guion sí.
- Descargar la grabación antes de cerrar la página.
- Google Drive requiere configurar OAuth, habilitar Google Drive API y en entornos educativos puede requerir la autorización del administrador de Google Workspace.
- El código está sujeto a pruebas con micrófonos reales, Firefox, Chrome, Safari y tabletas.

[Guía de publicación](./PUBLICACION.md) · [Lista de pruebas](./PRUEBAS.md).
