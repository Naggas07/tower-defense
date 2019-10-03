class Game {
    constructor(ctx){
        this.ctx = ctx
        this.intervalId = null
        this.bg = new Background(this.ctx)
        this.live = 50
        this.enemiesKill = 0
        this.roundEnemisKills = 0
        this.coins = new Coins(this.ctx)
        this.road = new Road(this.ctx) 
        this.towers = [new Tower(this.ctx, 450, 250)]
        this.enemies = []
        this.waves = new Waves(this.ctx)
        this.count = 0
        this.enemiesPassRound = 0

        // new Enemies(ctx, this.road.x, this.road.y)
    }

    start(){
        this.intervalId = setInterval(()=>{
            this._clear()
            this._draw()
            this._move()
            this._enemyEnd()
            this._checklife()
            this._checkWaves()
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
        this.coins.draw()
        this._drawInterface()
    }

    _move(){
        this.enemies.forEach(e => e.move())
    }

    //towers

    

    // enemies

    _addEnemies(){
        if(this.count++ % this.waves.delayTime === 0 && (this.roundEnemisKills + this.enemies.length + this.enemiesPassRound) < this.waves.numEnemies[this.waves.round]){
                //this.enemies.push(new Enemies(this.ctx, this.road.x, this.road.y))
                this.enemies.push(new Enemies(this.ctx, [[0,300],[300,300]]))
        }
        
        if (this.roundEnemisKills === this.waves.numEnemies[this.waves.round]){
            setTimeout(() => {
                this.roundEnemisKills = 0
                this.enemiesPassRound = 0
                this.waves.move()
            }, this.waves.delayFinalWaves)
        }
        
    }

    _enemyEnd(){
        this.enemies.forEach(e => {
            if (e.isEnd()){
                this.live -= e.damage
                this.enemiesPassRound++
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
                this.waves.deaths++
                this.coins.total += e.value
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

    _checkWaves(){
        if(this.waves.round >= this.waves.numEnemies.length){
            this.waves.round--
            this._gameWin()
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

    _gameWin(){
        clearInterval(this.intervalId)
        this._drawInterface()
        
        this.ctx.font = "40px Comic Sans MS";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            "YOU WIN",
         this.ctx.canvas.width / 2,
         this.ctx.canvas.height / 2
        );
    }


    //initial GUI

    _drawInterface(){
        //gold
        this.ctx.font = "20px Comic Sans MS";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            this.coins.total,
            860,
            70
        )
        
        this.ctx.fillText(
            'Gold',
            860,
            30
        )

        //Wave
        
        this.ctx.fillText(
            'Wave',
            40,
            30
        )
        
        this.ctx.fillText(
            this.waves.round +  1,
            40,
            70
        )



    }
    
}