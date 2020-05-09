const SCR_WIDTH = 1000;
const SCR_HEIGHT = 562;
const GROUND = 498;

const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

// Drawing on canvas
function drawGround() {
    ctx.fillStyle = "#2c2b40";
    ctx.fillRect(0, GROUND, SCR_WIDTH, 64);
}

function drawCounters(attempts, heart, time, clock) {
    for (let i = 1; i <= attempts; i++) {
        ctx.drawImage(heart, 25*i, 50, heart.width/2, heart.height/2);
    }

    ctx.drawImage(clock, 850, 50, clock.width/1.5, clock.height/1.5);
    ctx.font = '20px Roboto';
    ctx.fillStyle = "#fff";
    ctx.fillText(`${time}s`, 890, 73);
}

function drawPlayer(player, image) {
    ctx.drawImage(image, player.x, player.y);
}

function drawObstacle(obstacle, image) {
    ctx.drawImage(image, obstacle.x, obstacle.y);
}