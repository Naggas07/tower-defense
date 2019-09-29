class Game {
    constructor(ctx){
        this.ctx = ctx
        this.intervalId = null
        this.bg = new Background(this.ctx)
        this.live = 50
        this.coins = 0
        this.road = new Road(this.ctx) 
        this.enemies = [new Enemies(ctx, this.road.x, this.road.y)]
        this.count = 0
    }

    start(){
        this.intervalId = setInterval(()=>{
            this._clear()
            this._draw()
            this._move()
            this._enemyEnd()
            this._checklife()
            this._clearEnemies()

            if(this.count++ % 60 === 59){
                this.enemies.push(new Enemies(this.ctx, this.road.x, this.road.y))
            }

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
                this.live -= e.damage
                console.log(`You lose a life. You have only ${this.live}`)
            }
        })
    }

    _clearEnemies(){
        this.enemies = this.enemies.filter(e => !e.isEnd())
    }

    _checklife(){
        if(this.live <= 0){
            this._gameOver()
        } 
    }

    _gameOver(){
        clearInterval(this.intervalId)

        this.ctx.font = "40px Comic Sans MS";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            "GAME OVER",
         this.ctx.canvas.width / 2,
         this.ctx.canvas.height / 2
        );
    }
}