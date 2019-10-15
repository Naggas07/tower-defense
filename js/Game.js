class Game {
    constructor(ctx){
        this.ctx = ctx
        this.intervalId = null
        this.bg = new Background(this.ctx)
        this.routes = [[[0,300],[901,300]],
        [[0,200],[200,200],[200,400],[600,400], [600,200],[905,200]],
        [[0,100],[100,100],[100,300],[300,300], [300,200],[600,200],[600,400],[200,400],[200, 525],[900,525]]]
        this.initialGold = 50
        this.live = 50
        this.enemiesKill = 0
        this.roundEnemisKills = 0
        this.coins = new Coins(this.ctx, this.initialGold)
        this.road = new Road(this.ctx, this.routes) 
        this.towers = []
        this.enemies = []
        this.waves = new Waves(this.ctx, this.routes)
        this.count = 0
        this.enemiesPassRound = 0
        
    }

    start(){
        this.intervalId = setInterval(()=>{
            this._clear()
            this._draw()
            this._move()
            this._enemyEnd()
            this._checklife()
            this._checkWaves()
            if(this.enemies.length > 0){
                this._checkDamage()
            }            
            this._clearEnemies()
            this._addEnemies()

            

        }, 1000/60)
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    _draw(){
        this.bg.draw()
        this.road.draw(this.waves.arrayRoad)
        this.towers.forEach(t => t.draw())
        this.enemies.forEach(e => e.draw())
        this.coins.draw()
        this._drawInterface()
    }

    _move(){
        this.enemies.forEach(e => e.move())
    }

    //towers
    newTower(x,y){
        const towerTry = new Tower(this.ctx, x, y)
        if(this.coins.total >= towerTry.value) {
            this.towers.push(towerTry)
            this.coins.total -= towerTry.value
        }
    }
    
    _clearTowers(){
        this.towers.forEach(t => {
            this.coins.total += t.value
        })
        this.towers = []
    }

    // enemies

    _addEnemies(){
        if(this.count++ % this.waves.delayTime === 0 && (this.roundEnemisKills + this.enemies.length + this.enemiesPassRound) < this.waves.numEnemies[this.waves.round]){
                this.enemies.push(this.newEnemie(this.ctx, this.routes[this.waves.arrayRoad], this.waves))
        }
        
        if (this.roundEnemisKills + this.enemiesPassRound  === this.waves.numEnemies[this.waves.round]){
            setTimeout(() => {
                this.roundEnemisKills = 0
                this.enemiesPassRound = 0
                this.waves.move()
                if(this.waves.newRoad()) this._clearTowers()
            }, this.waves.delayFinalWaves)
        }
        
    }

    _enemyEnd(){
        this.enemies.forEach(e => {
            if (e.isEnd()){
                this.live -= e.damage
                this.enemiesPassRound++
                this.waves.deaths++
                console.log(`You lose a life. You have only ${this.live}`)
            }
        })
    }

    _checkDamage(){
        this.towers.forEach(t => {
            this.enemies.forEach(e => {
                e.checkDamage(t)
                if (e.isDeath()){
                    this.roundEnemisKills++
                    this.enemiesKill++
                    this.waves.deaths++
                    this._deleteEnemies()
                    this.coins.total += e.value
                }
            })
        })        
    }

    _clearEnemies(){
        this.enemies = this.enemies.filter(e => !e.isEnd())
    }

    _deleteEnemies(){
        this.enemies = this.enemies.filter(e => !e.isDeath())
    }

    //Player

    _checklife(){
        if(this.live <= 0){
            this._gameOver()
        } 
    }

    _checkWaves(){
        if(this.waves.arrayRoad >= this.routes.length){
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

    // select enemies

    newEnemie(ctx, route, wave){
        if(wave.round === (route.length -1)){
            return new Boss(ctx, route)
        } else if( wave.arrayRoad === 0 && wave.round < (route.length - 1)){
            return new Enemies(ctx, route)
        } else if( wave.arrayRoad === 1 && wave.round < (route.length - 1)){
            return new Soldier(ctx, route)
        } else if( wave.arrayRoad === 2 && wave.round < (route.length - 1)){
            return new Mage(ctx, route)
        } 
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
            (this.waves.round + this.waves.arrayRoad * this.waves.numEnemies.length) +  1,
            40,
            70
        )



    }

    
}