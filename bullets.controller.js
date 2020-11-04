class BulletsController {
    constructor() {
        this.listBullets = [];
    }
    paint(context) {
        for( let bullet of this.listBullets){
            bullet.paint(context);
            bullet.move(context);
        }
    }
    add(bullet) {
        if (bullet) {
            this.listBullets.push(bullet);
        }
    }
    deleteInactive() {
        this.listBullets = this.listBullets.filter(b => b.isActive);
    }
    detectCollisions(listEnemies = [], score) {
        for( let bullet of this.listBullets){
            for( let enemy of listEnemies){
                if(bullet.isCollision(enemy)) {
                    bullet.isActive = false;
                    enemy.isDestroyed = true;
                    score++;
                }
            }
        }
        return score;
    }
}