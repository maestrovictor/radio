# Videojuego: "Misión Estudio de Radio"

## Objetivo final
El objetivo del videojuego es **emitir un programa de radio en vivo** desde el estudio escolar.

---

## Estructura del juego por fases (objetos que deben adquirir)

La partida se organiza como una misión principal con 5 fases. En cada fase, los jugadores deben conseguir un elemento clave para desbloquear la siguiente.

### Fase 1: Conseguir el **Permiso del maestro**
- **Meta:** obtener la autorización oficial para usar el estudio.
- **Cómo se consigue:** minijuego de diálogo con opciones correctas (responsabilidad, horario, normas).
- **Objeto desbloqueado:** `Permiso firmado`.
- **Sin este objeto:** no se puede acceder a ninguna fase técnica.

### Fase 2: Reunir el **Equipo de radio**
- **Meta:** completar el grupo de trabajo.
- **Cómo se consigue:** puzzle de selección de compañeros según habilidades.
- **Roles obligatorios:**
  - Locución (2)
  - Redacción (1)
  - Técnico de sonido (1)
- **Objeto desbloqueado:** `Equipo completo`.
- **Sin este objeto:** no se puede crear ni ejecutar el programa.

### Fase 3: Construir el **Guion del programa**
> Importante: aquí el guion **no es el objetivo final**, sino un recurso que deben conseguir para avanzar.

- **Meta:** crear un guion funcional con inicio, desarrollo y cierre.
- **Cómo se consigue:** minijuego de ordenar tarjetas de contenido + elegir música/efectos.
- **Objeto desbloqueado:** `Guion final`.
- **Sin este objeto:** la emisión no puede comenzar.

### Fase 4: Lograr el **Acompañamiento docente al estudio**
- **Meta:** llegar al estudio con supervisión adulta.
- **Cómo se consigue:** misión de coordinación (puntualidad, materiales, ruta correcta).
- **Objeto desbloqueado:** `Acceso al estudio`.
- **Sin este objeto:** puerta del estudio bloqueada.

### Fase 5: Activar la **Emisión en vivo** (final)
- **Meta:** completar la transmisión sin interrupciones graves.
- **Cómo se consigue:** secuencia en tiempo real:
  1. cuenta atrás,
  2. micrófonos ON,
  3. seguir la escaleta,
  4. corregir fallos técnicos aleatorios.
- **Objeto/estado final:** `Programa emitido`.

---

## Sistema de inventario (progresión)
Para ganar, el inventario debe contener estos 4 elementos antes de la fase final:
1. `Permiso firmado`
2. `Equipo completo`
3. `Guion final`
4. `Acceso al estudio`

Cuando están completos, se desbloquea automáticamente la misión final: **Emitir**.

---

## Escaleta mínima para la fase final (usando el Guion final)
- 00:00–00:10 → Cuenta atrás + saludo
- 00:10–00:40 → Presentación del tema
- 00:40–01:30 → Noticia/entrevista breve
- 01:30–02:10 → Sección con efectos sonoros
- 02:10–02:40 → Cierre y despedida

> Esta escaleta es una herramienta jugable dentro de la fase final, no el objetivo del videojuego.

---

## Condición de victoria
El jugador gana cuando:
- llega a la fase final con todos los objetos clave, y
- consigue completar la emisión con el estado `Programa emitido`.

## Condición de derrota
El jugador pierde si:
- intenta emitir sin `Guion final`, o
- no consigue `Permiso firmado`, `Equipo completo` o `Acceso al estudio`, o
- acumula demasiados fallos técnicos durante la transmisión.
