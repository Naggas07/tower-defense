class Fire extends Tower{
    constructor(ctx, x, y){
        super(ctx,x,y)
        this.w = 25
        this.h = 35
        this.area = 90
        this.damage = 0.7
        this.value = 80
        this.type = 'fire'
        this.img = new Image()
        this.img.src = './images/tower_grass.png'
        this.colorArea = 'red'
    }
}