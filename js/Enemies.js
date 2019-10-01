class Enemies {
    constructor(ctx,x,y, coordenates){
        this.ctx = ctx 
        this.type = null
        this.coordenates = coordenates
        this.x = x
        this.y = y + (Math.random() * 70)
        this.w = 20
        this.h = 30
        this.vx = 0.3
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
        this.x += this.vx
        this.y += this.vy
    }

    isEnd(){
        return this.x >= this.ctx.canvas.width
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