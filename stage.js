class Stage {
    constructor(context, width, heigth){
        this.width = width;
        this.heigth = heigth;
        this.context = context;
    }
    paint() {
        this.context.canvas.width = this.width;
        this.context.canvas.height = this.heigth;
        this.context.fillStyle="rgb(200,200,200,1)";
        this.context.fillRect(0,0,this.width, this.heigth);
    }
}