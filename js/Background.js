class Background {
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height

        this.img = new Image()
        this.img.src = "./images/grassBg.png"
    }


    draw(){
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }
}