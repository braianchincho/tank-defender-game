const canvas = document.getElementById('screenGame');
const context = canvas.getContext('2d');
const canvasHeader = document.getElementById('headerGame');
const contextHeader = canvasHeader.getContext('2d');
let canvas_width = window.innerWidth * 0.7;
let canvas_height= window.innerHeight * 0.9;
contextHeader.canvas.width = canvas_width;
contextHeader.canvas.height = 50;
console.log(context);
let ispause = false;
const stage = new Stage(context, canvas_width, canvas_height);
const player = new Tank(Math.floor(canvas_width / 2) , canvas_height - 70);
const bulletsController = new BulletsController();
const enemiesController = new EnemyController(canvas_width);
let score = 0;
let lives = 5;
let countCicles = 0;
let isGameOver = false;
function loop() {
    countCicles++;
    context.clearRect(0, 0, canvas_width, canvas_height);
    stage.paint();
    player.paint(context);
    bulletsController.paint(context);
    enemiesController.paint(context);
    score = bulletsController.detectCollisions(enemiesController.enemyList, score);
    if (countCicles % 75 === 0) {
        countCicles = 0;
        enemiesController.add();
    }
    lives = lives - enemiesController.deleteInactive();
    bulletsController.deleteInactive();
    writeHeader();
}

function start() {
    const interval = setInterval(() => {
        if (!ispause) {
            loop();
        }
        if (lives <= 0) {
            clearInterval(interval);
            alert('Game over');
        }
    }, 1000 / 50);
}
function pause(event) {
    if (event && event.key === 'Enter') {
        ispause = !ispause;
        enemiesController.ispause = ispause;
    }
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(ispause ? 'Pause': '', canvas_width/2, canvas_height/2); 
}
function writeHeader() {
    let w = canvasHeader.width;
    let h = canvasHeader.height;
    contextHeader.clearRect(0, 0, w, h);
    contextHeader.fillStyle="rgb(200,200,200,1)";
    contextHeader.fillRect(0, 0, w, h);
    contextHeader.font = "30px Arial";
    contextHeader.fillStyle = "black";
    contextHeader.textAlign = "center";
    contextHeader.fillText(`Score: ${score}`, w*0.2, h/2); 
    contextHeader.fillText(`Lives: ${lives}`, w*0.7, h/2);    
}
window.addEventListener('keydown',(e) => {
    pause(e);
    player.move(e, context);
    const bullet = player.shoot(e, context);
    if (bullet) {
        bulletsController.add(bullet);
    }
});
start();