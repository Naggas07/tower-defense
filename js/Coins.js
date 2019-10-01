class Coins {
    constructor(ctx){
        this.ctx = ctx
        this.x = 10
        this.y = 550
        this.w = 40
        this.h = 40
        this.frames = 4
        this.frameIndex = 0
        this.total = 0

        this.counter = 0

        this.img = new Image()
        this.img.src = "../images/coins.png"
    }

    draw(){
        this.ctx.styleFill = "black"
        /*this.ctx.drawImage(
            this.img,
            0,
            this.img.frameIndex * this.img.height / 4,
            this.img.width,
            this.img.height / 4,
            this.x,
            this.y,
            this.w,
            this.h
        )
        
        this.counter++*/

        
    }
}