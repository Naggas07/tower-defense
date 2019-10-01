const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)
game.start()


/* MVP STEPS */

/* 
1 - Pintar enemigo
2 - moverlo en el canvas
3 - El enemigo recibe coordenadas en un array
4 - sigue estos puntos de coordenadas si hay mas hay que hacer cambios de dirección
5 - pintar una torre
6 - pintar hitbox de la torre
7 - comprobar colision con hitbox de la torre 
8 - torre dispara enemigo
9 - eliminar enemigo
 */