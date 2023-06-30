const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const player = {
    x: canvas.width / 2 ,
    y: canvas.height - 30,
    width: 30,
    height: 30,
    color: "#0095DD",
    speed: 5,
    isShooting: false
};

const bullets = [];
const target = {
    x: Math.random() * (canvas.width - 50),
    y: 50,
    width: 50,
    height: 50,
    color: "red"
};

let score = 0;
const maxScore = 10; 

let isGameOver = false;

function drawPlayer() {
    ctx.beginPath();
    ctx.rect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.closePath();
}

function drawBullets() {
    for (let i = 0; i < bullets.length; i++) {
        ctx.beginPath();
        ctx.arc(bullets[i].x, bullets[i].y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}

function drawTarget() {
    ctx.beginPath();
    ctx.rect(target.x, target.y, target.width, target.height);
    ctx.fillStyle = target.color;
    ctx.fill();
    ctx.closePath();
}

function updatePlayerPosition() {
    if (player.isShooting) {
        bullets.push({ x: player.x + player.width / 2, y: player.y });
    }

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -= 4; 
        if (bullets[i].y < 0) {
            bullets.splice(i, 1);
            i--;
        }
    }
}

function checkCollision() {
    for (let i = 0; i < bullets.length; i++) {
        if (
            bullets[i].x > target.x &&
            bullets[i].x < target.x + target.width &&
            bullets[i].y > target.y &&
            bullets[i].y < target.y + target.height
        ) {
            bullets.splice(i, 1);
            i--;
            resetTarget();
            increaseScore();
        }
    }
}

function resetTarget() {
    target.x = Math.random() * (canvas.width - 50);
    target.y = 50;
}

function increaseScore() {
    score++;
    if (score === maxScore) {
        endGame();
    }
}

function endGame() {
    isGameOver = true;
    ctx.font = "30px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Fim de Jogo", canvas.width / 2 - 100, canvas.height / 2);
    restartButton.style.display = "block";
}

function handleKeyDown(event) {
    if (event.key === " ") {
        player.isShooting = true;
    } else if (event.key === "ArrowLeft") {
        player.x -= player.speed;
    } else if (event.key === "ArrowRight") {
        player.x += player.speed;
    }
}

function handleKeyUp(event) {
    if (event.key === " ") {
        player.isShooting = false;
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 20, 30);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawBullets();
    drawTarget();
    drawScore();

    updatePlayerPosition();
    checkCollision();

    if (!isGameOver) {
        requestAnimationFrame(draw);
    }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

draw();

const restartButton = document.createElement("button");
restartButton.innerHTML = "Reiniciar";
restartButton.style.position = "absolute";
restartButton.style.top = "10px";
restartButton.style.right = "10px";
restartButton.style.display = "none"; 
restartButton.addEventListener("click", restartGame);
document.body.appendChild(restartButton);

function restartGame() {
    score = 0;
    bullets.length = 0;
    resetTarget();
    isGameOver = false;
    restartButton.style.display = "none"; 
    draw();
}
