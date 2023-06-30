var barra1 = document.getElementById("barra1");
var barra2 = document.getElementById("barra2");
var bola = document.getElementById("bola");
var gameArea = document.getElementById("gameArea");
var playerAPlacarDisplay = document.getElementById("playerAPlacar");
var playerBPlacarDisplay = document.getElementById("playerBPlacar");

var barra1Y = 160;
var barra2Y = 160;
var bolaX = 295;
var bolaY = 190;
var bolaSpeedX = 2;
var bolaSpeedY = 2;
var playerAPlacar = 0;
var playerBPlacar = 0;

function updateBarras() {
    barra1.style.top = barra1Y + "px";
    barra2.style.top = barra2Y + "px";
}

function updateBola() {
    bola.style.left = bolaX + "px";
    bola.style.top = bolaY + "px";
}

function updatePlacar() {
    playerAPlacarDisplay.textContent = "Jogador A: " + playerAPlacar;
    playerBPlacarDisplay.textContent = "Jogador B: " + playerBPlacar;
}

function updateGame() {
    bolaX += bolaSpeedX;
    bolaY += bolaSpeedY;

    if (bolaY < 0 || bolaY > 390) {
        bolaSpeedY *= -1;
    }

    if (
        (bolaX <= 20 && bolaY + 10 >= barra1Y && bolaY <= barra1Y + 80) ||
        (bolaX >= 570 && bolaY + 10 >= barra2Y && bolaY <= barra2Y + 80)
    ) {
        bolaSpeedX *= -1;
    }

    if (bolaX < 0) {
        playerBPlacar++;
        resetGame();
    } else if (bolaX > 590) {
        playerAPlacar++;
        resetGame();
    }

    updateBarras();
    updateBola();
    updatePlacar();
}

function handleKeyPress(event) {
    if (event.keyCode === 87 && barra1Y >= 10) {
        barra1Y -= 10;
    } else if (event.keyCode === 83 && barra1Y <= 310) {
        barra1Y += 10;
    }

    if (event.keyCode === 38 && barra2Y >= 10) {
        barra2Y -= 10;
    } else if (event.keyCode === 40 && barra2Y <= 310) {
        barra2Y += 10;
    }
}

document.addEventListener("keydown", handleKeyPress);

function resetGame() {
    bolaX = 295;
    bolaY = 190;
    bolaSpeedX *= -1;
    bolaSpeedY = Math.random() > 0.5 ? 2 : -2;
    updateGame();

    if (playerAPlacar === 3) {
        alert("Jogador A ganhou!");
        resetPlacar();
    } else if (playerBPlacar === 3) {
        alert("Jogador B ganhou!");
        resetPlacar();
    }
}

function resetPlacar() {
    playerAPlacar = 0;
    playerBPlacar = 0;
    updatePlacar();
}

function gameLoop() {
    updateGame();
    setTimeout(gameLoop, 10);
}

gameLoop();