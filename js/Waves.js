class Waves {
    constructor(ctx){
        this.ctx = ctx
        this.round = 0
        this.numEnemies = [2, 8, 40, 50, 1]
        this.delayTime = 500
        this.delayFinalWaves = 2000
        this.deaths = 0
    }



    roundEnd(){
        return (this.deaths === this.numEnemies[this.round])
    }

    move(){
        if(this.roundEnd()){
            this.deaths = 0
            this.round++
        }
    }



}