class Waves {
    constructor(ctx, routes){
        this.ctx = ctx
        this.round = 0
        this.numEnemies = [10,1]
        this.arrayRoad = 0
        this.routes = routes
        this.delayTime = 100
        this.delayFinalWaves = 2000
        this.deaths = 0
    }



    roundEnd(){
        return this.deaths === this.numEnemies[this.round]
    }

    newRoad(){
        return (this.round % this.numEnemies.length) === 0
    }

    move(){
        
        if(this.roundEnd()){
            this.deaths = 0
            this.round++
            if(this.newRoad()){
                this.arrayRoad++
                this.round = 0
            }
        }
    }



}