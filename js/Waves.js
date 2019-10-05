class Waves {
    constructor(ctx, routes){
        this.ctx = ctx
        this.round = 0
        this.numEnemies = [1,1]
        this.routes = routes
        this.delayTime = 500
        this.delayFinalWaves = 2000
        this.deaths = 0
    }



    roundEnd(){
        return this.deaths === this.numEnemies[this.round]
    }

    move(){
        if(this.roundEnd()){
            this.deaths = 0
            this.round++
        }
    }



}