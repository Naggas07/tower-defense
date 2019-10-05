const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)
game.start()

//events

canvas.addEventListener("mousedown", e => {
    let position = getCursorPosition(canvas, e)
    game.newTower(position.x, position.y)
})

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
   
    return {
      "x": x,
      "y": y
    }
  }

/* MVP STEPS */

/* 
1 - Pintar enemigo - ok
2 - moverlo en el canvas - ok
3 - El enemigo recibe coordenadas en un array - ok
4 - sigue estos puntos de coordenadas si hay mas hay que hacer cambios de dirección
5 - pintar una torre
6 - pintar hitbox de la torre
7 - comprobar colision con hitbox de la torre 
8 - torre dispara enemigo
9 - eliminar enemigo
 */