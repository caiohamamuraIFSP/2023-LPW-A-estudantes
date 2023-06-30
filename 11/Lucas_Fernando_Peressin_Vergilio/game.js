const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const player = {
  x: 50,
  y: canvasHeight / 2,
  width: 20,
  height: 20,
  color: "red",
  speedX: 0,
  speedY: 0
};

const target = {
  x: canvasWidth - 50,
  y: canvasHeight / 2 - 10,
  width: 40,
  height: 20,
  color: "blue"
};

const obstacles = [
  { x: 200, y: canvasHeight / 2 - 50, width: 20, height: 100, speedY: 2 },
  { x: 400, y: canvasHeight / 2 + 50, width: 20, height: 100, speedY: 4 },
  { x: 600, y: canvasHeight / 2 - 100, width: 20, height: 200, speedY: 6 },

];

let isGameOver = false;
let isRestarting = false;

document.addEventListener("keydown", function(event) {
  if (!isGameOver && !isRestarting) {
    if (event.key === "ArrowRight") {
      player.speedX = 3;
    } else if (event.key === "ArrowLeft") {
      player.speedX = -3;
    } else if (event.key === "ArrowUp") {
      player.speedY = -3;
    } else if (event.key === "ArrowDown") {
      player.speedY = 3;
    }
  }
});

document.addEventListener("keyup", function(event) {
  if (!isGameOver && !isRestarting) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      player.speedX = 0;
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      player.speedY = 0;
    }
  }
});

function update() {
  clearCanvas();

  if (!isGameOver) {
    movePlayer();
    checkCollision();
    moveObstacles();
    drawPlayer();
    drawObstacles();
    drawTarget();

    requestAnimationFrame(update);
  }
}

function clearCanvas() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
}

function movePlayer() {
  player.x += player.speedX;
  player.y += player.speedY;

  if (player.x < 0) {
    player.x = 0;
  } else if (player.x + player.width > canvasWidth) {
    player.x = canvasWidth - player.width;
  }

  if (player.y < 0) {
    player.y = 0;
  } else if (player.y + player.height > canvasHeight) {
    player.y = canvasHeight - player.height;
  }
}

function drawPlayer() {
  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.width, player.height);
}

function drawObstacles() {
  obstacles.forEach(function(obstacle) {
    context.fillStyle = "#000000";
    context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

function moveObstacles() {
  obstacles.forEach(function(obstacle) {
    obstacle.y += obstacle.speedY;

    if (obstacle.y < 0 || obstacle.y + obstacle.height > canvasHeight) {
      obstacle.speedY *= -1;
    }
  });
}

function drawTarget() {
  context.fillStyle = target.color;
  context.fillRect(target.x, target.y, target.width, target.height);
}

function checkCollision() {
  obstacles.forEach(function(obstacle) {
    if (
      player.x < obstacle.x + obstacle.width &&
      player.x + player.width > obstacle.x &&
      player.y < obstacle.y + obstacle.height &&
      player.y + player.height > obstacle.y
    ) {
      gameOver();
    }
  });

  if (
    player.x < target.x + target.width &&
    player.x + player.width > target.x &&
    player.y < target.y + target.height &&
    player.y + player.height > target.y
  ) {
    gameOver();
  }
}

function gameOver() {
  isGameOver = true;
  const gameOverContainer = document.getElementById("gameOverContainer");
  gameOverContainer.classList.remove("hidden");
}

document.getElementById("restartButton").addEventListener("click", function() {
  restartGame();
});

function restartGame() {
  isGameOver = false;
  isRestarting = true;

  const gameOverContainer = document.getElementById("gameOverContainer");
  gameOverContainer.classList.add("hidden");

  player.x = 50;
  player.y = canvasHeight / 2;
  player.speedX = 0;
  player.speedY = 0;

  isRestarting = false;
  update();
}

update();