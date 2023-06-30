const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const playerSize = 20;
let playerX = canvas.width / 2 - playerSize / 2;
let playerY = canvas.height / 2 - playerSize / 2;
let score = 0;
let gameOver = false;

const coinSize = 10;
let coinX = Math.random() * (canvas.width - coinSize);
let coinY = Math.random() * (canvas.height - coinSize);

const obstacleWidth = 50;
const obstacleHeight = 20;
const obstacleX = canvas.width / 2 - obstacleWidth / 2;
const obstacleY = canvas.height / 2 - obstacleHeight / 2;

function drawPlayer() {
  context.fillStyle = "pink";
  context.fillRect(playerX, playerY, playerSize, playerSize);
}

function drawCoin() {
  context.fillStyle = "gold";
  context.fillRect(coinX, coinY, coinSize, coinSize);
}

function drawObstacle() {
  context.fillStyle = "ROYALBLUE";
  context.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);
}

function drawScore() {
  context.fillStyle = "black";
  context.font = "16px Arial";
  context.fillText("Score: " + score, 10, 20);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  clearCanvas();
  drawPlayer();
  drawCoin();
  drawObstacle();
  drawScore();

  if (
    playerX < coinX + coinSize &&
    playerX + playerSize > coinX &&
    playerY < coinY + coinSize &&
    playerY + playerSize > coinY
  ) {
    score++;
    coinX = Math.random() * (canvas.width - coinSize);
    coinY = Math.random() * (canvas.height - coinSize);
  }

  if (
    playerX < obstacleX + obstacleWidth &&
    playerX + playerSize > obstacleX &&
    playerY < obstacleY + obstacleHeight &&
    playerY + playerSize > obstacleY
  ) {
    gameOver = true;
  }

  if (score === 10) {
    alert("Parabéns! Você completou 10 pontos!");
  }

  if (gameOver) {
    context.fillStyle = "black";
    context.font = "30px Arial";
    context.fillText("", canvas.width / 2 - 80, canvas.height / 2);
  }
}

function movePlayer(event) {
  const speed = 5;

  if (event.key === "ArrowLeft" && playerX > 0) {
    playerX -= speed;
  } else if (event.key === "ArrowRight" && playerX + playerSize < canvas.width) {
    playerX += speed;
  } else if (event.key === "ArrowUp" && playerY > 0) {
    playerY -= speed;
  } else if (event.key === "ArrowDown" && playerY + playerSize < canvas.height) {
    playerY += speed;
  }

  update();
}

document.addEventListener("keydown", movePlayer);

setInterval(update, 10);
