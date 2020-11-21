class Tank {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    paint(context) {
        context.fillStyle = "rgba(200,0,0,1)"
        context.beginPath();
        context.rect(this.x,this.y,50,50);
        context.closePath();
        context.fill();
    }
    move(keyEvent, context) {
        if (!keyEvent || !context ) { return; }
        if (keyEvent.key === 'ArrowRight') {
            this.x += 15;
        } else if (keyEvent.key === 'ArrowLeft') {
            this.x -= 15;
        }
        this.x = this.x <= 0 ? 0 : this.x;
        this.x = this.x + 50 >= context.canvas.width ? context.canvas.width -50 : this.x;
    }
    shoot(keyEvent) {
        if(keyEvent.key === ' '){
            return new Bullet(this.x + 25, this.y);
        }
    }
}