class Road{
    constructor(ctx, routes){
        this.ctx = ctx
        this.routes = routes
        this.w = 100
        this.h = 100
    }
    
    draw(round){
        if(round  < this.routes.length){
            for (let i = 0; i < this.routes[round].length -1; i++){
                this.drawRectangle(round, i)
            
            }
        }

        this.ctx.fillStyle = "black" //change to the old color

        /*
        this.ctx.beginPath()
        this.ctx.fillStyle = "#EDC9AF"
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.fillStyle = "black" //change to the old color
        this.ctx.closePath()*/
    }

    drawRectangle(round,index){
        this.ctx.beginPath()
        this.ctx.fillStyle = '#EDC9AF'
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
    }
}