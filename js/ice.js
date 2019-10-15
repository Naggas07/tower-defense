class Ice extends Tower{
    constructor(ctx, x, y){
        super(ctx,x,y)
        this.w = 25
        this.h = 35
        this.area = 90
        this.damage = 0.5
        this.value = 100
        this.type = 'ice'
        this.period = 0.3
        this.img = new Image()
        this.img.src = './images/tower_grass.png'
        this.colorArea = 'blue'
    }
}