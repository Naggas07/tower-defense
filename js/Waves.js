class Waves {
    constructor(ctx){
        this.ctx = ctx
        this.round = 0
        this.numEnemies = [1,1]
        this.routes = [[[0,300],[901,300]],
        [[0,200],[300,200],[600,150],[900,450]]
        
        ]
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