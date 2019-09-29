class Game {
    constructor(ctx){
        this.ctx = ctx
        this.intervalId = null
        this.bg = new Background(this.ctx)
        this.live = 50
        this.coins = 0
        this.road = new Road(this.ctx) 
        this.enemies = [new Enemies(ctx, this.road.x, this.road.y)]
    }

    start(){
        this.intervalId = setInterval(()=>{
            this._clear()
            this._draw()
            this._move()
            this._enemyEnd()
            this._clearEnemies()
        }, 1000/60)
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    _draw(){
        this.bg.draw()
        this.road.draw()
        this.enemies.forEach(e => e.draw())
    }

    _move(){
        this.enemies.forEach(e => e.move())
    }

    _enemyEnd(){
        this.enemies.forEach(e => {
            if (e.isEnd()){
                console.log("Enemy is end")
                return true
            }
        })
    }

    _clearEnemies(){
        this.enemies = this.enemies.filter(e => !e.isEnd())
    }
}