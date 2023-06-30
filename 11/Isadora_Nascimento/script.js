
const canvasWidth = 800;
const canvasHeight = 600;
const playerSize = 50;
const treasureSize = 30;


const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");


let playerX = canvasWidth / 2 - playerSize / 2;
let playerY = canvasHeight / 2 - playerSize / 2;
let treasureX = Math.random() * (canvasWidth - treasureSize);
let treasureY = Math.random() * (canvasHeight - treasureSize);


function updatePlayerPosition() {
    document.addEventListener("keydown", (event) => {
        const keyPressed = event.key;

        if (keyPressed === "ArrowUp" && playerY > 0) {
            playerY -= 5;
        } else if (keyPressed === "ArrowDown" && playerY + playerSize < canvasHeight) {
            playerY += 5;
        } else if (keyPressed === "ArrowLeft" && playerX > 0) {
            playerX -= 5;
        } else if (keyPressed === "ArrowRight" && playerX + playerSize < canvasWidth) {
            playerX += 5;
        }
    });

    canvas.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        if (mouseX > playerSize / 2 && mouseX < canvasWidth - playerSize / 2) {
            playerX = mouseX - playerSize / 2;
        }

        if (mouseY > playerSize / 2 && mouseY < canvasHeight - playerSize / 2) {
            playerY = mouseY - playerSize / 2;
        }
    });
}


function checkTreasureCollision() {
    const playerCenterX = playerX + playerSize / 2;
    const playerCenterY = playerY + playerSize / 2;
    const treasureCenterX = treasureX + treasureSize / 2;
    const treasureCenterY = treasureY + treasureSize / 2;

    const distance = Math.sqrt(
        Math.pow(playerCenterX - treasureCenterX, 2) +
        Math.pow(playerCenterY - treasureCenterY, 2)
    );

    if (distance < playerSize / 2 + treasureSize / 2) {
        alert("Voce encontrou o tesouro!");
        resetGame();
    }
}


function animate() {
    
    context.clearRect(0, 0, canvasWidth, canvasHeight);

   
    context.fillStyle = "green";
    context.fillRect(playerX, playerY, playerSize, playerSize);

 
    context.fillStyle = "gold";
    context.fillRect(treasureX, treasureY, treasureSize, treasureSize);


    checkTreasureCollision();
    requestAnimationFrame(animate);
}

function resetGame() {
    playerX = canvasWidth / 2 - playerSize / 2;
    playerY = canvasHeight / 2 - playerSize / 2;
    treasureX = Math.random() * (canvasWidth - treasureSize);
    treasureY = Math.random() * (canvasHeight - treasureSize);
}

function startGame() {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    updatePlayerPosition();
    animate();
}

window.addEventListener("load", startGame);
