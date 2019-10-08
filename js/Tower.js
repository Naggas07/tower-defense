class Tower{
    constructor(ctx, x, y){
        this.ctx = ctx
        this.x = x 
        this.y = y
        this.w = 25
        this.h = 35
        this.area = 90
        this.damage = 0.5
        this.value = 40
        this.img = new Image()
        this.img.src = './images/tower_grass.png'
    }

    draw(){

        // Area
        this.ctx.beginPath()
        
        this.ctx.arc(
            this.x,
            this.y,
            this.area,
            0,
            2 * Math.PI
        );
        this.ctx.stroke();
        this.ctx.closePath()

        // // tower image
        
        this.ctx.drawImage(
            this.img,
            this.x - this.w/2,
            this.y,
            this.w,
            -this.h
        )
        
    }
}