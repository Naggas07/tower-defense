class Road{
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 250
        this.w = this.ctx.canvas.width
        this.h = 100
    }
    
    draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = "#EDC9AF"
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.fillStyle = "black" //change to the old color
        this.ctx.closePath()
    }
}