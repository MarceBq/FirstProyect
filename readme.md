# Ejercicio 01 - Javascript Drum Kit

## Sobre el reto

La página funciona como una batería virtual, puedes tocar diferentes partes usando el teclado.

Ejemplos:

- Si presionas `A` se deberá escuchar el sonido de un _clap_
- Si presionas `S` se deberá escuchar el sonido de un _hihat_

Cuando se toca una parte también se mostrará un indicador visual en la parte para saber cuál de todos ha sonado.

Para ver el resto de teclas y sonidos mirar el código HTML


## Conocimientos previos

- DOM Manipulation
- HTML Events

## Pistas

- Deberás interceptar al evento cuando se presionan teclas: `keydown`

- La clase `playing` muestra un recuadro amarillo que será nuestro indicador visual para cada tecla.

- Para reproducir un sonido deberás usar la propiedad `.play()` de los HTMLAudio elements que ya existen en el HTML
