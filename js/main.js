let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

//canvas.width = Math.sqrt(window.innerWidth * window.innerHeight) * 0.6;
//canvas.height = canvas.width * 0.75;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Game Variables
let player, background, active, walls, gameSettings;

let wallSpeed, wallInterval, holeChange, holeHeight, playerSpeed;

let level, step, distanceToLastWall, spawns;

let holeGenerator;

//Game Settings
const PLAYER_RADIUS = canvas.width * 0.015;
const PLAYER_X = PLAYER_RADIUS * 2;
const DIRECTIONS = {
    up: 'direction.up',
    down: 'direction.down',
    none: 'direction.none'
};

const WALLS_WIDTH = canvas.width * 0.05;

const colors = ['#E91E63',
    '#9C27B0',
    '#3F51B5',
    '#2196F3',
    '#00BCD4',
    '#000000',
    '#FFFFFF',
    '#FF8A80',
    '#FF9800',
    '#FFC107',
    '#009688',
    '#8BC34A'];

function levelUp() {
    level++;
    for (let setting of gameSettings) {
        setting.levelUp();
    }
}

function update() {
    walls = walls.filter((wall) => wall.active);
    for (let wall of walls) {
        wall.move();
    }
    player.move();

    distanceToLastWall += wallSpeed.value;
    if (distanceToLastWall >= wallInterval.value) {
        Wall.createPair();
        distanceToLastWall = 0;
        spawns++;
        if(spawns % 10 === 0){
            levelUp()
        }
    }

    draw();
    step++;
    if (!player.checkCollision()) {
        requestAnimationFrame(update);
    } else {
        init();
    }
}

function draw() {
    background.draw();
    player.draw();
    for (let wall of walls) {
        wall.draw();
    }
    buildLevelWidget();
}

function init() {
    active = true;
    walls = [];
    gameSettings = [];
    level = 0;
    step = 0;
    distanceToLastWall = 0;
    spawns = 0;
    holeGenerator = Wall.getHoleX();

    player = new Player();
    background = new Background();

    wallSpeed = new GameSetting().setValue(canvas.width * 0.00625).setChange(2).setLimit(20);
    wallInterval = new GameSetting().setValue(canvas.width * 0.75).setChange(-canvas.width * 0.05).setLimit(player.r * 3);
    holeChange = new GameSetting().setValue(0.2).setChange(0.03).setLimit(0.75);
    holeHeight = new GameSetting().setValue(canvas.height * 0.45).setChange(-canvas.height * 0.03).setLimit(player.r * 1.5);
    playerSpeed = new GameSetting().setValue(canvas.width / 100).setChange(1).setLimit(20);

    Wall.createPair();

    window.requestAnimationFrame(update);
}

init();