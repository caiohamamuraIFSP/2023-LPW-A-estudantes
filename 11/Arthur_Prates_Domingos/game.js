
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");


var character = {
  x: 20,
  y: 20,
  size: 10,
  growthRate: 1
};
var balls = [];
var score = 0;

function drawCharacter() {
  ctx.beginPath();
  ctx.arc(character.x, character.y, character.size, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}


function drawBalls() {
  for (var i = 0; i < balls.length; i++) {
    ctx.beginPath();
    ctx.arc(balls[i].x, balls[i].y, balls[i].size, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }
}


function checkCollision() {
  for (var i = 0; i < balls.length; i++) {
    var dx = character.x - balls[i].x;
    var dy = character.y - balls[i].y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < character.size + balls[i].size) {
      balls.splice(i, 1);
      character.size += character.growthRate;
      score++;
      checafim();
      
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Pontuação: " + score, 20, 30);
}


function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCharacter();
  drawBalls();
  checkCollision();
  drawScore();

  requestAnimationFrame(gameLoop);
}


document.addEventListener("keydown", function (event) {
  var keyPressed = event.keyCode;
  if (keyPressed === 37 && character.x > 0) {
    character.x -= 5; 
  } else if (keyPressed === 39 && character.x < canvas.width) {
    character.x += 5; 
  } else if (keyPressed === 38 && character.y > 0) {
    character.y -= 5; 
  } else if (keyPressed === 40 && character.y < canvas.height) {
    character.y += 5; 
  }
});


for (var i = 0; i < 10; i++) {
  var ball = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 5
  };
  balls.push(ball);
}
function reset(){
  location.reload()
}
function checafim(){
  if(score==10){
    window.alert("cabo");
  }

}

gameLoop(); 
