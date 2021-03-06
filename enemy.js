class Enemy {
    constructor(width = 100) {
        this.width = 40;
        this.height = 40;
        this.y = -10;
        this.x = 10 + Math.floor((Math.random() * (width - this.width*2)));
        this.isDestroyed = false;
        this.isOutside = false;
    }
    paint(context) {
        context.fillStyle = `rgba(0,50,200,1)`
        context.beginPath();
        context.rect(this.x,this.y,this.width,this.height);
        context.closePath();
        context.fill();
    }
    move(context) {
        if (this.y < context.canvas.height) {
            this.y += 1;
        } else {
            this.isOutside = true;
        }
    }
}