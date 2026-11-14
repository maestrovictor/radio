# Publicar RecREdA con GitHub Pages

## Situación actual

RecREdA está en la rama `feat/recreda-studio` del repositorio `maestrovictor/radio`, dentro de `RecREdA/`, y se revisa mediante un pull request en borrador. **La rama no es la web pública**.

## Preparación realizada

Se incluye un workflow `publish-recreda.yml` que, una vez integrado en `main`, empaquetará todas las aplicaciones HTML de la raíz del repositorio (para conservar la actual) y la carpeta `RecREdA`. No sobrescribe archivos fuente.

## Pasos para publicar

1. Revisar los cambios de RecREdA y las pruebas con audio real.
2. Integrar el pull request en `main` cuando estén aceptados.
3. En el repositorio, abrir **Settings → Pages → Build and deployment → Source**.
4. Elegir **GitHub Actions** como origen de publicación (si no está elegido).
5. Desde **Actions**, ejecutar o comprobar el workflow «Publicar RecREdA y herramientas de radio».
6. Verificar la URL de publicación mostrada en GitHub Pages. Para un proyecto estándar con este nombre sería `https://maestrovictor.github.io/radio/RecREdA/`, **solo si Pages ha quedado activado y el despliegue ha terminado correctamente**.

⚠️ GitHub Pages publica **un sitio por repositorio**. Si `radio` ya tiene configurado Pages, se debe revisar la configuración antes de cambiarla, porque el workflow nuevo será responsable del sitio entero. La aplicación actual de la raíz se incluye expresamente en el paquete de despliegue para no dejarla fuera.

**Nota:** Esta configuración no activa Pages automáticamente. El administrador del repositorio debe revisar la opción y habilitarla, si es necesario.
