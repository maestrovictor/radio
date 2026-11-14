# Lista de comprobación RecREdA 0.3

## Pruebas automáticas

`node RecREdA/tests/smoke.test.js` valida HTML básico, sintaxis del JavaScript, presencia de los controles y **cabecera PCM WAV** para un AudioBuffer simulado. No valida sonido real.

## Pruebas manuales con audio

- [ ] La nueva interfaz se visualiza sin solapamientos en ordenador, tableta y móvil.
- [ ] Se distinguen cabina, control de grabación y dos bancos de 8 sonidos.
- [ ] El micrófono pide permiso y su nivel responde al hablar.
- [ ] Silenciar la voz corta solo el micrófono, no los efectos.
- [ ] Grabar un programa de 30 segundos con música y voz.
- [ ] Al terminar aparecen el reproductor, **Descargar WAV** y **Archivo original**.
- [ ] El WAV se puede abrir en Audacity y conserva voz y efectos sincronizados.
- [ ] El archivo original sigue descargándose y reproduciéndose correctamente.
- [ ] El WAV descargado presenta PCM de 16 bits y es mayor que el original comprimido.
- [ ] Marcadores y descarga TXT de la sesión funcionan.
- [ ] Guion conserva lo escrito al recargar.
- [ ] Funciona con Zoom P8 conectada por USB.
- [ ] Comprobar Safari/iPad y navegadores escolares.
- [ ] Hacer una grabación de 10 minutos para revisar rendimiento.

**Nota:** ni el micrófono, ni el flujo real de conversión de un WebM/Opus a WAV han sido verificados todavía en un navegador con hardware real. La prueba automática comprueba la estructura de los datos WAV a partir de un audio simulado.
