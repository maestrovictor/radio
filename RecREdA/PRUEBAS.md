# Lista de comprobación de RecREdA 0.2

La validación inicial de sintaxis JavaScript y de interacciones se ha realizado con **APIs simuladas**; no sustituye estas pruebas con sonido real.

## Equipo recomendado

Ordenador con Chrome o Edge recientes; micrófono USB o interfaz de audio; auriculares. Abrir la web en HTTPS o localhost.

- [ ] La página carga y aparecen 8 efectos (A–H) y 8 músicas (1–8).
- [ ] Al activar el micrófono aparece el permiso del navegador y se mueve el indicador de nivel al hablar.
- [ ] «Silenciar voz» pone el nivel de voz a cero sin parar la grabación; «Activar voz» lo restaura.
- [ ] Los efectos se escuchan en los auriculares y quedan en la grabación.
- [ ] Las músicas se escuchan, y pulsar el mismo pad de nuevo detiene esa música.
- [ ] Subir un MP3 o WAV al pad sustituye el sonido y queda grabado en la mezcla.
- [ ] «Grabar» inicia el cronómetro, «Añadir marcador» incorpora un evento y «Parar» genera una reproducción descargable.
- [ ] El archivo descargado se escucha de principio a fin, con voces y sonidos sincronizados.
- [ ] El registro de la sesión se descarga en TXT.
- [ ] El guion persiste al recargar y puede descargarse en TXT.
- [ ] Ningún archivo de voz se transmite a un servidor.
- [ ] No aparecen errores de consola al grabar durante al menos 10 minutos.
- [ ] Prueba de funcionamiento en Firefox, Safari/iPadOS y en una tableta Android.

## Observación

Cuando se usa una mesa USB como fuente de micrófono, la aplicación toma **la mezcla USB entregada por esa mesa**, no sus canales aislados. Aconsejamos auriculares y evitar monitorizar el micrófono por altavoces.
