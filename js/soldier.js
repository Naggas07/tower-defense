class Soldier extends Enemies {
    constructor(ctx, coordenates){
        super(ctx,coordenates)
            this.type = null
            this.coordenates = coordenates
            this.x = coordenates[0][0]
            this.y = coordenates[0][1]
            this.roadStep = 0
            this.w = 30
            this.h = 40
            this.v = .5
            this.vx = 0
            this.vy = 0
            this.live = 180
            this.value = 7
            this.damage = 1
            this.animatePosition = 0
            this.animateOrientation = 0
            this.counter = 0
    
            this.img = new Image()
            this.img.src = './images/Soldier.png'
            this.directionEnemy = {
                'sourth': true,
                'west': false,
                'east': false,
                'north': false
            }
        
    }
}