var canvas = document.getElementById("jogoCanvas");
var ctx = canvas.getContext("2d");
var blockSize = 20;
var widthInBlocks = canvas.width / blockSize;
var heightInBlocks = canvas.height / blockSize;
var score = 0;

class Snake {
    constructor() {
        this.segments = [
            { x: 6, y: 4 },
            { x: 5, y: 4 },
            { x: 4, y: 4 }
        ];
        this.direction = "right";
    }

    draw() {
        ctx.fillStyle = "#c70f9f";
        for (var i = 0; i < this.segments.length; i++) {
            var segment = this.segments[i];
            drawBlock(segment.x, segment.y);
        }
    }

    move() {
        var head = this.segments[0];
        var newHead;

        if (this.direction === "right") {
            newHead = { x: head.x + 1, y: head.y };
        } else if (this.direction === "left") {
            newHead = { x: head.x - 1, y: head.y };
        } else if (this.direction === "up") {
            newHead = { x: head.x, y: head.y - 1 };
        } else if (this.direction === "down") {
            newHead = { x: head.x, y: head.y + 1 };
        }

        this.segments.unshift(newHead);

        if (this.isEatingApple()) {
            score++;
            generateApple();
        } else {
            this.segments.pop();
        }
    }

    isEatingApple() {
        var head = this.segments[0];
        if (head.x === apple.position.x && head.y === apple.position.y) {
            return true;
        } else {
            return false;
        }
    }

    checkCollision() {
        var head = this.segments[0];
        var leftCollision = (head.x === 0);
        var topCollision = (head.y === 0);
        var rightCollision = (head.x === widthInBlocks - 1);
        var bottomCollision = (head.y === heightInBlocks - 1);

        var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

        var selfCollision = false;
        for (var i = 1; i < this.segments.length; i++) {
            var segment = this.segments[i];
            if (head.x === segment.x && head.y === segment.y) {
                selfCollision = true;
                break;
            }
        }

        return wallCollision || selfCollision;
    }

    setDirection(newDirection) {
        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction === "down" && newDirection === "up") {
            return;
        } else if (this.direction === "right" && newDirection === "left") {
            return;
        } else if (this.direction === "left" && newDirection === "right") {
            return;
        }

        this.direction = newDirection;
    }
}

class Laranja {
    constructor() {
        this.position = { x: 10, y: 10 };
        this.radius = blockSize / 2; 
    }

    draw() {
        ctx.fillStyle = "#fa9107";
        ctx.beginPath();
        var x = this.position.x * blockSize + this.radius; 
        var y = this.position.y * blockSize + this.radius; 
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI); 
        ctx.fill();
    }

    generateNewPosition() {
        var randomX = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
        var randomY = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
        this.position = { x: randomX, y: randomY };
    }
}

function drawBlock(x, y) {
    var xPos = x * blockSize;
    var yPos = y * blockSize;
    ctx.fillRect(xPos, yPos, blockSize, blockSize);
}

var snake = new Snake();
var apple = new Laranja();

var gameLoop = setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    snake.draw();
    apple.draw();

    if (snake.checkCollision()) {
        clearInterval(gameLoop);
        alert("Game Over! Pontuação: " + score);
    }
}, 100);


document.addEventListener("keydown", function (event) {
    var newDirection;
    if (event.keyCode === 37 && snake.direction !== "right") {
        newDirection = "left";
    } else if (event.keyCode === 38 && snake.direction !== "down") {
        newDirection = "up";
    } else if (event.keyCode === 39 && snake.direction !== "left") {
        newDirection = "right";
    } else if (event.keyCode === 40 && snake.direction !== "up") {
        newDirection = "down";
    }
    snake.setDirection(newDirection);
});
