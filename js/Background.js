class Background {
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height

        this.img = new Image()
        this.img.src = "https://www.sharecg.com/images/medium/3024.jpg"
    }


    draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = "#35682D"
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.closePath()
    }
}