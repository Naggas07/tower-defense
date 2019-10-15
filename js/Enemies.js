class Enemies {
    constructor(ctx, coordenates){
        this.ctx = ctx 
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
        this.live = 100
        this.value = 5
        this.damage = 1
        this.animatePosition = 0
        this.animateOrientation = 0
        this.counter = 0
        this.vAfectations = false

        this.img = new Image()
        this.img.src = './images/Enemy_1.png'
        this.directionEnemy = {
            'sourth': true,
            'west': false,
            'east': false,
            'north': false
        }
        
    }

    draw(){

        this.ctx.drawImage(
            this.img,
            this.animatePosition * (this.img.width /3),
            this.animateOrientation*(this.img.height / 4),
            this.img.width /3,
            this.img.height / 4,
            this.x,
            this.y - this.h/2,
            this.w,
            this.h          
        )

        this.counter++
    }

    move(){
        this._animate()
        this.calculateRoute()
        this.calculateOrientation()
        this.moveSide()
        this.x += this.vx
        this.y += this.vy        
    }

    _animate(){
        if(this.counter === 15){
            this.counter = 0
            if(++this.animatePosition === 3){
                this.animatePosition = 0
            }
        }
    }

    calculateRoute(){

        if(this.roadStep >= this.coordenates.length){
            this.v = 0            
        }else{
            if(Math.abs(this.coordenates[this.roadStep][0]- this.x) < 1 &&  Math.abs(this.coordenates[this.roadStep][1]- this.y) < 1){
                this.roadStep++
            }
            // if((this.x > this.coordenates[this.roadStep][0] -1 || this.x > this.coordenates[this.roadStep][0] + 1)  && (this.y > this.coordenates[this.roadStep][1] -1 ||this.y > this.coordenates[this.roadStep][1] +1 )){
            //     this.roadStep++
            // }
            const difX = this.coordenates[this.roadStep][0] - this.coordenates[this.roadStep - 1][0]
            const difY = this.coordenates[this.roadStep][1] - this.coordenates[this.roadStep - 1][1]

            const percentajeX = difX / (Math.abs(difY) + Math.abs(difX))
            const percentajeY = difY / (Math.abs(difY) + Math.abs(difX))

            this.vx = this.v * percentajeX
            this.vy = this.v * percentajeY
          
            

            
            
            

            
        }
         
    }

    isEnd(){
        return this.x > this.ctx.canvas.width || this.x < 0 || this.y > this.ctx.canvas.height || this.y < 0
    }

    isDeath(){
        return this.live <= 0
    }

    reciveDamage(int){
        this.live -= int
    }

    checkDamage(el){
        this.resetPeriodDamage()
        //center Obj distance
        const distX = Math.abs(el.x - (this.x + (this.w / 2)))
        const distY = Math.abs(el.y - (this.y + (this.h / 2)))
        const distance = Math.hypot(distX,distY)
        if (distance <= el.area){
            this.reciveDamage(el.damage)
            if(el.type === 'ice'){
                this.vAfectations = true
            }
            this.periodDamage(el.period)
        }
    }

    resetPeriodDamage(){
        this.vAfectations = false
    }

    periodDamage(reduction){
        if(this.vAfectations){
            this.v -= reduction
        }else{
            this.v = .5
        }
    }

    resetOrientation(){
        this.directionEnemy = {
            'sourth': false,
            'west': false,
            'east': false,
            'north': false
        }
    }

    calculateOrientation(){
        this.resetOrientation()
        if (this.vx < 0){
            this.directionEnemy.west = true
        } else if(this.vx > 0){
            this.directionEnemy.east = true
        } else if(this.vy < 0){
            this.directionEnemy.north = true
        } else{
            this.directionEnemy.sourth = true
        }
    }

    moveSide(){
        if(this.directionEnemy.sourth){
            this.animateOrientation = 0
        } else if(this.directionEnemy.west){
            this.animateOrientation = 1
        } else if(this.directionEnemy.east) {
            this.animateOrientation = 2
        } else {
            this.animateOrientation = 3
        }
    }

    
}