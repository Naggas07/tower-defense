class Road{
    constructor(ctx, routes){
        this.ctx = ctx
        this.routes = routes
        this.w = 100
        this.h = 70

        this.img = new Image()
        this.img.src = "./images/road.png"
        this.img.onload = () => {
            this.patern = this.ctx.createPattern(this.img, 'repeat')
        }
        
    }
    
    draw(round){
        if(round  < this.routes.length){
            for (let i = 0; i < this.routes[round].length -1; i++){
                this.drawRectangle(round, i)
            
            }
        }

        this.ctx.fillStyle = "black" //change to the old color

    }

    drawRectangle(round,index){
        this.ctx.beginPath()
        this.ctx.fillStyle = this.patern
        this.ctx.moveTo( 
            this.routes[round][index][0] - (this.w /2),
            this.routes[round][index][1] - (this.h/2)
        )
        this.ctx.lineTo(
            this.routes[round][index+1][0] + (this.w /2),
            this.routes[round][index][1] - (this.h/2)
        )
        this.ctx.lineTo(
            this.routes[round][index+1][0] + (this.w /2),
            this.routes[round][index+1][1] + (this.h/2)
        )
        this.ctx.lineTo(
            this.routes[round][index][0] - (this.w /2),
            this.routes[round][index+1][1] + (this.h/2)
        )
        this.ctx.fill()
        this.ctx.closePath()

        // this.ctx.fillRect(
        //     this.routes[round][index][0] - (this.w /2),
        //     this.routes[round][index][1] - (this.h/2),
        //     (this.routes[round][index+1][0] + (this.w /2)) - (this.routes[round][index][0] - (this.w /2)),
        //     (this.routes[round][index+1][1] + (this.h/2)) - (this.routes[round][index][1] - (this.h/2))
        // )

        // this.ctx.drawImage(
        //     this.img,
        //     this.routes[round][index][0] - (this.w /2),
        //     this.routes[round][index][1] - (this.h/2),
        //     (this.routes[round][index+1][0] + (this.w /2)) - (this.routes[round][index][0] - (this.w /2)),
        //     (this.routes[round][index+1][1] + (this.h/2)) - (this.routes[round][index][1] - (this.h/2))
        // )
    }
}