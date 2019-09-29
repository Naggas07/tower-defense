class Game {
    constructor(ctx){
        this.ctx = ctx
        this.intervalId = null
        this.bg = new Background(this.ctx)
        this.live = 50
        this.enemiesKill = 0
        this.roundEnemisKills = 0
        this.coins = 0
        this.road = new Road(this.ctx) 
        this.towers = [new Tower(this.ctx, 450, 250)]
        this.enemies = []
        this.waves = new Waves(this.ctx)
        this.count = 0

        // new Enemies(ctx, this.road.x, this.road.y)
    }

    start(){
        this.intervalId = setInterval(()=>{
            this._clear()
            this._draw()
            this._move()
            this._enemyEnd()
            this._checklife()
            this._checkDamage()
            this._clearEnemies()
            this._addEnemies()

            

        }, 1000/60)
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    _draw(){
        this.bg.draw()
        this.road.draw()
        this.towers.forEach(t => t.draw())
        this.enemies.forEach(e => e.draw())
    }

    _move(){
        this.enemies.forEach(e => e.move())
    }

    // enemies

    _addEnemies(){
        if(this.count++ % this.waves.delayTime === 0 && (this.roundEnemisKills + this.enemies.length) < this.waves.numEnemies[this.waves.round]){
                this.enemies.push(new Enemies(this.ctx, this.road.x, this.road.y))
        }
        
        if (this.roundEnemisKills === this.waves.numEnemies[this.waves.round]){
            setTimeout(() => {
                this.roundEnemisKills = 0
                this.waves.move()
                console.log(this.waves.round)
            }, this.waves.delayFinalWaves)
        }
        
    }

    _enemyEnd(){
        this.enemies.forEach(e => {
            if (e.isEnd()){
                this.live -= e.damage
                console.log(`You lose a life. You have only ${this.live}`)
            }
        })
    }

    _checkDamage(){
        this.enemies.forEach(e => {
            e.checkDamage(this.towers[0])
            if (e.isDeath()){
                this.roundEnemisKills++
                this.enemiesKill++
                this.coins += e.value
                console.log(this.roundEnemisKills)
                console.log(this.coins)
            }
        })
    }

    _clearEnemies(){
        this.enemies = this.enemies.filter(e => !e.isEnd())
        this.enemies = this.enemies.filter(e => !e.isDeath())
    }

    //Player

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