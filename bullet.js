class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isActive = true;
    }
    paint(context) {
        context.fillStyle = "rgba(200,100,0,1)"
        context.beginPath();
        context.arc(this.x ,this.y ,6 ,0 ,2*Math.PI);
        context.closePath();
        context.fill();
    }
    move() {
        if (this.y >= -50 && this.isActive) {
            this.y -=  10;
        } else {
            this.isActive = false;
        }
    }
    isCollision(enemy) {
        if (!enemy) {
            return false;
        }
        return (this.x >= enemy.x && this.x <= enemy.x + enemy.width) && 
        (this.y >= enemy.y && this.y <= enemy.y + enemy.height)
    }
}
