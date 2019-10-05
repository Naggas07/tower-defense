class Enemies {
    constructor(ctx, coordenates){
        this.ctx = ctx 
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
        this.live = 100
        this.value = 5
        this.damage = 1
        
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(this.x ,this.y, this.w, this.h)
        this.ctx.closePath()
    }

    move(){
        this.calculateRoute()
        
        this.x += this.vx
        this.y += this.vy
        
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
        //center Obj distance
        const distX = Math.abs(el.x - (this.x + (this.w / 2)))
        const distY = Math.abs(el.y - (this.y + (this.h / 2)))
        const distance = Math.hypot(distX,distY)
        if (distance <= el.area){
            this.reciveDamage(el.damage)
        }
    }

    
}