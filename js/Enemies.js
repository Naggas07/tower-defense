class Enemies {
    constructor(ctx,x,y){
        this.ctx = ctx 
        this.x = x
        this.y = y + (Math.random() * 70)
        this.w = 20
        this.h = 30
        this.vx = 0.3
        this.vy = 0
        this.live = 100
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
}