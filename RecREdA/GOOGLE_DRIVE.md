# Activar «Guardar MP3 en Google Drive» en RecREdA

La **descarga local MP3** funciona sin cuentas ni configuración.
El botón **Guardar MP3 en Drive** requiere una autorización OAuth de Google por cada docente. Está preparado, pero **no funcionará hasta configurar el ID de cliente de tu proyecto Google Cloud**. La integración de Google Drive en ChatGPT no se reutiliza desde una web pública.

## Preparar la configuración de Google Cloud

1. En https://console.cloud.google.com/ crea un proyecto de Google Cloud, por ejemplo **RecREdA**.
2. En **APIs y servicios**, habilita **Google Drive API**.
3. En **Google Auth Platform** (pantalla de consentimiento OAuth), configura el nombre y un correo de soporte. Selecciona el tipo de audiencia adecuado:
   - **Internal** solo si toda la comunidad usuaria pertenece a la misma organización de Google Workspace y el administrador lo permite.
   - **External** si van a utilizarlo docentes de centros diferentes. Durante las pruebas añade las cuentas autorizadas como **test users**. Antes de ofrecerlo a muchos centros puede ser necesaria la verificación de Google.
4. Añade únicamente el permiso `https://www.googleapis.com/auth/drive.file` (archivos creados o abiertos mediante esta aplicación).
5. Crea una credencial **OAuth Client ID → Web application** con los **Authorized JavaScript origins**:
   - `https://maestrovictor.github.io`
   - Para desarrollo opcional: `http://localhost:8000`
   **Importante:** añade el origen, **sin** `/radio/RecREdA/` y sin una barra final.
6. Copia el **Client ID** público, que acaba habitualmente en `.apps.googleusercontent.com`, y pégalo entre las comillas de `RecREdA/config.js`:

```js
window.RECREDA_GOOGLE_CLIENT_ID = 'TU_ID_PUBLICO.apps.googleusercontent.com';
```

7. Publica el cambio de configuración mediante GitHub Pages. No añadas **Client Secret**, claves de API privadas, access tokens ni refresh tokens al repositorio.

## Funcionamiento

1. Grabar y parar el programa.
2. Pulsar **Descargar MP3** para guardarlo localmente (sin iniciar sesión en Google).
3. Alternativamente, pulsar **Guardar MP3 en Drive**.
4. Elegir una cuenta de Google y autorizar `drive.file`.
5. El navegador convierte la mezcla a MP3 y sube el archivo al **Mi unidad** de la cuenta autorizada; no lo comparte públicamente.
6. Un enlace permite abrir el archivo guardado. Se puede utilizar **ambas opciones** sobre la misma grabación.

La aplicación no conserva los tokens en localStorage ni en el repositorio. El proceso solo se inicia al pulsar el botón de Drive.

## Limitaciones y prevención

- **Google Workspace educativo:** un administrador puede bloquear aplicaciones OAuth externas; se debe autorizar desde la consola de administración cuando corresponda.
- **Protección de datos:** las grabaciones de menores solo deben subirse a una cuenta y unidad autorizadas para ese uso, con los procedimientos y autorizaciones del centro. Una cuenta particular de un docente puede no ser adecuada.
- **Archivos grandes:** se utiliza una sesión de subida reanudable. La primera implementación sube el contenido en una solicitud; si se interrumpe no reintenta automáticamente.
- **Conexión:** se requiere conexión a Google y permiso del navegador para abrir el diálogo de autorización.
- **Navegadores:** pendiente validación completa de OAuth, conversión MP3 y subida real desde los distintos navegadores y dispositivos escolares.
- **Privacidad:** el MP3 se genera enteramente en un Web Worker del navegador, usando `lamejs` bajo LGPL. El audio solo sale del dispositivo tras elegir expresamente Guardar en Drive.
- **No equivale a publicar un pódcast:** guardar en Drive no crea un enlace público ni una emisión de radio. Compartir es una decisión posterior.

## Recursos oficiales

- https://developers.google.com/identity/oauth2/web/guides/use-token-model
- https://developers.google.com/workspace/drive/api/guides/manage-uploads
- https://developers.google.com/workspace/drive/api/guides/api-specific-auth
