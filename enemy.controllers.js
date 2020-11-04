class EnemyController {
    constructor(width) {
        this.enemyList = [new Enemy(width)];
        this.width = width;
        this.enemiesWiners = 0;
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
        const outsiders = this.enemyList.filter(e => e.isOutside);
        this.enemyList = this.enemyList.filter(e => !e.isOutside && !e.isDestroyed);
        return outsiders.length;
    }
}