class EnemyController {
    constructor(width) {
        this.enemyList = [new Enemy(width)];
        this.width = width;
    }
    paint(context) {
        for(let enemy of this.enemyList) {
            enemy.paint(context);
            enemy.move(context);
        }
    }
    add() {
        this.enemyList.push(new Enemy(this.width));
    }
    deleteInactive() {
        this.enemyList = this.enemyList.filter(e => e.isActive);
    }
}