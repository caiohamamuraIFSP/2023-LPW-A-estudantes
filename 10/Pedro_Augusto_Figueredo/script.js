const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = -2;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "greenyellow";
  ctx.fill();
  ctx.closePath();
  
  x += dx;
  y += dy;
}

function animate() {
  requestAnimationFrame(animate);
  drawBall();

  if (x + dx > canvas.width - 20 || x + dx < 20) {
    dx = -dx;
  }
  if (y + dy > canvas.height - 20 || y + dy < 20) {
    dy = -dy;
  }
}

animate();