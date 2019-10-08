class Boss extends Enemies {
    constructor(ctx, coordenates){
        super(ctx,coordenates)
            this.type = null
            this.coordenates = coordenates
            this.x = coordenates[0][0]
            this.y = coordenates[0][1]
            this.roadStep = 0
            this.w = 20
            this.h = 30
            this.v = .5
            this.vx = 0
            this.vy = 0
            this.live = 1200
            this.value = 80
            this.damage = 5
            this.animatePosition = 0
            this.animateOrientation = 0
            this.counter = 0
    
            this.img = new Image()
            this.img.src = './images/boss.png'
            this.directionEnemy = {
                'sourth': true,
                'west': false,
                'east': false,
                'north': false
            }
        
    }
}